import React from "react";


const NavBar = ({setPage}) => {

    function setHome() {
        setPage('home');
    };

    function setOperators() {
        setPage('operators');
    };

    function setQuestions() {
        setPage('questions');
    };

    return (
        <div className='navbar'>
            <button onClick={setHome}>JS Fundamentals</button>
            <button onClick={setQuestions}>Interview Questions</button>
            <button onClick={setOperators}>Operators</button>
        </div>
    );
};

export default NavBar;