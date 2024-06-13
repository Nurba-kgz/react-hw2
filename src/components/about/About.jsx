import React from 'react';

function About(props) {

    return (
        <div>
            <h2>{props.info.title}</h2>
            <h4>{props.info.body}</h4>
        </div>
    );
}

export default About;