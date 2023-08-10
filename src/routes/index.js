import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/home-page/index';
import NotFoundPage from '../pages/404';

function AppRoutes() {
	return (
		<Routes>
			<Route path='/' element={<HomePage />}></Route>

			<Route path='*' element={<NotFoundPage />}></Route>
		</Routes>
	);
}

export default AppRoutes;
