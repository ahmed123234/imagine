import React, { useEffect, useState } from 'react'
import { urlFor, client } from '../../client'
import { AiOutlineSmile } from 'react-icons/ai'
import { motion } from 'framer-motion'
import './Features.scss'
const Features = () => {

  const [features, setFeatures] = useState([]);

  useEffect(() => {
      const query = "*[_type == 'features']"

      const res = client.fetch(query).then(data => {
        console.log(data);
        setFeatures(data)
      });
      
  }, []);

  return (
    <div id='features' className='app__features'>
      
      <motion.div 
        transition={{duration: .5, ease: 'easeInOut'}}
        whileInView={{bottom: [-100, 0], opacity: [0, 1]}}
        className='app__features-header'
      >
        <h3 className='header__text'>Imagine Features</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga quos <br/> quaerat 
          sapiente nam, id vero.
        </p>
      </motion.div>

      <div className="app__features-items">
        {features.map(feature => (
          <motion.div 
            className="app__feature" key={feature.title}
            whileInView={{bottom: [-250, 0], opacity: [0, 1]}}
            transition={{duration: .1, type: "just"}}
          >
            <div className='app__feature-icon'>
              <AiOutlineSmile />
            </div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
            <a href="">learn more</a>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Features