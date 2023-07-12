import React from 'react'
import './Home.css'
import './about.css'
import Common from './Common'
import CommonAbout from './CommonAbout'
import CommonAbout2 from './CommonAbout2'
import Image1 from './image/about/about1.jpg'
import Image2 from './image/about/about2.jpg'
import Image3 from './image/about/about3.jpg'
import Image4 from './image/about/about4.jpg'


function Home() {
    return (
        <>
            <div className='my-3 mb-5'>
                <h1 className='text-center abouttitle' style={{fontWeight:'bold'}}>About Us</h1>
            </div>
            {/* <CommonAbout title='Welcome to About page' btn='Contact Us' goto='/Contact' img={Image1}/> */}
            <CommonAbout2 title='About Our Hospital' btn='Contact Us' goto='/Contact' img={Image2}/>
            <CommonAbout title='Our Expertise' btn='Contact Us' goto='/Contact' img={Image3}/>
            <CommonAbout2 title='Our Hospital Services' btn='Contact Us' goto='/Contact' img={Image4}/>
        </>
    )
}

export default Home