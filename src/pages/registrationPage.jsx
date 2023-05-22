import React from 'react'
import Input from '../components/input'
import { useState } from 'react'
import Api from '../api/api'

function RegistrationPage() {
  const url = 'https://products-curd-api.netlify.app/.netlify/functions/api/products'
const [data, setData] = useState({
  name: '',
  quantity: '',
  price: '',
  image: ''
});

const handleChange = (e) => {
  const newData = {...data}
  newData[e.target.name] = e.target.value;
  setData(newData)
};

const handleSubmit = (e) => {
    Api.post(url, {
      name: data.name,
      quantity: data.quantity,
      price: data.price,
      image: data.image
    } )
    .then((response) => {console.log(response.data)} )
    .catch(err => console.log(err));
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
              <form onSubmit={(e) => handleSubmit(e)}>
                <label>First Name</label><br/>
                  <Input 
                  value={data.name}
                  name='name'
                  type='text'
                  onChange={(e) => handleChange(e)}
                  placeholder='e.g. Daniel'
                  className='registration-page__container__information__input'
                  /><br /><br /><br /><br />
                <label>Last Name</label><br/>
                  <Input 
                  value={data.quantity}
                  name='quantity'
                  type='number'
                  onChange={(e) => handleChange(e)}
                  placeholder='e.g. Olabanji'
                  className='registration-page__container__information__input'
                  /><br /><br /><br /><br />
                <label>Email</label><br/>
                  <Input 
                  placeholder='e.g. daniel.olabanji@gmail.com'
                  name='price'
                  type='number'
                  onChange={(e) => handleChange(e)}
                  className='registration-page__container__information__input'
                  /><br /><br /><br /><br />
                <label>Phone Number</label><br/>
                  <Input 
                  placeholder='e.g. 09012345678'
                  name='image'
                  type='text'
                  onChange={(e) => handleChange(e)}
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
