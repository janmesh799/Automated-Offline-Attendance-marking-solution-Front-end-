import React from 'react'

const About_page_card = (props) => {
  const { img, text, heading } = props.elem;
  // console.log(elem)
  return (
    <div>
      <h2>{heading}</h2>
      <p>
        {text}</p>
      <img src={img} />
    </div>
  )
}

export default About_page_card