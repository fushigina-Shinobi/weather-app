import axios from 'axios';
import { useEffect, useState } from 'react';

const Context = (input) => {
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState({ show: false, msg: "" });
  const [city, setCity] = useState(null);
  // const [search, setSearch] = useState("kolkata");

  async function getData() {
    // const res = await fetch(
    //   `https://api.weatherapi.com/v1/current.json?key=cd98f1ba4f0c4106939102913221907&q=${input}`
    // );
    // const data = await res.json();
    // setCity(data);
    //  setLoading(true)
    axios
      .get(
        `https://api.weatherapi.com/v1/current.json?key=cd98f1ba4f0c4106939102913221907&q=${input}`
      )
      .then((response) => {
        setCity(response.data);
      });
  }
  useEffect(() => {
    getData();
    // setLoading(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [input]);

  return city;
};

export default Context;
