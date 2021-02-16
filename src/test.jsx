
import React from 'react';
import './test.css';





const Test = () => {

fetch('https://www.metaweather.com/api/')
    .then(r=> r.json()).then(data => {
        // Work with JSON data here
        console.log(data);
      }).catch(err => {
        // Do something for an error here
        console.log(err)
      });
    return (
       ''
    )
}

export default Test;



