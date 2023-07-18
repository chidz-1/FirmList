import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";

import firmReducer from "../features/FirmList/firmListSlice";
import sortByReducer from "../features/SortBy/sortBySlice";
import firmFilterReducer from "../features/FirmFilter/firmFilterSlice";

export const store = configureStore({
	reducer: {
		firm: firmReducer,
		sort: sortByReducer,
		firmFilter: firmFilterReducer,
	},
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>;
