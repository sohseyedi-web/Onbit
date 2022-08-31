import { MdClose, MdDelete } from "react-icons/md";
import { useProduct, useProductDispatch } from "../../../Context/Arz-Context";
import { useModal } from "../../../Context/ModalProvider";
import Back from "./../Back/Back";
import "./Modal.scss";
import { comma } from "./../../../utils/Comma";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { CoinList } from "../../Config/api";
import axios from "axios";
import toast from "react-hot-toast";

const Modal = () => {
  const { modal, closeModal } = useModal();
  const { cartItems } = useProduct();
  const dispatch = useProductDispatch();
  const [coin, setCoin] = useState([]);

  const removeToSaveList = (coin) => {
    dispatch({ type: "REMOVE_ITEM", payload: coin });
    toast.error("از لیست حذف شد");
  };

  useEffect(() => {
    axios
      .get(CoinList("usd"))
      .then(({ data }) => {
        setCoin(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Back />
      {modal ? (
        <div className="box">
          <div className="box-close" onClick={closeModal}>
            <MdClose size={32} />
          </div>
          <div className="box-details">
            {cartItems.length ? (
              cartItems.map((item) =>
                coin
                  .filter((i) => i.id === item.id)
                  .map((list) => (
                    <div className="box-details__item" key={list.id}>
                      <Link
                        to={`/coins/${list.id}`}
                        target={"_blank"}
                        className="box-details__item-left"
                      >
                        <img src={list.image} alt={list.name} />
                        <div className="box-details__item-left__name">
                          {list.name}
                        </div>
                      </Link>
                      <div className="box-details__item-right">
                        <div className="box-details__item-right__price">
                          ${comma(list.current_price.toFixed(2))}
                        </div>
                        <div
                          className={
                            list.price_change_percentage_24h > 0
                              ? "box-details__item-right__change max"
                              : "box-details__item-right__change min"
                          }
                        >
                          {list.price_change_percentage_24h.toFixed(2)}%
                        </div>
                        <div
                          className="box-details__item-right__trash"
                          onClick={() => removeToSaveList(list)}
                        >
                          <MdDelete size={24} />
                        </div>
                      </div>
                    </div>
                  ))
              )
            ) : (
              <div className="box-details__error">هیچ ارزی دنبال نمی کنید</div>
            )}
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Modal;
