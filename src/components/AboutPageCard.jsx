import React from 'react'
import "./AboutPageCard.css"

const AboutPageCard = (props) => {
  const { img, text, heading } = props.elem;
  // console.log(elem)
  return (
    <div className='about-card'>
      <div className='about-card-img-component' >
        <img alt='card-img' src={img} />
      </div>
      <div className='about-card-text-component' >
        <h2> {heading} </h2>
        <p> {text} </p>
      </div>
    </div>
  )
}

export default AboutPageCard