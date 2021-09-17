import React from "react";

import Header from "./component/common/Header";
import Footer from "./component/common/Footer";
import HomeTemplateContainer from "./container/home/HomeTemplateContainer";

const App = () => {
  return (
    <>
      <Header />
      <HomeTemplateContainer />
      <Footer />
    </>
  );
};

export default App;
