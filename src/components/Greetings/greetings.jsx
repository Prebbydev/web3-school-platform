import React from 'react';

const Greeting = ({ name }) => {
    const currentTime = new Date().getHours();
    let greeting;
    if (currentTime < 12) {
        greeting = `Good morning, ${name}!`;
    } else if (currentTime < 18) {
        greeting = `Good afternoon, ${name}!`;
    } else {
        greeting = `Good evening, ${name}!`;
    }

    return <div className="greeting" style={{textAlign:"left", marginTop:"20px",marginLeft:"10px",
fontSize:"18px", color:"#333333"}}>{greeting}</div>;
};

export default Greeting;

