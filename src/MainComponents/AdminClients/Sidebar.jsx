import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

// import {ReactComponent as Livemonitor} from '../../assets/livemonitor.svg';
// import {ReactComponent as Screenshots} from '../../assets/screenshotsmenu.svg';
// import {ReactComponent as Attendance} from '../../assets/attendance.svg';
// import {ReactComponent as Supports} from '../../assets/supports.svg';
// import {ReactComponent as Subscription} from '../../assets/subscription.svg';
// import {ReactComponent as Reports} from '../../assets/reports.svg';
import { ReactComponent as Logo } from "../../../src/assets/biglogo.svg";
import { ReactComponent as Logout } from "../../../src/assets/loggy.svg";
import { ReactComponent as Rep } from "../../../src/assets/review.svg";
import { ReactComponent as Overview } from "../../../src/assets/over.svg";
import { ReactComponent as Project } from "../../../src/assets/property.svg";
import { ReactComponent as User } from "../../../src/assets/payment.svg";
import { ReactComponent as Sub } from "../../../src/assets/customers.svg";
import { ReactComponent as Report } from "../../../src/assets/investments.svg";
import { ReactComponent as Account } from "../../../src/assets/accounting.svg";
import { ReactComponent as Upcarat } from "../../../src/assets/upcarat.svg";
import opy from "../../assets/Opy.png";
import overs from "../../assets/overs.png";
import proper from "../../assets/proper.png";
import flag from "../../assets/revi.png";
import pay from "../../assets/pay.png";
import users from "../../assets/users.png";
import invest from "../../assets/invest.png";
import settings from "../../assets/latanasettings.png";

import {
  businessprojects,
  businessusers,
  clients,
  businesssub,
  businessreport,
  businessaccounting
} from "../../Routes";

import { LogOutAuthentication } from "../../bits/LogOutAuthentication";
import { businessreps } from "../../Routes";
import { CorporateBusinessRep } from "../../Store/Apis/CorporateBusinessRep";
import { useDispatch, useSelector } from "react-redux";

