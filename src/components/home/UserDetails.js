import React from "react";
import { Button } from "react-bootstrap";
import { CalendarIcon, VerifyIcon } from "../../assets/icons";

const UserDetails = ({
  userName,
  isVerified,
  uniqueUserName,
  joiningDate,
  following,
  follower,
  coverImg,
  profileImg,
}) => {
  return (
    <div className="userDetails__main">
      <div>
        <img src={coverImg} className="user_cover_img w-100" alt="user cover" />
        <div className="profile__img">
          <img
            src={profileImg}
            className="user_profile_img"
            alt="user profile"
          />
          <Button className="follow_btn">Follow</Button>
        </div>
        <div className="user__details">
          <h1>
            <span>{userName}</span>
            {isVerified && (
              <span>
                <VerifyIcon />
              </span>
            )}
          </h1>
          <p className="username">{uniqueUserName}</p>
          <p className="joining_date">
            <span>
              <CalendarIcon />
            </span>
            <span>Joined {joiningDate}</span>
          </p>
          <div className="my__connections">
            <p>
              <span>{following}</span>
              <span>Following</span>
            </p>
            <p>
              <span>{follower}</span>
              <span>Followers</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
