import React from 'react';
import '../styles/Faq.css';
import { data } from '../components/data';
import { Accordion } from '../components/Accordion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faCircleChevronDown } from '@fortawesome/free-solid-svg-icons';
import '../styles/floatinstars.css'
import { NavLink } from 'react-router-dom';

const Faq = () => {
    return (
        <>
            <div className='hero1'>
                <div className='hero1-left'>
                    <p>Frequently <span> Asked Questions</span></p>
                </div>
            </div>

            <div className='hero2'>
                    
                    <div className='floating-star fs1' style={{ left: '6%', top: '6%' }}></div>
                    <div className='floating-star fs1' style={{ right: '6%', bottom: '6%' }}></div>
                    <div className='floating-star fs2' style={{ left: '8%', top: '8%' }}></div>
                    <div className='floating-star fs2' style={{ right: '8%', bottom: '8%' }}></div>
                <div className='hero2-right'>
                    <h1>GENERAL <span>QUESTIONS</span></h1>
                    <div className='question-fields'>
                        {data.map((section, index) => (
                            <Accordion key={index} section={section} />
                        ))}
                    </div>
                </div>

            </div>

            <section className='hero-3'>
                <div className='box'>
                    <span>Still can’t find the answer to your question?</span>
                    <NavLink to={'/contact'} className={'fbutton'}><h4>Contact Us</h4></NavLink>
                </div>
            </section>
        </>
    );
};

export default Faq;

