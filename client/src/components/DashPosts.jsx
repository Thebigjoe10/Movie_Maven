import React, { useEffect, useState } from 'react';
import { Modal, Table, Button, TextInput } from 'flowbite-react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { HiOutlineExclamationCircle } from 'react-icons/hi';

export default function DashPosts() {
  const { currentUser } = useSelector((state) => state.user);
  const [userPosts, setUserPosts] = useState([]);
  const [showMore, setShowMore] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [postIdToDelete, setPostIdToDelete] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const url = `/api/post/gethomepageposts?userId=${currentUser._id}&searchTerm=${searchTerm}`;
        const res = await fetch(url);
        const data = await res.json();
        if (res.ok) {
          setUserPosts(data.posts);
          setShowMore(data.posts.length >= 9);
        }
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (currentUser.isAdmin) {
      fetchPosts();
    }
  }, [currentUser._id, searchTerm]);

  const handleShowMore = async () => {
    const startIndex = userPosts.length;
    try {
      const url = `/api/post/gethomepageposts?userId=${currentUser._id}&startIndex=${startIndex}&searchTerm=${searchTerm}`;
      const res = await fetch(url);
      const data = await res.json();
      if (res.ok) {
        setUserPosts((prev) => [...prev, ...data.posts]);
        setShowMore(data.posts.length >= 9);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleDeletePost = async () => {
    setShowModal(false);
    try {
      const res = await fetch(
        `/api/post/deletepost/${postIdToDelete}/${currentUser._id}`,
        {
          method: 'DELETE',
        }
      );
      const data = await res.json();
      if (!res.ok) {
        console.log(data.message);
      } else {
        setUserPosts((prev) =>
          prev.filter((post) => post._id !== postIdToDelete)
        );
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleSearch = async () => {
    // Fetch posts based on search term
    const url = `/api/post/gethomepageposts?userId=${currentUser._id}&searchTerm=${searchTerm}`;
    try {
      const res = await fetch(url);
      const data = await res.json();
      if (res.ok) {
        setUserPosts(data.posts);
        setShowMore(data.posts.length >= 9);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className='table-auto overflow-x-scroll md:mx-auto p-3 scrollbar scrollbar-track-slate-100 scrollbar-thumb-slate-300 dark:scrollbar-track-slate-700 dark:scrollbar-thumb-slate-500'>
      <div className="flex items-center mb-4">
        <TextInput
          placeholder="Search by title..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="mr-2"
        />
        <Button onClick={handleSearch} gradientDuoTone="purpleToBlue">Search</Button>
      </div>
      {currentUser.isAdmin && (
        <Table hoverable className='shadow-md'>
          {/* Table Head */}
          <Table.Head>
            <Table.HeadCell>Date updated</Table.HeadCell>
            <Table.HeadCell>Post image</Table.HeadCell>
            <Table.HeadCell>Post title</Table.HeadCell>
            <Table.HeadCell>Category</Table.HeadCell>
            <Table.HeadCell>Delete</Table.HeadCell>
            <Table.HeadCell>Edit</Table.HeadCell>
          </Table.Head>
          {/* Table Body */}
          {userPosts.map((post) => (
            <Table.Body key={post._id}>
              <Table.Row>
                <Table.Cell>{new Date(post.updatedAt).toLocaleDateString()}</Table.Cell>
                <Table.Cell>
                  <Link to={`/post/${post.slug}`}>
                    <img src={post.image} alt={post.title} className='w-20 h-10 object-cover bg-gray-500' />
                  </Link>
                </Table.Cell>
                <Table.Cell>
                  <Link className='font-medium text-gray-900' to={`/post/${post.slug}`}>{post.title}</Link>
                </Table.Cell>
                <Table.Cell>{post.category}</Table.Cell>
                <Table.Cell>
                  <span
                    onClick={() => {
                      setShowModal(true);
                      setPostIdToDelete(post._id);
                    }}
                    className='font-medium text-red-500 hover:underline cursor-pointer'
                  >
                    Delete
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <Link className='text-teal-500 hover:underline' to={`/update-post/${post._id}`}>
                    Edit
                  </Link>
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          ))}
        </Table>
      )}
      {loading && <p>Loading...</p>}
      {!loading && userPosts.length === 0 && <p>You have no posts yet!</p>}
      {showMore && (
        <button onClick={handleShowMore} className='w-full text-teal-500 self-center text-sm py-7'>Show more</button>
      )}
      {/* Modal */}
      <Modal
        show={showModal}
        onClose={() => setShowModal(false)}
        popup
        size='md'
      >
        <Modal.Header />
        <Modal.Body>
          <div className='text-center'>
            <HiOutlineExclamationCircle className='h-14 w-14 text-gray-400 mb-4 mx-auto' />
            <h3 className='mb-5 text-lg text-gray-500'>
              Are you sure you want to delete this post?
            </h3>
            <div className='flex justify-center gap-4'>
              <Button color='failure' onClick={handleDeletePost}>Yes, I'm sure</Button>
              <Button color='gray' onClick={() => setShowModal(false)}>No, cancel</Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}
