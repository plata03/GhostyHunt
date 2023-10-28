import './contactstyle.css';
import {Header} from '../Header/Header'
import {Footer} from '../Footer/Footer'
import emailjs from '@emailjs/browser'
import { useState } from "react";

export const Contacts = () => {

    const [nome, setNome] = useState('');
    const [mess, setMess] = useState('');
    const [mail, setMail] = useState('');

    const handleChangeNome = event => {
        setNome(event.target.value);
    };

    const handleChangeMail = event => {
        setMail(event.target.value);
    };

    const handleChangeMess = event => {
        setMess(event.target.value);
    };

    
    

    const sendEmail = (e) => {
        e.preventDefault();
        alert("Message Succesfully delivered!")
        emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, e.target, process.env.REACT_APP_PUBLICK_KEY)
        
    }

    return (
        <div style={{backgroundColor: '#00ffb3'}}>
            <Header />
            <div className='contacts-page'>
                <p style={{fontFamily: 'thin', fontSize: 35}}>Got any spooky idea or question?</p>
                <h1 style={{fontFamily: 'chiller', fontSize: 130, textShadow: '#6b6b6b 5px 5px'}}>CONTACT ME, I DARE YOU!</h1>
                    <form onSubmit={sendEmail} className='the-form'>
                        <p>Your Email</p>
                        <input 
                            type='email' 
                            name='email' 
                            id='email' 
                            placeholder='person@example.com' 
                            style={{ padding: 5, fontSize: 20, backgroundColor: '#00ffb3', color: '#111111', borderRadius: 5}} 
                            onChange={handleChangeMail}
                        />
                        <p>Your Name</p>
                        <input 
                            type='text' 
                            name='name' 
                            id='name' 
                            style={{padding: 5, fontSize: 20, backgroundColor: '#00ffb3', color: '#111111', borderRadius: 5}} 
                            onChange={handleChangeNome}
                        />
                        <p>Your Message</p>
                        <textarea 
                            type='text' 
                            name='msg' 
                            id='msg' 
                            style={{padding: 5, height: 200, fontSize: 20, backgroundColor: '#00ffb3', color: '#111111', borderRadius: 5, resize: 'none'}} 
                            onChange={handleChangeMess}
                        />

                        <button 
                            type='submit' 
                            className='submit-email'
                            disabled={!nome || !mess || !mail}
                        >Submit Message</button>
                    </form>
                
            </div>
            <Footer />
        </div>
    )
}