import React from 'react';

const person = (props) => {
    return <p> hello i am from {props.name} my age is {props.age }<p>{props.children}</p></p>
}
export default person;