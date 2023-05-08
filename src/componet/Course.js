import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField'
import { FilterMatchMode } from 'primereact/api'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'
import Typography from '@mui/material/Typography'
import CircularProgress from '@mui/material/CircularProgress'
import { useState } from "react";
import { getCoursesURL } from "../api/BaseURL";
import useFetch from "../hooks/useFetch";

const Course = () => {
    const [filters, setFilters] = useState({
      global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    })
    const { data, isLoading, error } = useFetch(getCoursesURL)
    const lecturers = []
    if (data) {
        // console.log(data.Lecturer)
        data[0]['lecturer_Courses'].map((lect) => {
          lecturers.push(lect.Lecturer)
          console.log(lect.Lecturer)
        })
        // console.log(lecturers.Lecturer);
    }

    const lects = (lecturers) => {
      
      return lecturers.Title + +lecturers.Lastname
    }

    return (
      <div>
        <div className='second-div'>
          <p>focusing on your studies brings out the best in you</p>
        </div>
        <Link to='/Semester' className='linker'>
          {' '}
          <Button variant='contained'>Back</Button>
        </Link>
        <div className='table-div'>
          {data && (
            <DataTable
              value={data}
              filters={filters}
              paginator
              scrollable
              rows={5}
              rowsPerPageOptions={[5, 10, 15]}
              totalRecords={data.length}
            >
              <Column field='Course_code' header='Course code' />
              <Column field='Course_title' header='Course title' sortable />
              <Column body={lects} header='Lecturers' />
            </DataTable>
          )}
        </div>
      </div>
    )
}
 
export default Course;