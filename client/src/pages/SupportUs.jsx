import { Button } from 'flowbite-react'
import React from 'react'
// import AdComponent from '../components/Ads'

export default function SupportUs() {
    return (
        
        <div className='flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center'>
            <div className="flex-1 justify-center flex flex-col">
                <h2 className='text-2xl'>
                    Support Us WE WILL APPRECIATE IF YOU CAN DONATE TO US TO KEEP MOVIEMAVEN.XYZ RUNNING. NOTHING IS TOO SMALL.
                </h2>
                <p className='text-gray-500 my-2'>
                You can support us by donating cryptocurrency to us to help maintain the website. Nothing is too small.
                </p>
                <Button gradientDuoTone='purpleToBlue' className='rounded-tl-xl rounded-bl-none'>
                    <a href="" target='_blank' rel='noopener noreferrer'>
                     Donate
                    </a>
                </Button>
            </div>
            <div className="p-7 flex-1">
                <img src="https://media.istockphoto.com/id/813128966/photo/hand-putting-coins-in-glass-jar-for-giving-and-donation-concept.jpg?s=612x612&w=0&k=20&c=n6JuwHg5qL5usrI45PCsvjXjX743Mk0Ov4pW2GtO8CA=" />
            </div>

            {/* <AdComponent/> */}
        </div>
      )
}
