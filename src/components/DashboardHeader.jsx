import React from 'react'

import Wordmark from "../static/graphics/Wordmark.png"
import './DashboardHeader.css'

const DashboardHeader = (props) => {
  const title = props.title;
  return (
    <div>
      <div style={{ display: 'flex', width: "95vw", justifyContent: "flex-end" }}>
        <img alt='wordmark' className='wordmark' src={Wordmark} />

      </div>
      <h2 className='course-heading'  >{title}</h2></div>
  )
}

export default DashboardHeader