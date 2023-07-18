import { styled } from "styled-components";
import { FirmContainerProps, FirmListItemProps, TierProps } from "./types";

export const Tier = styled.span<TierProps>`
	display: flex;
	align-items: center;
	justify-content: center;
	background: ${(props) => (props.$active ? "#000" : "#d1cfcf")};
	color: #fff;
	padding: 0.5rem;
	border-radius: 30px;
	width: 30px;
	height: 30px;
`;

export const FirmListItem = styled.li<FirmListItemProps>`
	display: flex;
	align-items: center;
	list-style-type: none;
	background: ${(props) => (props.$booked ? "#DBECF2" : "#f2f2f2")};
	margin-bottom: 0.25rem;
	padding: 1rem;
`;

export const RatingContainer = styled.div`
	display: flex;
`;

export const SingleRating = styled.div`
	display: flex;
	font-weight: bold;

	span:last-child {
		margin-left: 0.5rem;
	}

	&:first-child {
		margin-right: 1rem;
	}
`;

export const FirmContainer = styled.div<FirmContainerProps>`
	flex: 1;
	padding-left: 1rem;

	h3 {
		display: flex;
		margin: 0 0 0.25rem;
		font-weight: ${(props) => (props.$booked ? "bold" : "normal")};
	}
`;

export const FirmListMainWrapper = styled.main`
	width: 100%;

	ul {
		margin: 0;
	}
`;
