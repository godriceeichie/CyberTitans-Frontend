import React from 'react';
import '../styles/forgotpassword.css'

const Forgotpassword = () => {
    return (
        <>
        <section className='herof-container'>
       
            <div className='herof-containerA' >
                <div className='box'>
                <h1>Forgot password</h1>
                <span className='txt'>please sellect options to send link reset password</span>
                <input className='oop' type='email' name='' id='email' placeholder='Reset via Email'></input>
                <input className='oop2' type='email' name='' id='SMS' placeholder='Reset via SMS'></input>
                <button className='btn' type='submit'  value="forget">submit</button>
            

                </div>
            </div>
        </section>
        </>
       
    );
};

export default Forgotpassword;