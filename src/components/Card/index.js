import React from 'react';

import './style.css';

export default ({ indentifier, status, text }) => {
    function dragStart(event) {
        event.dataTransfer.setData('card-id', event.currentTarget.id);

        const dropzones = document.querySelectorAll('.Board .dropzone');

        dropzones.forEach(({ classList }) => classList.add('highlight'));

        event.currentTarget.classList.add('is-dragging');
    }

    function dragEnd(event) {
        const dropzones = document.querySelectorAll('.Board .dropzone');

        dropzones.forEach(({ classList }) => classList.remove('highlight'));

        event.currentTarget.classList.remove('is-dragging');
    }

    function dragOver(event) {
        event.stopPropagation();
    }

    return (
        <div 
            className="Card" 
            indentifier={ indentifier }
            draggable
            onDragStart={ dragStart }
            onDragEnd={ dragEnd }
            onDragOver={ dragOver }
        >
            <div className={ `status ${ status }` }></div>
            <p className="content">{ text }</p>
        </div>
    );
}
