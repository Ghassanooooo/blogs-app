import React from "react";

export default function SiginIn() {
  const submitHandler = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const data = {
      email,
      password,
    };

    console.log("Sign In data => ", data);

    // POST req ===> http://localhost:5000/api/v1/signin
  };
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={submitHandler}>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Email address
          </label>
          <input
            name="email"
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" class="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Password
          </label>
          <input
            name="password"
            type="password"
            class="form-control"
            id="exampleInputPassword1"
          />
        </div>

        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
