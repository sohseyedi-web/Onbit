import { useState, useEffect } from "react";
import axios from "axios";
import "./TrendCoins.scss";
import { TrendingCoins } from "../../Config/api";
import { Link } from "react-router-dom";
import Loaidng from "../../Common/Loading/Loaidng";
import { comma } from "./../../../utils/Comma";

const TrendCoins = () => {
  const [trend, setTrend] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchTrending = async () => {
      setLoading(true);
      const { data } = await axios.get(TrendingCoins("usd"));
      setTrend(data);
      setLoading(false);
    };

    fetchTrending();
  }, []);

  return (
    <section className="trend">
      <div className="container trend-container">
        <div className="trend-container__title">ارز های پرطرفدار در آنبیت</div>
        <div className="trend-container__table">
          {loading && (
            <div className="trend-container__table-loading">
              <Loaidng />
            </div>
          )}
          {trend.map((item) => (
            <Link
              to={`/coins/${item.id}`}
              className="trend-container__table-list"
              key={item.id}
            >
              <div className="trend-container__table-list__left">
                <span className="trend-container__table-list__left-number">
                  {trend.indexOf(item) + 1}
                </span>
                <div className="trend-container__table-list__left-detail">
                  <img src={item.image} alt={item.name} />
                  <div className="trend-container__table-list__left-detail__name">
                    {item.symbol}
                  </div>
                </div>
              </div>
              <div className="trend-container__table-list__center">
                ${comma(item.current_price.toFixed(2))}
              </div>
              <div
                className={
                  item.price_change_percentage_24h <= 0
                    ? "trend-container__table-list__right min-price"
                    : "trend-container__table-list__right max-price"
                }
              >
                {item.price_change_percentage_24h.toFixed(2)} %
              </div>
            </Link>
          ))}
        </div>
        <div className="trend-container__more">
          <Link to={"/coins"}>
            <button>مشاهده ارزهای بیشتر</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TrendCoins;
