import React from "react";
import "../assets/styles/homepage.scss";
import { Col, Row } from "react-bootstrap";
import { ChildContainer, CustomContainer } from "../assets/styles/sharedStyles";
import Profile from "../components/home/Profile";
import SearchSection from "../components/home/SearchSection";
import Sidebar from "../components/shared/Sidebar";

const HomePage = () => {
  return (
    <div className="main__homepage">
      <CustomContainer>
        <div className="d-flex">
          <Sidebar />
          <ChildContainer>
            <Row>
              <Col md={8} className="profile__col">
                <Profile />
              </Col>
              <Col className="search__col">
                <SearchSection />
              </Col>
            </Row>
          </ChildContainer>
        </div>
      </CustomContainer>
    </div>
  );
};

export default HomePage;
