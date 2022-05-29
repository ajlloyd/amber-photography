import ReCAPTCHA from "react-google-recaptcha";
import { Button, Alert } from 'react-bootstrap';
import React, { useState, useCallback, useEffect} from 'react';
import EmailModal from '../../components/EmailModal';
import styles from "../../styles/EmailForm.module.scss"
import { send } from 'emailjs-com';

const serviceName = "service_smpg8u5"
const templateName = "template_oupknik"
const userId ="user_A0UoOEsgereLFK0Xb6E53"

const ContactMe = () => {

  let recaptchaInstance;
  const resetRecaptcha = () => {
    recaptchaInstance.reset();  
  };

  useEffect(() => {
    recaptchaInstance.reset()
  }, [recaptchaInstance]);



  const [modalShow, setModalShow] = React.useState(false);
  const [toSend, setToSend] = useState({
    from_name: '',
    message: '',
    reply_to: '',
  });

  const onSubmit = (e) => {
      e.preventDefault();

      if (grecaptcha.getResponse() == ""){
          //alert("Please ensure you have ticked the reCAPTCHA");
          ['warning'].map((variant, idx) => (
              <Alert key={idx} variant={variant}>
                This is a {variant} alert—check it out!
              </Alert>
            ));
          return
          
      } else {
          send(
              serviceName,
              templateName,
              toSend,
              userId
            )
            .then((response) => {
              console.log('SUCCESS!', response.status, response.text);
              setModalShow(true);
              setToSend({from_name:"", message:"", reply_to:""})
          })
            .catch((err) => {
              console.log('FAILED...', err);
          })
          .then(
              grecaptcha.reset()
          );
      }
      
      
      
  };


  const handleChange = (e) => {
      setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  function onChange(value) {
      console.log("Captcha value:", value);
  }

  return (
    <div className={styles.formContainer}>
      
            <form className={styles.form} onSubmit={onSubmit}>
            <h1>CONTACT ME </h1>
              <div className={styles.inputs}>
                <div className={styles.formInput}>
                    <h3>Your Name:</h3>
                    <input
                    className={styles.inputField}
                    type='text'
                    name='from_name'
                    value={toSend.from_name}
                    onChange={handleChange}/>
                </div>

                <div className={styles.formInput}>
                    <h3>Your Email:</h3>
                    <input
                    className={styles.inputField}
                    type='text'
                    name='reply_to'
                    value={toSend.reply_to}
                    onChange={handleChange}/>
                </div>

                <div className={styles.formInput}>
                    <h3>Your Message:</h3>
                    <textarea 
                    className={styles.inputField}
                    name='message'
                    rows = "5" 
                    cols = "60"
                    type='text'
                    value={toSend.message}
                    onChange={handleChange}
                    /> 
                </div>

                <ReCAPTCHA
                    className={styles.recaptcha}
                    ref={e => recaptchaInstance = e}
                    sitekey="6Le9xSkgAAAAAIM4e2HeOdUX6ZvnxOSl_vRqdGZ9"
                    onChange={() => setDisableSubmit(false)}/>


                <div className={styles.formInput}>
                    <Button type="primary" className="para-btn" variant="dark">Submit</Button>
                </div>
              </div>

                
            </form>

            <footer>
              <small> Contact me via amberlloydphotography@gmail.com</small>
              <small>Instagram @amberloulloyd</small>

            </footer>





            <EmailModal show={modalShow} onHide={() => setModalShow(false)}/>
            
        </div>
  )
}

export default ContactMe