import React from "react";
import "./App.css";
import { StoreProvider } from "./StoreContext";
import Contestants from "./Contestants";
import Submsission from "./Submission";
import ReviewPanel from "./Review";
import useWindowDimensions from "./useWindowDimensions";

function App() {
  const { width: windowWidth, height: windowHeight } = useWindowDimensions();
  const portrait = windowHeight > windowWidth;
  const leftWidth = portrait ? windowWidth : windowWidth * 0.2;
  const leftHeight = portrait ? "auto" : windowHeight;
  const rightWidth = portrait ? windowWidth : windowWidth * 0.8;
  const height = windowHeight;
  return (
    <StoreProvider>
      <div
        style={{
          height,
          overflow: "scroll",
        }}
      >
        <header
          style={{
            height: 60,
            textAlign: "center",
            padding: 10,
            backgroundColor: "#EEEEEE",
            boxShadow: "0 0 10px 0 rgba(0,0,0,0.5)",
            ...(portrait && {
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              zIndex: 1000,
            }),
          }}
        >
          <h1
            style={{
              fontSize: 22,
            }}
          >
            Auburn Career Center {portrait ? <br /> : "-"} SkillsUSA - Review
          </h1>
        </header>
        <div style={{ flex: 1, marginTop: portrait ? 70 : 0 }}>
          <div
            style={{
              flex: 1,
              flexDirection: portrait ? "row" : "column",
              width: leftWidth,
              float: portrait ? "none" : "left",
              backgroundColor: "#EEEEEE",
              height: leftHeight,
              justifyContent: "center",
            }}
            className="App-body-left"
          >
            <Contestants />
          </div>
          <div
            style={{
              flex: 1,
              width: rightWidth,
              float: portrait ? "none" : "right",
              backgroundColor: "#FFFFFF"
            }}
            className="App-body-right"
          >
            <div
              style={{ flex: 1, flexDirection: "row" }}
              className="App-body-right-top"
            >
              <Submsission />
            </div>
            <div
              style={{ flex: 1, flexDirection: "row" }}
              className="App-body-right-bottom"
            >
              <ReviewPanel />
            </div>
          </div>
        </div>
      </div>
    </StoreProvider>
  );
}

export default App;
