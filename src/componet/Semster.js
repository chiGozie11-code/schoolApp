import { Link } from 'react-router-dom';
const Semester = () => {
    return (<div>
        <div className='semester'>
            <Link to="/Course" className='link'><h1>First semester</h1></Link>
            <Link to="/Second" className='link'><h1>Second semester</h1></Link>
        </div>
    </div>);
}

export default Semester;