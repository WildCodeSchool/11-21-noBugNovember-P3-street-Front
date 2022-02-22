import '../styles/SearchContainer.css';

const SearchDomain = (props) => {
	const setValues = (el) => {
		props.setSelectDomain(false);
	};

	return (
		<div className="searchContainer">
			<div className="searchGrid">
				{props.domain.map((el) => (
					<div className="elGrid">
						<p onClick={() => setValues(el.id)}>{el.domain}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default SearchDomain;
