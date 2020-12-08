import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { useDispatch, useSelector } from "react-redux"






const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);
const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

function DisplayRecord(props) {
  const classes = useStyles();
  const [StuRecord, setStuRecord] = React.useState([]);
  const [Atributes, setAtributes] = React.useState(["Name","Father Name","Email Id","Address","Mobile No.","Gender","DOB","Country","Photo","Edit/Delete"]);

  const Data = useSelector((state) => state);
  console.log(Data)

  React.useEffect(() => {
  
    

  },[])

  return (
    <div>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              {Atributes.map((item)=>(
              <StyledTableCell>{item}</StyledTableCell>))}
            </TableRow>
          </TableHead>
           <TableBody>
          {/* {StuRecord.map((item) =>{
            return(
            <StyledTableRow >
              <StyledTableCell component="th" scope="row">{item.firstname}" "{item.lastname}</StyledTableCell>
              <StyledTableCell align="right">{item.fathername}</StyledTableCell>
              <StyledTableCell align="right">{item.email}</StyledTableCell>
              <StyledTableCell align="right">{item.address}</StyledTableCell>
              <StyledTableCell align="right">{item.phone}</StyledTableCell>
              <StyledTableCell align="right">{item.gender}</StyledTableCell>
              <StyledTableCell align="right">{item.dob}</StyledTableCell>
              <StyledTableCell align="right">{item.country}</StyledTableCell>

            </StyledTableRow>
          )})} */}
        </TableBody> 
        </Table>
      </TableContainer>

    </div>
  );
}

export default DisplayRecord;