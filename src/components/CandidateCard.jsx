import React from "react";

const CandidateCard = ({ img = "", name = "", id = "", onClick }) => (
  <div className="card" id={id} onClick={()  => typeof onClick === "function" && onClick(id)}>
    <div className="image">
      <img src={img} alt={name} />
    </div>
    <div className="name">{name}</div>
  </div>
);

export default CandidateCard;