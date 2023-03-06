import React from "react";

const ProfileTabs = ({ handleShowTab, activeClass }) => {
  return (
    <section className="profile_tabs_main">
      <div className="nav__buttons">
        <p
          className={`tab_changer ${activeClass === 1 ? "active" : ""}`}
          onClick={() => handleShowTab(1)}
        >
          Tweets
        </p>
        <p
          className={`tab_changer ${activeClass === 2 ? "active" : ""}`}
          onClick={() => handleShowTab(2)}
        >
          Tweets & replies
        </p>
        <p
          className={`tab_changer ${activeClass === 3 ? "active" : ""}`}
          onClick={() => handleShowTab(3)}
        >
          Media
        </p>
        <p
          className={`tab_changer ${activeClass === 4 ? "active" : ""}`}
          onClick={() => handleShowTab(4)}
        >
          Likes
        </p>
      </div>
    </section>
  );
};

export default ProfileTabs;
