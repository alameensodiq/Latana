import React, { useEffect } from "react";
import { useState } from "react";
import { Navigate, Outlet, useOutletContext } from "react-router-dom";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { IdleTimerProvider, useIdleTimerContext } from "react-idle-timer";
import { useDispatch } from "react-redux";
import AOS from "aos";
import "aos/dist/aos.css";
import Sidebar from "./Sidebar";
// import { LogoutUser } from '../helper/LogoutUser';

export function useShow() {
  return useOutletContext();
}

export function useShowNav() {
  return useOutletContext();
}

const ClientAdminDashboardIndex = () => {
  const [show, setShow] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    AOS.init();
  }, []);

  ClientAdminDashboardIndex.Wrapper = styled.div`
    display: flex;
    .left {
      width: 17%;
      height: 100vh;
      padding: 1rem 0rem 4rem 0rem;
      /* border-right: 1px solid #e2e8f0; */
      overflow: hidden;
    }
    .right {
      overflow-y: scroll;
      width: 83%;
      height: 100vh;
      // width: calc(100vw - 300px);
      // background-color: #fff;
    }
    @media screen and (max-width: 960px) {
      /* flex-direction: column-reverse; */
      .left {
        position: fixed;
        top: 0;
        width: 35vw;
        justify-content: center;
        // border: 1px solid #f2f2f2;
        z-index: 20;
        /* background: rgba(0, 0, 0, 0.75); */
        background: ${open ? "transparent" : "#FFFFFF"};
        /* background: #FFFFFF; */
        min-height: 100vh;
        height: -webkit-fill-available;
        height: -moz-available;
        transition: all 0.3s linear;
        display: block;
        /* left: ${({ show }) => (show ? "0" : "-100vw")}; */
        border: none;
        overflow-y: none;
        .l-nav {
          /* width: 35vw; */
          border-radius: 20px;
        }
      }
      .right {
        width: 100vw;
        min-height: 100vh;
      }
    }

    /* @media screen and (max-width: 500px) {
    .left {
      height: 100vh;
      padding: 0;
    }
  } */
  `;
  const Authenticated = () => {
    const idleTimerRef = useIdleTimerContext();
    const dispatch = useDispatch();

    const onIdle = () => {
      // dispatch(LogoutUser())
    };
    return (
      <IdleTimerProvider
        ref={idleTimerRef}
        timeout={1800 * 1000}
        onIdle={onIdle}
      >
        <ClientAdminDashboardIndex.Wrapper show={show}>
          {/* <div className="left" onClick={() => setShow(false)}></div> */}
          <div className="left">
            <div className="l-nav">
              {/* <LNavbar setOpen={setShow} /> */}
              <Sidebar open={open} setOpen={setOpen} />
            </div>
          </div>
          <div className="right">
            {/* {showNav && <Dashboardheader show={show} setShow={setShow} />} */}
            {/* <SearchBar /> */}
            <Outlet
              data-aos="fade-right"
              context={{ show, setShow, showNav, setShowNav }}
            />
          </div>
        </ClientAdminDashboardIndex.Wrapper>
      </IdleTimerProvider>
    );
  };

  return sessionStorage.getItem("token") &&
    sessionStorage.getItem("role") === "USER" ? (
    //  window.location.href = '/super'
    //  (supers)
    <Navigate to="/" replace={true} />
  ) : (
    <Authenticated />
  );
};

export default ClientAdminDashboardIndex;
