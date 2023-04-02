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
		removeItem: (state, action) => {
			const itemId = action.payload;
			state.contacts = state.contacts.filter((item) => {
				return item.id !== itemId;
			});
		},
		addItem: (state, action) => {
			const data = action.payload;
			state.contacts.push(data);
		},
		addFilter: (state, action) => {
			const filterValue = action.payload;
			state.filter = filterValue;
		},
	},
});
export default contactSlice.reducer;
export const { removeItem, addItem, addFilter } = contactSlice.actions;
