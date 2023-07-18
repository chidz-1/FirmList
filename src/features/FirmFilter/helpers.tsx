import { FirmFilterWrapper } from "./styles";
import { GetFirmFilterOptionsConfig } from "./types";

export function getFirmFilterOptions({
	firmFilterBy: currentFirmFilterBy,
	filterOptions,
	dispatch,
	setFilterBy,
}: GetFirmFilterOptionsConfig) {
	return (
		<FirmFilterWrapper>
			{Object.values(filterOptions).map(({ label, value }, index) => {
				return (
					<div key={`option-${index}`}>
						<label htmlFor={label}>
							<input
								{...(currentFirmFilterBy === value
									? { defaultChecked: true }
									: {})}
								name="firm-filter-option"
								type="radio"
								id={label}
								onChange={(e) => {
									dispatch(setFilterBy(value));
								}}
							/>
							{label}
						</label>
					</div>
				);
			})}
		</FirmFilterWrapper>
	);
}
