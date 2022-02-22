import '../styles/SearchContainer.css';

const SearchContainer = (props) => {
	const setValues = (el) => {
		props.setSelectSubDomain(false);
	};

	return (
		<div className="searchSubDomain">
			<div className="searchGrid">
				{props.subDomain.map((el) => (
					<div className="elGrid">
						<p onClick={() => setValues(el.id)}>{el.art_name}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default SearchContainer;
