import React from 'react';
import NavBar from '../navbar/navBar.js';

const AddToList = ({user}) => {
   
    return (
        <div className='list'>
            <NavBar user={user} />
            <h1> add album to your list </h1>
        </div>
    );
};

export default AddToList;