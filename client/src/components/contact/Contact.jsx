import { useState, useEffect } from 'react'
import './Contact.scss'
import { client } from '../../client'

const Contact = () => {

  const [ form, setForm ] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isloading, setIsloading] = useState(false);
  const [isSubmited, setIsSubmited] = useState(false);


  const { firstName, lastName, email, subject, message } = form;


const handleSubmit = (e) => {
  e.preventDefault();
  setIsloading(true);
  const contactDoc = {
    _type: "contact",
    ...form
  }
    client.create(contactDoc, {
      method: "POST",
      token: import.meta.env.VITE_APP_SANITY_TOKEN
    }).then(() => {
      setIsloading(false);
      setIsSubmited(true);
    })
}

useEffect(() => {
   if(!isloading) {
     setForm({ firstName: '', lastName: '', message: '', subject: '', email: ''});
   }

}, [isloading])


const handleChange = (e) => {
   const { name, value } = e.target;

   console.log(name, value)
   setForm({ ...form, [name]: value })
}


  return (
    <div id='contact' className='app__contact app__container'>
        <h3 className='header__text'>Contact Us</h3>
      
        (<form className='app__form' onSubmit={(e) => handleSubmit(e)}>
            <h3>Contact Form</h3>

            {isSubmited && (
            <div className="head-text">
              <h4>Thank you for getting in touch</h4>
              <span>
                feel free to communicate more & more 😀
              </span>
            </div>
            )}

            <div className='form__item form__item-flex'>
              <div className='form__item'>
                <label htmlFor="">first name</label>
                <input type="text"  name='firstName' value={firstName} onChange={(e) => handleChange(e)} required/>

              </div>

              <div className='form__item'>
                <label htmlFor="">last name</label>
                <input type="text"  name='lastName' value={lastName} onChange={(e) => handleChange(e)} required/>
              </div>

            </div>

            <div className='form__item'>
                <label htmlFor="">email</label>
                <input type="email"  name='email' value={email} onChange={(e) => handleChange(e)} required/>
            </div>


            <div className='form__item'>
                <label htmlFor="">subject</label>
                <input type="text"  name='subject' value={subject} onChange={(e) => handleChange(e)} required/>
            </div>

            <div className='form__item'>
                <label htmlFor="">message</label>
                <textarea  name='message' value={message} onChange={(e) => handleChange(e)} required
                  placeholder='Leave your message here...'
                  rows={6}
                >
                </textarea>

                <button className='app__btn' type='submit'>
                   {isloading? 'sending message': 'send message'}
                </button>
              </div>
        </form>)

      
   
    </div>
  )
}

export default Contact