import StudentCard from "./StudentCard";

function StudentList({ students, deleteStudent, markStatus }) {

  if (students.length === 0) {
    return <p>No Students Found</p>;
  }

  return (
    <>
      {students.map((student) => (
        <StudentCard
          key={student.id}
          student={student}
          deleteStudent={deleteStudent}
          markStatus={markStatus}
        />
      ))}
    </>
  );
}

export default StudentList;