import { Fragment, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import CategoriesPreview from "../categories-preview/categories-preview.component";
import './shop.styles.scss'
import Category from "../category/category.component";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import { fetchCategoriesStart } from "../../store/categories/category.action";
const Shop = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        const getCategoriesMap = () => {
            
            dispatch(fetchCategoriesStart());
        } 

        getCategoriesMap();
    },[]);
    
    return (
        <Routes>
            <Route index element={<CategoriesPreview/>}/>
            <Route path=':category' element={<Category/>}/>

        </Routes>
        
    )
};

export default Shop;