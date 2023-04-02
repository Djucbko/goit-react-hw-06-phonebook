import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";


const App = () => {
	return (
		<div>
			<ContactForm />
			<ContactList />
		</div>
	);
};

export default App;
