import images from '../../constants/index'
import './Home.scss'
const Home = () => {
  return (
    <div id='home' className='app__home'>
        <div className='app__home-details'>
            <h2>Make Your Business More Profitable</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Laboriosam assumenda ea quo cupiditate facere deleniti fuga officia.
            </p>
            <a href="" className='app__btn'>
                Get started
            </a>
        </div>

        <div className='app__home-img'>
            <img src={images.under3} alt="home image"/>
        </div>
    </div>
  )
}

export default Home