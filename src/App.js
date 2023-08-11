import './App.css';
import AppRoutes from './routes/index';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
	return (
		<div className='App'>
			<Header />
			<div className='d-flex align-start'>
				<div className='w-100'>
					<AppRoutes />
				</div>
			</div>
			<Footer/>
		</div>
	);
}

export default App;
