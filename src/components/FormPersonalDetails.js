import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { TextField } from "@material-ui/core";

export class FormPersonalDetails extends Component {
  continue = e => {
    this.props.nextStep();
  };

  back = e => {
    this.props.prevStep();
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
            <Typography variant="h6">Personal De tails</Typography>
          </Toolbar>
        </AppBar>

        <TextField
          label="Occupation"
          onChange={handleChange("occupation")} // params Input Name
          defaultValue={values.occupation}
        />

        <TextField
          label="City"
          onChange={handleChange("city")} // params Input Name
          defaultValue={values.city}
        />

        <TextField
          label="Bio"
          onChange={handleChange("bio")} // params Input Name
          defaultValue={values.bio}
        />

        <div>
          <Button
            variant="contained"
            color="default"
            style={styles.button}
            onClick={this.back}
          >
            Back
          </Button>
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

export default FormPersonalDetails;
