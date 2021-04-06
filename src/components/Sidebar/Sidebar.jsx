import React, { useState } from "react";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { NavLink } from "react-router-dom";
import { Grid } from "@material-ui/core";
const Sidebar = ({ getData }) => {
  const sideMenu = [
    { name: "Персонажі", link: "characters" },
    { name: "Епізоди", link: "episodes" },
    { name: "Цитати героїв", link: "quotes" },
    { name: "Хто, коли загинув", link: "deaths" },
  ];

  const [activeHoverLink, setActiveHoverLink] = useState(null);
  const [activeLink, setActiveLink] = useState(null);

  return (
    <Grid
      container
      item
      xs={8}
      sm={4}
      md={3}
      lg={2}
      style={{
        position: "fixed",
        top: "70px",
        backgroundColor: "#115293",
        zIndex: "1000",
        opacity: "0.9",
      }}
    >
      <Divider />
      <List
        style={{
          width: "100%",
        }}
      >
        {sideMenu.map((item, index) => (
          <NavLink
            to={"/" + item.link}
            style={{
              textDecoration: "none",
              width: "100%",
              backgroundColor: "red",
            }}
          >
            <ListItem
              button
              key={index}
              onClick={() => setActiveLink(index)}
              onMouseEnter={() => setActiveHoverLink(index)}
              onMouseLeave={() => setActiveHoverLink(null)}
              style={{
                backgroundColor:
                  (activeHoverLink === index && "#4caf50") ||
                  (activeLink === index && "#f44336"),
              }}
            >
              <ListItemText
                style={{
                  color: "white",
                }}
                primary={item.name}
                onClick={() => getData(item.link + "?limit=10")}
              />
            </ListItem>
          </NavLink>
        ))}
      </List>
      <Divider />
    </Grid>
  );
};

export default Sidebar;
