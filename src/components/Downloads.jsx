import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import MusicDownloads from './MusicDownloads'

export default function Downloads() {
  return (
    <div>
        <Navbar />
        {/* div */}
        <section className='flex mt-[2rem] justify-items-center bg-gray-800 h-[50%]'>
            <h1 className='uppercase text-white'>Download links for all mixes</h1>
        </section>
        <MusicDownloads />
        <Footer />
    </div>
  )
}
