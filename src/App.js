import { BrowserRouter as Router } from "react-router-dom";
import Pages from "./navigation/pages";
import './App.css';
import { Web3ContextProvider } from "./context/web3-context";

function App() {
	return (
		<div className="App">
			<Web3ContextProvider>
				<Router>
					<Pages />
				</Router>
			</Web3ContextProvider>
		</div>
	);
}

export default App;
