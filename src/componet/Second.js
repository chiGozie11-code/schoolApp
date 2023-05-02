import { Link } from "react-router-dom";
import * as React from 'react';
import Button from '@mui/material/Button';
const Second = () => {
    return ( 
       <div>
         <div className="second-div">
            <p>focusing on your studies brings out the in you</p>
            <Link to="/Semester" className="linker"> <Button variant="contained" >Back</Button></Link>
        </div>
        <div className="table-div">
        <table>
            <tr>
                <th>Lecturer</th>
                <th>Course Title</th>
                <th>Course code</th>
            </tr>
            <tr>
                <td>Professor mazi</td>
                <td>Math 102</td>
                <td>102</td>
            </tr>
            <tr>
                <td>Professor mazi</td>
                <td>Math 102</td>
                <td>102</td>
            </tr>
            <tr>
                <td>Professor mazi</td>
                <td>Math 102</td>
                <td>102</td>
            </tr>
            <tr>
                <td>Professor mazi</td>
                <td>Math 102</td>
                <td>102</td>
            </tr>
            <tr>
                <td>Professor mazi</td>
                <td>Math 102</td>
                <td>102</td>
            </tr>
            <tr>
                <td>Professor mazi</td>
                <td>Math 102</td>
                <td>102</td>
            </tr>
        </table>
    </div> 
       </div>
    );
}
 
export default Second;