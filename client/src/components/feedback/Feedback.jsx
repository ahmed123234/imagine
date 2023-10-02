import './Feedback.scss'
import { urlFor, client } from '../../client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import classNames from 'classnames'

const User = ({user}) => (
    <motion.div
        whileInView={{right: [-200, 0]}}
        transition={{duration: .7, ease: 'easeOut'}}
        className='app__feedback-user'
    >
        <div className='app__user'>
            <div className='app__user-img'>
                <img src={urlFor(user.imgUrl)} alt="" />
            </div>

            <div className='app__user-info'>
                <h4>{user.name}</h4>
                <h5>{user.jobDescription}</h5>
            </div>

        </div>
        <p>{user.description}</p>
    </motion.div>
)

const Feedback = () => {
    const [feedbacks, setFeedbacks] = useState([]);

    useEffect(() => {
        const query = "*[_type == 'communicate'] { title, description, imgUrl, user->}";

        const res = client.fetch(query).then(data => {
            console.log(data);
            setFeedbacks(data);
        });
    }, []);
  return (
    <div id='feedback' className='app__feedbacks'>
        {feedbacks.map((feedback, index) => (
            <div className={classNames('app__feedback', {
                    'app__flexReverse': index % 2 == 1, 
                })}
             key={index}
            
            >
                <motion.div className='app__feedback-img'
                    whileInView={{left: [-300, 0], opacity: [0, 1]}}
                    transition={{duration: .8, ease: 'easeInOut', type: 'tween'}}
                >
                    <img
                        src={urlFor(feedback.imgUrl)}
                        alt='image'
                        // width={200} height={200}
                        className=''
                        // whileInView={{left: [-300, 0], opacity: [0, 1]}}
                        transition={{duration: .5, ease: 'easeInOut'}}
                    />
                    
                </motion.div>

                <motion.div className='app__feedback-description'
                    whileInView={{right: [-300, 0], opacity: [0, 1]}}
                    transition={{duration: .8, ease: 'easeInOut', type: 'tween'}}
                >
                    <h2>{feedback.title}</h2>
                    <p>{feedback.description}</p>

                    <User user={feedback.user} />
                </motion.div>
            </div>
        ))}
    </div>
  )
}

export default Feedback