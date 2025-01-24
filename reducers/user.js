import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    token: "",
    location: {},
    waypoints: [],
    routes: [],
    logisticRoutes: []
};

export const UserSlice = createSlice({
    name: 'user',

    initialState,
    reducers: {
        addToken: (state, action) => {
            state.token = (action.payload);
        },
        updateLocation: (state, action) => {
            state.location = (action.payload);
        },
        updateWaypoints: (state, action) => {
            state.waypoints = (action.payload);
        },
        updateRoutes: (state, action) => {
            state.routes = (action.payload);
        },
        updateLogisticRoutes: (state, action) => {
            state.logisticRoutes = (action.payload);
        }
    },
});

export const { addToken, updateLocation, updateWaypoints, updateRoutes, updateLogisticRoutes } = UserSlice.actions;
export default UserSlice.reducer;