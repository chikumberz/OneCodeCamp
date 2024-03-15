import React from 'react'
import '../assests/css/Footer.css'
import { FaRegCopyright, FaFacebook, FaTwitter, FaSquareInstagram, FaYoutube  } from 'react-icons/fa6'

const Footer = () => {
  return (
    <>
        <footer className="footer">
            <div className="footer-socials flex justify-center items-center">
                <span><FaFacebook /></span>
                <span><FaTwitter /></span>
                <span><FaSquareInstagram /></span>
                <span><FaYoutube /></span>
            </div>
            <div className="flex justify-center items-center">
                <FaRegCopyright />
                <strong className="ml-3 text-xs">2024 NZXT, Inc. All rights reserved.</strong>
            </div>
        </footer>
    </>
  )
}

export default Footer