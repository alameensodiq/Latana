import React from "react";
import styled from "styled-components";
import { ReactComponent as Plus } from "../assets/paymentplus.svg";
import { ReactComponent as Exports } from "../assets/paymentexport.svg";
import { ReactComponent as Carat } from "../assets/downcarat.svg";
import { ReactComponent as Time } from "../assets/time.svg";
import { ReactComponent as Flag } from "../assets/flag.svg";

const LatanaButton = ({
  title,
  payment,
  exports,
  date,
  status,
  next,
  prev
}) => {
  return (
    <Flex
      payment={payment}
      exports={exports}
      date={date}
      status={status}
      next={next}
      prev={prev}
    >
      <button className="button">
        {payment ? (
          <Plus />
        ) : exports ? (
          <Exports />
        ) : date ? (
          <Time />
        ) : status ? (
          <Flag />
        ) : prev ? (
          <svg
            className="prev"
            width="8"
            height="13"
            viewBox="0 0 8 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            // onClick={() => backward()}
            style={{ cursor: "pointer" }}
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M7.00833 11.8274C6.64379 12.192 6.05274 12.192 5.6882 11.8274L1.02082 7.16005C0.656278 6.7955 0.656278 6.20446 1.02082 5.83991L5.6882 1.17254C6.05274 0.807996 6.64379 0.807996 7.00833 1.17254C7.37288 1.53708 7.37288 2.12813 7.00833 2.49267L3.00102 6.49998L7.00833 10.5073C7.37287 10.8718 7.37287 11.4629 7.00833 11.8274Z"
              fill="#C4C4CA"
            />
          </svg>
        ) : (
          ""
        )}
        {title}
        {date && <Carat />}
        {status && <Carat />}
        {next && (
          <svg
            className="next"
            width="7"
            height="13"
            viewBox="0 0 7 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            // onClick={() => forward()}
            style={{ cursor: "pointer" }}
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0.629366 1.17246C0.99391 0.807912 1.58495 0.807912 1.9495 1.17246L6.61687 5.83983C6.98142 6.20438 6.98142 6.79542 6.61687 7.15996L1.9495 11.8273C1.58495 12.1919 0.99391 12.1919 0.629366 11.8273C0.264821 11.4628 0.264821 10.8717 0.629366 10.5072L4.63667 6.4999L0.629366 2.49259C0.264821 2.12804 0.264821 1.537 0.629366 1.17246Z"
              fill="#1C1C1C"
            />
            Next
          </svg>
        )}
      </button>
    </Flex>
  );
};

const Flex = styled.div`
  display: flex;
  flex-direction: row;
  .button {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    width: ${(props) =>
      props.payment
        ? `133px`
        : props?.exports
        ? "98px"
        : props?.next
        ? "98px"
        : props?.prev
        ? "98px"
        : `143px`};
    height: 38px;
    outline: "none";
    background: #ffffff;
    color: "#3D3D3D";
    padding: 8px;
    border-radius: 8px;
    border: 1px solid #e7e6ea;
    box-shadow: 0px 1px 4px 0px #0000000f;
  }
`;

export default LatanaButton;
