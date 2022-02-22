import '../styles/SearchContainer.css';

const SearchContainer = (props) => {
	const setValues = (el) => {
		props.setViewDomain(false);
	};

	return (
		<div className="searchGrid">
			{props.domain.map((el) => (
				<div className="elGrid">
					<p onClick={() => setValues(el)}>{el}</p>
				</div>
			))}
		</div>
	);
};

export default SearchContainer;
