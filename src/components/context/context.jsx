import React, { useContext, useState } from "react";


const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [product, setProduct] = useState([])



  return (
    <>
      <AppContext.Provider value={{ product, setProduct }}>
        {children}
      </AppContext.Provider>
    </>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext, useGlobalContext };