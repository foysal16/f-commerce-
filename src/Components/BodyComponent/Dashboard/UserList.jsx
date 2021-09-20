import React, { useEffect } from "react";
import { withStyles, createStyles, makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteUser,
  loadUsers,
} from "../../../Store/Action/Users/Registration";
import NavbarHomeComponent from "../../../Components/Header/HeaderComponent";

const StyledTableCell = withStyles((theme) =>
  createStyles({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  })
)(TableCell);

const StyledTableRow = withStyles((theme) =>
  createStyles({
    root: {
      "&:nth-of-type(odd)": {
        backgroundColor: theme.palette.action.hover,
      },
    },
  })
)(TableRow);

export const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 1000,
  },
}));

const UserList = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const users = useSelector((store) => store.userData);
  console.log(users, null, " ");
  useEffect(() => {
    dispatch(loadUsers());
  }, []);

  const handleDelete = (_id) => {
    if (window.confirm("Are you sure Wanted to delete the user?")) {
      dispatch(deleteUser(_id));
    }
  };

  return (
    <div>
      <NavbarHomeComponent />
      <h2 style={{ fontSize: "60px", textAlign: "center" }}>OUR USERS LIST</h2>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="left">First Name</StyledTableCell>
              <StyledTableCell align="left">Last Name</StyledTableCell>
              <StyledTableCell align="left">UserName</StyledTableCell>
              <StyledTableCell align="left">Email</StyledTableCell>
              <StyledTableCell align="left">Action</StyledTableCell>
            </TableRow>
          </TableHead>
          {/* <TableBody>
            {users.map((user) => (
              <StyledTableRow key={user._id}>
                <StyledTableCell component="th" scope="row">
                  {user.firstname}
                </StyledTableCell>
                <StyledTableCell align="left">{user.lastname}</StyledTableCell>
                <StyledTableCell align="left">{user.username}</StyledTableCell>
                <StyledTableCell align="left">{user.email}</StyledTableCell>
                <StyledTableCell align="left">
                  <ButtonGroup
                    variant="contained"
                    color="primary"
                    aria-label="contained primary button group"
                  >
                    <Button color="primary">Edit</Button>
                    <Button
                      color="secondary"
                      onClick={() => handleDelete(user._id)}
                    >
                      Delete
                    </Button>
                    <Button color="inherit">Disable</Button>
                  </ButtonGroup>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody> */}
        </Table>
      </TableContainer>
    </div>
  );
};

export default UserList;
