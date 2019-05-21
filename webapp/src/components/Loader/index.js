import React from "react";
import { LoaderWrapper } from "./styledLoader";
import { Spin } from "antd";

export default () => (
  <Spin tip="Loading...">
    <LoaderWrapper />
  </Spin>
);
