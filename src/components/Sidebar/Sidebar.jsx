import React from "react";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { NavLink } from "react-router-dom";

const Sidebar = ({ getData }) => {
  const sideMenu = [
    { name: "Персонажі", link: "characters" },
    { name: "Епізоди", link: "episodes" },
    { name: "Цитати героїв", link: "quotes" },
    { name: "Хто, коли загинув", link: "deaths" },
  ];
  return (
    <div>
      <Divider />
      <List>
        {sideMenu.map((item, index) => (
          <ListItem button key={index}>
            <NavLink to={"/" + item.link}>
              <ListItemText
                primary={item.name}
                onClick={() => getData(item.link + "?limit=10")}
              />
            </NavLink>
          </ListItem>
        ))}
      </List>
      <Divider />
    </div>
  );
};

export default Sidebar;
