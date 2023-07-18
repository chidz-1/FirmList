import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { FIRM_FILTER_OPTIONS } from "../../globals/constants";
import { setFilterBy } from "./firmFilterSlice";
import { getFirmFilterOptions } from "./helpers";

const FirmFilter: React.FC = () => {
	const dispatch = useAppDispatch();
	const firmFilterBy = useAppSelector((store) => store.firmFilter.firmFilterBy);

	return getFirmFilterOptions({
		filterOptions: FIRM_FILTER_OPTIONS,
		dispatch,
		firmFilterBy,
		setFilterBy,
	});
};

export default FirmFilter;
