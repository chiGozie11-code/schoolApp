import { Link } from "react-router-dom";
import * as React from 'react';
import Button from '@mui/material/Button';
const Course = () => {
    return ( <div>
         <div className="second-div">
            <p>focusing on your studies brings out the in you</p>
        </div>
        <Link to="/Semester" className="linker"> <Button variant="contained" >Back</Button></Link>
        <div className="table-div">
         <table>
            <tr>
                <th>Lecturer</th>
                <th>Course Title</th>
                <th>Course code</th>
            </tr>
            <tr>
                <td>Professor mazi</td>
                <td>Math 101</td>
                <td>101</td>
            </tr>
            <tr>
                <td>Professor mazi</td>
                <td>Math 101</td>
                <td>101</td>
            </tr>
            <tr>
                <td>Professor mazi</td>
                <td>Math 101</td>
                <td>101</td>
            </tr>
            <tr>
                <td>Professor mazi</td>
                <td>Math 101</td>
                <td>101</td>
            </tr>
            <tr>
                <td>Professor mazi</td>
                <td>Math 101</td>
                <td>101</td>
            </tr>
            <tr>
                <td>Professor mazi</td>
                <td>Math 101</td>
                <td>101</td>
            </tr>
        </table>
        </div>
    </div> );
}
 
export default Course;