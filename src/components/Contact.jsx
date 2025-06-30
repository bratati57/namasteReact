import React from "react";

const Contact = () => {
  return (
    <div className="w-6/12 m-auto p-2 shadow-2xl">
      <h1 className="text-2xl flex justify-center align-middle font-bold p-4 m-4">Contact Us</h1>
      <form className="flex justify-center align-middle">
        <input
        type="text"
          className="border border-black m-2 p-2"
          placeholder="Enter your name"
        />
        <input
          type="text"
          className="border border-black m-2 p-2"
          placeholder="Enter your message"
        />
        <button className="p-2 rounded-xl bg-gray-100 m-2 p-1">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
