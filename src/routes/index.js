// gọi đến component được cung cấp bở package
import { Routes, Route } from 'react-router-dom';

import IndexPage from '../pages/index';
import NotFoundPage from '../pages/404';
import PlantsAndTrees, {FlowerPlants, ForBeginner, PetFriendly, NewArrival} from '../pages/todo/plantsAndTrees';

// logic khai báo path
// logic gán path cho pages

function AppRoutes() {
	// logic
	//view
	return (
		<Routes>
			<Route path='/' element={<IndexPage />}></Route>
			<Route path='/plantsAndTrees' element={<PlantsAndTrees />}></Route>
			<Route path='/flower-plants' element={<FlowerPlants />}></Route>
			<Route path='/for-beginner' element={<ForBeginner />}></Route>
			<Route path='/pet-friendly' element={<PetFriendly />}></Route>
			<Route path='/new-arrival' element={<NewArrival />}></Route>
			<Route path='/Hoya%20Carnosa%20Tricolor' element={<div>alo</div>}></Route>
			<Route path='*' element={<NotFoundPage />}></Route>
		</Routes>
	);
}

export default AppRoutes;
