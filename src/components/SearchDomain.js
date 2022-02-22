import '../styles/SearchContainer.css';

const SearchContainer = (props) => {
	const setValues = (c) => {
		props.setViewDomain(false);
		props.setSelectDomain(c);
	};

	return (
		<div className="searchDomain">
			<div className="searchGrid">
				{props.domain.map((el) => (
					<div className="elGrid">
						<p onClick={() => setValues(el.domain)}>{el.domain}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default SearchContainer;
