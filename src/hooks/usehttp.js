import { useEffect, useState } from "react";
import axios from 'axios';

const useHttp = () => {
 const [getProducts, setProducts] = useState();

 useEffect(() => {
    try{
        const getData = async () => {
            const newData = await axios.get('https://sabujcha-project-default-rtdb.firebaseio.com/Products.json');
            setProducts(newData.data);
        }

        getData();

    }catch(err){
        alert(err);
    }

 },[]);

 

 return{
    getProducts
 }


}

export default useHttp;