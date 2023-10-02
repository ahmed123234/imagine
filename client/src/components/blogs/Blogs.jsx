import { client, urlFor } from '../../client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './Blogs.scss'

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const query = "*[_type == 'blog'] { imgUrl, author, title, category->, publishedAt, body }";

        client.fetch(query).then(data => {
            console.log(data);
            setBlogs(data);
        });

    }, []);

  return (
    <div id='blogs' className="app__cont app__container">

        <h3 className='header__text'>Blog Posts</h3>
        <div className='app__blogs'>
            {blogs.map((blog, index) => (
                <div className='app__blog' key={blog.title + index}>
                    <div className='app__blog-img'>
                        <motion.img
                            src={urlFor(blog.imgUrl)}
                            alt='image'
                            whileInView={{left: [-300, 0]}}
                            transition={{duration: .5, ease: 'easeInOut'}}
                        />
                    </div>

                    <div className='app__blog-info'>
                        <h2>{blog.title}</h2>
                        <div>
                            <span>{blog.author}</span>
                            <span className='dot' />
                            <span>{blog.publishedAt.substring(0, 10)}</span>
                            <span className='dot' />
                            <a href=''>{blog.category.title}</a>
                        </div>
                        <p>{blog.body}</p>
                        <a href="">Continue Reading...</a>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Blogs