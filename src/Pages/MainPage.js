import React from 'react';
import {useSelector} from "react-redux";
import {prodSelect} from "../redux/slices/productsSlice";
import Products from "../Components/Products/Products";

const MainPage = () => {
    const {products} = useSelector(prodSelect)


    return (
        <div>
            <div className="container">
                <div className="main">
                    {
                        products.map(i => <Products i={i}/>)
                    }
                </div>
            </div>
        </div>
    );
};

export default MainPage;