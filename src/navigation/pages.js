import { Routes, Route } from 'react-router-dom';
import Navbar from '../components/navbar';
import Main from '../pages/main';
import Home from '../pages/home';
import TermsOfUse from '../pages/terms-of-use';

const Pages = () => {
	return (
		<>
			{/* <Navbar /> */}
			<Routes>
				<Route index path='/' element={<Home />} />
				<Route path='/main' element={<Main />} />
				<Route path='/terms-of-use' element={<TermsOfUse />} />
			</Routes>
		</>
	);
}

export default Pages;