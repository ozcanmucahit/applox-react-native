import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchData = createAsyncThunk('data/fetchData', async (dataUrl) => {
    const response = await fetch(dataUrl);
    const data = await response.json();
    return data; 
});
