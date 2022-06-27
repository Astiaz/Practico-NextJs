import { useState, useEffect } from 'react';
import axios from 'axios';

const useGetProduct = (API) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios(API);
      setProducts(response.data);
    };
    fetchData();
  }, [API]);
  return products;
};

export default useGetProduct;
