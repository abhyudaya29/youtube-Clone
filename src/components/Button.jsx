
import { Button } from '@mui/material'
const Buttons = ({Name}) => {
  return (
    <>
    <div className='px-5 py-3 m-2' >
        <Button variant='contained'>{Name}</Button>

    </div>
    </>
  )
}

export default Buttons