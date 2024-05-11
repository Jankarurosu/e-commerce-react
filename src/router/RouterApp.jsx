import { Navigate, Route, Routes } from "react-router-dom"
import { Cart, LoginSingup, Product, Shop, ShopCategory } from "../pages"

export const RouterApp = () => {
    return (
        <Routes>
            <Route path='/' element={<Shop />} />
            <Route path='/mens' element={<ShopCategory category="men" />} />
            <Route path='/womens' element={<ShopCategory category="women" />} />
            <Route path='/kids' element={<ShopCategory category="kid" />} />
            <Route path='/product' element={<Product />}>
                <Route path=':productId' element={<Product />} />
            </Route>
            <Route path='/cart' element={<Cart />} />
            <Route path='/login' element={<LoginSingup />} />

            <Route path='/*' element={<Navigate to={'/'} />} />
        </Routes>
    )
}
