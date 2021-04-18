import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { getShoesPage, resetlengthPager } from "../../Slice/productSlice";
export default function ScrollToTop() {
    const { pathname } = useLocation();
    const dispatch = useDispatch();
    useEffect(() => {
        window.scrollTo(0, 0);
        if(pathname === "/shoes"){
            dispatch(getShoesPage({ page : 1,limit : 8}))
            dispatch(resetlengthPager(8))
        }
    }, [pathname , dispatch]);
    return null;
}