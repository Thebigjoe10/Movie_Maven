import { Button } from 'flowbite-react';
import { Link } from 'react-router-dom';

export default function CallToAction() {
  return (
    <div className='flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center'>
        <div className="flex-1 justify-center flex flex-col">
            <h2 className='text-2xl'>
                Notice
            </h2>
            <p className='text-gray-500 my-2'>
            Movie_Maven has pop ads which means a new tab opens once you click just click close the new tab and continue browsing. 
            Join our telegram channel to receive live updates and be among the first to know once a movie is uploaded. You can also use the comment box below for movie requests, suggestions and feedback ❤. Most importantly please stay home and stay safe 🤗🤗. We recommend using Chrome or Opera Mini to download. <br></br>
            Want to learn more about Movie_Maven? go to the <Link to={"/about"}>about page 🤗🤗</Link> .
            </p>
            <Button gradientDuoTone='purpleToBlue' className='rounded-tl-xl rounded-bl-none'>
                <a href="https://t.me/mavenmovi" target='_blank' rel='noopener noreferrer'>
                    Join Telegram 
                </a>
            </Button>
        </div>
        <div className="p-7 flex-1">
            <img src="https://cdn.pixabay.com/photo/2022/02/16/09/35/application-7016419_1280.jpg" />
        </div>
    </div>
  )
}