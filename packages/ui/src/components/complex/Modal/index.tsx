import Header from "./_components/header";
import ContentBody from "./_components/content-body";
import Footer from "./_components/footer";
import MainModal from "./_components/modal";

const Modal = Object.assign(MainModal, {
  Header,
  ContentBody,
  Footer
});

export default Modal;
