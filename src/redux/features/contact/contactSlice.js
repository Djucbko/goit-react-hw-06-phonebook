import { createSlice } from "@reduxjs/toolkit";
import initialContacts from "../../../contactsItems.json";

const initialState = {
	contacts: initialContacts,
	filter: "",
};

const contactSlice = createSlice({
	name: "contact",
	initialState,
	reducers: {
		removeItem: (state, {payload: id}) => {
			state.contacts = state.contacts.filter((item) => {
				return item.id !== id;
			});
		},
		addItem: (state, {payload: contact}) => {
			state.contacts.push(contact);
		},
		addFilter: (state, {payload: value}) => {
			state.filter = value;
		},
	},
});
export default contactSlice.reducer;
export const { removeItem, addItem, addFilter } = contactSlice.actions;
