import React, { useEffect } from "react";
import { withStyles, createStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { useDispatch, useSelector } from "react-redux";
import NavbarHomeComponent from "../../../Components/Header/HeaderComponent";
import { useStyles } from "../../../Components/Header/HeadStyles";
import {
  productDeleted,
  productLoad,
} from "../../../Store/Action/ProductAction/ProductAction";
import { Button, ButtonGroup } from "@material-ui/core";
import { useHistory } from "react-router";

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

const ProductList = () => {
  const classes = useStyles();
  const { productList } = useSelector((store) => store.productListToStore);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(productLoad());
  }, []);

  const handleDelete = (e) => {
    if (window.confirm("Are you deleted the product?")) {
      dispatch(productDeleted(e._id));
      history.push("/productList");
    }
  };
  return (
    <div>
      <NavbarHomeComponent />
      <div className={classes.headerComponent}>
        <h2 style={{ fontSize: "60px", textAlign: "center" }}>
          OUR PRODUCTS LIST
        </h2>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="left">Title</StyledTableCell>
                <StyledTableCell align="left">Category</StyledTableCell>
                <StyledTableCell align="left">Price</StyledTableCell>
                <StyledTableCell align="left">Image</StyledTableCell>
                <StyledTableCell align="left">Actions</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {productList.map((product) => (
                <StyledTableRow key={product._id}>
                  <StyledTableCell component="th" scope="row">
                    {product.title}
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    {product.category_id}
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    {product.price}
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    {product.image}
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    <ButtonGroup
                      variant="contained"
                      color="primary"
                      aria-label="contained primary button group"
                    >
                      <Button color="primary">Edit</Button>
                      <Button
                        color="secondary"
                        onClick={() => handleDelete(product._id)}
                      >
                        Delete
                      </Button>
                    </ButtonGroup>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Button
          style={{ marginTop: "20px", alignContent: "center" }}
          variant="contained"
          color="primary"
          onClick={() => history.push("/productadd")}
        >
          Add Products
        </Button>
      </div>
    </div>
  );
};

export default ProductList;
