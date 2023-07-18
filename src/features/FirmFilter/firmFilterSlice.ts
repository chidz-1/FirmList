import { createSlice } from "@reduxjs/toolkit";

import { FirmFilterState } from "./types";

const initialState: FirmFilterState = {
	firmFilterBy: "ALL",
};

const firmFilterSlice = createSlice({
	name: "firmFilter",
	initialState,
	reducers: {
		setFilterBy(state, action) {
			state.firmFilterBy = action.payload;
		},
	},
});

export const { setFilterBy } = firmFilterSlice.actions;
export default firmFilterSlice.reducer;
