import React, { createContext, useReducer } from "react";

export const initialState = {
  submission: 1,
  reviews: [
    {
      id: 0,
      for: 0,
      name: "Michael Simoneau (@enigma-ceo)",
      rating: 100,
      review: `
      <h3>Review</h1>
      <h4>Functionality</h4><aside>Does it work?</aside>
      <h4>Code Quality</h4><aside>Is the code well written?</aside>
      <h4>Code Structure</h4><aside>Is the code well structured?</aside>
      <h4>Code Reusability</h4><aside>Is the code reusable?</aside>
      <h4>Code Scalability</h4><aside>Can it be easily scaled up or down?</aside>
      <h4>Efficiency</h4><aside>Does it avoid redundant code?</aside>
      <h4>Code Commenting</h4><aside>Are code comments effective, descriptive and helpful?</aside>
      <h4>Code Readability</h4><aside>Is code properly and consistently spaced & tabbed?</aside>
`,
    },
    {
      id: 1,
      for: 1,
      name: "Michael Simoneau (@enigma-ceo)",
      rating: 89,
      review: `
        <h3>Review</h1>
        <p>Generally, the code is well written and structured. However, it is not reusable or scalable. The code is not overly redundant, but could be improved. The code comments are effective, descriptive and helpful. The code is nearly properly and consistently spaced & tabbed. (-1 point)</p>
        <h4>Functionality</h4><aside>Does it work?</aside>
        <p>Yes, it works.</p>
        <h4>Code Quality</h4><aside>Is the code well written?</aside>
        <p>Yes, the code is well written.</p>
        <h4>Code Structure</h4><aside>Is the code well structured?</aside>
        <p>Yes, the code is well structured.</p>
        <h4>Code Reusability</h4><aside>Is the code reusable?</aside>
        <p>No, the code is not reusable.</p>
        <h4>Code Scalability</h4><aside>Can it be easily scaled up or down?</aside>
        <p>No, the code cannot be easily scaled up or down.</p>
        <h4>Efficiency</h4><aside>Does it avoid redundant code?</aside>
        <p>Yes, it does avoid overly redundant code, although could be improved.</p>
        <h4>Code Commenting</h4><aside>Are code comments effective, descriptive and helpful?</aside>
        <p>Yes, the code comments are effective, descriptive and helpful.</p>
        <h4>Code Readability</h4><aside>Is code properly and consistently spaced & tabbed?</aside>
        <p>Almost, the code is nearly properly and consistently spaced & tabbed. (-1 point)</p>
`,
    },
    {
      id: 2,
      for: 2,
      name: "Michael Simoneau (@enigma-ceo)",
      rating: 90,
      review: `
        <h3>Review</h1>
        <p>Generally, the code is well written and structured. However, it is not reusable or scalable. The code is not overly redundant, but could be improved. The code comments are effective, descriptive and helpful. The code is properly and consistently spaced & tabbed.</p>
        <h4>Functionality</h4><aside>Does it work?</aside>
        <p>Yes, it works.</p>
        <h4>Code Quality</h4><aside>Is the code well written?</aside>
        <p>Yes, the code is well written.</p>
        <h4>Code Structure</h4><aside>Is the code well structured?</aside>
        <p>Yes, the code is well structured.</p>
        <h4>Code Reusability</h4><aside>Is the code reusable?</aside>
        <p>No, the code is not reusable.</p>
        <h4>Code Scalability</h4><aside>Can it be easily scaled up or down?</aside>
        <p>No, the code cannot be easily scaled up or down.</p>
        <h4>Efficiency</h4><aside>Does it avoid redundant code?</aside>
        <p>Yes, it does avoid overly redundant code, although could be improved.</p>
        <h4>Code Commenting</h4><aside>Are code comments effective, descriptive and helpful?</aside>
        <p>Yes, the code comments are effective, descriptive and helpful.</p>
        <h4>Code Readability</h4><aside>Is code properly and consistently spaced & tabbed?</aside>
        <p>Yes, the code is properly and consistently spaced & tabbed.</p>
  `,
    },
    {
      id: 3,
      for: 3,
      name: "Michael Simoneau (@enigma-ceo)",
      rating: 92,
      review: `
        <h3>Review</h1>
        <p>Generally, the code is well written and structured. However, it is not reusable or scalable. The code is not overly redundant, but could be improved. The code comments are very effective, descriptive and helpful. The code is properly and consistently spaced & tabbed.</p>
        <h4>Functionality</h4><aside>Does it work?</aside>
        <p>Yes, it works.</p>
        <h4>Code Quality</h4><aside>Is the code well written?</aside>
        <p>Yes, the code is well written.</p>
        <h4>Code Structure</h4><aside>Is the code well structured?</aside>
        <p>Yes, the code is well structured.</p>
        <h4>Code Reusability</h4><aside>Is the code reusable?</aside>
        <p>No, the code is not reusable.</p>
        <h4>Code Scalability</h4><aside>Can it be easily scaled up or down?</aside>
        <p>No, the code cannot be easily scaled up or down.</p>
        <h4>Efficiency</h4><aside>Does it avoid redundant code?</aside>
        <p>No, it does not overly avoid redundant code.</p>
        <h4>Code Commenting</h4><aside>Are code comments effective, descriptive and helpful? (-1 point)</aside>
        <p>Yes, the code comments are very effective, descriptive and helpful. (+1 point)</p>
        <h4>Code Readability</h4><aside>Is code properly and consistently spaced & tabbed?</aside>
        <p>Yes, the code is properly and consistently spaced & tabbed.</p>
  `,
    },
    {
      id: 4,
      for: 4,
      name: "Michael Simoneau (@enigma-ceo)",
      rating: 88,
      review: `
        <h3>Review</h1>
        <p>Generally, the code is well structured, albeit overly verbose. It is not reusable or scalable. The code is not overly redundant, but could be improved. The code comments are there, but not descriptive or overly helpful. The code is properly and consistently spaced & tabbed.</p>
        <h4>Functionality</h4><aside>Does it work?</aside>
        <p>Yes, it works.</p>
        <h4>Code Quality</h4><aside>Is the code well written?</aside>
        <p>Yes, the code is well written.</p>
        <h4>Code Structure</h4><aside>Is the code well structured?</aside>
        <p>Yes, the code is well structured.</p>
        <h4>Code Reusability</h4><aside>Is the code reusable?</aside>
        <p>No, the code is not reusable.</p>
        <h4>Code Scalability</h4><aside>Can it be easily scaled up or down?</aside>
        <p>No, the code cannot be easily scaled up or down.</p>
        <h4>Efficiency</h4><aside>Does it avoid redundant code?</aside>
        <p>No, it does not overly avoid redundant code.</p>
        <h4>Code Commenting</h4><aside>Are code comments effective, descriptive and helpful?</aside>
        <p>Eh, the code comments are there, but not descriptive or very helpful.</p>
        <h4>Code Readability</h4><aside>Is code properly and consistently spaced & tabbed?</aside>
        <p>Yes, the code is properly and consistently spaced & tabbed.</p>
  `,
    },
    {
      id: 5,
      for: 5,
      name: "Michael Simoneau (@enigma-ceo)",
      rating: 94,
      review: `
        <h3>Review</h1>
        <p>Generally, the code is well written and structured. Out of the submissions, it is the most reusable and scalable. The code is not overly redundant, but could be improved. The code comments are sparse, and not overly helpful. The code is properly and consistently spaced & tabbed. Would have preferred to see JavaScript, but the result is clean and the links are nice.</p>
        <h4>Functionality</h4><aside>Does it work?</aside>
        <p>Yes, it works.</p>
        <h4>Code Quality</h4><aside>Is the code well written?</aside>
        <p>Yes, the code is very well written.</p>
        <h4>Code Structure</h4><aside>Is the code well structured?</aside>
        <p>Yes, the code is very well structured.</p>
        <h4>Code Reusability</h4><aside>Is the code reusable?</aside>
        <p>Yes, the code is reusable.</p>
        <h4>Code Scalability</h4><aside>Can it be easily scaled up or down?</aside>
        <p>More-or-less, the code can be easily scaled up or down.</p>
        <h4>Efficiency</h4><aside>Does it avoid redundant code?</aside>
        <p>Yes, it does avoid redundant code.</p>
        <h4>Code Commenting</h4><aside>Are code comments effective, descriptive and helpful?</aside>
        <p>Somewhat, the code comments are there, but not overly descriptive or helpful.</p>
        <h4>Code Readability</h4><aside>Is code properly and consistently spaced & tabbed?</aside>
        <p>Yes, the code is properly and consistently spaced & tabbed.</p>
  `,
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
      return { ...state, reviews: { ...state.reivew, ...action.payload } };
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

export const useSelectedContestant = () => {
  const { state } = React.useContext(StoreContext);
  const [selectedContestant, setSelectedContestant] = React.useState(
    state.contestants[0]
  );
  React.useEffect(() => {
    if (state.submission) {
      const contestant = state.contestants.find(
        (contestant: any) => contestant.id === state.submission
      );
      if (contestant) {
        setSelectedContestant(contestant);
      }
    }
  }, [state.submission, state.contestants]);
  return {
    selectedContestant,
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
