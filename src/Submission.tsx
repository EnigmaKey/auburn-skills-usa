import React, { useEffect, useRef, useState } from "react";
import { useContestants, useSubmission } from "./StoreContext";
import useWindowDimensions from "./useWindowDimensions";

const Submsission = () => {
  const { contestants } = useContestants();
  const { submission } = useSubmission();
  const selected = contestants.find(
    (contestant) => contestant.id === submission
  ) || { url: "", name: "" };
  const { width, height } = useWindowDimensions();
  const iframe = useRef<HTMLIFrameElement>(null);
  const iframeSrc = useRef<HTMLTextAreaElement>(null);
  useEffect(() => {
    async function load() {
      if (selected.url && iframe.current && iframeSrc.current) {
        if (iframe.current.src !== selected.url) {
          iframe.current.src = selected.url;
          iframe.current.onload = () => {
            // if (iframe.current && iframe.current.contentDocument) {
            if (iframeSrc.current) {
              iframeSrc.current.value =
                iframe.current?.contentDocument?.documentElement.outerHTML ||
                "";
            }
            // }
          };
        }
      }
    }
    load();
  }, [selected.url]);

  const portrait = height > width;

  return (
    <div>
      <pre
        style={{ overflow: "hidden", marginLeft: 20, fontSize: 18 }}
      >{`${selected.name} - ${selected.url}`}</pre>
      <iframe
        ref={iframe}
        style={{ float: portrait ? "none" : "left", margin: portrait ? "auto" : 20 }}
        src={selected.url.replace("http://", "//")}
        width={width}
        height={height * 0.5}
        title="submission"
      />
    </div>
  );
};

export default Submsission;
