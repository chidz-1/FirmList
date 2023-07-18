import { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { fetchFirmsAsync } from "./firmListSlice";
import { getFirmListMarkup } from "./helpers";
import { FirmListMainWrapper } from "./styles";

const FirmList: React.FC = () => {
	const dispatch = useAppDispatch();
	const fetchStatus = useAppSelector((store) => store.firm.status);
	const firmData = useAppSelector((store) => store.firm.firms);
	const sortBy = useAppSelector((store) => store.sort.sortBy);
	const firmFilterBy = useAppSelector((store) => store.firmFilter.firmFilterBy);

	useEffect(() => {
		// ~ onMount get the list of firms if it's not already in the store
		dispatch(fetchFirmsAsync());
	}, []);

	return (
		<FirmListMainWrapper>
			{getFirmListMarkup({ fetchStatus, sortBy, firmData, firmFilterBy })}
		</FirmListMainWrapper>
	);
};

export default FirmList;
