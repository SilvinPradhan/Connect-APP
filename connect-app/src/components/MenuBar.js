import React, { useState } from "react";
import { Menu } from "semantic-ui-react";

function MenuBar() {
  const [activeItem, setActiveitem] = useState("");

  const handleItemClick = (e, { name }) => setActiveitem(name);

  return (
    <Menu pointing secondary>
      <Menu.Item
        name="home"
        active={activeItem === "home"}
        onClick={handleItemClick}
      />

      <Menu.Menu position="right">
      <Menu.Item
        name="login"
        active={activeItem === "login"}
        onClick={handleItemClick}
      />
        <Menu.Item
          name="register"
          active={activeItem === "register"}
          onClick={handleItemClick}
        />
      </Menu.Menu>
    </Menu>
  );
}

export default MenuBar;
