import "./Service.scss";
import Secure from "../../Assets/Secure.svg";
import { BsPatchCheckFill } from "react-icons/bs";

const Service = () => {
  return (
    <div className="service" dir="rtl">
      <div className="service-container container">
        <div className="service-container__data">
          <div className="service-container__data-item">
            <div className="service-container__data-item__title">150,000+</div>
            <p className="service-container__data-item__name">
              کاربر فعال به ما اعتماد کرده اند
            </p>
          </div>
          <div className="service-container__data-item">
            <div className="service-container__data-item__title">20+</div>
            <p className="service-container__data-item__name">
              ارز پولی در آنبیت پشتیبانی میشود
            </p>
          </div>
          <div className="service-container__data-item">
            <div className="service-container__data-item__title">200+</div>
            <p className="service-container__data-item__name">
              ارز دیجیتال در آنبیت معامله میشود
            </p>
          </div>
          <div className="service-container__data-item">
            <div className="service-container__data-item__title">
              100,000,000+
            </div>
            <p className="service-container__data-item__name">
              تراکنش موفق در آنبیت انجام شده
            </p>
          </div>
        </div>
        <div className="service-container__desc">
          <img className="service-container__desc-right" src={Secure} alt="" />
          <div className="service-container__desc-left">
            <div className="service-container__desc-left__header">
              امنیت در کار از روز اول ورود
            </div>
            <div className="service-container__desc-left__body">
              <div className="service-container__desc-left__body-item">
                <div className="service-container__desc-left__body-item__title">
                  <span>
                    <BsPatchCheckFill size={20} />
                  </span>
                  <span>ایمنی، امنیت و انطباق</span>
                </div>
                <p className="service-container__desc-left__body-item__subtitle">
                  آنبیت یک شرکت دارای مجوز در ایران است که تحت آزمون های بانکی
                  منظم قرار می گیرد و مشمول ممیزی های امنیت سایبری است که توسط
                  دپارتمان خدمات مالی ایران انجام می شود. درباره تعهد ما به
                  امنیت بیشتر بخوانید.
                </p>
              </div>
              <div className="service-container__desc-left__body-item">
                <div className="service-container__desc-left__body-item__title">
                  <span>
                    <BsPatchCheckFill size={20} />
                  </span>
                  <span>کلیدهای امنیتی سخت افزاری</span>
                </div>
                <p className="service-container__desc-left__body-item__subtitle">
                  با آنبیت می توانید حساب خود را با یک کلید امنیتی سخت افزاری از
                  طریق احراز هویت ایمن کنید.
                </p>
              </div>
              <div className="service-container__desc-left__body-item">
                <div className="service-container__desc-left__body-item__title">
                  <span>
                    <BsPatchCheckFill size={20} />
                  </span>
                  <span>گواهینامه های SOC</span>
                </div>
                <p className="service-container__desc-left__body-item__subtitle">
                  آنبیت با <span>SOC 1 Type 2</span> و <span>SOC 2 Type 2</span>{" "}
                  سازگار است. ما اولین صرافی و متولی ارزهای دیجیتال در جهان
                  هستیم که این امتحانات را تکمیل می کنیم.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
