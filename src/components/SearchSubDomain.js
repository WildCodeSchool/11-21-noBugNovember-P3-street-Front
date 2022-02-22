import '../styles/SearchContainer.css';

const SearchContainer = (props) => {
	const setValues = (y) => {
		props.setViewSubDomain(false);
		props.setSelectSubDomain(y);
	};

	return (
		<div className="searchSubDomain">
			<div className="searchGrid">
				{props.subDomain.map((el) => (
					<div className="elGrid">
						<p onClick={() => setValues(el.art_name)}>{el.art_name}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default SearchContainer;
