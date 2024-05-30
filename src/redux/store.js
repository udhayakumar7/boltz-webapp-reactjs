import { configureStore } from '@reduxjs/toolkit';
import productReducer from './productSlice';
import loginmodelReducer from './loginmodelSlice';
import regisisterReducer  from './registermodelSlice'
import authReducer  from './authuserSlice'
import cartReducer from './cartSlice'
export  default configureStore({
    reducer:{
        product: productReducer,
        loginModel : loginmodelReducer,
        regisisterModel : regisisterReducer,
        user: authReducer,
        cart : cartReducer
    }
})