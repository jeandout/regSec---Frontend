import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6ImY0ZDgzN2FlLWE1ZDEtNDlmNC05YTU0LTU5NDQ4YWZlYWFmZiIsImlhdCI6MTczNzcxNTk5NCwiZXhwIjoxNzM5MDExOTk0fQ.gzQ3FLIRshffnLvEGjuNWQDngOQ-bCVsTgCLt_wqznY",
    location: {},
    waypoints: [{
            "name": "DEFAULT",
            "coordinates": [
              1.4873060249,
              48.447095706
            ],
            "properties": {
              "sym": "DEFAULT",
              "type": "DEFAULT"
            }
          }],
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
            // console.log(`waypoint in store ${state.waypoints}`)
            // console.log(`premier waypoint in store ${state.waypoints[0].coordinates}`)
        }
    },
});

export const { addToken, updateLocation, updateWaypoints } = UserSlice.actions;
export default UserSlice.reducer;