function Sidebar({ name, role, open, setOpen }) {
  const router = useLocation();
  const dispatch = useDispatch();
  const [searcher, setSearcher] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  // useEffect(() => {
  //   dispatch(CorporateBusinessRep({ searcher, currentPage }));
  // }, []);

  // const { businessrep, authenticatingbusinessrep } = useSelector(
  //   (state) => state.businessrep
  // );
  // console.log(businessrep);

  // background: ${({open})  => ( open ? '#333481' : 'transparent')};
  return (
    <Sidecontent>
      <div className="header">
        <div className="first">
          <Logo />
        </div>
      </div>

      <div className={`body ${open ? "sum" : "body"}`}>
        {/* <div className="menu-div">
          <span className="menu">Menu</span>
        </div> */}
        <Link
          to={clients}
          className={`item ${router.pathname === `${clients}` ? "active" : ""}`}
        >
          <div className="paint"></div>
          {/* <Overview className="nav-svg1" /> */}
          <img src={overs} alt="overs" />
          <p className="man">Overview</p>
        </Link>
        <Link to={"#"} className={`item`}>
          <div className="paint"></div>
          {/* <Project className="nav-svg1" /> */}
          <img src={proper} alt="proper" />
          <p className="man">Property</p>
          <Upcarat style={{ marginLeft: "20%" }} />
        </Link>
        <span className="name">Add Property</span>
        <span className="name">Proprties</span>
        <Link to={"#"} className={`item`}>
          <div className="paint"></div>
          {/* <Sub className="nav-svg1" /> */}
          <img src={users} alt="users" />
          <p className="man">Customers</p>
        </Link>
        <Link
          to={businessusers}
          className={`item ${
            router.pathname === `${clients}/${businessusers}` ||
            router.pathname.startsWith(`${clients}/${businessusers}`)
              ? "active"
              : ""
          }`}
        >
          <div className="paint"></div>
          {/* <User className="nav-svg1" /> */}
          <img src={pay} alt="pay" />
          <p className="man">Payments</p>
        </Link>
        <Link
          to={"#"}
          className={`item ${
            router.pathname === `${clients}/${businessreport}` ||
            router.pathname.startsWith(`${clients}/${businessreport}`)
              ? "active"
              : ""
          }`}
        >
          <div className="paint"></div>
          {/* <Report className="nav-svg1" /> */}
          <img src={invest} alt="invest" />
          <p className="man">Investments</p>
        </Link>
        <Link to={"#"} className={`itemy`}>
          <div className="paint"></div>
          <div className="space">
            <div className="displace">
              <img src={flag} alt="flag" />
              {/* <Rep className="nav-svg1" /> */}
              <p className="man">Review</p>
            </div>
            <span
              style={{
                width: "20%",
                height: "40%",
                background: "#075AAA",
                color: "#FFFFFF",
                fontSize: "10px",
                display: "flex",
                flexDirection: "row",
                borderRadius: "10px",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              10
            </span>
          </div>
        </Link>
        <div className="settingsdiv">
          {/* <span className="settings">SETTINGS</span> */}
          <Link to={"#"} className={`item`}>
            <div className="paint"></div>
            <img src={settings} alt="settings" />
            {/* <Account className="nav-svg1" /> */}
            <p className="man">Settings</p>
          </Link>
        </div>
        {/* <Link
               to={screenshot}
               className={`item ${router.pathname === `${client}/${screenshot}` ? "active" : ""}`}
             >
            <div className="paint"></div>
            <Screenshots className="nav-svg1" />
            <p className="man">Screenshot</p>
          </Link>
          <Link
                to={timeattendance}
                className={`item ${router.pathname === `${client}/${timeattendance}` ? "active" : ""}`}
              >
            <div className="paint"></div>
            <Attendance className="nav-svg1" />
            <p className="man">Time Attendance</p>
          </Link> */}
      </div>
      <div
        // onClick={() => LogOutAuthentication()}
        className={`log ${open ? "sum" : "log"}`}
      >
        <img src={opy} alt="opy" />
        <div className="real">
          <span className="logbut">Owolu Opeyemi</span>
          <span className="admin">admin@peaktower.com</span>
        </div>
        <div className="buttonlogout">
          <Logout />
        </div>
      </div>
    </Sidecontent>
  );
}

const Sidecontent = styled.div`
  // padding: 30px;
  height: 100vh;

  a {
    text-decoration: none;
    color: black;
  }

  .log {
    display: flex;
    flex-direction: row;
    height: 60px;
    padding: 10px 0px 10px 10px;
    cursor: pointer;
    align-items: "center";
    gap: 10px;

    .real {
      font-style: normal;
      display: flex;
      flex-direction: column;
      justify-items: "center";
      align-items: "center";
      padding: 0px 10px 20px 0px;

      .logbut {
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 19px;
        color: #2e2e2e;
      }

      .admin {
        color: #5a6376;
        font-size: 11px;
      }

      .client {
        font-style: normal;
        font-weight: 500;
        font-size: 11px;
        color: #999999;
        margin-top: 8%;
      }
    }

    .buttonlogout {
      // margin-left: 1%;
      margin-top: 1%;
    }
  }

  .header {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    margin-bottom: 30px;
    gap: 15px;
    margin-top: 4%;
    padding-left: 10%;
    /* border-bottom: 0.5px solid; */
    /* border-bottom-color: rgb(135, 145, 163, 0.08) ; */
    padding-bottom: 5%;

    .first {
      // margin-top; 30px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      height: 5.1vh;
      padding-left: 3%;

      .very {
        font-style: normal;
        font-weight: 700;
        font-size: 23px;
        line-height: 43px;
        color: #212121;
      }
    }

    .logo {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background: rgb(135, 145, 163, 0.08);
    }
    .title {
      line-height: 1.5;
      font-size: 13px;
      margin-top: 10% h5 {
        color: #969494;
      }
      h6 {
        font-size: 12px;
        font-weight: 700;
        margin-top: 5px;
        color: #1a87d7;
      }
    }
    img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      object-fit: cover;
    }
    .downimg {
      width: 15px;
      height: 15px;
      margin-top: 5px;
      object-fit: contain;
    }
  }

  .body {
    // margin-block: 20px;
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    padding-inline: 12%;
    gap: 10px;
    padding-bottom: 50px;
    border-bottom: 0.5px solid;
    border-bottom-color: #e2e8f0;
    .menu-div {
      display: flex;
      flex-direction: row;
      padding-inline: 17px;
      padding-block: 25px;
      .menu {
        display: flex;
        flex-direction: row;
        color: #5a6376;
        font-size: 15px;
        font-weight: 500;
      }
    }

    .item {
      display: flex;
      justify-content: start;
      align-items: center;
      width: 210px;
      height: 40px;
      gap: 4%;
      text-transform: capitalize;
      // padding-left: 17px;
      border-radius: 5px;
      padding: 0px 0px 0px 0px;
      //   background :  #4D47C3;

      p {
        // margin-bottom: 0rem;

        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 17px;
        color: #848d87;
      }

      img {
        width: 20px;
        height: 20px;
        object-fit: contain;
        margin-right: 10px;
      }

      .nav-svg {
        path {
          fill: #848d87;
          stroke: #ffffff;
          stroke-width: 0.1px;
        }
      }

      .nav-svg1 {
        path {
          fill: #848d87;
          stroke: #ffffff;
          stroke-width: 0.1px;
        }
      }
      .man {
        color: #848d87 !important;
        font-size: 12px;
        font-weight: 500;
        line-height: 17px;
        letter-spacing: 0em;
      }
    }
    .itemy {
      display: flex;
      justify-content: start;
      align-items: center;
      width: 210px;
      height: 40px;
      gap: 4%;
      text-transform: capitalize;
      // padding-left: 17px;
      border-radius: 5px;
      padding: 0px 0px 0px 0px;
      //   background :  #4D47C3;
      .nav-svg {
        path {
          fill: #848d87;
          stroke: #ffffff;
          stroke-width: 0.1px;
        }
      }

      .nav-svg1 {
        path {
          fill: #848d87;
          stroke: #ffffff;
          stroke-width: 0.1px;
        }
      }
      .space {
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 210px;
        height: 40px;
        justify-content: space-between;
        .displace {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 4%;

          p {
            // margin-bottom: 0rem;

            font-style: normal;
            font-weight: 500;
            font-size: 14px;
            line-height: 17px;
            color: #848d87;
          }

          img {
            width: 20px;
            height: 20px;
            object-fit: contain;
            margin-right: 10px;
          }

          .nav-svg {
            path {
              fill: #848d87;
              stroke: #ffffff;
              stroke-width: 0.1px;
            }
          }

          .nav-svg1 {
            path {
              fill: #848d87;
              stroke: #ffffff;
              stroke-width: 0.1px;
            }
          }
          .man {
            color: #848d87 !important;
            font-size: 12px;
            font-weight: 500;
            line-height: 17px;
            letter-spacing: 0em;
          }
        }
      }
    }
    .name {
      display: flex;
      flex-direction: row;
      padding-left: 19%;
      color: #7a7a7a;
      font-size: 14px;
      margin-top: 7px;
    }
    .active {
      background: rgba(101, 172, 224, 0.06);
      border-radius: 6px;
      .paint {
        background: #075aaa !important;
        width: 4px;
        height: 40px;
        border-top-left-radius: 6px;
        border-bottom-left-radius: 6px;
      }

      .nav-svg {
        path {
          fill: #075aaa !important;
          stroke: #075aaa !important;
          stroke-width: 0.1px;
        }
      }

      .nav-svg1 {
        path {
          fill: #1a87d7 !important;
          stroke: #1a87d7 !important;
        }
      }

      .man {
        color: #1a87d7 !important;
        font-size: 12px;
        font-weight: 500;
        line-height: 17px;
        letter-spacing: 0em;
      }
    }

    .item:hover,
    .item:focus {
      background: #f3f6ff;
      border-radius: 6px;
      .paint {
        background: #1a87d7 !important;
        width: 4px;
        height: 40px;
      }
      .nav-svg {
        path {
          fill: #1a87d7 !important;
          stroke: #1a87d7 !important;
          stroke-width: 0.1px;
        }
      }
      .nav-svg1 {
        path {
          fill: #1a87d7 !important;
          stroke: #1a87d7 !important;
        }
      }
      .man {
        color: #1a87d7 !important;
        font-size: 12px;
        font-weight: 500;
        line-height: 17px;
        letter-spacing: 0em;
      }
    }
    .settingsdiv {
      display: flex;
      flex-direction: column;
      padding-top: 15%;
      padding-bottom: 4%;
      gap: 10px;
      .settings {
        color: #5a6376;
        font-size: 14px;
        font-weight: 500;
        padding-left: 15px;
      }
      .menu-div {
        display: flex;
        flex-direction: row;
        padding-inline: 17px;
        padding-block: 25px;
        .menu {
          display: flex;
          flex-direction: row;
          color: #5a6376;
          font-size: 15px;
          font-weight: 500;
        }
      }

      .item {
        display: flex;
        justify-content: start;
        align-items: center;
        width: 210px;
        height: 40px;
        gap: 4%;
        text-transform: capitalize;
        // padding-left: 17px;
        border-radius: 5px;
        padding: 0px 0px 0px 0px;
        //   background :  #4D47C3;

        p {
          // margin-bottom: 0rem;

          font-style: normal;
          font-weight: 500;
          font-size: 14px;
          line-height: 17px;
          color: #848d87;
        }

        img {
          width: 20px;
          height: 20px;
          object-fit: contain;
          margin-right: 10px;
        }

        .nav-svg {
          path {
            fill: #848d87;
            stroke: #ffffff;
            stroke-width: 0.1px;
          }
        }

        .nav-svg1 {
          path {
            fill: #848d87;
            stroke: #ffffff;
            stroke-width: 0.1px;
          }
        }
        .man {
          color: #848d87 !important;
          font-size: 12px;
          font-weight: 500;
          line-height: 17px;
          letter-spacing: 0em;
        }
      }
      .active {
        background: rgba(101, 172, 224, 0.06);
        border-radius: 6px;
        .paint {
          background: #075aaa !important;
          width: 4px;
          height: 40px;
          border-top-left-radius: 6px;
          border-bottom-left-radius: 6px;
        }

        .nav-svg {
          path {
            fill: #075aaa !important;
            stroke: #075aaa !important;
            stroke-width: 0.1px;
          }
        }

        .nav-svg1 {
          path {
            fill: #075aaa !important;
            stroke: #075aaa !important;
          }
        }

        .man {
          color: #1a87d7 !important;
          font-size: 12px;
          font-weight: 500;
          line-height: 17px;
          letter-spacing: 0em;
        }
      }

      .item:hover,
      .item:focus {
        background: #f3f6ff;
        border-radius: 6px;
        .paint {
          background: #1a87d7 !important;
          width: 4px;
          height: 40px;
        }
        .nav-svg {
          path {
            fill: #1a87d7 !important;
            stroke: #1a87d7 !important;
            stroke-width: 0.1px;
          }
        }
        .nav-svg1 {
          path {
            fill: #1a87d7 !important;
            stroke: #1a87d7 !important;
          }
        }
        .man {
          color: #1a87d7 !important;
          font-size: 12px;
          font-weight: 500;
          line-height: 17px;
          letter-spacing: 0em;
        }
      }
    }
  }

  .logout {
    color: red;
  }

  .advertise {
    background: linear-gradient(107.91deg, #eaabf0 7.37%, #4623e9 95.19%);
    border-radius: 20px;
    padding: 15px;
    text-align: center;
    margin-block: 5px;
    height: 130px;
    display: grid;
    place-items: center;

    p {
      color: #fff;
    }

    button {
      background: #fff;
      border: 1px solid #fff;
      border-radius: 30px;
      padding: 10px;
      color: #000;
      font-weight: bold;
      font-size: 14px;
      cursor: pointer;
    }
  }

  .footer {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-block: 20px 0;
    gap: 15px;
    .title {
      line-height: 1.5;
    }
    img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      object-fit: cover;
    }
    .downimg {
      width: 15px;
      height: 15px;
      margin-top: 5px;
      object-fit: contain;
    }
  }

  .sum {
    // margin-block: 20px;
    display: none;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    gap: 19px;
    background: transparent;
    padding-bottom: 80px;
    border-bottom: 0.5px solid;
    border-bottom-color: rgb(135, 145, 163, 0.08);

    .item {
      display: flex;
      justify-content: start;
      align-items: center;
      width: 210px;
      height: 45px;
      gap: 15px;
      text-transform: capitalize;
      // padding-left: 17px;
      border-radius: 5px;
      padding: 0px 0px 0px 0px;
      //   background :  #4D47C3;

      p {
        // margin-bottom: 0rem;

        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 17px;
        color: #848d87;
      }
      // .data-title {
      //   margin-top: 17px;
      //   padding: 0;
      //   p {
      //     margin-bottom: 0rem;
      //   }
      // }

      img {
        width: 20px;
        height: 20px;
        object-fit: contain;
        margin-right: 10px;
      }

      .nav-svg {
        path {
          fill: #848d87;
          stroke: #ffffff;
          stroke-width: 0.1px;
        }
      }

      .nav-svg1 {
        path {
          fill: #848d87;
          stroke: #ffffff;
          stroke-width: 0.1px;
        }
      }

      .man {
        color: #848d87 !important;

        font-size: 12px;
        font-weight: 500;
        line-height: 17px;
        letter-spacing: 0em;
      }
    }
    .active {
      background: rgb(22, 157, 7, 0.1);
      /* background: #169D07; */

      border-radius: 6px;
      // box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

      /* color: #169D07; */

      .paint {
        background: #169d07 !important;
        width: 4px;
        height: 45px;
      }

      .nav-svg {
        path {
          fill: #169d07 !important;
          stroke: #169d07 !important;
          stroke-width: 0.1px;
        }
      }

      .nav-svg1 {
        path {
          fill: #169d07 !important;
          stroke: #169d07 !important;
        }
      }

      // .nav-svg {
      //   fill:  #169D07 !important;
      //   stroke:  #169D07 !important;
      // }

      // .nav-svg1 {
      //   // fill:   #4D47C3 !important;
      //   stroke:  #4D47C3 !important;
      // }

      .man {
        color: #169d07 !important;

        font-size: 12px;
        font-weight: 500;
        line-height: 17px;
        letter-spacing: 0em;
      }
    }

    .item:hover,
    .item:focus {
      background: rgb(22, 157, 7, 0.1);
      border-radius: 6px;

      /* color: #169D07; */

      //   .paint{
      //     background: #169D07 !important;
      //     width: 4px;
      //     height: 45px;
      // }
      .paint {
        background: #169d07 !important;
        width: 4px;
        height: 45px;
      }

      .nav-svg {
        path {
          fill: #169d07 !important;
          stroke: #169d07 !important;
          stroke-width: 0.1px;
        }
      }

      .nav-svg1 {
        path {
          fill: #169d07 !important;
          stroke: #169d07 !important;
        }
      }

      // .nav-svg {
      //   fill: #169D07 !important;
      //   stroke:#169D07 !important;
      // }

      // .nav-svg1 {
      //   // fill: #169D07 !important;
      //   stroke: #169D07 !important;
      // }

      .man {
        color: #169d07 !important;

        font-size: 12px;
        font-weight: 500;
        line-height: 17px;
        letter-spacing: 0em;
      }
    }
  }

  .logout {
    color: red;
  }

  .advertise {
    background: linear-gradient(107.91deg, #eaabf0 7.37%, #4623e9 95.19%);
    border-radius: 20px;
    padding: 15px;
    text-align: center;
    margin-block: 5px;
    height: 130px;
    display: grid;
    place-items: center;

    p {
      color: #fff;
    }

    button {
      background: #fff;
      border: 1px solid #fff;
      border-radius: 30px;
      padding: 10px;
      color: #000;
      font-weight: bold;
      font-size: 14px;
      cursor: pointer;
    }
  }

  .footer {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-block: 20px 0;
    gap: 15px;
    .title {
      line-height: 1.5;
    }
    img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      object-fit: cover;
    }
    .downimg {
      width: 15px;
      height: 15px;
      margin-top: 5px;
      object-fit: contain;
    }
  }
`;

export default Sidebar;
