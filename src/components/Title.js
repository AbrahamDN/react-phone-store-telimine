import React from 'react';


const Title = ({ subHeading, title }) => {
    return (
        <div className="Title">
            <h3>{subHeading}</h3>
            <h1>{title}</h1>
        </div>
    );
}


export default Title;
