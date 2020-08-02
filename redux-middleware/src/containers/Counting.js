import React, { useCallback, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { increase, decrease } from "../modules/counter";

const Counting = () => {
  const { countNum } = useSelector((state) => ({
    number: state.number,
  }));

  const dispatch = useDispatch();
  const onIncrease = useCallback(() => dispatch(increase()), [dispatch]);
  const onDecrease = useCallback(() => dispatch(decrease()), [dispatch]);

  return (
    <WholeTemplate>
      <CountDiv>
        <Title>Counting Number!</Title>
        <Result>{countNum}</Result>
        <button onClick={onIncrease}>+</button>
        <button onClick={onDecrease}>-</button>
      </CountDiv>
    </WholeTemplate>
  );
};

const WholeTemplate = styled.div`
  margin: 0;
  padding: 0;
`;

const CountDiv = styled.div`
  margin-left: 25%;
  margin-right: 25%;
  margin-top: 6rem;
  text-align: center;
`;

const Title = styled.h1`
  color: #ff3232;
`;

const Result = styled.h1`
  color: black;
  font-size: 4rem;
`;

export default Counting;
