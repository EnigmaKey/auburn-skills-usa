import React from "react";

import { useContestants, useStore } from "./StoreContext";
import useWindowDimensions from "./useWindowDimensions";

const Contestant = ({ contestant }: { contestant: any }) => {
  const { dispatch } = useStore();
  const styles = useStyles();
  const selectContestant = () => {
    dispatch({ type: "setSubmission", payload: contestant.id });
  };
  return (
    <div onClick={selectContestant} style={styles.button as any}>
      <h3>{contestant.name}</h3>
    </div>
  );
};

const useStyles = () => {
  const { width, height } = useWindowDimensions();
  const portrait = height > width;
  return {
    container: {
      display: "flex",
      flexDirection: portrait ? "row" : "column",
      alignItems: "center",
      justifyContent: "center",
      height: portrait ? 100 : "100%",
    //   width: "100%",
      overflow: "scroll",
      ...(portrait && {
        padding: 20,
        flexWrap: "nowrap",
        whiteSpace: "nowrap",
        justifyContent: "flex-start",
        zIndex: 1000,
        flexGrow: 1,
        maxHeight: 100,
      }),
    },
    button: {
      cursor: "pointer",
      padding: "10px",
      margin: "10px",
      backgroundColor: "lightblue",
      border: "none",
      borderRadius: "5px",
    //   flexGrow: 1,
      flexBasis: 0,
      whiteSpace: "nowrap",
      maxHeight: 90,
      float: "left",
    },
  };
};

const Contestants = () => {
  const { contestants } = useContestants();
  const styles = useStyles();
  return (
    <div style={styles.container as any}>
      {contestants.map((contestant) => (
        <Contestant key={contestant.id} contestant={contestant} />
      ))}
    </div>
  );
};

export default Contestants;
