import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';
import {
	createBrowserRouter,
	RouterProvider,
	Routes,
	Route,
	Link,
	BrowserRouter,
	Navigate,
} from 'react-router-dom';
import './style.scss';
import { UserAuth } from './context/AuthContext';

function App() {
	const { currentUser } = UserAuth();

	console.log(currentUser);

	const ProtectedRouteNotLogin = ({ children }) => {
		if (!currentUser) {
			return <Navigate to={'/login'} />;
		}
		return children;
	};

	const ProtectedRouteLogin = ({ children }) => {
		if (!currentUser) {
			return children;
		}
		return <Navigate to={'/'} />;
	};

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/">
					<Route
						path=""
						element={
							<ProtectedRouteNotLogin>
								<Home />
							</ProtectedRouteNotLogin>
						}
					/>
					<Route
						path="login"
						element={
							<ProtectedRouteLogin>
								<Login />
							</ProtectedRouteLogin>
						}
					/>
					<Route path="register" element={<Register />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
