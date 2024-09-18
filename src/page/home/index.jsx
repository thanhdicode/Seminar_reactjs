import { useEffect, useState } from "react";
import Header from "../../component/header";
import ProductCard from "../../component/product-card";
import api from "../../config/axios";
import "./index.scss";

const Home = () => {
  const [koiFishs, setKoiFishs] = useState([]);

  const fetchKoiData = async () => {
    try {
      const response = await api.get("product");
      setKoiFishs(response.data); // Update state with fetched data
      console.log(response);
      setKoiFishs(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchKoiData(); // Call the fetch function
    // moi khi trang load len thi chay
  }, []); // Add empty dependency array to run once on mount

  return (
    <div className="home">
      <Header />

      <div className="home__main-content">
        {/* <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard /> */}

        {/*
        Bien ca thanh product card
        */}
        {koiFishs.map((koiFishs) => {
          <ProductCard koiFish={koiFishs} />;
        })}
      </div>
    </div>
  );
};

export default Home;
