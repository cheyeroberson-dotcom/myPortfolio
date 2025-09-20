import React, { useLayoutEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import './Contact.scss'

import{ init, sendForm } from 'emailjs-com'
init("user_5dbAYVNge9DotpQCmrDw0")




const Contact = () => {

    useLayoutEffect(() => {

        /////// First Observer
        const contactUpItem = document.querySelector('.contact__form-box');
    
        const contactUpOptions = {
            threshold: .2,
            rootMargin: '0px -100px'
        };
    
        const contactUpOnScroll = new IntersectionObserver(function(entries, contactUpOnScroll) {
            entries.forEach(entry => {
                if(!entry.isIntersecting) {
                    return;
                } else {
                    entry.target.classList.add('contact-animate-up');
                    contactUpOnScroll.unobserve(entry.target);
                }
            })
        }, contactUpOptions);
    
            contactUpOnScroll.observe(contactUpItem);


        /////// Second Observer
        const contactLeftItem = document.querySelector('.contact__header');

        const contactLeftOptions = {
            threshold: .2,
            rootMargin: '0px -100px'
        };
    
        const contactLeftOnScroll = new IntersectionObserver(function(entries, contactLeftOnScroll) {
            entries.forEach(entry => {
                if(!entry.isIntersecting) {
                    return;
                } else {
                    entry.target.classList.add('contact-animate-left');
                    contactLeftOnScroll.unobserve(entry.target);
                }
            })
        }, contactLeftOptions);
    
            contactLeftOnScroll.observe(contactLeftItem);
    
    });


    /// React-Hook-Form Code
    const { register, formState: { errors }, handleSubmit, watch } = useForm()
    const onSubmit = data => {
        generateContactNumber()

        const statusMessage = document.querySelector('.status-message')

        const form = document.querySelector('#contact-form')

        sendForm('contact_form', 'template_mjqs4jr', '#contact-form')
            .then(function(response) {
                setStatusMessage('Message sent!')
                statusMessage.className = 'status-message success'
                setTimeout (() => {
                    statusMessage.className = 'status-message'
                }, 5000)
                form.reset()
            }, function(error) {
                setStatusMessage('Failed to send message! Please try again later.')
                statusMessage.className = 'status-message failure'
                setTimeout (() => {
                    statusMessage.className = 'status-message'
                }, 5000)
            })
    }

    const message = watch('message') || ''
    const messageCharsLeft = 1200 - message.length

    /// EmailJS Code
    const [ statusMessage, setStatusMessage ] = useState('Message')

    const [ contactNumber, setContactNumber ] = useState("000000")

    const generateContactNumber = () => {
        const numStr = "000000" + (Math.random() * 1000000 | 0)
        setContactNumber(numStr.substring(numStr.length - 6))
    }

    return (
        <div id='contact' className='contact'>
            <div className='contact__section-top-div'></div>
            <h1 className='contact__header'><nobr>Contact Me:</nobr></h1>
            <div className='contact__bg-top-div'></div>
            <div className='contact__bg-bottom-div'></div>

            <form id='contact-form' action='#' className='contact__form-box' onSubmit={handleSubmit(onSubmit)} >
                <input type='hidden' name='contact_number' value={contactNumber} />
                <p className='status-message'>{statusMessage}</p>    

                <div className='contact__form-box__name'> 
                    <label for='name' className='contact__form-box__label'>
                        Name<abbr title='required' aria-label='required' className='contact__form-box__required'>*</abbr>
                    </label>
                    <input 
                        type='text' 
                        id='name' 
                        name='name' 
                        className='contact__form-box__input' 
                        {...register('name', { required: true, maxLength: 50 })} 
                    />
                </div> 
                {errors.name && (<span className='error-name'>'Name is too long'</span>)}
                <div className='contact__form-box__email'>
                    <label for='email' className='contact__form-box__label'>
                        Email<abbr title='required' aria-label='required' className='contact__form-box__required'>*</abbr>
                    </label>
                    <input 
                        type='email' 
                        id='email' 
                        name='email' 
                        className='contact__form-box__input' 
                        {...register('email', { required: true })} 
                    />
                </div> 
                {errors.email && (<span className='error-email'>'Email is invalid'</span>)}

                <div className='contact__form-box__company'>
                    <label for='company' className='contact__form-box__label'>Company</label>
                    <input 
                        type='text' 
                        id='company' 
                        name='company' 
                        className='contact__form-box__input' 
                        {...register('company')}
                    />
                </div> 

                <div className='contact__form-box__subject'>
                    <label for='subject' className='contact__form-box__label'>
                        Subject<abbr title='required' aria-label='required' className='contact__form-box__required'>*</abbr>
                    </label>
                    <input 
                        type='text' 
                        id='subject' 
                        name='subject' 
                        className='contact__form-box__input' 
                        {...register('subject', { required: true, maxLength: 100 })}
                    />
                </div> 
                {errors.subject && (<span className='error-subject'>'Must be less than 100 characters'</span>)}

                <div className='contact__form-box__message'>
                    <label for='message' className='contact__form-box__label'>
                        Message<abbr title='required' aria-label='required' className='contact__form-box__required'>*</abbr>
                    </label>
                    <textarea 
                        id='message' 
                        name='message' 
                        rows='5' 
                        className='contact__form-box__textarea' 
                        {...register('message', { required: true, maxLength: 1200 })}>
                    </textarea>

                    <p className='message-chars-left'>{messageCharsLeft}</p>
                </div> 
                {errors.message && (<span className='error-message'>'Must be less than 1200 characters'</span>)}

                <input 
                    type='submit' 
                    value='Submit' 
                    className='contact__form-box__submit' 
                />
                <p className='contact__form-box__submit__text'>All fields with an asterik(<abbr title='required' aria-label='required' className='asterik'>*</abbr>) are required.</p>

            </form>
        </div>
    );
  }
  
  export default Contact;
  