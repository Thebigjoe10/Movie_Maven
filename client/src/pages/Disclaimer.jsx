import React from 'react'

export default function Disclaimer() {
    return (
        <div className='min-h-screen flex items-center justify-center'>
          <div className='max-w-2xl mx-auto p-3 text-center'>
            <div>
              <h1 className='text-3xl font font-semibold text-center my-7'>
              Digital Millennium Copyright Act
              </h1>
              <div className='text-md text-gray-500 flex flex-col gap-6'>
                <p>
                MovieMaven is in compliance with the Digital Millennium Copyright Act (“DMCA”). It is our policy to respond to any infringement notices and take appropriate actions under the Digital Millennium Copyright Act (“DMCA”) and other applicable intellectual property laws.
                </p>
                <p>
                If your copyrighted material has been uploaded on MovieMaven  and you want this material removed, you must provide a written communication that details the information listed in the following section.
                </p>
                <p>
                Please be aware that you will be liable for damages (including costs and attorneys’ fees) if you misrepresent information listed on our site that is infringing on your copyrights.
                </p>
                <p className='font-semibold'>
                The following elements must be included in your copyright infringement claim:
                </p>
                <p>
                <ol className='list-decimal'>
                  <li>Provide evidence of the authorized person to act on behalf of the owner of an exclusive right that is allegedly infringed.</li>
                  <li>Provide sufficient contact information so that we may contact you.</li>
                  <li>You must also include a valid email address.</li>
                  <li>You must identify in sufficient detail the copyrighted work claimed to have been infringed.</li>
                  <li>A statement that the complaining party has a good faith belief that use of the material in the manner complained of is not authorised by the copyright owner, its agent, or the law.</li>
                  <li>A statement that the information in the notification is accurate, and under penalty of perjury, that the complaining party is authorised to act on behalf of the owner of an exclusive right that is allegedly infringed.</li>
                  <li>Must be signed by the authorised person to act on behalf of the owner of an exclusive right that is allegedly being infringed.</li>
                </ol>
                </p>
                <p>
                Send the infringement notice to us by filling out our <a href='https://www.dmca.com/signup/createtakedown.aspx?ref=sol2db0-top' className='font-bold'>DMCA Violations Form</a>
                </p>
                <p>
                Please allow us 3 – 5 working days to get back to you.
                </p>
                <p>
                Note that emailing your complaint to other parties such as our Internet Service Provider will not expedite your request and may result in a delayed response due to the complaint not being filed properly.
                </p>
              </div>
            </div>
          </div>
        </div>
      );
}
