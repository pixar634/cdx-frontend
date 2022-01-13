import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        users: []
    },
    reducers: {
        setUser: (state, action) => {
            console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!%^&%^%&%^&%^&%^&%^&%^&%^&%^&%^&%^&%^&%^&%^&%^&%^&');
            state.users = action.payload;
        }
    }
});

// Action creators are generated for each case reducer function
export const { setUser } = userSlice.actions;

export default userSlice.reducer;
