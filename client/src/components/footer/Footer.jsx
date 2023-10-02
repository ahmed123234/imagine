import React from 'react'
import './Footer.scss'
import { FaFacebook, FaLinkedin, FaInstagram, FaTwitter} from 'react-icons/fa6'

const Icon = ({refLink, children}) => (
    <a href={refLink}>
        {children}
    </a>
);

const Footer = () => {
    
  return (
    <div id='footer' className='app__footer'>
        <div>
            {['FaFacebook', 'FaLinkedin', 'FaInstagram', 'FaTwitter'].map(icon => (
                <Icon refLink='' key={icon}>
                    {
                        icon == 'FaFacebook' ? <FaFacebook/> :
                        icon == 'FaLinkedin' ? <FaLinkedin/> :
                        icon == 'FaInstagram' ? <FaInstagram/> :
                        <FaTwitter/>
                    } 
                </Icon> 
            ))}
        </div>
        <span>
            Copyright ©2023 All rights reserved | This template is made with 💗 by Ahmed Ghannam
        </span>
    </div>
  )
}

export default Footer