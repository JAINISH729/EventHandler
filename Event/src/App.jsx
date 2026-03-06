import { useState } from "react";
import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";

function App() {

  const [students, setStudents] = useState([]);

  function addStudent(name) {

    const newStudent = {
      id: students.length + 1,
      name: name,
      status: "absent"
    };

    setStudents([...students, newStudent]);
  }

  function deleteStudent(id) {

    const updatedStudents = students.filter((student) => student.id !== id);

    setStudents(updatedStudents);
  }

  function markStatus(id, status) {

    const updatedStudents = students.map((student) => {

      if (student.id === id) {
        return { ...student, status: status };
      }

      return student;
    });

    setStudents(updatedStudents);
  }

  return (

    <div className="container">

      <div className="card">

        <h1>Student Activity Manager</h1>

        <StudentForm addStudent={addStudent} />

        <h3>Total Students: {students.length}</h3>

        <StudentList
          students={students}
          deleteStudent={deleteStudent}
          markStatus={markStatus}
        />

      </div>

    </div>

  );
}

export default App;