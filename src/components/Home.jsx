import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Buttons from "./Buttons.jsx";
import CandidateCard from "./CandidateCard.jsx";
import getCandidateList from "../API/candidateList";

const Home = ({ candidateList = [], getCandidateList, history }) => {
  const [value, setVaue] = useState("");
  const [localCandidateData, setLocalCandidateData] = useState(candidateList);

  useEffect(() => {
    setLocalCandidateData(candidateList);
  }, [candidateList]);
  useEffect(() => {
    getCandidateList();
  }, []);

  const handleCardClick = (id) => history.push(`/candidate/${id}`);
  const handleShortlist = () => history.push(`/shortlisted`);
  const handleReject = () => history.push(`/rejected`);
  const handleChange = (e) => {
    setVaue(e.target.value);
    if (e.target.value) {
      setLocalCandidateData(
        candidateList.filter((item) =>
          item.name.toLowerCase().includes(e.target.value.toLowerCase())
        )
      );
    } else {
      setLocalCandidateData(candidateList);
    }
  };

  const renderCard = () =>
    Array.isArray(candidateList) &&
    localCandidateData.map((item) => (
      <CandidateCard
        img={item.Image}
        name={item.name}
        id={item.id}
        onClick={handleCardClick}
      />
    ));

  return (
    <div className="home">
      <Buttons
        shortList="ShortList"
        reject="Reject"
        handleShortlist={handleShortlist}
        handleReject={handleReject}
      />
      <div className="input">
        <input type="text" value={value} onChange={(e) => handleChange(e)} />
      </div>
      <div className="displayCard">{renderCard()}</div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    candidateList: state.data.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getCandidateList: () => dispatch(getCandidateList()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
