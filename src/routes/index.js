import { Routes, Route } from 'react-router-dom';
import BuyTree from '../pages/buytree';
import About from '../pages/todo/aboutus'
import IndexPage from '../pages/index';
import NotFoundPage from '../pages/404';
import PlantsAndTrees, { FlowerPlants, ForBeginner, PetFriendly, NewArrival, AllProduct } from '../pages/todo/plantsAndTrees';
import Contact from '../pages/todo/contact';
import Feedback from '../pages/todo/feedback';

function AppRoutes() {
	return (
		<Routes>
			<Route path='/' element={<IndexPage/>}></Route>
			<Route path='/plant-and-tree' element={<PlantsAndTrees />}></Route>
			<Route path='/shop' element={<AllProduct />}></Route>
			<Route path='/flower-plants' element={<FlowerPlants />}></Route>
			<Route path='/for-beginner' element={<ForBeginner />}></Route>
			<Route path='/pet-friendly' element={<PetFriendly />}></Route>
			<Route path='/new-arrival' element={<NewArrival />}></Route>
			<Route path='/contact-us' element={<Contact />}></Route>
			<Route path='/about-us' element={<About />}></Route>
			<Route path='/feed-back' element={<Feedback />}></Route>
			<Route path='/buytree' element={<BuyTree />}></Route>
			<Route path='*' element={<NotFoundPage />}></Route>

		</Routes>
	);
}

export default AppRoutes;
