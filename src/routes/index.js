import { Routes, Route } from 'react-router-dom';
<<<<<<< HEAD
import HomePage from '../pages/home-page/index';
import NotFoundPage from '../pages/404';
=======

import IndexPage from '../pages/index';
import NotFoundPage from '../pages/404';
import PlantsAndTrees, {FlowerPlants, ForBeginner, PetFriendly, NewArrival} from '../pages/todo/plantsAndTrees';
>>>>>>> main

function AppRoutes() {
	return (
		<Routes>
<<<<<<< HEAD
			<Route path='/' element={<HomePage />}></Route>
=======
			<Route path='/' element={<IndexPage />}></Route>
			<Route path='/plantsAndTrees' element={<PlantsAndTrees />}></Route>
			<Route path='/flower-plants' element={<FlowerPlants />}></Route>
			<Route path='/for-beginner' element={<ForBeginner />}></Route>
			<Route path='/pet-friendly' element={<PetFriendly />}></Route>
			<Route path='/new-arrival' element={<NewArrival />}></Route>
>>>>>>> main
			<Route path='*' element={<NotFoundPage />}></Route>
		</Routes>
	);
}

export default AppRoutes;
