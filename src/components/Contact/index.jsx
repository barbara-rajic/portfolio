import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import '../../styles/index.scss';
import './index.scss';

const Contact = () => {
  /* Animations */
  const [buttonAnimation, setButtonAnimation] = useState('');
  const [userMessageAnimation, setUserMessageAnimation] = useState('');

  const triggerButtonAnimation = () => {
    setButtonAnimation('animate__animated animate__rubberBand');
  };

  const triggerUserMessageAnimation = (start) => {
    if (start) {
      setUserMessageAnimation('animate__animated fadeInDown');
    } else {
      setUserMessageAnimation('animate__animated animate__fadeOut');
    }
  };

  /* Validation */
  const [errors, setErrors] = useState({});

  const validate = (name, value) => {
    switch (name) {
      case 'name':
        return value ? '' : 'Please enter your name';
      case 'email':
        return value &&
          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)
          ? ''
          : 'Email is not valid';
      case 'message':
        return value ? '' : 'Please enter your message';
      default:
        return '';
    }
  };

  const handleFieldValidation = (name, value) => {
    const errorMessage = validate(name, value);
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: errorMessage,
    }));
  };

  const handleBlur = (event) => {
    const { name, value } = event.target;
    handleFieldValidation(name, value);
  };

  const validateForm = (elements) => {
    const formErrors = {};
    let formIsValid = true;

    for (const element of elements) {
      if (['name', 'email', 'message'].includes(element.name)) {
        const errorMessage = validate(element.name, element.value);
        if (errorMessage) {
          formIsValid = false;
          formErrors[element.name] = errorMessage;
        }
      }
    }

    setErrors(formErrors);
    return formIsValid;
  };

  /* Handle Submit */
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [userMessage, setUserMessage] = useState({
    message: '',
    isError: false,
  });

  const sendEmail = (e) => {
    e.preventDefault();
    triggerButtonAnimation();

    if (!validateForm(e.target.elements)) {
      setUserMessage({
        message: 'Please ensure all fields are filled out correctly!',
        isError: true,
      });
      triggerUserMessageAnimation(true);
      setTimeout(() => {
        triggerUserMessageAnimation(false);
      }, 2000);
      return;
    }

    setIsSubmitting(true);
    setUserMessage({
      message: 'Please wait!',
      isError: false,
    });
    triggerUserMessageAnimation(true);

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_EMAILJS_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
          setUserMessage({
            message: 'Your message has been sent successfully!',
            isError: false,
          });
          e.target.reset();
          setErrors({});
        },
        (error) => {
          console.log(error.text);
          setUserMessage({
            message: 'Failed to send the message. Please try again later.',
            isError: true,
          });
        }
      )
      .finally(() => {
        setTimeout(() => {
          triggerUserMessageAnimation(false);
          setIsSubmitting(false);
          setButtonAnimation('');
        }, 2000);
      });
  };

  return (
    <section id="contact">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="heading-secondary">
              <span className="heading-secondary-main">Contact</span>
            </h1>
          </div>
          <div className="col-12">
            <div className="contact__form-container">
              {userMessage.message && (
                <div
                  className={`user-message ${
                    userMessage.isError ? 'error' : ''
                  } ${userMessageAnimation}`}
                >
                  {userMessage.message}
                </div>
              )}
              <form className="contact__form" onSubmit={sendEmail} noValidate>
                {/* Name field */}
                <div className="contact__form-field">
                  <label className="contact__form-label" htmlFor="name">
                    Name
                  </label>
                  <input
                    required
                    placeholder="Enter Your Name"
                    type="text"
                    className={`contact__form-input ${
                      errors.name ? 'is-invalid' : ''
                    }`}
                    name="name"
                    id="name"
                    onBlur={handleBlur}
                  />
                  {errors.name && (
                    <div className="error-message">{errors.name}</div>
                  )}
                </div>

                {/* Email field */}
                <div className="contact__form-field">
                  <label className="contact__form-label" htmlFor="email">
                    Email
                  </label>
                  <input
                    required
                    placeholder="Enter Your Email"
                    type="email"
                    className={`contact__form-input ${
                      errors.email ? 'is-invalid' : ''
                    }`}
                    name="email"
                    id="email"
                    onBlur={handleBlur}
                  />
                  {errors.email && (
                    <div className="error-message">{errors.email}</div>
                  )}
                </div>

                {/* Message field */}
                <div className="contact__form-field">
                  <label className="contact__form-label" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    required
                    cols="30"
                    rows="10"
                    className={`contact__form-input ${
                      errors.message ? 'is-invalid' : ''
                    }`}
                    placeholder="Enter Your Message"
                    name="message"
                    id="message"
                    onBlur={handleBlur}
                  ></textarea>
                  {errors.message && (
                    <div className="error-message">{errors.message}</div>
                  )}
                </div>

                {/* Submit button */}
                <div className="contact__form-btn-wrapper">
                  <button
                    type="submit"
                    className={`elipse__btn ${buttonAnimation}`}
                    // onClick={triggerAnimation}
                    disabled={isSubmitting}
                  >
                    <span className="elipse__btn--text">Submit</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
