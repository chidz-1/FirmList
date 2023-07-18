import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Firm, FirmState } from "./types";
import { API_URL, API_KEY } from "../../globals/constants";
import { FETCH_API_STATUS_CODES } from "../../globals/types";

const initialState: FirmState = {
	firms: [],
	status: FETCH_API_STATUS_CODES.idle,
};

export const fetchFirmsAsync = createAsyncThunk("firm/fetchFirms", async () => {
	try {
		const response: Response = await fetch(
			`${API_URL}/api/v1/rankings?regionId=170&practiceAreaId=326`,
			{
				headers: { "x-api-key": API_KEY },
			}
		);

		if (!response.ok) {
			// TODO: catch all for now: would catch by particular error code
			throw new Error();
		}

		const data: Promise<Firm[]> = await response.json();
		return data;
	} catch (e) {
		return Promise.reject();
	}
});

const firmListSlice = createSlice({
	name: "firm",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchFirmsAsync.pending, (store) => {
				store.status = FETCH_API_STATUS_CODES.loading;
			})
			.addCase(fetchFirmsAsync.fulfilled, (store, action) => {
				store.status = FETCH_API_STATUS_CODES.idle;
				store.firms = action.payload;
			})
			.addCase(fetchFirmsAsync.rejected, (store) => {
				store.status = FETCH_API_STATUS_CODES.failed;
			});
	},
});

export default firmListSlice.reducer;
