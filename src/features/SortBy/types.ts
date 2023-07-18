import { SORT_BY_OPTIONS } from "../../globals/constants";

export type SortByState = {
	sortBy: SORT_BY_OPTIONS;
};

export type SORT_BY_OPTIONS_CONFIG_TYPE = {
	[key: string]: string;
};
