import React from 'react'
import { Link } from 'react-router-dom';
// import AdComponent from '../components/Ads';

export default function HowToDownload() {
    return (
        <div className='min-h-screen flex items-center justify-center'>
          <div className='max-w-2xl mx-auto p-3 text-center'>
            <div>
              <h1  className='text-3xl font font-semibold text-center my-7'>
                How To Download
              </h1>
              <div className='text-md text-gray-500 flex flex-col gap-6'>
                <p>
                Due to recent issues, we had to change the download process and do away with direct download but don’t worry, we understand that a combination of the annoying ads and downloading difficulty can make any site frustrating so we are very invested in making downloads as easy as possible. All you have to do is follow this guide and you are good to go.
                </p>
                <h2 className='text-3xl font font-semibold text-center'>Step One</h2>
Visit MOVIEMAVEN.XYZ (Since you are here I guess you made it through step one 🙂 )
                <h2 className='text-3xl font font-semibold text-center'>Step Two</h2>
                <p>
Click on the movie you want to download and close the pop ad when it appears (as usual, sorry about that btw)
                </p>
                <h2 className='text-3xl font font-semibold text-center'>Step Three</h2>
                <p>
Click on the blue button that says “Download File”.
                </p>
                 <h2 className='text-3xl font font-semibold text-center'>Step Four</h2>
                <p>
When you click on the Download button  you will be redirected to another site where the file is located. All you have to do is click the button that says “Create download link” and your download would automatically start after a few seconds. 
                </p>
                <h2 className='text-3xl font font-semibold text-center'>How To Support Us</h2>  
                <p>
You can support us by donating cryptocurrency to us to help maintain the website. Nothing is too small. Form more information <Link to={"/support"} className='text-cyan-500'>CLICK HERE</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      );
}
