import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';

export interface NavbarState {
    navbarVisible: boolean;
}

const initialState: NavbarState = {
    navbarVisible: false,
};

const navbarSlice = createSlice({
    name: 'navbar',
    initialState,
    reducers: {
        toggle(state, action: PayloadAction<boolean>) {
            state.navbarVisible = action.payload;
        },
    },
});

export const navbarActions = navbarSlice.actions;

export default navbarSlice;
