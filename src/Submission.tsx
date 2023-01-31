import React, { useEffect, useRef } from "react";
import { useSelectedContestant } from "./StoreContext";
import useWindowDimensions from "./useWindowDimensions";

const Submsission = () => {
  const { selectedContestant: selected } = useSelectedContestant();
  const { width, height } = useWindowDimensions();
  const [viewSource, setViewSource] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const iframe = useRef<HTMLIFrameElement>(null);
  const iframeSrc = useRef<HTMLTextAreaElement>(null);
  useEffect(() => {
    async function load() {
      if (selected.url && iframe.current && iframeSrc.current) {
        if (iframe.current.src !== selected.url) {
          iframe.current.src = selected.url;
          setLoading(true);
          iframe.current.onload = () => setLoading(false);
          iframe.current.onerror = () => setLoading(false);
          iframe.current.onabort = () => setLoading(false);
        }
      }
    }
    try {
      load();
    } catch (e) {
      console.error(e);
      setLoading(false);
      if (iframeSrc.current) {
        iframeSrc.current.value = " There was an error loading the submission. ";
        setViewSource(true);
      }
    }
  }, [selected.url]);

  useEffect(() => {
    if (!loading) {
      if (iframe.current && iframeSrc.current) {
        try {
          iframeSrc.current.value =
            (iframe.current.contentWindow?.document.body.parentNode as any)?.outerHTML ||
            "Error...";
        } catch (e) {
          iframeSrc.current.value = "Error...";
        }
      }
    }
  }, [iframe, loading]);

  const portrait = height > width;

  return (
    <div>
      <pre
        style={{ overflow: "scroll", marginLeft: 20, fontSize: 18, scrollbarWidth: "none" }}
      >{`${selected.name} - ${selected.url}`}</pre>
      {/* <button onClick={() => setViewSource(!viewSource)}>
        View {viewSource ? "Result" : "Source"}
      </button> */}
      {loading && <div>Loading...</div>}
      <textarea
        ref={iframeSrc}
        style={{
          overflow: "scroll",
          display: viewSource ? "block" : "none",
          marginLeft: 20,
          fontSize: 18,
          float: portrait ? "none" : "left",
          margin: portrait ? "auto" : 20,
          width: portrait ? "100%" : width * 0.8 - 40,
        }}
      />
      <iframe
        ref={iframe}
        style={{
          float: portrait ? "none" : "left",
          margin: portrait ? "auto" : 20,
          width: portrait ? "100%" : width * 0.8 - 40,
          display: viewSource ? "none" : "block",
        }}
        src={selected.url.replace("http://", "//")}
        width={"100%"}
        height={height * 0.5}
        title="submission"
      />
    </div>
  );
};

export default Submsission;
