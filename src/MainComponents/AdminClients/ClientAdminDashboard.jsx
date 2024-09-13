import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRangePicker } from "react-date-range";
import { ReactComponent as Calendar } from "../../assets/calender.svg";
import FeaturesGrid from "../../Reusable/FeaturesGrid";
import OverviewTotalCards from "../../Reusable/OverviewTotalCards";
import DatePicker from "react-datepicker";
import DoubleBarChart from "../../bits/DoubleBarChart";
import Tables from "../../bits/Tables";
import Radial from "../../bits/Radial";
import Donuts from "../../bits/Donuts";
import { useDispatch, useSelector } from "react-redux";
import { CorporateDashboard } from "../../Store/Apis/CorporateDashboard";
import { Loader } from "../../Loader";
import { CorporateCompliance } from "../../Store/Apis/CorporateCompliance";
import { CorporatePunctual } from "../../Store/Apis/CorporatePunctual";
import { YearlyComp } from "../../Store/Apis/YearlyComp";
import { Skeleton } from "@mui/material";

const ClientAdminDashboard = ({ title, overviewadmin }) => {
  const [id, setId] = useState(null);

  return (
    <Flex
    // comp={corporatedashboard?.data?.Punctuality?.punctualPercentage}
    // noncomp={corporatedashboard?.data?.Punctuality?.notPunctualPercentage}
    >
      <Navbar title={title} setId={setId} />
    </Flex>
  );
};

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 30px;
  .maincontainer {
    display: flex;
    flex-direction: column;
    padding-top: 30px;
    padding-inline: 25px;
    gap: 20px;
    .top {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      position: relative;
      .start {
        display: flex;
        flex-direction: column;
        gap: 5px;
        .numbers {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 10px;
          .name {
            color: #212529;
            font-size: 26px;
            font-weight: 600;
          }
          .count {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            border-radius: 10px;
            background-color: #f4f3ff;
            width: 90px;
            height: 20px;
            color: #1a87d7;
            font-size: 12px;
            font-weight: 500;
          }
        }
        .about {
          font-size: 14px;
          font-weight: 400;
          line-height: 24px;
          letter-spacing: 0em;
          text-align: left;
          color: #8d9196;
        }
      }
      .date {
        display: flex;
        flex-direction: row;
        border: 1px solid #d0d5dd;
        box-shadow: 0px 1px 2px 0px #1018280d;
        gap: 5px;
        color: #344054;
        align-items: center;
        font-size: 13px;
        font-weight: 400;
        width: 27%;
        height: 48px;
        border-radius: 8px;
        padding-inline: 5px;
      }
    }
    .table {
      padding-top: 30px;
      border: 1px solid #e2e8f0;
      border-radius: 8px;
      padding-bottom: 40px;
      display: flex;
      flex-direction: column;
      gap: 30px;
      .projects {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        padding-inline: 10px;
        font-size: 15px;
        font-weight: 500;
      }
      .punctuality {
        display: flex;
        flex-direction: row;
        border-bottom: 1.02px solid #dbdade;
        padding-inline: 10px;
        padding-top: 0px;
        padding-bottom: 10px;
        justify-content: space-between;
        align-items: center;
        .start {
          display: flex;
          flex-direction: column;
          gap: 5px;
          .numbers {
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 10px;
            .name {
              color: #212529;
              font-size: 16px;
              font-weight: 600;
            }
            .count {
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: center;
              border-radius: 10px;
              background-color: #f4f3ff;
              width: 90px;
              height: 20px;
              color: #1a87d7;
              font-size: 11px;
              font-weight: 500;
            }
          }
          .about {
            font-size: 14px;
            font-weight: 400;
            line-height: 24px;
            letter-spacing: 0em;
            text-align: left;
            color: #8d9196;
          }
        }
        .main {
          position: relative;
          .input {
            width: 113px;
            height: 40px;
            padding: 12px 10px 12px 24px;
            border-radius: 5px;
            border: 1px;
            color: #344054;
            font-size: 13px;
            font-weight: 400;
            outline: none;
            cursor: pointer;
            border: 1px solid #e2e8f0;
          }
          .calendar {
            position: absolute;
            right: 90px;
            top: 13px;
          }
        }
      }
      .detailscompliance {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding-left: 60px;
        width: 100%;
        /* gap: 30px; */
        .firstcompliance {
          display: flex;
          flex-direction: column;
          gap: 10px;
          width: 50%;
          .comp {
            color: #1e1b39;
            font-weight: 400;
            font-size: 14px;
          }
          .bardiv {
            display: flex;
            flex-direction: row;
            gap: 20px;
            align-items: center;
            .backgrounddiv {
              background: #eaecf0;
              border-radius: 6px;
              width: 50%;
              height: 10px;
              .bar {
                width: ${({ comp, noncomp }) => {
                  const compValue = parseFloat(comp);
                  const noncompValue = parseFloat(noncomp);
                  return compValue + noncompValue === 100
                    ? `${(compValue / (compValue + noncompValue)) * 100}%`
                    : "0%";
                }};
                height: 10px;
                background: #1a87d7;
                border-radius: 6px;
              }

              .nonbar {
                width: ${({ comp, noncomp }) => {
                  const compValue = parseFloat(comp);
                  const noncompValue = parseFloat(noncomp);
                  return compValue + noncompValue === 100
                    ? `${(noncompValue / (compValue + noncompValue)) * 100}%`
                    : "0%";
                }};
                height: 10px;
                background: #28385c;
                border-radius: 6px;
              }
            }
            .percent {
              color: #141414;
              font-size: 14px;
            }
          }
        }
      }
      .last {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        .radial {
          display: flex;
          flex-direction: row;
          justify-content: center;
        }
        .circlereal {
          width: 170px;
          height: 175px;
          position: absolute;
          border-radius: 50%;
          background: #f2f4f7;
          z-index: 1000;
          margin-top: 34px;
          margin-left: 2px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: #101828;
          .name {
            font-size: 25px;
            font-weight: 600;
          }
          .label {
            font-size: 10px;
          }
        }
        .circle {
          width: 125px;
          height: 125px;
          position: absolute;
          border-radius: 50%;
          background: #f2f4f7;
          z-index: 1000;
          margin-top: 64px;
          margin-left: 2px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: #101828;
          .name {
            font-size: 25px;
            font-weight: 600;
          }
          .label {
            font-size: 10px;
          }
        }
        .target {
          display: flex;
          flex-direction: row;
          justify-content: center;
          gap: 40px;
          padding-top: 70px;
          .attendance {
            display: flex;
            flex-direction: column;
            gap: 10px;
            height: 50px;
            .wrap {
              display: flex;
              flex-direction: row;
              gap: 20px;
              .first {
                background: #65ace0;
                width: 10px;
                height: 10px;
                border-radius: 50%;
              }
              .targeted {
                font-size: 14px;
                color: #1e1b39;
                font-weight: 400;
              }
            }
            .percent {
              padding-left: 29px;
            }
          }
          .attendant {
            display: flex;
            flex-direction: column;
            gap: 10px;
            .wrap {
              display: flex;
              flex-direction: row;
              gap: 20px;
              .second {
                width: 10px;
                height: 10px;
                border-radius: 50%;
                background: #28385c;
              }
              .targeted {
                font-size: 14px;
                color: #1e1b39;
                font-weight: 400;
              }
            }
            .percent {
              padding-left: 29px;
            }
          }
        }
        .count {
          display: flex;
          flex-direction: row;
          padding-inline: 100px;
          gap: 130px;
        }
      }
      .doublebar {
        display: flex;
        flex-direction: column;
        gap: 10px;
        padding-inline: 10px;
        .high {
          display: flex;
          flex-direction: row;
          gap: 15px;
          color: #000000;
          font-size: 12px;
          font-weight: 500;
          align-items: center;
          .row {
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 10px;
            .square {
              width: 10px;
              height: 10px;
              background: #1a87d7;
            }
            .squaretwo {
              width: 10px;
              height: 10px;
              background: #28385c;
            }
          }
        }
      }
      .statuses {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        gap: 30px;
        border-bottom: 1.02px solid #dbdade;
        .status {
          display: flex;
          flex-direction: row;
          gap: 7px;
          font-size: 14px;
          font-weight: 400;
          line-height: 23px;
          letter-spacing: 0px;
          text-align: left;
          color: #8d9196;
          cursor: pointer;
          width: 240px;
          justify-content: center;
          align-items: center;
          padding-left: 30px;
        }
        .active {
          display: flex;
          flex-direction: row;
          gap: 7px;
          font-size: 14px;
          font-weight: 600;
          line-height: 23px;
          letter-spacing: 0px;
          text-align: left;
          color: #1a87d7;
          border-bottom: 1.02px solid #1a87d7;
          cursor: pointer;
          width: 250px;
          justify-content: center;
          align-items: center;
          padding-left: 30px;
        }
        .active-number {
          display: flex;
          flex-direction: row;
          justify-content: center;
          width: 40px;
          align-items: center;
          height: 20px;
          color: #65ace0;
          background-color: #edf4f9;
          border-radius: 10px;
          font-size: 10px;
        }
        .status-number {
          display: flex;
          flex-direction: row;
          justify-content: center;
          width: 40px;
          align-items: center;
          height: 20px;
          background-color: #f0f0f0;
          border-radius: 10px;
          color: #868e96;
          font-size: 10px;
        }
      }
      .date-search {
        display: flex;
        flex-direction: row;
        gap: 20px;
        height: 35px;
        padding-inline: 20px;
        .main {
          position: relative;
          .input {
            width: 143px;
            height: 40px;
            padding: 12px 18px 12px 15px;
            border-radius: 5px;
            border: 1px;
            color: #8d9196;
            outline: none;
            cursor: pointer;
            border: 1px solid #e2e8f0;
          }
          .calendar {
            position: absolute;
            right: 10px;
            top: 10px;
          }
        }
      }
    }
  }
`;

export default ClientAdminDashboard;
