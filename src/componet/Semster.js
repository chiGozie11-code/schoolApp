import { useNavigate, useParams } from 'react-router-dom';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import useFetch from '../hooks/useFetch';
import { getSemestersURL } from '../api/BaseURL';

const Semester = () => {
    const { Name } = useParams()
    const { data, isLoading, error } = useFetch(getSemestersURL)
    const navigate = useNavigate()
    var myList = []
    if (data) {
        data.map((da) => 
        {
            if (da.Section.match(Name)) {
                myList.push(da)
            }
            return 0;
        })
    //   console.log(data)
      console.log(myList);
    }
    return (
      <div>
        <div>
          <Link href='/' className='linker'>
            {' '}
            <Button variant='contained'>Back</Button>
          </Link>
        </div>
        {error && <div>{error}</div>}
        {isLoading && <div>Loading ...</div>}
        <div className='semester'>
          {data &&
            myList.map((data, index) => (
              <Link
                component='button'
                underline='none'
                key={index}
                className='link'
                onClick={() => {
                  navigate(`/semester/${data.Id}/get`)
                }}
              >
                <h1>{data.Section}</h1>
              </Link>
            ))}
        </div>
      </div>
    )
}

export default Semester;