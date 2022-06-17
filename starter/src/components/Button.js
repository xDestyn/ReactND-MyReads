import React from 'react';
import { Link } from 'react-router-dom';

const Button = () => {
    return (
        <div className="open-search">
            <Link to="/search"> Search </Link>
        </div>
    );
};

export default Button;
