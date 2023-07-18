import { SORT_BY_OPTIONS } from "../../globals/constants";
import { FETCH_API_STATUS_CODES } from "../../globals/types";
import { firmFilterOptions } from "../FirmFilter/types";

type FirmRegion = {
	crossBorderCapability: string;
	clientSatisfactionRating: number;
	expertiseAndReputationRating: number;
	booking: boolean;
};

export type Firm = {
	readonly id: string;
	firm: {
		id: string;
		name: string;
		firmRegions: FirmRegion[];
	};
	tier: string;
};

export type FirmState = {
	firms: Firm[];
	status: FETCH_API_STATUS_CODES;
};

export type getFirmListMarkupConfig = {
	fetchStatus: FETCH_API_STATUS_CODES;
	sortBy: SORT_BY_OPTIONS;
	firmFilterBy: firmFilterOptions;
	firmData?: Firm[];
};

export type getFirmListRowByRowConfig = {
	firmData: Firm[];
	firmFilterBy: firmFilterOptions;
	sortBy: SORT_BY_OPTIONS;
};

export type TierProps = {
	$active: boolean;
};

export type FirmContainerProps = {
	$booked: boolean;
};

export type FirmListItemProps = FirmContainerProps;
