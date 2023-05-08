
import { useNavigate } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import { getLevelsURL } from '../api/BaseURL';
import Link from '@mui/material/Link'
const Year = () => {
    const { data, isLoading, error } = useFetch(getLevelsURL)
    const navigate = useNavigate()
    if (data) {
        console.log(data);
    }
    return (
      <div>
        <div className='level'>
          <p>Ebsu Student Portal</p>
          <p className='all'>wishing all the best</p>
          {error && <div>{error}</div>}
          {isLoading && <div>Loading ...</div>}
          {data &&
            data.map((data, index) => (
              <Link
                component='button'
                underline='none'
                key={index}
                className='link'
                onClick={() => {
                  navigate(`level/${data.Id}/${data.Name}/get`)
                }}
              >
                <h1>{data.Name} LEVEL</h1>
              </Link>
            ))}
        </div>
      </div>
    )
}
 
export default Year;