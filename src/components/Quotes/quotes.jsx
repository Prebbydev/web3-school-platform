import React from 'react';

const Quotes = () => {
    const quotes = [
        "The only way to do great work is to love what you do. - Steve Jobs",
        "The best time to plant a tree was 20 years ago. The second best time is now. - Chinese Proverb",
        "Your limitation—it’s only your imagination.",
        "Push yourself, because no one else is going to do it for you.",
        "Great things never come from comfort zones."
    ];

    const getRandomQuote = () => {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        return quotes[randomIndex];
    };

    return (
        <div className="quote-content" style={{textAlign:"center"}}>
            <p style={{fontStyle:"italic", color:"#333333"}}><q>{getRandomQuote()}</q></p>
        </div>
    );
};

export default Quotes;
