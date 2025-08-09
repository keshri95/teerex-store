import React, { useContext, useState } from "react";

import PropTypes from 'prop-types';

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

AppProvider.propTypes = {
  children: PropTypes.node.isRequired
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext, useGlobalContext };