import React from 'react'
import me from '../assests/images/me.png'
import background from '../assests/images/background.png'
import {NavLink} from 'react-router-dom'
import '../assests/css/Index.css';
import { BsFillTelephoneFill } from "react-icons/bs";

const Index = () => {
  return (
    <>
      <div className="container mx-auto">
        <div className="grid grid-cols-3 py-8">
          <div className="banner-img">
            <img src={me} alt="Benjamin Taluyo"/>
          </div>
          <div className="banner-content col-span-2 pl-10">
            <h1 className="banner-title title-custom mb-5">Hi, I'm Benjamin.</h1>
            <p>
              Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              <br />
              <br />
              Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>

            <div className="mt-10">
              <NavLink to="/contact-me" className="contact-me-btn"><BsFillTelephoneFill className="inline-block"/> <span className="ml-2">Get in touch with me!</span></NavLink>
            </div>
          </div>
        </div>
      </div>

      <div class="slider p-8" style={{ backgroundImage: `url(${background})` }}>
        <h1 className="slider-title">Features</h1>
        <div className="grid grid-cols-4 gap-x-8">
          <div className="box-container drop-shadow-md">
            <img src="https://images.pexels.com/photos/20319547/pexels-photo-20319547/free-photo-of-view-of-pragser-wildsee-in-prags-dolomites-in-south-tyrol-italy.jpeg" alt="" />
            <div className="box-caption backdrop-blur-sm bg-white/30">
              <h3 className="text-xl">Snowy Mountains</h3>
              <p>Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
          </div>

          <div className="box-container drop-shadow-md">
            <img src="https://images.pexels.com/photos/1424239/pexels-photo-1424239.jpeg" alt="" />
            <div className="box-caption backdrop-blur-sm bg-white/30">
              <h3 className="text-xl">River Under the Bridge</h3>
              <p>Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
          </div>

          <div className="box-container drop-shadow-md">
            <img src="https://images.pexels.com/photos/237321/pexels-photo-237321.jpeg" alt="" />
            <div className="box-caption backdrop-blur-sm bg-white/30">
              <h3 className="text-xl">Waterfall</h3>
              <p>Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
          </div>

          <div className="box-container drop-shadow-md">
            <img src="https://images.pexels.com/photos/1089194/pexels-photo-1089194.jpeg" alt="" />
            <div className="box-caption backdrop-blur-sm bg-white/30">
              <h3 className="text-xl">City Nights</h3>
              <p>Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Index