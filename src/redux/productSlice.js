import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../helpers/api';

export const  getNewProducts = createAsyncThunk('product/getNew', async()=>{

    try{
        const response = await  axiosInstance.get("/products?populate=*&filters[IsNew]=true");
        console.log(response.data)
        return response.data
    }
    catch (error) {
        throw(error)

    }
   })
   export const  getTWTProducts = createAsyncThunk('product/getTwT', async()=>{

    try{
        const response = await  axiosInstance.get("/products?populate=*&filters[categories][title][$eq]=true-wireless");
        console.log(response.data)
        return response.data
    }
    catch (error) {
        throw(error)

    }
   })
   export const  getNeckProducts = createAsyncThunk('product/getNeck', async()=>{

    try{
        const response = await  axiosInstance.get("/products?populate=*&filters[categories][title][$eq]=neck-band");
        console.log(response.data)
        return response.data
    }
    catch (error) {
        throw(error)

    }
   })
   export const  getWiredProducts = createAsyncThunk('product/getWire', async()=>{

    try{
        const response = await  axiosInstance.get("/products?populate=*&filters[categories][title][$eq]=wired");
        console.log(response.data)
        return response.data
    }
    catch (error) {
        throw(error)

    }
   })

   

const productSlice = createSlice({
    name: "products",
    initialState:{
        products:[],
        twtproducts:[],
        neckbands:[],
        wired:[],
        loading:false,
        error:null
    },
    extraReducers:(builder)=>{

        builder.addCase(getNewProducts.pending, (state)=>{
            state.loading = true
        })
        .addCase(getNewProducts.fulfilled, (state, action)=>{
            state.loading = false
            state.products = action.payload
        })
        .addCase(getNewProducts.rejected, (state, action)=>{
            state.loading = false
            state.error = action.payload
        })
        .addCase(getTWTProducts.pending, (state)=>{
            state.loading = true
        })
        .addCase(getTWTProducts.fulfilled, (state, action)=>{
            state.loading = false
            state.twtproducts = action.payload
        })
        .addCase(getTWTProducts.rejected, (state, action)=>{
            state.loading = false
            state.error = action.payload
        })
        .addCase(getNeckProducts.pending, (state)=>{
            state.loading = true
        })
        .addCase(getNeckProducts.fulfilled, (state, action)=>{
            state.loading = false
            state.neckbands = action.payload
        })
        .addCase(getNeckProducts.rejected, (state, action)=>{
            state.loading = false
            state.error = action.payload
        })
        .addCase(getWiredProducts.pending, (state)=>{
            state.loading = true
        })
        .addCase(getWiredProducts.fulfilled, (state, action)=>{
            state.loading = false
            state.wired = action.payload
        })
        .addCase(getWiredProducts.rejected, (state, action)=>{
            state.loading = false
            state.error = action.payload
        })

    

    }
})

export default productSlice.reducer