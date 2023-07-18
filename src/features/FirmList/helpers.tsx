import { ReactElement, ReactNode } from "react";
import { Rating } from "@smastrom/react-rating";

import { FETCH_API_STATUS_CODES } from "../../globals/types";
import { getFirmListMarkupConfig, getFirmListRowByRowConfig } from "./types";
import { RATING_CUSTOM_STYLES, SORT_BY_OPTIONS } from "../../globals/constants";
import {
	FirmContainer,
	FirmListItem,
	Tier,
	RatingContainer,
	SingleRating,
} from "./styles";
import { convertRatingIntoOutOfFive } from "../../globals/helpers";

function getFirmListRowByRow({
	firmData,
	sortBy,
	firmFilterBy,
}: getFirmListRowByRowConfig): ReactElement[] {
	let filteredFirmData = firmData;

	// Filter by firm type TODO: Move to helper function
	if (firmFilterBy !== "ALL") {
		if (firmFilterBy === "GLOBAL") {
			filteredFirmData = firmData.filter(
				({ firm: { firmRegions } }) =>
					firmRegions[0].crossBorderCapability === "GLOBAL"
			);
		} else {
			// LOCAL
			filteredFirmData = firmData.filter(
				({ firm: { firmRegions } }) =>
					firmRegions[0].crossBorderCapability === "LOCAL"
			);
		}
	}

	let sortedFirmData = filteredFirmData;

	// sort by TODO: Move to helper function
	switch (sortBy) {
		case SORT_BY_OPTIONS.clientSatisfaction:
			sortedFirmData = [...filteredFirmData].sort((a, b) => {
				return (
					b.firm.firmRegions[0].clientSatisfactionRating -
					a.firm.firmRegions[0].clientSatisfactionRating
				);
			});
			break;
		case SORT_BY_OPTIONS.expertiseAndReputation:
			sortedFirmData = [...filteredFirmData].sort((a, b) => {
				return (
					b.firm.firmRegions[0].expertiseAndReputationRating -
					a.firm.firmRegions[0].expertiseAndReputationRating
				);
			});
			break;
		default: // Tier
			sortedFirmData = [...filteredFirmData].sort((a, b) => {
				return (
					parseFloat(a.tier.split("T_")[1]) - parseFloat(b.tier.split("T_")[1])
				);
			});
	}

	return sortedFirmData.map(({ tier, firm: { name, firmRegions } }, index) => {
		const { clientSatisfactionRating, expertiseAndReputationRating, booking } =
			firmRegions[0];

		// TODO: make a ...split("T_")[1] formatter helper function.. already done multiple times

		return (
			<FirmListItem $booked={booking} key={`firm-row-${index + 1}`}>
				<Tier $active={booking}>{`${tier.split("T_")[1]}`}</Tier>
				<FirmContainer $booked={booking}>
					<h3>{name}</h3>
					{booking && (
						<RatingContainer>
							<SingleRating>
								<span>Expertise and Reputation:</span>
								<span>
									<Rating
										itemStyles={RATING_CUSTOM_STYLES}
										style={{ maxWidth: 100 }}
										readOnly
										value={convertRatingIntoOutOfFive(
											expertiseAndReputationRating
										)}
									/>
								</span>
							</SingleRating>
							<SingleRating>
								<span>Client Satisfaction:</span>
								<span>
									<Rating
										itemStyles={RATING_CUSTOM_STYLES}
										style={{ maxWidth: 100 }}
										readOnly
										value={convertRatingIntoOutOfFive(clientSatisfactionRating)}
									/>
								</span>
							</SingleRating>
						</RatingContainer>
					)}
				</FirmContainer>
			</FirmListItem>
		);
	});
}

export function getFirmListMarkup({
	fetchStatus,
	sortBy,
	firmFilterBy,
	firmData = [],
}: getFirmListMarkupConfig): ReactNode {
	switch (fetchStatus) {
		case FETCH_API_STATUS_CODES.idle:
			if (firmData.length) {
				// TODO: Memoize as there is sorting that occurs within
				return (
					<ul>{getFirmListRowByRow({ firmData, sortBy, firmFilterBy })}</ul>
				);
			}
			return null;
		case FETCH_API_STATUS_CODES.loading:
			return <h3>Loading data...</h3>; // TODO: animated spinner would go nicely
		case FETCH_API_STATUS_CODES.failed:
			return <h3>Failed to load data</h3>;
	}
}
