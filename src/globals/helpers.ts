import { EXPERTISE_RATING_LIMIT } from "./constants";

export function convertRatingIntoOutOfFive(rating: number): number {
	const convertedNumber = (rating / EXPERTISE_RATING_LIMIT) * 5;
	return parseFloat(convertedNumber.toFixed(2));
}
