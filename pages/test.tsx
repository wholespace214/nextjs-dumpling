import React, { useState } from "react";

// Generate some dummy data
const DUMMY_DATA = Array.from({ length: 100 }, (x, i) => {
  return {
    id: i,
    title: `Item ${i}`,
  };
});

const App: React.FunctionComponent = () => {
  const [progress, setProgress] = useState(0);

  // This function is triggered when the user scroll
  const scrollHandler = (event: React.UIEvent<HTMLDivElement>) => {
    const containerHeight = event.currentTarget.clientHeight;
    const scrollHeight = event.currentTarget.scrollHeight;

    const scrollTop = event.currentTarget.scrollTop;
    setProgress(((scrollTop + containerHeight) / scrollHeight) * 100);
  };

  return (
    <>
      {/* The container */}
      <div style={styles.container} onScroll={scrollHandler}>
        {/* The list */}
        <div style={styles.list}>
          {DUMMY_DATA.map((item) => (
            // A single item
            <div style={styles.item} key={item.id}>
              {item.title}
            </div>
          ))}
        </div>
      </div>

      {/* The progress bar */}
      <div style={styles.progressBar}>
        <div style={{ ...styles.progressValue, width: `${progress}%` }}></div>
      </div>
      <p style={styles.text}>{progress.toFixed(2)}%</p>
    </>
  );
};

// Styling
const styles = {
  container: {
    width: 500,
    height: 400,
    margin: "30px auto",
    overflowY: "auto",
    overflowX: "hidden",
    background: "orange",
  },
  list: {
    width: "100%",
  },
  item: {
    margin: "20px 25px",
    padding: "30px 20px",
    boxShadow: "0 2px 4px #999",
    background: "purple",
    fontSize: "18px",
    textAlign: "center",
    color: "#fff",
  },
  progressBar: {
    width: 600,
    height: 20,
    margin: "auto",
    backgroundColor: "#bbb",
  },
  progressValue: {
    height: "100%",
    backgroundColor: "blue",
  },
  text: {
    textAlign: "center",
  },
} as const;

export default App;
