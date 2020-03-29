import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

export class Confirm extends Component {
  continue = e => {
    // SEND DATA
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

    const { values } = this.props;

    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6"> Confirm</Typography>
          </Toolbar>
        </AppBar>

        <List>
          <ListItem>
            <ListItemText primary="First Name" secondary={values.firstName} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Last Name" secondary={values.lastName} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Email" secondary={values.email} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Occupation" secondary={values.occupation} />
          </ListItem>
          <ListItem>
            <ListItemText primary="City" secondary={values.city} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Biography" secondary={values.bio} />
          </ListItem>
        </List>

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

export default Confirm;
