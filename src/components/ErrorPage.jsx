import React from "react";

const ErrorPage = ({ history }) => {
  const goToHomePage = () => history.push(`/`);
  return (
    <div className="ErrorPage">
      404...No such url exist
      <button type="button" onClick={goToHomePage}>
        Go To Home Page
      </button>
    </div>
  );
};

export default ErrorPage;
