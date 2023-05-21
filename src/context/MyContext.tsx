import React, {createContext, useEffect, useState, useContext} from 'react';
import {AxiosInstance} from '../utils/constants';
import {Text} from 'react-native';

interface MainContextData {
  products: Product[];
  categories: Category[];
  homeNav: HomeNav[];
  axiosProducts: () => Promise<void>;
  axiosCategories: () => Promise<void>;
  axiosHomeNav: () => Promise<void>;
  setProducts: (value: React.SetStateAction<Product[]>) => void;
}

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images?: string[] | null;
}

interface Category {
  id: number;
  name: string;
  description: string;
}

interface HomeNav {
  id: number;
  name: string;
  description: string;
}

const MainContext = createContext<MainContextData>({
  products: [],
  categories: [],
  homeNav: [],
  axiosProducts: async () => {},
  axiosCategories: async () => {},
  axiosHomeNav: async () => {},
  setProducts: () => {},
});

const MainContextProvider: React.FC = ({children}: any) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [homeNav, setHomeNav] = useState<Category[]>([]);

  const axiosProducts = async () => {
    const axiosResponse = await AxiosInstance.get('products');
    //console.log('Response', axiosResponse.data);
    setProducts(axiosResponse.data);
  };

  const axiosCategories = async () => {
    const axiosResponse = await AxiosInstance.get('categories');
    //console.log('Response', axiosResponse.data);
    setCategories(axiosResponse.data);
  };

  const axiosHomeNav = async () => {
    const axiosResponse = await AxiosInstance.get('homeNav');
    //console.log('Response', axiosResponse.data);
    setHomeNav(axiosResponse.data);
  };

  return (
    <MainContext.Provider
      value={{
        products,
        setProducts,
        axiosProducts,
        categories,
        axiosCategories,
        homeNav,
        axiosHomeNav,
      }}>
      {children}
    </MainContext.Provider>
  );
};

export {useContext, MainContext, MainContextProvider};
