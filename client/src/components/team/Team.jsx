
import './Team.scss'
import { useState, useEffect } from 'react'
import { motion } from  'framer-motion'
import { client, urlFor } from '../../client'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
const Team = () => {
    const [teamMembers, setTeamMembers] = useState([]);

    useEffect(() => {
        const query = "*[_type == 'teamMembers'] ";

        client.fetch(query).then(data => {
            console.log(data);
            setTeamMembers(data);
        });
    }, []);
  return (
    <div id='team' className='app__team'>
        <motion.div className="app__header"
              transition={{duration: .3, ease: 'easeIn', type: 'tween'}}
              whileInView={{bottom: [-100, 0], opacity: [0, 1]}}
        >
            <h3 className='header__text'>Our Team</h3>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Fuga quos quaerat sapiente nam, id vero.
            </p>
        </motion.div>
        <div className='app__team-cont app__container'>
           {teamMembers.map((item) => (
            <motion.div className='app__member' key={item.name}
                whileInView={{opacity: [0, 1], bottom: [-300, 0]}}
                transition={{duration: .1, type: "just"}}
            >
                <div className='app__member-img'>
                    <motion.img
                        src={urlFor(item.imgUrl)}
                        alt='image'
                        // className=''
                        whileInView={{left: [-300, 0]}}
                        transition={{duration: .5, ease: 'easeInOut'}}
                    />

                    <div className='app__cover'>
                        <a href="">
                            <FaFacebook/>
                        </a>
                        <a href="">
                            <FaInstagram />
                        </a>
                        <a href="">
                            <FaTwitter />
                        </a>
                    </div>
                </div>

                <div className='app__member-info'>
                    <h3>{item.name}</h3>
                    <h4>{item.jobTitle}</h4>
                    <p>{item.description}</p>
                </div>
            </motion.div>
           ))}
        </div>
    </div>
  )
}

export default Team


