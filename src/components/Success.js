import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

export class Success extends Component {
  render() {
    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6"> Success</Typography>
          </Toolbar>
        </AppBar>

        <h1>Thanks for your submission</h1>
        <p>You will get email with further instructions.</p>
      </div>
    );
  }
}

export default Success;
