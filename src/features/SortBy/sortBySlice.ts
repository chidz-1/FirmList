import { createSlice } from "@reduxjs/toolkit";

import { SORT_BY_OPTIONS } from "../../globals/constants";
import { SortByState } from "./types";

const initialState: SortByState = {
	sortBy: SORT_BY_OPTIONS.tier,
};

const sortBySlice = createSlice({
	name: "sort",
	initialState,
	reducers: {
		setSortby(state, action) {
			state.sortBy = action.payload;
		},
	},
});

export const { setSortby } = sortBySlice.actions;
export default sortBySlice.reducer;
