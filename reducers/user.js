import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6ImY0ZDgzN2FlLWE1ZDEtNDlmNC05YTU0LTU5NDQ4YWZlYWFmZiIsImlhdCI6MTczNzcxNTk5NCwiZXhwIjoxNzM5MDExOTk0fQ.gzQ3FLIRshffnLvEGjuNWQDngOQ-bCVsTgCLt_wqznY",
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