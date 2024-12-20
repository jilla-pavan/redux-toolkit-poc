import { configureStore } from "@reduxjs/toolkit";
import nameSlice from './nameSlice'

const appStore = configureStore({
    reducer: {
        name : nameSlice,
    },
});
export default appStore;

