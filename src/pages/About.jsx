import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import AboutPageCard from '../components/AboutPageCard';
import Classroom_2 from "../static/graphics/Classroom_2.png"
import Report from "../static/graphics/Report.png"
import Phone from "../static/graphics/Phone.png"
import Team from "../static/graphics/Team.png"
import Schedule from "../static/graphics/Schedule.png"
import './About.css'
import { useDispatch } from 'react-redux';
import { setPage } from '../features/applicationData/applicationSlice';
const About = () => {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setPage('about'))
  })
  const card_Data = [
    {
      heading: "Trouble-free solution for Teachers",
      img: Classroom_2,
      text: "Reduce to zero late arrivals and attendance excuses. Mark the attendance easily and quickly with Upasthit via Bluetooth, eliminating network issues."
    },
    {
      heading: "Transparent Attendance ",
      img: Report,
      text: "Complete attendance history is at your fingertips. The teachers' app integrates with the cloud server data, which is available 24/7."
    },
    {
      heading: "Easy Attendance",
      img: Phone,
      text: "The simplest attendance tracker no matter what device you're on Available for iOS and Android"
    },
    {
      heading: "Easy Management ",
      img: Schedule,
      text: "Manage and schedule your lectures effortlessly with Upasthit. "
    }
  ]

  return (
    <>
      <div className='' >
        <Navbar />
        <div className='about '>

          <div className='about-text'>

            <img alt='team' className='about-team-img' src={Team} />
            <p>We are a team of 7 students from <strong> IIITDM Jabalpur</strong>. Each of us belonging to different branches collaborating to make an attendance app for universities, colleges, and schools.
            </p>
          </div>
          <div className='about_background'>
            <div className='card-section'>
              {card_Data.map((elem) => {
                return (
                  <>
                    <AboutPageCard key={elem.heading.length} elem={elem} />
                  </>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About