import React from "react";
import Filter from "../Filter/Filter";
import { useSelector, useDispatch } from "react-redux";
import { removeItem } from "../../redux/features/contact/contactSlice";
import css from "./ContactList.module.css";
const ContactList = () => {
	const { contacts, filter } = useSelector((state) => {
		return state.contact;
	});
	const dispatch = useDispatch();
	let filteredContacts = contacts.filter((item) => {
		return item.name.toLowerCase().includes(filter.toLowerCase());
	});
	return (
		<div className={css.contactListWrapper}>
			<h2>Contacts</h2>
			<Filter />
			<ul>
				{filteredContacts.map((item) => {
					return (
						<li className={css.itemWrapper} key={item.id}>
							{item.name}:{item.number}
							<button
								type="button"
								onClick={() => {
									dispatch(removeItem(item.id));
								}}
							>
								Delete
							</button>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default ContactList;
