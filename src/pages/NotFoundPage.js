import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import { Button } from "antd";
import { Helmet } from "react-helmet";

const NotFoundWrapper = styled.div`
  min-height: 200px;
  width: 100%;
  background-color: #e6f7ff;
  border: 1px solid #91d5ff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const NotFoundPage = props => {
  return (
    <NotFoundWrapper>
      <Helmet>
        <title>Page could not be found!</title>
      </Helmet>
      <h1>404 Not Found</h1>
      <Button onClick={() => props.history.push("/")} type="primary">
        See all articles
      </Button>
    </NotFoundWrapper>
  );
};

export default withRouter(NotFoundPage);
