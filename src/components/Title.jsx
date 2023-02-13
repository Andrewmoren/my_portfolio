import React from "react";
import styled from "styled-components";

const Title = ({ value }) => {
  return (
    <Div>
      <h1>{value}</h1>
    </Div>
  );
};

const Div = styled.div``;

export default Title;
