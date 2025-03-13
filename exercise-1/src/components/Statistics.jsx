import React from "react";

const Statistics = ({ courseResults }) => {
  if (courseResults.length === 0) return <p>No data available</p>;

  const scores = courseResults.map(student => student.score);
  const average = (scores.reduce((sum, score) => sum + score, 0) / scores.length).toFixed(2);
  const minScore = Math.min(...scores);
  const maxScore = Math.max(...scores);

  return (
    <div className="statistics">
      <p>📊 Average Score: {average}</p>
      <p>🔽 Min Score: {minScore}</p>
      <p>🔼 Max Score: {maxScore}</p>
    </div>
  );
};

export default Statistics;
