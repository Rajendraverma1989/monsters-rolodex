import React from 'react';
import './style.css'
import {Card} from '../card/card';

export const CardList = (props) => {
return <div className="card-list">
    { 
        props.monsters.map((monster, index) =>
            <Card key={index} monster={monster}/>
        ) }
    </div>
}