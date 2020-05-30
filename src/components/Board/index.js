import React from 'react';

import './style.css';

export default ({ title, children }) => {
    function dragOver(event) {
        event.preventDefault();
        
        event.currentTarget.classList.add('over');

        const card = document.querySelector('.Card.is-dragging');

        event.currentTarget.appendChild(card);
    }

    function dragLeave(event) {
        event.currentTarget.classList.remove('over');
    }

    function drop(event) {
        event.preventDefault();

        event.currentTarget.classList.remove('over');
    }

    return (
        <div className="Board">
            <h3>{ title }</h3>
            <div 
                className="dropzone" 
                onDragOver={ dragOver }
                onDragLeave={ dragLeave }
                onDrop={ drop }
            >        
                { children }
            </div>
        </div>
    );
}
