
import { Link } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import { getLevelsURL } from '../api/BaseURL';
const Year = () => {
    const { data, isLoading, error } = useFetch(getLevelsURL)
    if (data) {
        console.log(data);
    }
    return ( <div>
        <div className='level'>
        <p>Ebsu Student Portal</p>
          <p className='all'>wishing all the best</p>
          {error && <div>{error}</div>}
          {isLoading && <div>Loading ...</div>}
          {data && (
            data.map((data, index) => (
                <Link to='/Semester/' key={index} className='link'><h1>{data.Name} LEVEL</h1></Link>
            ))
          )}
       </div>
    </div> );
}
 
export default Year;