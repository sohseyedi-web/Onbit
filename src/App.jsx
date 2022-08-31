import { Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import AllCoins from "./Components/Coins/AllCoins";
import Coin from "./Components/Coins/Coin/Coin";
import Empty from "./Components/Common/isEmpty/Empty";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/coins" element={<AllCoins />} />
        <Route path="/coins/:id" element={<Coin />} />
        <Route path="*" element={<Empty />} />
      </Routes>
      <Toaster />
    </>
  );
}

export default App;
