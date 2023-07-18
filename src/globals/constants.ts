import { Star } from "@smastrom/react-rating";

export const API_URL =
	"https://legalease-code-test-api.infra.eu-west-1.wearespork.net";

export const API_KEY = "L5e9X1a9gswH3x7ynz9cKyDnsgvqJEen";

export const enum SORT_BY_OPTIONS {
	tier = "tier",
	expertiseAndReputation = "expertiseAndReputation",
	clientSatisfaction = "clientSatisfaction",
}

export const EXPERTISE_RATING_LIMIT = 1000;

export const RATING_CUSTOM_STYLES = {
	itemShapes: Star,
	activeFillColor: "#000",
	inactiveFillColor: "#C0CFD5",
};

export const FIRM_FILTER_OPTIONS = {
	all: { value: "ALL", label: "All firms" },
	local: { value: "LOCAL", label: "Local firms" },
	global: { value: "GLOBAL", label: "Global firms" },
};
