import React from "react";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import clsx from "clsx";

const Sidebar = ({ getData }) => {
  const sideMenu = [
    { name: "Персонажі", link: "characters?limit=10" },
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
            <ListItemText
              primary={item.name}
              onClick={() => getData(item.link)}
            />
          </ListItem>
        ))}
      </List>
      <Divider />
    </div>
  );
};

export default Sidebar;
