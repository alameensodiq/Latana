import React from "react";
import styled from "styled-components";
import { useState } from "react";
import LatanaButton from "./LatanaButton";

const Pagination = ({
  postsPerPage,
  totalPosts,
  nextPagination,
  prevPagination,
  paginate,
  active,
  set
}) => {
  const [news, setNews] = useState(0);
  const [old, setOld] = useState(2);

  const PageNumbes = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    PageNumbes.push(i);
  }

  const recent = [1, 2, 3, 4, 5, 6, 7];

  const backward = () => {
    if (news === 0) {
      setNews(0);
      setOld(2);
    } else {
      setNews(news - 2);
      setOld(old - 2);
    }
  };

  const forward = () => {
    if (old === PageNumbes[PageNumbes?.length - 1]) {
      setOld(old);
      setNews(old - 2);
    } else {
      setOld(old + 2);
      setNews(news + 2);
    }
  };

  // const PageNumbes = [
  //     {
  //       id: 0,
  //       number: 1
  //     },
  //     {
  //       id: 0,
  //       number: 2
  //     },
  //      {
  //       id: 0,
  //       number: 3
  //     },
  //     {
  //       id: 0,
  //       number: 4
  //     },
  //     {
  //       id: 0,
  //       number: 5
  //     }

  // ]
  return (
    <Flex>
      <ul className="arrange">
        <LatanaButton prev title={"Previous"} />
        <div className="recent">
          {recent.map((page) => {
            return (
              <span
                key={page}
                className={`paging ${set === page ? "sums" : ""} `}
                // onClick={() => paginate(page)}
              >
                {page}
              </span>

              //   <span key={page} className= 'sums' onClick={() => paginate(page)}>
              //   {page}
              //  </span>
            );
          })}
        </div>
        <LatanaButton next title={"Next"} />
      </ul>
    </Flex>
  );
};

const Flex = styled.div`
  .arrange {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    .prev {
      margin-top: 5px;
    }

    .recent {
      display: flex;
      flex-direction: row;
      align-items: center;
      .paging {
        margin-inline: 7px;
        color: "#5C5C5C";
        background: #f1f6fe;
        align-items: center;
        width: 30px;
        height: 30px;
        padding: 7px;
        display: flex;
        flex-direction: row;
        align-items: center;
        border-radius: 11px;

        cursor: pointer;
      }

      .sums {
        // margin-inline: 20px;
        color: #4d47c3;
        // color: black ;
        align-items: center;
        cursor: pointer;
        background: rgba(77, 71, 195, 0.1);
        padding: 7px;
        border-radius: 11px;
      }
    }

    .next {
      margin-top: 4px;
      margin-left: 3px;
    }
  }
`;

export default Pagination;
