import React from 'react';
import '../styles/accordion.css'
import useOpenController from './useOpenController';
import { faEnvelope, faCircleChevronDown, faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'    

 export const Accordion = ({section, key}) => {
    const {isOpen, toggle } =useOpenController(false);

    return(
        <div className='accordion-container'>
        <ExpandableColumn question={section.question} 
        isOpen={isOpen} 
        toggle={toggle}
        />
        {isOpen &&    <TextSection text={section.answer}/>}
        <div className='underline'></div>
    </div>
    );
};


export const ExpandableColumn = ({question, isOpen, toggle}) =>{
    return(
    <div className="column-container" onClick={toggle}>
        <div className='column-text'>{question}</div>
        <button className='expendable-button'>
           <FontAwesomeIcon className='arrowicon' icon={faCaretDown} />
        </button>
    </div>
        
    );
};

export const TextSection = ({isOpen, text}) => {
    return(
        <div className="text-container">
            <div>{text}</div>
         </div>

    );
};