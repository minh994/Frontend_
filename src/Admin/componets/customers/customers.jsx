// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Chip from '@mui/material/Chip'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import Typography from '@mui/material/Typography'
import TableContainer from '@mui/material/TableContainer'
import { Avatar, CardHeader, Pagination } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const rows = [
  {
    age: 27,
    status: 'current',
    date: '09/27/2018',
    name: 'minhle',
    salary: '$19586.23',
    email: 'eebsworth2m@sbwire.com',
    designation: 'Human Resources Assistant',
        image:"https://cdn2.yame.vn/pimg/ao-thun-co-tron-the-thao-m36-0021079/d40cedd1-b83d-2200-dec1-00194cad80b6.jpg?w=540&h=756&c=true&ntf=false|type:advertise|lid:203"
  },
]



const Customers = () => {
  const navigate=useNavigate();
  function handlePaginationChange(event, value) {
    console.log("Current page:", value);
  }
  return (
    <Box>
         <Card>
      <CardHeader
          title='Tất cả khách hàng'
          sx={{ pt: 2, alignItems: 'center', '& .MuiCardHeader-action': { mt: 0.6 } }}
          
        />
      <TableContainer>
        <Table sx={{ minWidth: 390 }} aria-label='table in dashboard'>
          <TableHead>
            <TableRow>
            <TableCell>Tên người dùng</TableCell>
            <TableCell>Hình ảnh</TableCell>
              <TableCell>Tên</TableCell>
              <TableCell>Email</TableCell>
              
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(0,10).map((item,index) => (
              <TableRow hover key={item.name} sx={{ '&:last-of-type td, &:last-of-type th': { border: 0 } }}>
                <TableCell>{index+1}</TableCell>
                <TableCell> <Avatar alt={item.name} src={item.image} /> </TableCell>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.email}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
        </Card>
        <Card className="mt-2 felx justify-center items-center">
            <Pagination
              className="py-5 w-auto"
              size="large"
              count={10}
              color="primary"
              onChange={handlePaginationChange}
            />
        </Card>
    </Box>
   
  )
}

export default Customers;
