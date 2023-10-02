import { useState, useEffect } from 'react'
import './About.scss'
import { motion } from  'framer-motion'
import { client, urlFor } from '../../client'
import { HiCheck } from 'react-icons/hi'
const Aim = ({aim}) => (
    <div className='app__aim'>
        <HiCheck />
        <span>{aim}</span>
    </div>
)
const About = () => {
    const [about, setAbout] = useState([]);

    useEffect(() => {
        const query = "*[_type == 'about'] ";

        client.fetch(query).then(data => {
            console.log(data);
            setAbout(data);
        });
    }, []);

  return (
    <div id='about' className='app__about'>
        <h3 className='header__text'>About Us</h3>

        <div className='app__about_cont'>
           {about.map((item) => (
            <>
                <motion.div className='app__about-img'
                    whileInView={{left: [-300, 0], opacity: [0, 1]}}
                    transition={{duration: .8, ease: 'easeInOut'}}
                >
                    <img
                        src={urlFor(item.imgUrl)}
                        alt='image'
                    />
                </motion.div>

                <div className='app__about-description'>
                    <h2>{item.title}</h2>
                    <p>{item.description}</p>

                    <div className="app__about-aims">
                        {item.aims.map((aim, index) => (
                            
                            <Aim aim={aim} key={index}/>
                            
                            
                        ))}
                    </div>
                    <a href="" className='app__btn' style={{display: 'inline-block'}}>
                        Learn More
                    </a>
                </div>
            </>
           ))}
        </div>
    </div>
  )
}

export default About