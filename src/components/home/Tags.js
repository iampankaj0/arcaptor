import React from "react";
import { BsThreeDots } from "react-icons/bs";

const Tags = ({ tagType, title, trendingWith }) => {
  return (
    <div className="main_tag_sec">
      <p className="tag_type">
        <span>{tagType}</span>
        <span>
          <BsThreeDots />
        </span>
      </p>
      <h3>{title}</h3>
      <p className="trending_with">
        Trending with <span>{trendingWith}</span>
      </p>
    </div>
  );
};

export default Tags;
