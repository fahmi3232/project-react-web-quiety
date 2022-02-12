import React from 'react';
import AnalysComp from '../Components/AnalysComp';
import BannerComp from '../Components/BannerComp'
import FeaturesComp from '../Components/FeaturesComp';
import FeaturesSub from '../Components/FeaturesSub';
import IncreasingComp from '../Components/IncreasingComp';
import InteractionsComp from '../Components/InteractionsComp';
import PricingComp from '../Components/PricingComp';
import FooterComp from '../Components/FooterComp';

const Home = () => {
  return(
    <div>
      <BannerComp />
      <FeaturesComp />
      <FeaturesSub />
      <IncreasingComp />
      <AnalysComp />
      <InteractionsComp />
      <PricingComp />
      <FooterComp />
    </div>
  ) 
};

export default Home;
