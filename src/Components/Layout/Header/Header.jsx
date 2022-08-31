import "./Header.scss";
import Bit from "../../Assets/Bit.svg";
import { FiArrowLeft } from "react-icons/fi";

const Header = () => {
  return (
    <header className="header" dir="rtl">
      <div className="header-container container">
        <div className="header-container__details">
          <h2 className="header-container__details-titr">آنبیت</h2>
          <div className="header-container__details-title">
            سریع ترین صرافی آنلاین در دنیای کریپتو
          </div>
          <p className="header-container__details-subtitle">
            با استفاده از کارت بانکی خود، بیش از 200 ارز دیجیتال را با بیش از 20
            ارز ثابت بخرید و بفروشید و یا با انتشار طراحی های خود به دنیای NFT
            وارد شوید. همچنین از آخرین تغییرات قیمت ارزها اطلاع پیدا کنید.
          </p>
        </div>
        <div className="header-container__img">
          <img src={Bit} alt="" />
        </div>
      </div>
    </header>
  );
};

export default Header;
