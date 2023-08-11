import React from 'react';
import '../styles/Faq.css'
import { data } from '../components/data';
import { Accordion } from '../components/Accordion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faCircleChevronDown } from '@fortawesome/free-solid-svg-icons'




const Faq = () => {
    
    return (
      <>
     <div className='hero1'>
        <div className='hero1-left'>
        <h1>Frequently Asked Questions</h1>

        </div>
       

     </div>
  

    <div className='hero2'>
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

    </div>


      <section className='hero-3'>
        <div className='box'>
            <h1>Still can’t find the answer to your question?</h1>
            <buttton className="fbutton">visit our help center</buttton>

        </div>

      </section>

   
      </>
    );
};


export default Faq;

