import React from 'react'
import { Link } from 'react-router-dom';

export default function HowToDownload() {
    return (
        <div className='min-h-screen flex items-center justify-center'>
          <div className='max-w-2xl mx-auto p-3 text-center'>
            <div>
              <h1 className='text-3xl font font-semibold text-center my-7'>
                How To Download
              </h1>
              <div className='text-md text-gray-500 flex flex-col gap-6'>
                <p>
                Due to recent issues, we had to change the download process and do away with direct download but don’t worry, we understand that a combination of the annoying ads and downloading difficulty can make any site frustrating so we are very invested in making downloads as easy as possible. All you have to do is follow this guide and you are good to go.
                </p>
                Step One
Visit MOVIEMAVEN.XYZ (Since you are here I guess you made it through step one 🙂 )
                <p>
                Step Two
Click on the movie you want to download and close the pop ad when it appears (as usual, sorry about that btw)
                </p>
                <p>
                Step Three
Click on the green button that says “Download Movie” or “Download Episode”. The button should look like these ones below.
                </p>
                <p>
                Step Four
When you click on the Download button like the ones shown above you will be redirected to another site where the file is located. All you have to do is click the button that says “Create download link” and your download would automatically start after a few seconds. 
                </p>

                <p>
                How To Support Us
You can support us by donating cryptocurrency to us to help maintain the website. Nothing is too small. Form more information <Link to={"/support"}>CLICK HERE</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      );
}
