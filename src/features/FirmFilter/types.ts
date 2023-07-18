import { FIRM_FILTER_OPTIONS_TYPE } from "../../globals/types";

export type firmFilterOptions = "ALL" | "GLOBAL" | "LOCAL";

export type FirmFilterState = {
	firmFilterBy: firmFilterOptions;
};

export type GetFirmFilterOptionsConfig = {
	filterOptions: FIRM_FILTER_OPTIONS_TYPE;
	dispatch: any; // TODO: type out
	firmFilterBy: firmFilterOptions;
	setFilterBy: any; // TODO: type out this "action"
};
