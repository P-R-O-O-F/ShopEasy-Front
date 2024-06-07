import React, { useState } from "react";
import "./Inscription.css";

const Inscription = () => {
  const [showForm, setShowForm] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [city, setCity] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch("http://localhost:8000/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
        firstName,
        lastName,
        age,
        city,
      }),
    });

    if (response.ok) {
      const data = await response.json();
      console.log(data);
      setShowForm(false); // hide the form after successful submission
    } else {
      console.error("Failed to send POST request");
    }
  };

  return (
    <>
      {!showForm && (
        <p onClick={() => setShowForm(true)}>
          Not already signed up? Click here to SIGN UP!
        </p>
      )}
      {showForm && (
        <form onSubmit={handleSubmit}>
          <h1>Inscription</h1>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            required
            onChange={(e) => setUsername(e.target.value)}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <label htmlFor="firstname">First Name</label>
          <input
            type="text"
            id="firstname"
            name="firstname"
            required
            onChange={(e) => setFirstName(e.target.value)}
          />
          <label htmlFor="lastname">Last Name</label>
          <input
            type="text"
            id="lastname"
            name="lastname"
            required
            onChange={(e) => setLastName(e.target.value)}
          />
          <label htmlFor="age">Age</label>
          <input
            type="text"
            id="age"
            name="age"
            required
            onChange={(e) => setAge(e.target.value)}
          />
          <label htmlFor="city">City</label>
          <input
            type="text"
            id="city"
            name="city"
            required
            onChange={(e) => setCity(e.target.value)}
          />
          <button type="submit">S'inscrire</button>
        </form>
      )}
    </>
  );
};

export default Inscription;
