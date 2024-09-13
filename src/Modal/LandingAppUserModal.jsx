import React, { useEffect, useRef, useState } from "react";
import LandingAppModal from "./LandingAppModal";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const LandingAppUserModal = ({ setStep, step, setReload }) => {
  const navigate = useNavigate();
  const handleCloseModal4 = () => {
    setStep(0);
  };

  const LocationNavigate = () => {
    setStep(0);
    navigate("/main-products");
  };

  const RealTimeNavigate = () => {
    setStep(0);
    navigate("/realtime-products");
  };

  const AdvancedNavigate = () => {
    setStep(0);
    navigate("/advanced-products");
  };

  const CampaignNavigate = () => {
    setStep(0);
    navigate("/campaign-products");
  };

  const IndustryNavigate = () => {
    setStep(0);
    navigate("/main-industries");
  };

  const HealthNavigate = () => {
    setStep(0);
    navigate("/health-industries");
  };

  const EducationNavigate = () => {
    setStep(0);
    navigate("/education-industries");
  };

  const SecurityNavigate = () => {
    setStep(0);
    navigate("/security-industries");
  };

  const LastIndustryNavigate = () => {
    setStep(0);
    navigate("/detailindustry-industries");
  };

  const CustomerNavigate = () => {
    setStep(0);
    navigate("/customer-resources");
  };

  const AboutNavigate = () => {
    setStep(0);
    navigate("/about-resources");
  };

  return (
    <div>
      <LandingAppModal
        step={56}
        currentStep={step}
        closeModal={handleCloseModal4}
        // updateUserListData(update);
        // window.location.reload()
        wide
        setStep={setStep}
        heading="Transaction Details"
      >
        <Flex>
          <div className="top">
            <div className="first">
              <span className="title">Date Created</span>
              <span className="statement">
                <span>75yuwet9r237112</span>
              </span>
            </div>
            <div className="first">
              <span className="title">Transaction ID</span>
              <span className="statement">
                <span>75yuwet9r237112</span>
              </span>
            </div>
            <div className="first">
              <span className="title">Customer</span>
              <span className="statement">
                <span>Owolu Opeyemi</span>
              </span>
            </div>
          </div>
          <div className="top">
            <div className="first">
              <span className="title">Amount Paid</span>
              <span className="statement">
                <span>N500,000.00</span>
              </span>
            </div>
            <div className="first">
              <span className="title">Description</span>
              <span className="statement">
                <span>Returns/ March 31/Bradford</span>
              </span>
            </div>
            <div className="first">
              <span className="title">Payment Status</span>
              <button
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "#ECFDF3",
                  color: "#027A48",
                  width: "80px",
                  borderRadius: "8px",
                  outline: "none",
                  border: "none",
                  fontSize: "16px"
                }}
              >
                Success
              </button>
            </div>
          </div>
          <div className="top">
            <div className="first">
              <span className="title">Recipient Bank</span>
              <span className="statement">
                <span>Access bank</span>
              </span>
            </div>
            <div className="first">
              <span className="title">Recipient Account Number</span>
              <span className="statement">
                <span>09548765498</span>
              </span>
            </div>
            <div className="first">
              <span className="title"></span>
              <span className="statement">
                <span></span>
              </span>
            </div>
          </div>
        </Flex>
      </LandingAppModal>
      <LandingAppModal
        step={57}
        currentStep={step}
        closeModal={handleCloseModal4}
        // updateUserListData(update);
        // window.location.reload()
        wide
        setStep={setStep}
        heading="Industries"
      >
        <Flex>
          <div className="top">
            <div className="first" onClick={() => IndustryNavigate()}>
              <span className="title">Retail</span>
              <span className="statement">
                <span>Boost sales by ensuring your staff </span>
                <span>levels meet customer demand.</span>
              </span>
            </div>
            <div className="first" onClick={() => EducationNavigate()}>
              <span className="title">Education</span>
              <span className="statement">
                <span>Schedule staff to adapt to changing</span>
                <span>class times</span>
              </span>
            </div>
          </div>
          <div className="top">
            <div className="first" onClick={() => HealthNavigate()}>
              <span className="title">Healthcare</span>
              <span className="statement">
                <span>Keep your team working, no</span>
                <span>matter where they are.</span>
              </span>
            </div>
            <div className="first" onClick={() => SecurityNavigate()}>
              <span className="title">Security</span>
              <span className="statement">
                <span>Quickly send teams to multiple </span>
                <span>Locations</span>
              </span>
            </div>
          </div>
          <div className="top">
            <div className="first" onClick={() => LastIndustryNavigate()}>
              <span className="title">Explore all industries</span>
              <span className="statement">
                <span>See how our platform works with your</span>
                <span>business, industry and goals</span>
              </span>
            </div>
          </div>
        </Flex>
      </LandingAppModal>
      <LandingAppModal
        step={58}
        currentStep={step}
        closeModal={handleCloseModal4}
        // updateUserListData(update);
        // window.location.reload()
        wide
        setStep={setStep}
        heading="Resources"
      >
        <Flex>
          <div className="top">
            <div className="first" onClick={() => AboutNavigate()}>
              <span className="title">About us</span>
              <span className="statement">
                <span>See how we help businesses</span>
                <span>globally.</span>
              </span>
            </div>
            <div className="first" onClick={() => CustomerNavigate()}>
              <span className="title">Customer Stories</span>
              <span className="statement">
                <span>Learn from our customers who are</span>
                <span>growing their businesses.</span>
              </span>
            </div>
          </div>
        </Flex>
      </LandingAppModal>
    </div>
  );
};

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  padding-inline: 2px;
  width: 100%;
  gap: 30px;
  .top {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .first {
      display: flex;
      flex-direction: column;
      gap: 10px;
      width: 50%;
      .title {
        font-size: 10px;
        font-weight: 600;
        line-height: 21.78px;
        text-align: left;
        color: #7a7a7a;
        cursor: pointer;
      }
      .statement {
        font-size: 14px;
        font-weight: 500;
        line-height: 19.12px;
        text-align: left;
        color: #2e2e2e;
        display: flex;
        flex-direction: column;
        gap: 2px;
      }
    }
  }
`;

export default LandingAppUserModal;
