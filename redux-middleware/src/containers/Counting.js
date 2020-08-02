import React, { useCallback, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { increase, decrease } from "../modules/counter";

const Counting = () => {
  const { countNum } = useSelector((state) => ({
    countNum: state.counter.number,
  }));

  const dispatch = useDispatch();
  const onIncrease = useCallback((input) => dispatch(increase(input)), [
    dispatch,
  ]);
  const onDecrease = useCallback((input) => dispatch(decrease(input)), [dispatch]);

  const [input, setInput] = useState("");

  const IncreaseBtn = () => {
    onIncrease(Number(input));
    setInput("");
  };

  const DecreaseBtn = () => {
    onDecrease(Number(input));
    setInput("");
  };

  return (
    <WholeTemplate>
      <CountDiv>
        <Title>Counting Number!</Title>
        <Result>{countNum}</Result>
        <input
          value={input}
          placeholder="숫자를 입력하세요"
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={IncreaseBtn}>+</button>
        <button onClick={DecreaseBtn}>-</button>
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
  font-size: 4rem;
`;

export default Counting;
