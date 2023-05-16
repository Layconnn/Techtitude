import React from 'react'
import Input from '../components/input'
import { useState } from 'react'
import axios from 'axios'

function RegistrationPage() {
const [data, setData] = useState({
  name: '',
  quantity: '',
  image: '',
  price: ''
})

const handleChange = (e) => {
  const value = e.target.value;
  setData({...data, [e.target.name]: value});
}

const handleSubmit = (e) => {
  e.preventDefault();
  const userInfo = {
    name: data.name,
    quantity: data.quantity,
    image: data.image,
    price: data.price,
  };
    axios.post('https://products-curd-api.netlify.app/.netlify/functions/api/products', userInfo ).then((response) => {console.log(response.data.status)} );
};

  return (
    <>
        <div className='registration-page'>
          <div className='registration-page__container'>
            <img src='/images/techtitude-logo.png' />
            <div className='registration-page__container__nav'>
              <h2>Techtitude Academy</h2>
              <div>COURSE REGISTRATION</div>
            </div>
            <div className='registration-page__container__information'>
              <form onSubmit={handleSubmit}>
                <label>First Name</label><br/>
                  <Input 
                  value={data.name}
                  type='text'
                  onChange={handleChange}
                  placeholder='e.g. Daniel'
                  className='registration-page__container__information__input'
                  /><br /><br /><br /><br />
                <label>Last Name</label><br/>
                  <Input 
                  value={data.quantity}
                  type='text'
                  onChange={handleChange}
                  placeholder='e.g. Olabanji'
                  className='registration-page__container__information__input'
                  /><br /><br /><br /><br />
                <label>Email</label><br/>
                  <Input 
                  value={data.image}
                  onChange={handleChange}
                  placeholder='e.g. daniel.olabanji@gmail.com'
                  className='registration-page__container__information__input'
                  /><br /><br /><br /><br />
                <label>Phone Number</label><br/>
                  <Input 
                  value={data.price}
                  type='number'
                  onChange={handleChange}
                  placeholder='e.g. 09012345678'
                  className='registration-page__container__information__input'
                  /><br /><br /><br /><br />
                <label>Date of Birth</label><br/>
                  <Input 
                  type='date'
                  className='registration-page__container__information__input'
                  /><br /><br /><br /><br />
                <label>Courses Interested In</label><br />
                <fieldset>
                <label><Input 
                  name= 'course'
                  type='radio'
                  />Business Analysis</label><br /><br /><br />
                  <label><Input 
                  name= 'course'
                  type='radio'
                  />Business Analytics</label><br /><br /><br />
                  <label><Input 
                  name= 'course'
                  type='radio'
                  />Scrum Master</label><br /><br /><br />
                  <label><Input 
                  type='radio'
                  name= 'course'
                  />Cyber Security</label><br /><br /><br />
                  <label><Input 
                  name= 'course'
                  type='radio'
                  />UI/UX Design</label><br /><br /><br />
                </fieldset><br /><br /><br /><br />
                <label>Any Special Requirments and Requests</label><br />
                <Input type='text' value={data.requests} className='registration-page__container__information__response' onChange={handleChange} placeholder='Your answer' /><br /><br /><br /><br />
                <label>How did you hear about this Course</label>
                <fieldset>
                <label><Input 
                  name='referral'
                  id='friends'
                  type='radio'
                  />Friends</label><br /><br /><br />
                  <label><Input 
                  name='referral'
                  id='web'
                  type='radio'
                  />Website</label><br /><br /><br />
                  <label><Input 
                  name='referral'
                  id='media'
                  type='radio'
                  />Social Media</label><br /><br /><br />
                  <label><Input 
                  name='referral'
                  id='others'
                  type='radio'
                  />Others</label><br /><br /><br />
                </fieldset><br /><br /><br /><br />
                <button className='registration-page__container__information__submit' type='submit'>Submit</button> <br /><br /><br />
              </form>
            </div>
          </div>
        </div>
    </>
  )
}

export default RegistrationPage
