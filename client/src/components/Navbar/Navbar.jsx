import { useState } from 'react'
import './Navbar.scss'
import { HiMenu, HiX } from 'react-icons/hi';
const Navbar = () => {
  const [active, setActive] = useState('Home');
  const [isMenuactive, setisMenuActive] = useState(false);

  return (
    <>
      <div className='app__nav'>
        <h3>imagine<span>.</span></h3>
        <HiMenu className='app__menu-icon' onClick={() => setisMenuActive(true)}/>
        <nav className='app__nav-items'>
          {['Home', 'Features', 'About Us', 'Team', 'Testimonials', 'Blogs', 'Contact'].map((item, index) => (
            <a href={`#${item.split(" ")[0].toLowerCase()}`} key={item + index}
              style={active === item ? { color: "#6db1e1" } : {}}
              className={`app__nav-item ${active === item ? 'app__active' : ''}`}
              onClick={() => setActive(item)}
            >{item}</a>
          ))}
        </nav>
      </div>

      <div className='app__menu' style={isMenuactive ? {right: 0} : {right: -300, animationName: 'menuBackwardMotion' }}>
        <span onClick={() => setisMenuActive(false)}><HiX /></span>
        <nav className='app__nav-items'>
          {['Home', 'Features', 'About Us', 'Team', 'Testimonials', 'Blogs', 'Contact'].map((item, index) => (
            <a href={`#${item.split(" ")[0].toLowerCase()}`} key={item + index}
              style={active === item ? { color: "#6db1e1" } : {}}
              className={`app__nav-item ${active === item ? 'app__active' : ''}`}
              onClick={() => setActive(item)}
            >{item}</a>
          ))}
        </nav>
      </div>
    </>

  )
}

export default Navbar