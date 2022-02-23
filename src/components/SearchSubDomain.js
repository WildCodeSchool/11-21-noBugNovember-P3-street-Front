import axios from 'axios';
import { useEffect, useState } from 'react';
import '../styles/SearchContainer.css';

const SearchSubDomain = (props) => {
	const [isFilter, setIsFilter] = useState(false);
	const [reponse, setReponse] = useState([]);

	const setValues = (y) => {
		props.setViewSubDomain(false);
		props.setSelectSubDomain(y);
	};

	useEffect(() => {
		if (props.selectDomain !== undefined) {
			axios
				.put(`${process.env.REACT_APP_BACK}/all/domain_has_sub_domain`, {
					domain: props.selectDomain,
				})
				.then((response) => response.data)
				.then((data) => setReponse(data));
			setIsFilter(true);
		} else {
			setIsFilter(false);
		}
	}, [props.selectDomain]);

	return (
		<div className="searchSubDomain">
			<div className="searchGrid">
				{isFilter
					? reponse.map((el) => (
							<div className="elGrid">
								<p onClick={() => setValues(el.art_name)}>{el.art_name}</p>
							</div>
					  ))
					: props.subDomain.map((el) => (
							<div className="elGrid">
								<p onClick={() => setValues(el.art_name)}>{el.art_name}</p>
							</div>
					  ))}
			</div>
		</div>
	);
};

export default SearchSubDomain;
