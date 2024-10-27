import { createSlice } from '@reduxjs/toolkit';
import { fetchData } from './actions'; 

const initialState = {
    data: [],
};

const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        update: (state, action) => {
            state.data = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchData.fulfilled, (state, action) => {
                state.data = action.payload;
            })
            .addCase(fetchData.rejected, (state, action) => {
                console.error('Bir hata oluştu! :', action.error); 
            });
    },
});

export const { update } = dataSlice.actions;
export default dataSlice.reducer;
