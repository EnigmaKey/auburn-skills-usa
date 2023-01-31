import React from "react";
import { useContestants, useReviews, useSubmission } from "./StoreContext";

const ReviewPanel = () => {
  const { reviews } = useReviews();
  const { submission } = useSubmission();
  const { contestants } = useContestants();
  const selected = contestants.find(
    (contestant) => contestant.id === submission
  ) || { name: "Selected Contestant" };
  const selectedReviews = reviews.filter((review) => review.for === submission);
  return (
    <div style={{ ...(styles.container as any) }}>
      <h2>Reviews for {selected.name}</h2>
      <div style={styles.reviews as any}>
        {selectedReviews.map((review) => (
          <div key={review.id}>
            <h3>{review.name}</h3>
            <div dangerouslySetInnerHTML={{ __html: review.review }} />
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    padding: 20,
    backgroundColor: "lightblue",
    border: "1px solid black",
    borderRadius: 5,
    flexGrow: 1,
    height: "40%",
    margin: 10,
    overflow: "scroll",
  },
  reviews: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginLeft: 20,
    padding: 20,
    overflow: "scroll",
  },
};

export default ReviewPanel;
