import type{ AxiosResponse, QueryResult } from "@/types";
import type{ ICategory, IProduct } from "@/types/home";
import { useQuery } from "@tanstack/react-query";
import axios from "axios"; // axios bizga HTTP so'rovlarni qabul qilish uchun kerak


type HomeCache = {
    categories:  QueryResult<ICategory[]>;
};

export const useHomeCache = (): HomeCache => {
    const categories = useQuery({ 
        // useQuery API yoki backenddan kelgan ma'lumotlarni olishni osonlashtiradi va avtomatik ravishda qayta yuklash, keshlash va sinxronizatsiyani boshqaradi.
        queryKey: ["home/category"], // qisqacha qilib aytganda qayerdagi qaysi qismi ekanligi tuishuntirib bersak buladi.
        queryFn: async () => {
            const { data } = await axios.get<AxiosResponse<ICategory[]>>
            (`${import.meta.env.VITE_MAIN_APP}/category`,
          );
          return data?.data // ikkinchi data AxiosResponse ichidagi typedan keliyapti. ?
  
        },
    });
    return {categories}  // categories tepadagi categoriesdan keliyapti.
}


type TodayCache = {
    products:  QueryResult<IProduct[]>;
};

export const useTodayCache = (): TodayCache => {
    const products = useQuery({
        queryKey: ["home/products/trend/today"],
        queryFn: async () => {
            const { data } = await axios.get<AxiosResponse<IProduct[]>>
            (`${import.meta.env.VITE_MAIN_APP}/products/most-popular`,
          );
          return data?.data
  
        },
    });
    return {products}
}

type MonthCache = {
    products:  QueryResult<IProduct[]>;
};

export const useMonthCache = (): MonthCache => {
    const products = useQuery({
        queryKey: ["home/products/trend/month"],
        queryFn: async () => {
            const { data } = await axios.get<AxiosResponse<IProduct[]>>
            (`${import.meta.env.VITE_MAIN_APP}/products/most-popular-monthly`,
          );
          return data?.data
  
        },
    });
    return {products}
}


type OurProductsCache = {
    products:  QueryResult<IProduct[]>;
};

export const useOurProductsCache = (): OurProductsCache => {
    const products = useQuery({
        queryKey: ["home/products"],
        queryFn: async () => {
            const { data } = await axios.get<AxiosResponse<IProduct[]>>
            (`${import.meta.env.VITE_MAIN_APP}/products`,
          );
          return data?.data
  
        },
    });
    return {products}
}