import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/swiper.min.css";
import { Pagination, Navigation } from 'swiper';
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useNavigate } from 'react-router-dom';

function Home() {
    const date = new Date()

    const route = useNavigate();

  return (
    <>
        <div className='first-section'>
            <div className='first-section__nav'>
                <img src='./images/techtitude-logo.png' alt='Techtitude Logo'/>
                <div className='first-section__nav__content'>
                    <div className='first-section__nav__content__texts'>
                        <p>TESTIMONIALS</p>
                        <p>COURSES</p>
                        <p>INSTRUCTORS</p>
                    </div>
                    <div className='first-section__nav__content__button' onClick={() => route('/registration')}>SIGN UP NOW</div>
                </div>
            </div>
        </div>
        <div className='second-section'> 
            <div className='inline-image'>
                <div>
                    <p className='second-section__motive'>UpSkill Yourself <i>with</i> TECHTITUDE</p>
                    <p className="second-section__talk">We empower <b>WOMEN</b> with the topicalskills and knowledge to become tech leaders.</p>
                    <div className='second-section__button' onClick={() => route('/registration') }>SIGN UP NOW</div>
                </div>
                <img src="/images/girl-pic.png" className="second-section__girl-picture" />
            </div>
        </div>
        <div className='third-section'>
            <div className='third-section__profile'>
                <div className='third-section__profile__img'><img src='/images/internship.png' /></div> <br />
                <h6>Internship</h6><br />
                <p>Our academy provides internship opportunities to our students, allowing them to gain practical experience in a real-world setting. This helps students apply theoretical knowledge in practical situations and develop skills that employers seek.</p>
            </div>
            <div className='third-section__profile'>
                <div className='third-section__profile__img'><img src='/images/mentor.png' /></div> <br />
                <h6 className='person-name'>Mentorship</h6> <br />
                <p>Our experienced mentors guide students through their tech journey, providing advice, support, and feedback. This helps our students build confidence, acquire new skills, and gain insights into the tech industry.</p>
            </div>
            <div className='third-section__profile'>
                <div className='third-section__profile__img'><img src="/images/vc.png"  /></div> <br />
                <h6 className='person-name'>CV Revamp</h6> <br />
                <p>We help students revamp their resumes to showcase their skills, achievements, and projects. This improves their chances of getting noticed by potential employers and getting hired for tech roles.</p>
            </div>
            <div className='third-section__profile'>
                <div className='third-section__profile__img'><img src="/images/pro.png" /></div> <br />
                <h6 className='person-name'>Real Life Project</h6> <br />
                <p>We assign real-life projects to our students, allowing them to apply their knowledge and skills to solve real-world problems. This helps our students develop critical thinking, problem-solving, and teamwork skills, and prepares them for future roles in tech.</p>
            </div>
        </div>
        <div className='fourth-section'>
            <h5>TESTIMONIALS</h5>
            <h3>What some of our Tranees have to say about us!</h3>
            <Swiper 
            loop={true}
            slidesPerView={1}
            pagination={ {  clickable: true } }
            modules={[ Pagination, Navigation]}
            className='fourth-section__all-rating'
            >
                <SwiperSlide>
                  <div className='fourth-section__first-rating'>
                    <p className='fourth-section__first-rating__star'>⭐⭐⭐⭐⭐</p>
                    <div className='fourth-section__first-rating__message'>
                        <h6>Hello Techtitude,</h6>
                        <p className='fourth-section__first-rating__message__speech'>While waiting for my fiancé visa to be approved in America, my husband suggested that I take the Business Analysis course. I am thrilled to share that I now work for one of the top 4 companies in America. I am truly grateful for your outstanding training and support. You guys are the best! I am excited to spread the word about Techtitude and recommend your services to everyone I know.</p>
                        <p className='fourth-section__first-rating__message__appreciation'>Thank you once again!</p>
                    </div>
                    <div className='fourth-section__first-rating__bottom'>
                        <div className='fourth-section__first-rating__bottom__bottom-profile'></div>
                        <div className='fourth-section__first-rating__bottom__items'>
                            <p className='fourth-section__first-rating__bottom__name'>Olamide</p>
                            <p className='fourth-section__first-rating__bottom__description'><i>Business Analysis</i></p>
                        </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide >
                  <div className='fourth-section__first-rating'>
                    <p className='fourth-section__first-rating__star'>⭐⭐⭐⭐⭐</p>
                    <div className='fourth-section__first-rating__message'>
                        <h6>Dear Techtitude,</h6>
                        <p className='fourth-section__first-rating__message__speech'>Thank you for the excellent Cyber Security course! I now work at a top bank in Nigeria and thoroughly enjoyed the program.</p>
                        <p className='fourth-section__first-rating__message__appreciation'>I highly recommend Techtitude! Ajoke</p>
                    </div>
                    <div className='fourth-section__first-rating__bottom'>
                        <div className='fourth-section__first-rating__bottom__bottom-profile'></div>
                        <div className='fourth-section__first-rating__bottom__items'>
                            <p className='fourth-section__first-rating__bottom__name'>Ajoke</p>
                            <p className='fourth-section__first-rating__bottom__description'><i>Cyber Security</i></p>
                        </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide >
                  <div className='fourth-section__first-rating'>
                    <p className='fourth-section__first-rating__star'>⭐⭐⭐⭐⭐</p>
                    <div className='fourth-section__first-rating__message'>
                        <h6>Hello Techtitude,</h6>
                        <p className='fourth-section__first-rating__message__speech'>I had a fantastic time in your classes, and the mentoring session helped solidify my decision to pursue a career as a Business Analyst. This training surpassed my expectations and stood out among others. Thank you for providing exceptional education and guidance.</p>
                        <p className='fourth-section__first-rating__message__appreciation'>I'm on my way to becoming a great BA, all thanks to Techtitude.</p>
                    </div>
                    <div className='fourth-section__first-rating__bottom'>
                        <div className='fourth-section__first-rating__bottom__bottom-profile'></div>
                        <div className='fourth-section__first-rating__bottom__items'>
                            <p className='fourth-section__first-rating__bottom__name'>Anonymous</p>
                            <p className='fourth-section__first-rating__bottom__description'><i>Business Analysis</i></p>
                        </div>
                    </div>
                  </div>
                </SwiperSlide>
            </Swiper>
        </div>
        <h5>COURSES</h5>
        <h3>UpSkill yourself in any of these.</h3>

        <div className='fifth-section'>
            <div className='fifth-section__layout'>
                <div className='fifth-section__layout__edit'>
                    <div><img src="/images/first.png" /></div>
                    <span>
                        <p className='fifth-section__layout__edit__type'>Data Analytics</p>
                        <p className='fifth-section__layout__edit__message'>Data Analysis will  help you differentiate yourself from other information technology and research workers who lack the same specialized knowledge as you. During your job search, you may have more job opportunities to pursue or qualify for more specialized positions</p>
                        <div className='fifth-section__layout__edit__lower-sec'>
                            <div className='fifth-section__layout__edit__lower-sec__btns'> 
                                <div className='fifth-section__layout__edit__lower-sec__btns__btn1' onClick={() => route('/registration')}>Enroll Now!</div>
                                <div className='fifth-section__layout__edit__lower-sec__btns__btn2'>Download Brochure</div>
                            </div>
                            <p className='fifth-section__layout__edit__lower-sec__price'>#150,000</p>
                        </div>
                    </span>
                </div>
            </div>
            <div className='fifth-section__layout'>
                <div className='fifth-section__layout__edit'>
                    <div><img src="/images/first.png" /></div>
                    <span>
                        <p className='fifth-section__layout__edit__type'>Business Analysis</p>
                        <p className='fifth-section__layout__edit__message'>Business Analysis will  help you differentiate yourself from other information technology and research workers who lack the same specialized knowledge as you. During your job search, you may have more job opportunities to pursue or qualify for more specialized positions</p>
                        <div className='fifth-section__layout__edit__lower-sec'>
                            <div className='fifth-section__layout__edit__lower-sec__btns'> 
                                <div className='fifth-section__layout__edit__lower-sec__btns__btn1' onClick={() => route('/registration')}>Enroll Now!</div>
                                <div className='fifth-section__layout__edit__lower-sec__btns__btn2'>Download Brochure</div>
                            </div>
                            <p className='fifth-section__layout__edit__lower-sec__price'>#150,000</p>
                        </div>
                    </span>
                </div>
            </div>
            <div className='fifth-section__layout'>
                <div className='fifth-section__layout__edit2'>
                    <img src="/images/second.png" />
                    <span>
                        <p className='fifth-section__layout__edit2__type'>Cyber Security </p>
                        <p className='fifth-section__layout__edit2__message'>Data Analysis will  help you differentiate yourself from other information technology and research workers who lack the same specialized knowledge as you. During your job search, you may have more job opportunities to pursue or qualify for more specialized positions</p>
                        <div className='fifth-section__layout__edit2__lower-sec'>
                            <div className='fifth-section__layout__edit2__lower-sec__btns'> 
                                <div className='fifth-section__layout__edit2__lower-sec__btns__btn1' onClick={() => route('/registration')}>Enroll Now!</div>
                                <div className='fifth-section__layout__edit2__lower-sec__btns__btn2'>Download Brochure</div>
                            </div>
                            <p className='fifth-section__layout__edit2__lower-sec__price'>#100,000</p>
                        </div>
                    </span>
                </div>
            </div>
            <div className='fifth-section__layout'>
                <div className='fifth-section__layout__edit3'>
                    <div><img src="/images/third.png" /></div>
                    <span>
                        <p className='fifth-section__layout__edit3__type'>UI/UX Design</p>
                        <p className='fifth-section__layout__edit3__message'>Learn the skills to create visually appealing and user-friendly interfaces. Our UI/UX Design track will teach you the principles of design, user research, wireframing, prototyping, and more. You'll gain practical experience by completing a variety of tasks, including designing web and mobile applications, creating user personas, and conducting usability testing.</p>
                        <div className='fifth-section__layout__edit3__lower-sec'>
                            <div className='fifth-section__layout__edit3__lower-sec__btns'> 
                                <div className='fifth-section__layout__edit3__lower-sec__btns__btn1' onClick={() => route('/registration')}>Enroll Now!</div>
                                <div className='fifth-section__layout__edit3__lower-sec__btns__btn2'>Download Brochure</div>
                            </div>
                            <p className='fifth-section__layout__edit3__lower-sec__price'>#150,000</p>
                        </div>
                    </span>
                </div>
            </div>
            <div className='fifth-section__layout'>
                <div className='fifth-section__layout__edit'>
                    <div><img src="/images/fourth.png" /></div>
                    <span>
                        <p className='fifth-section__layout__edit__type'>Scrum</p>
                        <p className='fifth-section__layout__edit__message'>Data Analysis will  help you differentiate yourself from other information technology and research workers who lack the same specialized knowledge as you. During your job search, you may have more job opportunities to pursue or qualify for more specialized positions</p>
                        <div className='fifth-section__layout__edit__lower-sec'>
                            <div className='fifth-section__layout__edit__lower-sec__btns'> 
                                <div className='fifth-section__layout__edit__lower-sec__btns__btn1' onClick={() => route('/registration')}>Enroll Now!</div>
                                <div className='fifth-section__layout__edit__lower-sec__btns__btn2'>Download Brochure</div>
                            </div>
                            <p className='fifth-section__layout__edit__lower-sec__price'>#150,000</p>
                        </div>
                    </span>
                </div>
            </div>
        </div>
        <div className='sixth-section'>
            <div className='sixth-section__body'>
                <h5>INSTRUCTIONS</h5>
                <h2>The Techtitude Faculties</h2>
                <div className='sixth-section__body__speech'>
                    <p>We are proud to have a team of highly skilled and dedicated instructors who are committed to delivering top-notch education and training services to our students.</p>
                    <p>Our instructors are not only knowledgeable in their respective fields but are also resourceful and competent in using innovative teaching methods and technologies to ensure that our students receive the best learning experience possible.</p>
                    <p>We are result-oriented and strive to ensure that our students achieve their learning goals and objectives in the tech ecosystem. We understand that every student is unique and that learning is a process that requires patience, dedication, and hard work. Our instructors/facilitators are trained to provide individualized attention and support to each student to help them succeed.</p>
                    <p>At Techtitude Academy, we believe that education is a lifelong journey, and we are committed to supporting our students every step of the way. Join us today and experience the difference that our skilled, resourceful, competent, and result-oriented instructors can make in your educational journey.</p>
                </div>
            </div>
        </div>
        <div className='footer-section'>
            <div className='footer-section__bottom'>
                <img src='/images/white-logo.png' />
                <div className='footer-section__bottom__class'>
                    <div className='footer-section__bottom__class__links'>
                        <h6>COURSES</h6>
                        <h6>INSTRUCTIONS</h6>
                        <h6>TESTIMONIALS</h6>
                    </div>
                    <div className='footer-section__bottom__class__description'>
                        <h6>7 Adedotun Dina, Mende, Maryland,Lagos-Nigeria.</h6>
                        <h6>admin@techtitude.org</h6>
                        <h6>09063940977</h6>
                    </div>
                </div>
                <div className='footer-section__bottom__input'>
                    <h6><b> Like to receive our Newsteller?</b></h6>
                    <div className='footer-section__bottom__input__search'>
                        <input placeholder='Enter your Email Here'></input>
                        <div className='footer-section__bottom__input__search__button'>Read More</div>
                    </div>
                    <img src='/images/vector.png' />
                </div>
            </div>
            <hr />
            <p>TECHTITUDE © {date.getFullYear()}  - All Right reserved!</p>
        </div>
    </>
  )
}

export default Home
