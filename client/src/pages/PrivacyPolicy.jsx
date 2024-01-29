import React from 'react'
// import AdComponent from '../components/Ads';

export default function PrivacyPolicy() {
    return (
        <div className='min-h-screen flex items-center justify-center'>
          <div className='max-w-2xl mx-auto p-3 text-center'>
            <div>
              <h1 className='text-3xl font font-semibold text-center my-7'>
              Privacy Policy
              </h1>
              <div className='text-md text-gray-500 flex flex-col gap-6'>
              <h2 className='text-3xl font font-semibold text-center my-7'>Who we are ?</h2>
                <p>
                Our website address is: <a href='https://moviemaven.xyz' className='text-cyan-500'>https://moviemaven.xyz.</a>
                </p>
                    <h2 className='text-3xl font font-semibold text-center my-7'>What personal data we collect and why we collect it</h2>
                    <h3 className='text-3xl font font-semibold text-center '>Comment</h3>
                <p>
                When visitors leave comments on the site we collect the data shown in the comments form, and also the visitor’s IP address and browser user agent string to help spam detection.
                After approval of your comment, your profile picture is visible to the public in the context of your comment.
                </p>
                    <h2 className='text-3xl font font-semibold text-center '>Contact forms</h2>
                    <h3 className='text-3xl font font-semibold text-center '>Cookies</h3>
                <p>
                If you visit our login page, we will set a temporary cookie to determine if your browser accepts cookies. This cookie contains no personal data and is discarded when you close your browser.
When you log in, we will also set up several cookies to save your login information and your screen display choices. Login cookies last for two days, and screen options cookies last for a year
                </p>
                <h2 className='text-3xl font font-semibold text-center '>Embedded content from other websites</h2>
                <p>
                Articles on this site may include embedded content (e.g. videos, images, articles, etc.). Embedded content from other websites behaves in the exact same way as if the visitor has visited the other website.

These websites may collect data about you, use cookies, embed additional third-party tracking, and monitor your interaction with that embedded content, including tracking your interaction with the embedded content if you have an account and are logged in to that website.
                </p>
            <h2 className='text-3xl font font-semibold text-center'>Analytics</h2>
            <p>
            For users that register on our website (if any), we also store the personal information they provide in their user profile. All users can see, edit, or delete their personal information at any time (except they cannot change their username). Website administrators can also see and edit that information.
            </p>
            <h2 className='text-3xl font font-semibold text-center '>What rights you have over your data</h2>
            <p>If you have an account on this site, or have left comments, you can request to receive an exported file of the personal data we hold about you, including any data you have provided to us. You can also request that we erase any personal data we hold about you. This does not include any data we are obliged to keep for administrative, legal, or security purposes.</p>
              </div>
            </div>
          </div>
           {/* <AdComponent/> */}
        </div>
      );
}
