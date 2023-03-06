import React from "react";
import "../../assets/styles/tweets.scss";
import {
  AnalyseIcon,
  CommentIcon,
  LikeIcon,
  ReTweetIcon,
  VerifyIcon,
} from "../../assets/icons";

const Tweets = ({
  profileImg,
  userName,
  isVerified,
  isMedia,
  uniqueUserName,
  tweetTime,
  articleText,
  comments,
  reTweets,
  likes,
  views,
  mediaLink,
  isReply,
  replyUserName,
}) => {
  //
  return (
    <div className="tweets__main_comp">
      <div className="tweet__aligner">
        <div className="profile_img_sec">
          <img src={profileImg} alt={`userName`} />
        </div>
        <div>
          <div className="user_tweet">
            <p className="name">
              <span>{userName}</span>
              <span>{isVerified && <VerifyIcon />}</span>
            </p>
            <span className="uniqueUserName">{uniqueUserName}</span>
            <span className="tweet_time">{tweetTime}</span>
          </div>
          <div className="tweet__content">
            {isReply && (
              <p className="repy_to_name">
                <span>Replying to</span>
                <span>{replyUserName}</span>
              </p>
            )}
            <p className="text_content">{articleText}</p>

            {isMedia && (
              <div className="tweet_media">
                <img src={mediaLink} className="" alt="tweet_media" />
              </div>
            )}

            <div className="action_on_tweet">
              <button className="action_btns action_btns_1">
                <span>
                  <CommentIcon />
                </span>
                <span> {comments}</span>
              </button>
              <button className="action_btns action_btns_2">
                <span>
                  <ReTweetIcon />
                </span>
                <span> {reTweets} </span>
              </button>
              <button className="action_btns action_btns_3">
                <span>
                  <LikeIcon />
                </span>
                <span> {likes} </span>
              </button>
              <button className="action_btns action_btns_4">
                <span>
                  <AnalyseIcon />
                </span>
                <span> {views} </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tweets;
