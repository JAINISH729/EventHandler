import { useRef, useState, useEffect } from "react";

function StudentForm({ addStudent }) {

  const inputRef = useRef();
  const [error, setError] = useState("");

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  function handleSubmit(e) {
    e.preventDefault();

    const name = inputRef.current.value;

    if (name.trim() === "") {
      setError("Student name is required");
      inputRef.current.focus();
      return;
    }

    addStudent(name);

    inputRef.current.value = "";
    setError("");

    inputRef.current.focus();
  }

  return (
    <>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Enter student name"
          ref={inputRef}
        />

        <button>Add</button>

      </form>

      {error && <p className="error">{error}</p>}

    </>
  );
}

export default StudentForm;