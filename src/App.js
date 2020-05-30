import React from 'react';
import crypto from 'crypto';

import Board from './components/Board';
import Card from './components/Card';

import './App.css';

import { boards } from './data/boards';

export default () => {
    return (
        <div className="Boards">
            { boards.map(({ title, cards }, index) =>
                <Board key={ index } title={ title }>
                    { cards.map(({ status, text }, index) => 
                        <Card 
                            key={ index }
                            id={ `card_${ crypto.randomBytes(10).toString('hex') }` } 
                            status={ status } 
                            text={ text }
                        />
                    )}
                </Board>
            )}
        </div>
    );
}
