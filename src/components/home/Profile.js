import React, { useState } from "react";
import "../..//assets/styles/profile.scss";
import ProfileHeader from "./ProfileHeader";
import ProfileTabs from "./ProfileTabs";
import Tweets from "../shared/Tweets";
import UserDetails from "./UserDetails";
import coverImg from "../../assets/images/cover.jfif";
import profileImg from "../../assets/images/profile.jpg";
import { tweetArr } from "../../dummy/tweetArray";
import { tweetandreplyArr } from "../../dummy/tweetsandreply";
import AlertMessage from "../shared/AlertMessage";

const Profile = () => {
  const [tabId, setTabId] = useState(1);

  const userDetails = {
    userName: "Elon Musk",
    isVerified: true,
    uniqueUserName: "@elonmusk",
    joiningDate: "June 2009",
    following: "30",
    follower: "30.7M",
    numberOfTweets: "23.3k Tweets",
    coverImg: coverImg,
    profileImg: profileImg,
  };

  // SHOW TAB HANDLER
  const handleShowTab = (tabId) => {
    setTabId(tabId);
  };

  return (
    <div className="profile__main">
      <div>
        <ProfileHeader
          username={userDetails.userName}
          isVerified={userDetails.isVerified}
          numberOfTweets={userDetails.numberOfTweets}
        />

        <UserDetails
          userName={userDetails.userName}
          isVerified={userDetails.isVerified}
          uniqueUserName={userDetails.uniqueUserName}
          joiningDate={userDetails.joiningDate}
          following={userDetails.following}
          follower={userDetails.follower}
          coverImg={userDetails.coverImg}
          profileImg={userDetails.profileImg}
        />

        <ProfileTabs handleShowTab={handleShowTab} activeClass={tabId} />

        <div className="all__tweets__section">
          {tabId === 1 ? (
            tweetArr.map((item, id) => (
              <div className="tweet_tab_data" key={id}>
                <Tweets
                  profileImg={userDetails.profileImg}
                  userName={userDetails.userName}
                  isVerified={userDetails.isVerified}
                  uniqueUserName={userDetails.uniqueUserName}
                  isMedia={item.isMedia}
                  tweetTime={item.tweetTime}
                  articleText={item.articleText}
                  comments={item.comments}
                  reTweets={item.reTweets}
                  likes={item.likes}
                  views={item.views}
                  mediaLink={item.mediaLink}
                  isReply={false}
                />
              </div>
            ))
          ) : tabId === 2 ? (
            <div className="tweet_and_reply">
              {tweetandreplyArr?.map((item, id) => (
                <Tweets
                  profileImg={userDetails.profileImg}
                  userName={userDetails.userName}
                  isVerified={userDetails.isVerified}
                  uniqueUserName={userDetails.uniqueUserName}
                  isMedia={item.isMedia}
                  tweetTime={item.tweetTime}
                  articleText={item.articleText}
                  comments={item.comments}
                  reTweets={item.reTweets}
                  likes={item.likes}
                  views={item.views}
                  mediaLink={item.mediaLink}
                  isReply={item.isReply}
                  replyUserName={item.replyUserName}
                />
              ))}
            </div>
          ) : (
            <AlertMessage color="red" text="Please Login First" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
