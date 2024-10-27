import { createSlice } from '@reduxjs/toolkit';
import { fetchData } from './actions'; // fetchData aksiyonunu import edin

const initialState = {
    data: [],
    // images: [], // Eğer images state'i kullanmıyorsanız bunu da kaldırabilirsiniz.
};

const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        update: (state, action) => {
            state.data = action.payload; // Bu kısımda güncellemeler var
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchData.fulfilled, (state, action) => {
                state.data = action.payload; // API'den gelen veriyi state'e kaydet
            })
            .addCase(fetchData.rejected, (state, action) => {
                console.error('Veri yüklenirken hata oluştu:', action.error); // Hata mesajı
            });
    },
});

export const { update } = dataSlice.actions;
export default dataSlice.reducer;
