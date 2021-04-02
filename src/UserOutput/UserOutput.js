import React from 'react';
import './UserOutput.css';

const UserOutput = (props) => {
         return (
            <div className="UserOutput">
              <p>My name is {props.name} </p>
              <p>This is second line</p>
            </div>
        )
    
};

export default UserOutput;