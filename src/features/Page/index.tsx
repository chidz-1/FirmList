import FirmFilter from "../FirmFilter";
import FirmList from "../FirmList";
import SortBy from "../SortBy";
import { MainWrapper, PageWrapper } from "./styles";

const Page: React.FC = () => (
	<PageWrapper>
		<SortBy />
		<MainWrapper>
			<FirmFilter />
			<FirmList />
		</MainWrapper>
	</PageWrapper>
);

export default Page;
