import React from "react";
import Send from "../../assets/images/contact.jpg";

const ContactForm = () => {
  return (
    <div className="flex justify-between items-center gap-10 my-16">
      <div className="w-1/2">
        <img src={Send} alt="" />
      </div>
      <div className="w-1/2">
        <div className="card bg-base-100 w-full  shrink-0 shadow-2xl">
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Full Name </span>
              </label>
              <input
                type="email"
                placeholder="Your Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <textarea
                placeholder="Please your description"
                className="textarea textarea-bordered textarea-lg w-full "
              ></textarea>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-p-primary text-t-primary hover:text-p-primary">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
