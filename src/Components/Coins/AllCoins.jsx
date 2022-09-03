import { useEffect, useState } from "react";
import Container from "./../../Container/Container";
import "./AllCoins.scss";
import { CoinList } from "./../Config/api";
import axios from "axios";
import SearchBar from "./../Common/SearchBar/SearchBar";
import Loaidng from "../Common/Loading/Loaidng";
import { Link } from "react-router-dom";
import { comma } from "./../../utils/Comma";
import {
  RiLineChartLine,
  RiBookmarkLine,
  RiBookmarkFill,
} from "react-icons/ri";
import { useProduct, useProductDispatch } from "../../Context/Arz-Context";
import toast from "react-hot-toast";
import { checkInList } from "./../../utils/CheckInList";
import InfiniteScroll from "react-infinite-scroller";
import { wait } from "./../../utils/Wait";

const PER_PAGE = 20;

const AllCoins = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [offset, setOffSet] = useState(-PER_PAGE);
  const [totalCount, setTotalCount] = useState(200);
  const [search, setSearch] = useState("");
  const { cartItems } = useProduct();
  const dispatch = useProductDispatch();

  console.log(coins);
  const fetchCoins = async () => {
    setLoading(true);
    const newOffset = offset + PER_PAGE;
    const { data } = await axios.get(CoinList(PER_PAGE, newOffset));
    await wait(1000);
    if (data) {
      const newCoins = [...coins, ...data];
      if (newCoins.length >= totalCount) {
        setHasMore(false);
      }
      setCoins(newCoins);
      setOffSet(newOffset);
    }
    setLoading(false);
  };

  const addToSaveList = (coin) => {
    dispatch({ type: "ADD_ITEM", payload: coin });
    toast.success("به لیست اضافه شد");
  };
  const handleSearch = () => {
    return coins.filter(
      (coin) =>
        coin.name.toLowerCase().includes(search) ||
        coin.symbol.toLowerCase().includes(search)
    );
  };
  useEffect(() => {
    fetchCoins();
  }, []);

  return (
    <Container>
      <section className="coins">
        <div className="container coins-container">
          <div className="coins-container__bars">
            <SearchBar search={search} setSearch={setSearch} />
            <div className="coins-container__bars-title">
              لیست ارزهای موجود در آنبیت
            </div>
          </div>
          <div className="coins-container__header">
            <div className="coins-container__header-name">نام</div>
            <div className="coins-container__header-price">
              <span className="coins-container__header-price__current">
                قیمت
              </span>
              <span className="coins-container__header-price__change">
                تغییرات
              </span>
              <span className="coins-container__header-price__market">
                ارزش بازار
              </span>
            </div>
            <div className="coins-container__header-action">#</div>
          </div>
          <div className="coins-container__items">
            <InfiniteScroll
              pageStart={0}
              loadMore={fetchCoins}
              loader={
                <div className="coins-container__items-loading" key={0}>
                  <Loaidng />
                </div>
              }
              hasMore={hasMore}
              style={{ width: "100%" }}
              threshold={350}
              initialLoad={true}
            >
              {handleSearch().map((coin) => (
                <div
                  className="coins-container__items-box"
                  key={coin.market_cap_rank}
                >
                  <div className="coins-container__items-box__detail">
                    <img src={coin.image} alt={coin.name} />
                    <div className="coins-container__items-box__detail-name">
                      <div className="coins-container__items-box__detail-name__symbol">
                        {coin.symbol}
                      </div>
                      <div className="coins-container__items-box__detail-name__full">
                        {coin.name}
                      </div>
                    </div>
                  </div>
                  <div className="coins-container__items-box__price">
                    <div className="coins-container__items-box__price-current">
                      ${comma(coin.current_price.toFixed(2))}
                    </div>
                    <div
                      className={
                        coin.price_change_percentage_24h <= 0
                          ? "coins-container__items-box__price-change min"
                          : "coins-container__items-box__price-change max"
                      }
                    >
                      {coin.price_change_percentage_24h
                        ? coin.price_change_percentage_24h.toFixed(2)
                        : null}
                      %
                    </div>
                    <div className="coins-container__items-box__price-market">
                      {comma(coin.market_cap.toString().slice(0, -6))} M
                    </div>
                  </div>
                  <div className="coins-container__items-box__actions">
                    <button
                      disabled={checkInList(cartItems, coin)}
                      className={
                        checkInList(cartItems, coin)
                          ? "coins-container__items-box__actions-save active-save"
                          : "coins-container__items-box__actions-save"
                      }
                      onClick={() => addToSaveList(coin)}
                    >
                      {checkInList(cartItems, coin) ? (
                        <RiBookmarkFill size={24} />
                      ) : (
                        <RiBookmarkLine size={24} />
                      )}
                    </button>
                    <Link
                      to={`/coins/${coin.id}`}
                      className="coins-container__items-box__actions-chart"
                    >
                      <RiLineChartLine size={24} />
                    </Link>
                  </div>
                </div>
              ))}
            </InfiniteScroll>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default AllCoins;
