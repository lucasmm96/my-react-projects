import { redirect } from 'react-router-dom';

export function getTokenDuration() {
	const storedExpiration = localStorage.getItem('expiration');
	const expirationDate = new Date(storedExpiration);
	const now = new Date();
	return expirationDate.getTime() - now.getTime();
}

export function getAuthToken() {
	const token = localStorage.getItem('token');

	if (!token) {
		return null;
	}

	const tokenDuration = getTokenDuration();
	
	console.log('tokenDuration:', tokenDuration);

	if (tokenDuration < 0) {
		return 'EXPIRED';
	}

	return token;
}

export function authLoader() {
	return getAuthToken();
}

export function checkAuthLoader() {
	const token = getAuthToken();

	if (!token) {
		return redirect('/auth');
	}

	return null;
}
