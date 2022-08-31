import axios from "axios";
import { useState, useEffect } from "react";
import { HistoricalChart } from "../../../Config/api";
import { useParams } from "react-router-dom";
import "./CoinChart.scss";
import { chartDay } from "./../../../Config/data";
import Loading from "../../../Common/Loading/Loaidng";

import {
  CategoryScale,
  Chart,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";

const CoinChart = () => {
  const { id } = useParams();
  const [historicData, setHistoricData] = useState([]);
  const [days, setDays] = useState(1);
  const [active, setActive] = useState(false);

  useEffect(() => {
    axios
      .get(HistoricalChart(id, days))
      .then(({ data }) => {
        setHistoricData(data.prices);
        setActive(true);
      })
      .catch((err) => console.log(err));
  }, [days]);

  const handlebtnChart = (value) => {
    setDays(value);
  };

  Chart.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  return (
    <>
      {!historicData ? (
        <Loading />
      ) : (
        <>
          <Line
            data={{
              labels: historicData.map((coin) => {
                let date = new Date(coin[0]);
                let time =
                  date.getHours() > 12
                    ? `${date.getHours() - 12}:${date.getMinutes()} بعدازظهر`
                    : `${date.getHours()}:${date.getMinutes()} قبل از ظهر`;
                return days === 1 ? time : date.toLocaleDateString("fa-IR");
              }),

              datasets: [
                {
                  data: historicData.map((coin) => coin[1]),
                  label: `قیمت (${days} روز گذشته) به دلار آمریکا`,
                  borderColor: "#0056ad",
                },
              ],
            }}
            options={{
              elements: {
                point: {
                  radius: 1,
                },
              },
            }}
          />
          <div className="chart">
            {chartDay.map((item) => (
              <button
                key={item.value}
                onClick={() => handlebtnChart(item.value)}
                className={
                  item.value === days ? "chart-btn active-btn" : "chart-btn"
                }
              >
                {item.label}
              </button>
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default CoinChart;
