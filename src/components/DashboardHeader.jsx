import React, { useEffect, useState } from 'react'

import Wordmark from "../static/graphics/Wordmark.png"
import './DashboardHeader.css'
import { useSelector } from 'react-redux'

const DashboardHeader = () => {
  const dashboardPage = useSelector((state) => state.application.dashboardPage);
  const [title, setTitle] = useState(null)
  useEffect(() => {
    if (dashboardPage === "allcourses") setTitle("All Courses")
    else if (dashboardPage === "attendance") setTitle("Attendance")
    else if (dashboardPage === "profile") setTitle("Profile")
    else if (dashboardPage === "setting") setTitle("Setting")

  }, [dashboardPage, setTitle])
  return (
    <div>
      <div style={{ display: 'flex', width: "95vw", justifyContent: "flex-end" }}>
        <img alt='wordmark' className='wordmark' src={Wordmark} />

      </div>
      <h2 className='course-heading'  >{title}</h2></div>
  )
}

export default DashboardHeader