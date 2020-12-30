function candidateReducer(state = {}, action) {
  const { type = "", payload } = action;
  switch (type) {
    case "CANDIDATE_LIST":
      return {
        ...state,
        data: [...payload],
      };
    case "SHORTLIST":
      if (state.shortList) {

        return {
          ...state,
          shortList: [...state.shortList, payload],
        };
      } else {
        return {
          ...state,
          shortList: [payload],
        };
      }

    case "REJECT":
      if (state.reject) {
        return {
          ...state,
          reject: [...state.reject, payload],
        };
      } else {
        return {
          ...state,
          reject: [payload],
        };
      }
    default:
      return {
        ...state,
      };
  }
}

export default candidateReducer;
