import Axios from "axios";

const apiEndPoint =
  "https://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json";
const getCandidateList = () => async (dispatch) => {
  const response = await Axios.get(apiEndPoint);
  const { status = "", data = [] } = response;
  if (status === 200) {
    dispatch({
      type: "CANDIDATE_LIST",
      payload: data,
    });
  }
};
export default getCandidateList;
