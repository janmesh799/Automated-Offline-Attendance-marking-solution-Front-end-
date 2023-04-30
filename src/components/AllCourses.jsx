import React from 'react'

import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddBoxIcon from '@mui/icons-material/AddBox';
import './AllCourses.css'

const AllCourses = () => {

const sampleData = [
    {
        CourseCode: "DFP109",
        CourseName: "Engineering Design Project",
        Batch: 2020,
        Strength: 200,
        Professor: "Abhishek Verma"
    }, {
        CourseCode: "DFP109",
        CourseName: "Engineering Design Project",
        Batch: 2020,
        Strength: 200,
        Professor: "Abhishek Verma"
    }, {
        CourseCode: "DFP109",
        CourseName: "Engineering Design Project",
        Batch: 2020,
        Strength: 200,
        Professor: "Abhishek Verma"
    }, {
        CourseCode: "DFP109",
        CourseName: "Engineering Design Project",
        Batch: 2020,
        Strength: 200,
        Professor: "Abhishek Verma"
    }, {
        CourseCode: "DFP109",
        CourseName: "Engineering Design Project",
        Batch: 2020,
        Strength: 200,
        Professor: "Abhishek Verma"
    }
]
    return (
        <div>
            <div className='courses-parent-box'>
                <form>
                    <input placeholder=' &nbsp; &nbsp; Search for course name/code' type='text' />
                </form>
                <div  >

                    <table id="courses">
                        <tr>
                            <th>Course Code</th>
                            <th>Course name</th>
                            <th>Batch</th>
                            <th>Strength</th>
                            <th>Professor</th>
                            <th>Actions</th>
                        </tr>
                        {
                            sampleData.map((row) => {
                                return (
                                    <tr>
                                        <td> {row.CourseCode} </td>
                                        <td> {row.CourseName} </td>
                                        <td> {row.Batch} </td>
                                        <td> {row.Strength} </td>
                                        <td> {row.Professor} </td>
                                        <td style={{ display: "flex", flexDirection: "row", justifyContent: "Center" }}>
                                            <button>
                                                < EditIcon />
                                            </button>
                                            <button>
                                                <DeleteIcon />
                                            </button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </table>
                </div>
                <div onClick={() => {
                    alert("clicked")
                }} className='add-course-label'>
                    <AddBoxIcon sx={{ margin: "0rem 1rem 0rem 5rem" }} />
                    <span>Add new course</span>
                </div>

            </div>
        </div>
    )
}

export default AllCourses