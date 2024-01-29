import React from 'react'
import { Link } from 'react-router-dom'
// import AdComponent from '../components/Ads'

export default function TermsConditons() {
  return (
    <div className='min-h-screen flex items-center justify-center'>
        <div className='max-w-2xl mx-auto p-3 text-center'>
          <div>
            <h1 className='text-3xl font font-semibold text-center my-7'>
            Terms and Conditions
            </h1>
            <div className='text-md text-gray-500 flex flex-col gap-6'>
              <p>
              Terms and Conditions of Learners World!Below are the Terms and Conditions for use of https://moviemaven.xyz. Please read these carefully. If you need to contact us regarding any aspect of the following terms of use of our website, please contact us at moviemavencontact@gmail.com By accessing the content of Learners World ( hereafter referred to as website ) you agree to the terms and conditions set out herein and also accept our privacy policy. If you do not agree to any of the terms and conditions you should not continue to use the website and leave immediately.You agree that you shall not use the website for any illegal purposes and that you will respect all applicable laws and regulations.You agree not to use Learners World website in a way that may impair the performance, corrupt or manipulate the content or information available on the website or reduce the overall functionality of the website.You agree not to compromise the security of the website or attempt to gain access to secured areas of the website or attempt to access any sensitive information you may believe exist on the website or server where it is hosted.You agree to be fully responsible for any claim, expense, losses, liability, costs including legal fees incurred by us arising from any infringement of the terms and conditions in this agreement and to which you will have agreed if you continue to use the website.The reproduction, distribution in any method whether online or offline is strictly not prohibited. The work on the website and the images, logos, text and other such information are the property of Learners World( unless otherwise stated ).
              </p>
                <h2 className='text-3xl font font-semibold text-center'>Disclaimer</h2>
              <p>
              MOVIEMAVEN.XYZ does not claim ownership of any movie on this site. If your copyrighted material has been uploaded or links to your copyrighted material has been uploaded kindly <Link to={'/disclaimer'} className='text-cyan-500'>click here</Link> to file a take down notice
              </p>

            </div>
          </div>
        </div>
        {/* <AdComponent/> */}
      </div>
  )
}
