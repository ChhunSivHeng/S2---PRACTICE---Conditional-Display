import React from "react";
import "../../src/index";

function scores({ courseName, courseResults }) {
  return (
    <section className="scores">
      <h1>{courseName}</h1>
      <table>
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
              <td className={student.score < 50 ? "warning" : ""}>{student.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default scores;
