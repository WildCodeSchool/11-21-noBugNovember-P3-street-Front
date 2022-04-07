import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Protected = (props) => {
	const [access, setAccess] = useState(false);
	const navigate = useNavigate();
	const protectedRoute = () => {
		const token = localStorage.getItem('token');
		axios({
			method: 'POST',
			url: `${process.env.REACT_APP_BACK}/auth/protected`,
			headers: {
				Authorization: `Bearer ${token}`,
			},
		})
			.then((res) => {
				setAccess(res.data.acces);
			})
			.catch((err) => {
				setAccess(false);
				navigate('/');
			});
	};
	useEffect(() => {
		protectedRoute();
	});
	return <>{access ? props.children : null}</>;
};

export default Protected;
