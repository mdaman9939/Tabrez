import { useEffect, useState } from "react";

export default function ReadForm() {
  const [forms, setForms] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/forms")
      .then((res) => res.json())
      .then((data) => setForms(data));
  }, []);

  return (
    <ul>
      {forms.map((form) => (
        <li key={form._id}>{form.title}</li>
      ))}
    </ul>
  );
}
