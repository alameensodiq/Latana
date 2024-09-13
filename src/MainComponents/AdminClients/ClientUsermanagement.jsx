import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import { ModalButton } from "../../bits/ModalButton";
import { useDispatch, useSelector } from "react-redux";
import { ReactComponent as Eye } from "../../assets/eye.svg";
import { ReactComponent as Editeye } from "../../assets/editeye.svg";
import Tables from "../../bits/Tables";
import AppUserModal from "../../Modal/AppUserModal";
import InputSearch from "../../bits/InputSearch";
import { CorporateUser } from "../../Store/Apis/CorporateUser";
import Pagination from "../../Reusable/Pagination";
import { Allpermission } from "../../Store/Apis/AllPermission";
import LatanaButton from "../../Reusable/LatanaButton";
import LandingAppModal from "../../Modal/LandingAppModal";
import LandingAppUserModal from "../../Modal/LandingAppUserModal";

const ClientUsermanagement = ({ title }) => {
  const [step, setStep] = useState(0);
  const [activating1, SetActivating1] = useState(true);
  const [activating2, SetActivating2] = useState(false);
  const [activating3, SetActivating3] = useState(false);
  const [activating4, SetActivating4] = useState(false);
  const [activated, SetActivate] = useState(true);
  const [activatedfail, SetActivateFail] = useState(false);
  const [pend, SetPend] = useState(false);
  const [status, setStatus] = useState("ACTIVE");
  const [searcher, setSearcher] = useState("");
  const [locker, SetLocker] = useState(false);
  const [reload, setReload] = useState(false);
  const [onload, setOnload] = useState(false);
  const [startDate, setStartDate] = useState(new Date("2022-01-01"));
  const [endDate, setEndDate] = useState(
    new Date(Date.now() + 3600 * 1000 * 24)
  );
  const [currentPage, setCurrentPage] = useState(0);
  const [first, setFirst] = useState("activate");
  const [postsPerPage, setPostsPerPage] = useState(10);
  const [activater, setActivater] = useState(1);
  const [id, setId] = useState("");
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(CorporateUser({ searcher, currentPage }));
  //   dispatch(Allpermission());
  //   if (reload) {
  //     dispatch(CorporateUser({ searcher, currentPage }));
  //     dispatch(Allpermission());
  //     setReload(false);
  //   }
  // }, [reload, searcher, currentPage]);

  const { userteam, authenticatinguserteam } = useSelector(
    (state) => state.userteam
  );
  console.log(userteam?.data?.data);

  const { allpermission, authenticatingallpermission } = useSelector(
    (state) => state.allpermission
  );
  console.log(allpermission?.data);

  const next = userteam?.data?.meta?.next;
  const previous = userteam?.data?.meta?.prev;
  const totalPosts = userteam?.data?.meta?.totalCount;

  const paginate = (number) => {
    //  setSorted(tran)
    setCurrentPage(number - 1);
    setActivater(number);
  };

  //   const activate = businessrep?.data?.data?.filter((item) => item?.hasChangeDefaultPassword === true)
  //   const inactivate = businessrep?.data?.data?.filter((item) => item?.hasChangeDefaultPassword === false)

  const setActivate = () => {
    SetActivate(true);
    SetPend(false);
    SetLocker(false);
    SetActivateFail(false);
    setStatus("ACTIVE");
    setSearcher("");
    setStartDate(new Date("2022-01-01"));
    setEndDate(new Date(Date.now() + 3600 * 1000 * 24));
    setCurrentPage(0);
    setActivater(1);
    setTimeout(() => {
      setFirst("activate");
    }, [500]);
  };
  const setPending = () => {
    SetActivate(false);
    SetPend(true);
    SetActivateFail(false);
    SetLocker(false);
    setStatus("PENDING");
    setSearcher("");
    setStartDate(new Date("2022-01-01"));
    setEndDate(new Date(Date.now() + 3600 * 1000 * 24));
    setCurrentPage(0);
    setActivater(1);
    setTimeout(() => {
      setFirst("pending");
    }, [500]);
  };

  const setFailing = () => {
    SetActivate(false);
    SetPend(false);
    SetActivateFail(true);
    SetLocker(false);
    setStatus("PENDING");
    setSearcher("");
    setStartDate(new Date("2022-01-01"));
    setEndDate(new Date(Date.now() + 3600 * 1000 * 24));
    setCurrentPage(0);
    setActivater(1);
    setTimeout(() => {
      setFirst("pending");
    }, [500]);
  };

  return (
    <Flex>
      <Navbar title={title} />
      <LandingAppUserModal
        setStep={setStep}
        step={step}
        setReload={setReload}
      />
      <div className="maincontainer">
        <div className="maindiv">
          <div className="top">
            <span className="name">Transaction History</span>
            <div className="buttons">
              <LatanaButton payment title={"Add Payment"} />
              <LatanaButton exports title={"Export"} />
            </div>
          </div>
          <div className="statuses">
            <div
              onClick={() => setActivate()}
              className={`${activated ? "active" : "status"}`}
            >
              <span>All Payments</span>
            </div>
            <div
              onClick={() => setPending()}
              className={`${pend ? "active" : "status"}`}
            >
              <span>Success</span>
            </div>
            <div
              onClick={() => setFailing()}
              className={`${activatedfail ? "active" : "status"}`}
            >
              <span>Failed</span>
            </div>
          </div>
          <div className="top">
            <div className="buttons">
              <LatanaButton payment title={"Date"} />
              <LatanaButton status title={"Status"} />
            </div>
            <div className="date-search">
              <InputSearch
                // onChange={(e) => setSearcher(e.target.value)}
                placeholder="Search by amount, payment method..."
              />
            </div>
          </div>
          <Tables latana setStep={setStep} />
          <Pagination />
        </div>
      </div>
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
    padding: 20px;
    gap: 20px;
    height: 100vh;
    background-color: #e8e8e8;
    border-radius: 24px;
    .maindiv {
      background: #ffffff;
      height: 100%;
      border-radius: 12px;
      display: flex;
      gap: 40px;
      flex-direction: column;
      padding: 20px;
      .top {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        .name {
          font-size: 18px;
          font-weight: 500;
          line-height: 28px;
          text-align: left;
        }
        .buttons {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 15px;
        }
        .date-search {
          display: flex;
          flex-direction: row;
          gap: 20px;
          height: 35px;
          /* padding-inline: 20px; */
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
      .statuses {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        /* gap: 10px; */
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
          width: 120px;
          justify-content: center;
          align-items: center;
          /* padding-left: 20px; */
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
          color: #075aaa;
          border-bottom: 1.02px solid #075aaa;
          cursor: pointer;
          width: 120px;
          justify-content: center;
          align-items: center;
          /* padding-left: 20px; */
        }
        .active-number {
          display: flex;
          flex-direction: row;
          justify-content: center;
          width: 40px;
          background-color: #edf4f9;
          border-radius: 50%;
          color: #65ace0;
          font-size: 10px;
        }
        .status-number {
          display: flex;
          flex-direction: row;
          justify-content: center;
          width: 40px;
          background-color: #f0f0f0;
          border-radius: 50%;
          color: #868e96;
          font-size: 10px;
        }
      }
    }
  }
`;

export default ClientUsermanagement;
