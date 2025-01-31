import React, { PropsWithChildren } from "react";
import Portal from "../../../base/Portal/portal";
import { modalWrapper, overlay } from "../modal.css";

export interface IMainModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const MainModal: React.FC<PropsWithChildren<IMainModalProps>> = ({
  children,
  isOpen,
  onClose
}) => {
  if (!isOpen) return null;
  return (
    <Portal>
      <div className={overlay} onClick={() => onClose()}>
        <div onClick={(e) => e.stopPropagation()} className={modalWrapper}>
          {children}
        </div>
      </div>
    </Portal>
  );
};

export default MainModal;
