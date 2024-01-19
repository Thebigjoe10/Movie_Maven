import { Button } from 'flowbite-react'
import React from 'react'

export default function support() {
  return (
        <div className='flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center'>
            <div className="flex-1 justify-center flex flex-col">
                <h2 className='text-2xl'>
                    Support Us
                </h2>
                <p className='text-gray-500 my-2'>
                Movie_Maven has pop ads which means a new tab opens once you click just click close the new tab and continue browsing. 
                Join our telegram channel to receive live updates and be among the first to know once a movie is uploaded. You can also use the comment box below for movie requests, suggestions and feedback ❤. Most importantly please stay home and stay safe 🤗🤗. We recommend using Chrome to download. <br></br>
                Want to learn more about Movie_Maven? go to the  .
                </p>
                <Button gradientDuoTone='purpleToBlue' className='rounded-tl-xl rounded-bl-none'>
                    <a href="" target='_blank' rel='noopener noreferrer'>
                        Donate
                    </a>
                </Button>
            </div>
            <div className="p-7 flex-1">
                <img src="https://images.unsplash.com/photo-1561414927-6d86591d0c4f?q=80&w=1373&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            </div>
        </div>
      )
}
