import { ReactElement } from "react";

import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { SORT_BY_OPTIONS_CONFIG } from "./constants";
import { SORT_BY_OPTIONS_CONFIG_TYPE } from "./types";
import { setSortby } from "./sortBySlice";
import { SortByContainer } from "./styles";

const SortBy: React.FC = () => {
	const dispatch = useAppDispatch();
	const sortingBy = useAppSelector((store) => store.sort.sortBy);

	function getDropdownListMarkup(): ReactElement[] {
		const sortKeys = Object.keys(SORT_BY_OPTIONS_CONFIG);
		return sortKeys.map((key) => {
			return (
				<option key={`option-${key}`} value={key}>
					{(SORT_BY_OPTIONS_CONFIG as SORT_BY_OPTIONS_CONFIG_TYPE)[key]}
				</option>
			);
		});
	}

	return (
		<SortByContainer>
			<select
				defaultValue={sortingBy}
				onChange={(e) => {
					dispatch(setSortby(e.target.value));
				}}
			>
				{getDropdownListMarkup()}
			</select>
		</SortByContainer>
	);
};

export default SortBy;
