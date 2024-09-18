import React from 'react'
import { Link } from 'react-router-dom'

function Contact() {
  return (
    <>
    <div className='dark:bg-slate-500 dark:text-white'>
        <h1 className='justify-center text-4xl font-bold mt-32 ml-96'>Contact Us</h1>
        <div className="mt-4 space-y-2 ml-96">
              <span>Name</span>
              <br />
              <input
                type="text"
                placeholder="Enter your name"
                className="w-80 px-3 py-1 border rounded-md outline-none"
              />
              <br/>
    </div>
    <div className="mt-4 space-y-2 ml-96">
              <span>Email</span>
              <br />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-80 px-3 py-1 border rounded-md outline-none"
              />
              <br/>
    </div>
    <div className="mt-4 space-y-2 ml-96">
              <span>Message</span>
              <br />
              <input
                type='text'
                placeholder="Enter the message"
                className="w-80 px-3 py-1 border-black rounded-md outline-none textarea"
              />
              <br/>
    </div>
    <div className="mt-4 space-y-2 ml-96">
    <Link to="/" className="bg-blue-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
                Submit
              </Link>
              <br/>
    </div>
    </div>
    </>
  )
}

export default Contact
