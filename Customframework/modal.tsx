import React, { FC } from "react";
import Button from "./button";

interface Props {
  close: (value: boolean) => void;
}

const Modal: FC<Props> = ({ close }) => {
  return (
    <>
      <div className="modal">
        <div className="modal-content">
          <h2>Title</h2>

          <Button
            style={{
              marginTop: 10,
              backgroundColor: "gray",
            }}
            onClick={() => close(false)}
          >
            Close
          </Button>
        </div>
      </div>
    </>
  );
};

export default Modal;
