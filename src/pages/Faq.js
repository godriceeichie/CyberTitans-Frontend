import React from 'react';
import '../styles/Faq.css'
import { data } from '../components/data';
import { Accordion } from '../components/Accordion';




const Faq = () => {
    
    return (
      <>
      <section className='hero1'>
        <div className='hero-left'>
            <img src='https://images.unsplash.com/photo-1479064312651-24524fb55c0e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=800'></img>
        </div>

        <div className='hero-right'>
            <div className='hero-right h1c'>
            <span>Help center</span>
            <h1>How can We help you</h1>
            <p>Lorem ipsum dolor sit amet.</p>
            </div>

            <div className='input-field'>
                <input   type="text" id="helpInput" name="helpInput" placeholder="what can we do for you?"></input>
            </div>
        </div>
      </section>

      <section className='hero2'>
        <div className='hero2-right'>
            <h1>GENERAL QUESTIONS</h1>
            <div className='question-fields'>
                {data.map((section,index)=>(
                    <Accordion key={index}  section={section}/>
                ))}
            </div>
        </div>

        <div className='hero2-left'>
        <h1>GENERAL QUESTIONS</h1>
            <div className='question-fields'>
                {data.map((section,index)=>(
                    <Accordion key={index}  section={section}/>
                ))}
            </div>


        </div>
      </section>

      <section className='hero-3'>
        <div className='hero-3 container1'>
            <div className='c-box1'>
                <div className='c-box1-left'>
                </div>
                <div className='c-box1-right'>
                    <span>Ask in the forums</span>
                    <p>Lorem ipsum dolor sit amet.</p>
                </div>
            </div>
        </div>

        <div className='hero-3 container2'>
        <div className='c-box2'>
             <div className='c-box2-left'>
                </div>
                <div className='c-box2-right'>
                    <img src=''></img>
                    <span>Visit our blog now</span>
                    <p>Lorem ipsum dolor sit amet.</p>
                </div>
         </div>
        </div>

      </section>
      </>
    );
};


export default Faq;