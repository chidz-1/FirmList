export const enum FETCH_API_STATUS_CODES {
	loading = "loading",
	idle = "idle",
	failed = "failed",
}

type SingleFirmOption = { value: string; label: string };

export type FIRM_FILTER_OPTIONS_TYPE = {
	[key: string]: SingleFirmOption;
};
