import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import CandidateCard from "./CandidateCard";
import Buttons from "./Buttons";

const CandidateDetails = ({ candidateList = [], dispatch, history }) => {
  let { id } = useParams();
  let candidateDetail = {};
  if (Array.isArray(candidateList.data)) {
    for (let item of candidateList.data) {
      if (id === item.id) {
        candidateDetail = item;
      }
    }
  }

  const handleShortlist = () => {
    dispatch({
      type: "SHORTLIST",
      payload: candidateDetail,
    });
    history.push(`/`);
  };
  const handleReject = () => {
    dispatch({
      type: "REJECT",
      payload: candidateDetail,
    });
    history.push(`/`);
  };

  return (
    <div className="details">
      <CandidateCard
        img={candidateDetail.Image}
        name={candidateDetail.name}
        id={candidateDetail.id}
      />
      <Buttons
        shortList="ShortListed"
        reject="Rejected"
        handleShortlist={handleShortlist}
        handleReject={handleReject}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    candidateList: state.data,
  };
};

export default connect(mapStateToProps, null)(CandidateDetails);
