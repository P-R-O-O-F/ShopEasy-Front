import React, { useState } from 'react';

const FAQ = () => {
    const [hasClicked, setHasClicked] = useState(false);

    const handleQuestionClick = () => {
        setHasClicked(!hasClicked);
    };

    return (
        <div>
            <p onClick={handleQuestionClick}> Est-ce que le golf est intéressant? </p>
            {hasClicked && <p> c'est à chier </p>}
        </div>
    );
};

export default FAQ;