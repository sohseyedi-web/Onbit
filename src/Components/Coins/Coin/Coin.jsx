import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Container from "../../../Container/Container";
import { SingleCoin } from "../../Config/api";
import { comma } from "./../../../utils/Comma";
import "./Coin.scss";
import CoinChart from "./CoinChart/CoinChart";
import { checkInList } from "./../../../utils/CheckInList";
import { useProduct, useProductDispatch } from "../../../Context/Arz-Context";
import {RiArrowRightLine} from 'react-icons/ri'
import toast from "react-hot-toast";
const Coin = () => {
  const { id } = useParams();
  const [coin, setCoin] = useState({});
  const { cartItems } = useProduct();
  const dispatch = useProductDispatch();

  useEffect(() => {
    axios
      .get(SingleCoin(id))
      .then(({ data }) => {
        setCoin(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const addToSaveList = (coin) => {
    dispatch({ type: "ADD_ITEM", payload: coin });
    toast.success("به لیست اضافه شد");
  };
  const removeToSaveList = (coin) => {
    dispatch({ type: "REMOVE_ITEM", payload: coin });
    toast.error("از لیست حذف شد");
  };

  return (
    <Container>
      <section className="coin container" dir="rtl">
        <div className="coin-detail">
          <Link className="coin-detail__link" to={"/coins"}><RiArrowRightLine size={26}/></Link>
          <div className="coin-detail__img">
            لوگو :{" "}
            {coin.image ? <img src={coin.image.small} alt={coin.name} /> : null}
          </div>
          <div className="coin-detail__name">نام : {coin.name}</div>
          <div className="coin-detail__rank">
            رتبه : {coin.market_cap_rank}#
          </div>
          <div className="coin-detail__price">
            قیمت فعلی :
            <span>
              {coin.market_data
                ? comma(coin.market_data.current_price.usd)
                : null}
              $
            </span>
          </div>
          <div className="coin-detail__market">
            ارزش بازار:
            <span>
              {coin.market_data
                ? comma(coin.market_data.market_cap.usd.toString().slice(0, -6))
                : null}
              M
            </span>
          </div>

          <p className="coin-detail__desc">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است
          </p>
          <div className="coin-detail__save">
            {checkInList(cartItems, coin) ? (
              <button
                className="coin-detail__save-unfollow"
                onClick={() => removeToSaveList(coin)}
              >
                دنبال نشود
              </button>
            ) : (
              <button
                className="coin-detail__save-follow"
                onClick={() => addToSaveList(coin)}
              >
                دنبال شود
              </button>
            )}
          </div>
        </div>
        <div className="coin-chart">
          <CoinChart />
        </div>
      </section>
    </Container>
  );
};

export default Coin;
