const fs = require("fs/promises");
const path = require("path");

const contactsPath = path.join(__dirname, "db/contacts.json");

export const listContacts = async () => {
	const contacts = await fs.readFile(contactsPath);
	return JSON.parse(contacts);
};

export const getContactById = async (contactId) => {
	const contacts = await listContacts();
	const singleContact = contacts.find((item) => item.id === contactId);
	return singleContact || null;
};

export const removeContact = async (contactId) => {};

export const addContact = async (name, email, phone) => {};
