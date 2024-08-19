import React from "react";
import qr from "../../assets/images/qr-code.png";
const QrModal = () => {
  return (
    <>
      <button
        onClick={() => document.getElementById("my_modal_1").showModal()}
        className="btn md:btn-wide lg:btn-wide"
      >
        JOIN US
      </button>
      <div className="">
        <dialog id="my_modal_1" className="modal">
          <div className="modal-box w-1/4">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-sm btn-circle  absolute right-2 top-2">
                ✕
              </button>
            </form>
            <div className="flex items-center justify-center">
              <img className="w-1/2" src={qr} />
            </div>
          </div>
        </dialog>
      </div>
    </>
  );
};

export default QrModal;
