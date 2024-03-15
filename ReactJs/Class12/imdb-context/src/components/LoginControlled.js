import { useState } from "react";

const LoginControlled = () => {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const handleInput = (e) => {
    const formKey = e.target.dataset.id;
    const formVal = e.target.value;
    setForm((prevState) => ({
        ...prevState,
        [formKey]: formVal 
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  }

  return (
    <div>
      <div>
        <label>Username</label>
        <input
          type="text"
          placeholder="username"
          value={form.username}
          data-id="username"
          onChange={handleInput}
        />
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          placeholder="Password"
          value={form.password}
          data-id="password"
          onChange={handleInput}
        />
      </div>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default LoginControlled;
