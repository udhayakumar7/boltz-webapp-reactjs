import { configureStore } from '@reduxjs/toolkit';
import productReducer from './productSlice';
import loginmodelReducer from './loginmodelSlice';
import regisisterReducer  from './registermodelSlice'
import authReducer  from './authuserSlice'

export  default configureStore({
    reducer:{
        product: productReducer,
        loginModel : loginmodelReducer,
        regisisterModel : regisisterReducer,
        user: authReducer,
    }
})