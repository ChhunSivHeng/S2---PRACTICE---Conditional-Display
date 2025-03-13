import React from "react";

const Scores = ({ courseName, courseResults }) => {
  // Function to apply warning class for low scores
  const getScoreClass = (score) => (score < 50 ? "warning" : "");

  return (
    <div className="course-container">
      <h2>{courseName} Results</h2>
      <table className="score-table">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {courseResults.map((student, index) => (
            <tr key={index}>
              <td>{student.firstName}</td>
              <td>{student.lastName}</td>
              <td className={getScoreClass(student.score)}>{student.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Scores;
