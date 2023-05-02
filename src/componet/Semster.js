import { Link } from 'react-router-dom';
import * as React from 'react';
import Button from '@mui/material/Button';
const Semester = () => {
    return (<div>
        <div>
        <Link to="/" className="linker"> <Button variant="contained" >Back</Button></Link>
        </div>
        <div className='semester'>
            <Link to="/Course" className='link'><h1>First semester</h1></Link>
            <Link to="/Second" className='link'><h1>Second semester</h1></Link>
        </div>
    </div>);
}

export default Semester;