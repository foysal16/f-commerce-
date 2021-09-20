import { Button, Grid, Paper, TextField } from "@material-ui/core";
import React, { useEffect } from "react";
import NavbarHomeComponent from "../../../Components/Header/HeaderComponent";
///import { CallMissedSharp } from "@material-ui/icons";

import { useSelector, useDispatch } from "react-redux";
import { useStyles } from "../../../Components/Header/HeadStyles";
import { useHistory } from "react-router";

const paperStyle = {
  padding: 40,
  height: "65vh",
  width: "100%",
  margin: "100px auto",
  fontFamily: "Poppins",
};
const btstyle = {
  margin: "20px 0",
  height: 40,
  borderRadius: 35,
  backgroundColor: "#000000",
  padding: "18px 36px",
  fontSize: "16px",
  fontFamily: "Poppins",
};

const textFiledStyle = {
  margin: "10px 0",
};

const linkTypo = {
  color: "#FF4C29",
  fontFamily: "Poppins",
};
const ProductAdd = () => {
  const classes = useStyles();
  const history = useHistory();
  return (
    <div>
      <NavbarHomeComponent />
      <div className={classes.headerComponent}>
        <Grid>
          <Button
            style={{ marginTop: "20px", marginBottom: "-100px" }}
            variant="contained"
            color="primary"
            onClick={() => history.push("/productList")}
          >
            Back To Product List
          </Button>
          <Paper elevation={10} style={paperStyle}>
            <Grid align="center">
              <h2>Prouduct Add</h2>
              <TextField
                type="text"
                label="Title"
                placeholder="Product Title"
                fullWidth
                required
              />

              <TextField
                type="text"
                label="Descriptions"
                placeholder="Product Descriptions"
                fullWidth
                required
                id="outlined-multiline-static"
                multiline
                rows={8}
                style={textFiledStyle}
              />

              <TextField
                type="text"
                label="Prices"
                placeholder="Product Prices"
                fullWidth
                style={textFiledStyle}
                required
              />

              <TextField
                type="text"
                label="Catagories"
                placeholder="Product Catagories"
                fullWidth
                style={textFiledStyle}
                required
              />

              <TextField
                placeholder="Product Image"
                type="file"
                fullWidth
                style={textFiledStyle}
                required
              />
              <Button
                color="primary"
                fullWidth
                variant="contained"
                style={btstyle}
                type="submit"
                value="Sign Up"
              >
                PRODUCT ADD
              </Button>
            </Grid>
          </Paper>
        </Grid>
      </div>
    </div>
  );
};

export default ProductAdd;
