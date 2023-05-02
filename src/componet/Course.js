import { Link } from "react-router-dom";
const Course = () => {
    return ( <div>
         <div className="second-div">
            <p>focusing on your studies brings out the in you</p>
            <Link to="/"><button>Home</button></Link>
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