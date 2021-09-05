import React from "react";

const Contanct = () => {
  return (
    <div className="container">
      <div className="row my-5">
        <div className="col-md-6">
          <h1>TextUtils Incorporation</h1>
          <h5>Phone: 01 4456789</h5>
          <h5>Website: textutils.corp</h5>
          <h5>Email: hello@textutils.corp</h5>
        </div>
        <div className="col-md-6">
          <div className="mb-3">
            <label htmlFor="fullname" className="form-label">
              Full Name
            </label>
            <input
              type="text"
              className="form-control"
              id="fullname"
              placeholder="Krishna Prasad Jha"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              Message
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
            <button className=" my-3 btn btn-primary" type="submit">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contanct;
