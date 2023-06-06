import React from 'react';


const Home = () => {

    const getStarted = () => {
        window.localStorage.clear();
        window.location.href = "./sign-in";
    };

    return (
        <div>
            <br/>
            <h1>Welcome to PWD Jobs!</h1>
            <p>Welcome to our PWD Job Portal, where abilities define opportunities! Discover a world of inclusive employment, tailored to your unique skills and talents.</p>
            <p>Let us empower you to unlock your potential and find a rewarding career that celebrates diversity. </p>
            <p>Join us on this transformative journey towards a more inclusive workforce, where every ability shines bright.</p>
            <br/>
            <br/>
            <button onClick={getStarted} className="btn btn-primary">
               Get Started
            </button>
        </div>
    );
};

export default Home;
