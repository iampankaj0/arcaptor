import React from "react";
import "../../assets/styles/sidebar.scss";
import { BsHash } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import { Link } from "react-router-dom";
import { Logo } from "../../assets/icons";

const Sidebar = () => {
  const linkArray = [
    {
      icon: <BsHash />,
      title: "explore",
      to: "/",
    },
    {
      icon: <FiSettings />,
      title: "settings",
      to: "/",
    },
  ];

  return (
    <section className="sidebar__main">
      <div>
        <div className="logo">
          <Logo />
        </div>

        <div className="links__section">
          {linkArray.map((item, id) => (
            <Link to={item.to} key={id}>
              <span>
                {item.icon}
              </span>
              <span>{item.title}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
