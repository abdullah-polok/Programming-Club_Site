import React from "react";

const JoinButton = () => {
  return (
    <div className="text-center lg:text-left md:text-left">
      <button
        className="btn w-40 bg-[#7c8deb] text-white text-lg mt-28"
        onClick={() => document.getElementById("my_modal_1").showModal()}
      >
        Join us
      </button>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg text-center">Welcome</h3>
          <p className="py-4">
            Press ESC key or click the button below to close
          </p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default JoinButton;
