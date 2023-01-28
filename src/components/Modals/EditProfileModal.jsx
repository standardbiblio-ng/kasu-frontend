import React from "react";

const EditProfileModal = ({ show, close }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="w-screen h-screen absolute inset-0">
      <div
        className="bg-black opacity-70 w-screen h-screen absolute z-50 inset-0"
        onClick={close}
      ></div>
      <main className="antialiased overflow-x-hidden">
        <div className="relative px-4 min-h-screen md:flex md:items-center md:justify-center">
          <div className="bg-white w-1/3 max-h-[90vh] overflow-y-scroll py-10 rounded-lg fixed z-50 flex flex-col items-start px-8">
            {/* header */}
            <div className="w-full h-[10%] flex items-center justify-between">
              <span className="text-md font-semibold text-primary">
                Click field to edit
              </span>
              <button
                onClick={close}
                className="text-xl font-bold text-btnColor"
              >
                X
              </button>
            </div>
            {/* input fields */}
            <form className="my-8 w-full flex flex-col items-start">
              <span className="w-full my-2">
                <label htmlFor="" className="text-sm">
                  First Name
                </label>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Abbie"
                  className="w-full border py-2 rounded-md px-2 border-black/20"
                />
              </span>
              <span className="w-full my-2">
                <label htmlFor="" className="text-sm">
                  Middle Name
                </label>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Timothy"
                  className="w-full border py-2 rounded-md px-2 border-black/20"
                />
              </span>
              <span className="w-full my-2">
                <label htmlFor="" className="text-sm">
                  Last Name
                </label>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Kingsley"
                  className="w-full border py-2 rounded-md px-2 border-black/20"
                />
              </span>
              <span className="w-full my-2">
                <label htmlFor="" className="text-sm">
                  Jamb number
                </label>
                <input
                  type="number"
                  name=""
                  id=""
                  placeholder="85426322665"
                  className="w-full border py-2 rounded-md px-2 border-black/20"
                />
              </span>
              <span className="w-full my-2">
                <label htmlFor="" className="text-sm">
                  Email Address
                </label>
                <input
                  type="email"
                  name=""
                  id=""
                  placeholder="timothy@gmail.com"
                  className="w-full border py-2 rounded-md px-2 border-black/20"
                />
              </span>
              <span className="w-full my-2">
                <label htmlFor="" className="text-sm">
                  Password
                </label>
                <input
                  type="password"
                  name=""
                  id=""
                  placeholder="***********"
                  className="w-full border py-2 rounded-md px-2 border-black/20"
                />
              </span>
            </form>
            <button
              onClick={close}
              className="px-6 py-2 text-lg w-fit mx-auto font-normal bg-btnColor text-white rounded-md"
            >
              save
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default EditProfileModal;
