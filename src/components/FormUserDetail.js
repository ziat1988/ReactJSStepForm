import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { TextField } from "@material-ui/core";

//import TextField from "material-ui/styles/TextField";
//import RaisedButton from "material-ui/styles/RaisedButton";

export default class FormUserDetail extends Component {
  continue = e => {
    this.props.nextStep();
  };

  render() {
    const styles = {
      button: {
        margin: 15
      }
    };

    const { values, handleChange } = this.props;

    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6"> User Details</Typography>
          </Toolbar>
        </AppBar>

        <TextField
          label="First Name"
          onChange={handleChange("firstName")} // params Input Name
          defaultValue={values.firstName}
        />
        <TextField
          label="Last Name"
          onChange={handleChange("lastName")} // params Input Name
          defaultValue={values.lastName}
        />
        <TextField
          label="Email"
          onChange={handleChange("email")} // params Input Name
          defaultValue={values.email}
        />

        <div>
          <Button
            variant="contained"
            color="primary"
            style={styles.button}
            onClick={this.continue}
          >
            Continue
          </Button>
        </div>
      </div>
    );
  }
}
