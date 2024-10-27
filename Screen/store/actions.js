import { createAsyncThunk } from '@reduxjs/toolkit';



// Verileri almak için bir aksiyon
export const fetchData = createAsyncThunk('data/fetchData', async (dataUrl) => {
    const response = await fetch(dataUrl);
    const data = await response.json();
    return data; // Verileri döndür
});
