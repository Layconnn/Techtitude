import React from 'react'
import Input from '../components/input'

function RegistrationPage() {
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
              <form action="">
                <label>First Name</label><br/>
                  <Input 
                  type='text'
                  required
                  placeholder='e.g. Daniel'
                  className='registration-page__container__information__input'
                  /><br /><br /><br /><br />
                <label>Last Name</label><br/>
                  <Input 
                  type='text'
                  required
                  placeholder='e.g. Olabanji'
                  className='registration-page__container__information__input'
                  /><br /><br /><br /><br />
                <label>Email</label><br/>
                  <Input 
                  type='email'
                  required
                  placeholder='e.g. daniel.olabanji@gmail.com'
                  className='registration-page__container__information__input'
                  /><br /><br /><br /><br />
                <label>Phone Number</label><br/>
                  <Input 
                  type='number'
                  placeholder='e.g. 09012345678'
                  required
                  className='registration-page__container__information__input'
                  /><br /><br /><br /><br />
                <label>Date of Birth</label><br/>
                  <Input 
                  type='date'
                  className='registration-page__container__information__input'
                  /><br /><br /><br /><br />
                <label>Courses Interested In</label><br />
                <fieldset>
                  <Input 
                  type='radio'
                  />&nbsp;&nbsp;&nbsp;<label>Business Analysis</label><br /><br /><br />
                  <Input 
                  type='radio'
                  />&nbsp;&nbsp;&nbsp;<label>Business Analytics</label><br /><br /><br />
                  <Input 
                  type='radio'
                  />&nbsp;&nbsp;&nbsp;<label>Scrum Master</label><br /><br /><br />
                  <Input 
                  type='radio'
                  />&nbsp;&nbsp;&nbsp;<label>Cyber Security</label><br /><br /><br />
                  <Input 
                  type='radio'
                  />&nbsp;&nbsp;&nbsp;<label>UI/UX Design</label><br /><br /><br />
                </fieldset><br /><br /><br /><br />
                <label>Any Special Requirments and Requests</label><br />
                <Input type='text' className='registration-page__container__information__response' placeholder='Your answer' /><br /><br /><br /><br />
                <label>How did you hear about this Course</label>
                <fieldset>
                  <Input 
                  type='radio'
                  />&nbsp;&nbsp;&nbsp;<label>Friends</label><br /><br /><br />
                  <Input 
                  type='radio'
                  />&nbsp;&nbsp;&nbsp;<label>Website</label><br /><br /><br />
                  <Input 
                  type='radio'
                  />&nbsp;&nbsp;&nbsp;<label>Social Media</label><br /><br /><br />
                  <Input 
                  type='radio'
                  />&nbsp;&nbsp;&nbsp;<label>Others</label><br /><br /><br />
                </fieldset><br /><br /><br /><br />
                <div className='registration-page__container__information__submit'>Submit</div> <br /><br /><br />
              </form>
            </div>
          </div>
        </div>
    </>
  )
}

export default RegistrationPage
