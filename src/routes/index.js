import { Routes, Route } from 'react-router-dom';
import BuyTree from '../pages/buytree';
import About from '../pages/todo/aboutus'
import IndexPage from '../pages/index';
import NotFoundPage from '../pages/404';
import PlantsAndTrees, { FlowerPlants, ForBeginner, PetFriendly, NewArrival } from '../pages/todo/plantsAndTrees';
import Contact from '../pages/todo/contact';
import Feedback from '../pages/todo/feedback';

function AppRoutes() {
	return (
		<Routes>
			<Route path='/PlantPalace' element={<IndexPage />}></Route>
			<Route path='/' element={<IndexPage />}></Route>
			<Route path='/shop' element={<PlantsAndTrees />}></Route>
			<Route path='/flower-plants' element={<FlowerPlants />}></Route>
			<Route path='/for-beginner' element={<ForBeginner />}></Route>
			<Route path='/pet-friendly' element={<PetFriendly />}></Route>
			<Route path='/new-arrival' element={<NewArrival />}></Route>
			<Route path='/contact-us' element={<Contact />}></Route>
			<Route path='/about-us' element={<About />}></Route>
			<Route path='/feed-back' element={<Feedback />}></Route>
			<Route path='/buytree' element={<BuyTree />}></Route>
			<Route path='*' element={<NotFoundPage />}></Route>
			<Route path='/ten-repo' element={<IndexPage />}></Route>
			<Route path='/PlantPalace' element={<IndexPage />}></Route>
			<Route path='/' element={<IndexPage />}></Route>
			<Route path='https://teien.github.io/shop' element={<PlantsAndTrees />}></Route>
			<Route path='https://teien.github.io/flower-plants' element={<FlowerPlants />}></Route>
			<Route path='https://teien.github.io/for-beginner' element={<ForBeginner />}></Route>
			<Route path='https://teien.github.io/pet-friendly' element={<PetFriendly />}></Route>
			<Route path='https://teien.github.io/new-arrival' element={<NewArrival />}></Route>
			<Route path='https://teien.github.io/contact-us' element={<Contact />}></Route>
			<Route path='https://teien.github.io/about-us' element={<About />}></Route>
			<Route path='https://teien.github.io/feed-back' element={<Feedback />}></Route>
			<Route path='https://teien.github.io/buytree' element={<BuyTree />}></Route>
			<Route path='*' element={<NotFoundPage />}></Route>
			<Route path='https://teien.github.io/ten-repo' element={<IndexPage />}></Route>
		</Routes>
	);
}

export default AppRoutes;
