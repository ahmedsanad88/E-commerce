import type { ReactNode } from 'react';
import React from 'react';
import { IoArrowBackOutline } from 'react-icons/io5';

interface IModalProps {
  children: ReactNode;
  position?: string;
  shown: boolean;
  close: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal = ({
  children,
  position = 'top-10',
  shown,
  close,
}: IModalProps) => {
  return shown ? (
    <div
      className={`fixed inset-0 z-[2] flex items-center justify-center bg-black/40`}
      onClick={() => close(false)}
    >
      <div className="relative h-full w-full">
        <div
          className={`absolute min-h-[200px] w-[90%] bg-white p-6 lg:w-[60%] ${position}`}
          onClick={(e) => {
            // do not close modal if anything inside modal content is clicked
            e.stopPropagation();
          }}
        >
          <button
            onClick={() => close(false)}
            className="mb-10 flex items-center gap-4 font-medium"
          >
            <IoArrowBackOutline className="text-xl" />
            <p>Back</p>
          </button>
          {children}
        </div>
      </div>
    </div>
  ) : null;
};

export default Modal;
