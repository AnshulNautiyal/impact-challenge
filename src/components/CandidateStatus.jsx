import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import CandidateCard from "./CandidateCard.jsx";

const CandidateStatus = ({ shortList = [], reject = [], history }) => {
  let candidateList = [];

  if (window.location.pathname === "/shortlisted") {
    candidateList = [...shortList];
  } else {
    candidateList = [...reject];
  }
  const goToHomePage = () => history.push(`/`);

  const renderCard = () =>
    candidateList.map((item) => (
      <CandidateCard img={item.Image} name={item.name} id={item.id} />
    ));

  return (
    <div className="home">
      <div className="displayCardStatus">
        {candidateList.length ? (
          <>
            <div className="cardStatus">{renderCard()}</div>
            <button type="button" onClick={goToHomePage}>
            Go To Home Page
            </button>
          </>
        ) : (
          <div className="noUser">
            No Candidate selected.
            <button type="button" onClick={goToHomePage}>
            Go To Home Page
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    shortList: state.data.shortList,
    reject: state.data.reject,
  };
};

export default connect(mapStateToProps, null)(CandidateStatus);
