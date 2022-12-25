import React, { useState, useContext, useEffect, createContext } from 'react';
import { useCallback } from 'react';

const url =
  'https://api.weatherapi.com/v1/current.json?key=cd98f1ba4f0c4106939102913221907&q=Kolkata&aqi=no';
const AppContext = createContext;

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  //   const [searchTerm, setSearchTerm] = useState("b");
  const [city, setCity] = useState([]);

  const fetchDrinks = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch(url);
      const data = await res.json();
      // console.log(data);
      setCity(data);
      setLoading(false);
    } catch (error) {
      //   console.log(error);
      setLoading(false);
    }
  }, []);
  useEffect(() => {
    fetchDrinks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <AppContext.Provider value={{ loading, city }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
