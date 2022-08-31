import "./Empty.scss";
import { Link } from "react-router-dom";
import imgEmpty from "../../Assets/emp.png";

const Empty = () => {
  return (
    <section className="empty">
      <img src={imgEmpty} alt="Empty-list" />
      <h4>صفحه یافت نشد</h4>
      <p>برای مشاهده محصولات به صفحه زیر بروید:</p>
      <Link to={"/"}>
        <button>صفحه اصلی</button>
      </Link>
    </section>
  );
};

export default Empty;
