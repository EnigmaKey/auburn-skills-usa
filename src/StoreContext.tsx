import React, { createContext, useReducer } from "react";

export const initialState = {
  submission: 1,
  reviews: [
    {
        id: 1,
        for: 1,
        name: "Michael",
        review: "This is a review",
    },
    {
        id: 2,
        for: 2,
        name: "Michael",
        review: "This is a review",
    },
    {
        id: 3,
        for: 3,
        name: "Michael",
        review: "This is a review",
    },
    {
        id: 4,
        for: 4,
        name: "Michael",
        review: "This is a review",
    },
    {
        id: 5,
        for: 5,
        name: "Michael",
        review: "This is a review",
    },
  ],
  contestants: [
    {
      id: 1,
      name: "Contestant 1",
      url: "http://ipd.auburncc.org/student/wgd/nvulinec/js/skillsLocal.html",
    },
    {
      id: 2,
      name: "Contestant 2",
      url: "http://ipd.auburncc.org/student/wgd/gboughner/skillsUSA/",
    },
    {
      id: 3,
      name: "Contestant 3",
      url: "http://ipd.auburncc.org/student/wgd/TTubbs/Jscompitition/jsComp.html",
    },
    {
      id: 4,
      name: "Contestant 4",
      url: "http://ipd.auburncc.org/student/wgd/check/js/jsComp.html",
    },
    {
      id: 5,
      name: "Contestant 5",
      url: "http://ipd.auburncc.org/student/WGD/ksrhiri/assignments/fizz_buzz/",
    },
  ],
};

export const StoreContext = createContext({
  state: initialState,
  dispatch: (action: any) => {},
});

export const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "addReview":
      return { ...state, reviews: {...state.reivew, ...action.payload} };
    case "setSubmission":
      return { ...state, submission: action.payload };
    default:
      return state;
  }
};

export const StoreProvider = ({ children }: React.PropsWithChildren) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => {
    const { state, dispatch } = React.useContext(StoreContext);
    return {
        state,
        dispatch,
    };
};

export const useSubmission = () => {
    const { state } = React.useContext(StoreContext);
    return {
        submission: state.submission,
    };
};

export const useReviews = () => {
    const { state } = React.useContext(StoreContext);
    return {
        reviews: state.reviews,
    };
};

export const useContestants = () => {
  const { state } = React.useContext(StoreContext);
  return {
    contestants: state.contestants,
  };
};
