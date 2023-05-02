
import { Link } from 'react-router-dom';
const Year = () => {
    return ( <div>
        <div className='level'>
        <p>Ebsu Student Portal</p>
          <p className='all'>wishing all the best</p>
           <Link to="/Semester" className='link'><h1>100 LEVEL</h1></Link>
           <Link to="/Semester" className='link'><h1>200 LEVEL</h1></Link>
           <Link to="/Semester" className='link'><h1>300 LEVEL</h1></Link>
           <Link to="/Semester" className='link'><h1>400 LEVEL</h1></Link>
       </div>
    </div> );
}
 
export default Year;