const fs = require("node:fs/promises");
const path = require("node:path");
const { nanoid } = require("nanoid");

const contactsPath = path.join(__dirname, "db/contacts.json");

async function listContacts() {
	const contacts = await fs.readFile(contactsPath);
	return JSON.parse(contacts.toString());
}

async function getContactById(contactId) {
	const contacts = await listContacts();
	const singleContact = contacts.find((item) => item.id === contactId);
	return singleContact || null;
}

async function removeContact(contactId) {
	const contacts = await listContacts();
	const contactIndex = contacts.findIndex(
		(contact) => contact.id === contactId
	);
	if (contactIndex !== -1) {
		const removedContact = contacts.splice(contactIndex, 1)[0];
		await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
		return removedContact;
	}
	return null;
}

async function addContact(name, email, phone) {
	const contacts = await listContacts();
	const newContact = { id: nanoid(), name, email, phone };
	contacts.push(newContact);
	await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
	return newContact;
}

module.exports = { listContacts, getContactById, removeContact, addContact };
