import { RiPhoneFill, RiEyeFill ,RiEyeCloseLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { useProduct } from "../../../Context/Arz-Context";
import { useModal } from "../../../Context/ModalProvider";
import Modal from "../../Common/Modal/Modal";
import "./Navbar.scss";

const Navbar = () => {
  const navigate = useNavigate();
  const {cartItems} = useProduct();
  const { openModal } = useModal();
  return (
    <nav className="navs" dir="rtl">
      <div className="container navs-container">
        <div className="navs-container__logo" onClick={() => navigate("/")}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.0"
            viewBox="0 0 100 100"
            width="40"
            height="40"
            fill="#0056ad"
          >
            <path d="M60 20c-16.563 0-30 13.431-30 29.997 0 11.045 8.955 20 20 20s19.997-8.955 20-20c0-7.357-5.967-13.331-13.333-13.331-7.363 0-13.334 5.974-13.334 13.333 0 3.685 2.985 6.667 6.667 6.667s6.667-2.982 6.667-6.667H50c0-3.685 2.985-6.667 6.667-6.667s6.666 2.982 6.666 6.667c0 7.366-5.97 13.333-13.333 13.333S36.667 57.366 36.667 50c0-11.042 8.955-20 20-20 11.048 0 19.996 8.955 20 19.997v-.004V50v-.003C76.663 64.724 64.727 76.663 50 76.663S23.333 64.724 23.333 49.997V50v-.007.004c0-20.248 16.42-36.664 36.667-36.664 2.624 0 5.179.286 7.646.811C62.317 11.517 56.341 10 50 10c-22.09 0-40 17.91-40 40s17.91 40 40 40 40-17.91 40-40c0-1.035-.078-2.051-.156-3.066C88.308 31.807 75.534 20 60 20z" />
          </svg>
          <h2>آنبیت</h2>
        </div>
        <div className="navs-container__links">
          <div className="navs-container__links-tell">
            <RiPhoneFill size={26} />
          </div>
          <div className="navs-container__links-auth" onClick={openModal}>
            {cartItems.length > 0 ? <RiEyeFill size={26}/> : <RiEyeCloseLine size={26}/>}
          </div>
          <Modal/>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
