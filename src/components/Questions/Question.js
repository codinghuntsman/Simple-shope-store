import React from 'react';
import "./Question.css";

const Question = () => {
    return (
        <div>
            <h2 className='headline'>Question and answer section</h2>
            <div className='question-part'>
                <h4>How react works?</h4>
                <h4>Difference between props versus state?</h4>
                <h4>How useEffect works?</h4>
            </div>
        </div>
    );
};

export default Question;