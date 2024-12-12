import React from "react";
import HomePageHero from "../components/body/HomePageHero";
import NextHero from "../components/body/NextHero";
import ProductContainer from "../components/body/ProductContainer";
import Categories from "../components/body/Catagories";
import EarlyAccess from "../components/body/EarlyAccess";
import GiftBanner from "../components/body/GiftBanner";
import VideoContent from "../components/body/VideoContent";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";

const Home = () => {
  return (
    <div className="mt-6">
      <Navbar/>
      <HomePageHero/>
      <NextHero/>
      <ProductContainer/>
      <Categories/>
      <EarlyAccess/>
      <GiftBanner/>
      <VideoContent/>
      <Footer/>
    </div>
  );
};

export default Home;
