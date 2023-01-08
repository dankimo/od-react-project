import {
  Toolbar,
  IconButton,
  Drawer,
  MenuIcon,
  MenuItem
} from "@mui/material"
import React, { useState } from "react";
import { Link } from "react-router-dom";

const [state, setState] = useState({
  drawerOpen: false,
});

export default function Details () {
  const headersData = [
    {
      label: "Gallery",
      href: "/gallery",
    },
    {
      label: "Details Page",
      href: "/details",
    }
  ];

  const { drawerOpen } = state;

  const handleDrawerOpen = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: true }));
    const handleDrawerClose = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: false }));

  const getDrawerChoices = () => {
    return headersData.map(({ label, href }) => {
      return (
        /* eslint-disable react/jsx-key */
        <Link
          {...{
            component: Link,
            to: href,
            color: "inherit",
            style: { textDecoration: "none" },
            key: label,
          }}
        >
          <MenuItem>{label}</MenuItem>
        </Link>
      );
    });
  };

  return (
    <Toolbar>
        <IconButton
          {...{
            edge: "start",
            color: "inherit",
            "aria-label": "menu",
            "aria-haspopup": "true",
            onClick: handleDrawerOpen,
          }}
        >
          <MenuIcon />
        </IconButton>

        <Drawer
          {...{
            anchor: "left",
            open: drawerOpen,
            onClose: handleDrawerClose,
          }}
        >
          {/* eslint-disable no-undef */}
          <div className={css`
            drawerContainer: {
              padding: "20px 30px",
            },`
          }
          >{getDrawerChoices()}</div>
        </Drawer>

        <div>asdf</div>
      </Toolbar>
  )
}