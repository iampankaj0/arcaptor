import React from "react";
import styled from "styled-components";
import { BiArrowBack } from "react-icons/bi";
import { VerifyIcon } from "../../assets/icons";

const MainSection = styled.section`
  width: 100%;
  background-color: rgba(255, 255, 255, 0.1);
  padding: 10px;

  @media screen and (max-width: 575px) {
    padding: 7px 10px;
  }

  > div {
    display: flex;
    align-items: center;

    > .back_icon {
      width: 35px;
      height: 35px;
      border-radius: 50%;
      transition: 0.2s;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;

      @media screen and (max-width: 575px) {
        width: 30px;
        height: 30px;
      }

      &:hover {
        background-color: rgba(15, 20, 25, 0.1);
      }
      > svg {
        font-size: 25px;
        @media screen and (max-width: 575px) {
          font-size: 20px;
        }
      }
    }

    > .user__name {
      > div {
        margin: 0 0 0 15px;
        &:first-child {
          display: flex;
          align-items: center;
          color: rgb(15, 20, 25);
          font-size: 20px;
          font-weight: 700;

          @media screen and (max-width: 575px) {
            font-size: 17px;
          }

          > span:last-child {
            width: 20px;
            height: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-left: 5px;
          }
        }
        &:last-child {
          font-size: 13px;
          color: rgb(83, 100, 113);
        }
      }
    }
  }
`;

const ProfileHeader = ({ username, isVerified, numberOfTweets }) => {
  return (
    <MainSection>
      <div>
        <div className="back_icon">
          <BiArrowBack />
        </div>
        <div className="user__name">
          <div>
            <span>{username}</span>
            {isVerified && (
              <span>
                <VerifyIcon />
              </span>
            )}
          </div>
          <div className="tweet__counts">{numberOfTweets}</div>
        </div>
      </div>
    </MainSection>
  );
};

export default ProfileHeader;
