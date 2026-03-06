import { useState } from "react";

function StudentCard({ student, deleteStudent, markStatus }) {

  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="student-card">

      <h3>{student.name}</h3>

      <button onClick={() => setShowDetails(!showDetails)}>
        Toggle Details
      </button>

      {showDetails && (
        <>
          <p>Status: {student.status}</p>

          <button onClick={() => markStatus(student.id, "present")}>
            Present
          </button>

          <button onClick={() => markStatus(student.id, "absent")}>
            Absent
          </button>
        </>
      )}

      <button
        className="delete"
        onClick={() => deleteStudent(student.id)}
      >
        Delete
      </button>

    </div>
  );
}

export default StudentCard;