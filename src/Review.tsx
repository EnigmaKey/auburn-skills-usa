import React from "react";
import {
  useReviews,
  useSelectedContestant,
  useSubmission,
} from "./StoreContext";
import useWindowDimensions from "./useWindowDimensions";

const ReviewPanel = () => {
  const { reviews } = useReviews();
  const { submission } = useSubmission();
  const { selectedContestant: selected } = useSelectedContestant();
  const selectedReviews = reviews.filter((review) => review.for === submission);
  const styles = useStyles();
  return (
    <div style={styles.container}>
      <h2>Reviews for {selected.name}</h2>
      <div style={styles.reviews}>
        {selectedReviews.map((review) => (
          <div key={review.id} style={styles.review}>
            <h3>{review.name}</h3>
            <h4>Score: {review.rating} / 100</h4>
            <div style={styles.reviewText} dangerouslySetInnerHTML={{ __html: review.review }} />
          </div>
        ))}
      </div>
    </div>
  );
};

const useStyles = () => {
  const { width, height } = useWindowDimensions();
  const portrait = height > width;
  return {
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
    } as any,
    reviews: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      justifyContent: "flex-start",
      marginLeft: -20,
      whiteSpace: portrait ? "break-spaces" : "normal",
    } as any,
    review: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      justifyContent: "flex-start",
      marginLeft: 20,
    } as any,
    reviewText: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        whiteSpace: "break-spaces",
        maxWidth: width - 40,
    } as any,
  };
};

export default ReviewPanel;
