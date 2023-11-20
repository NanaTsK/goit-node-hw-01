const fs = require("node:fs/promises");
const path = require("node:path");

const contactsPath = path.join(__dirname, "db/contacts.json");

async function listContacts() {
	const contacts = await fs.readFile(contactsPath);
	// return JSON.parse(contacts);
	const entries = JSON.parse(contacts.toString);
	return entries;
}

async function getContactById(contactId) {
	const contacts = await listContacts();
	const singleContact = contacts.find((item) => item.id === contactId);
	return singleContact || null;
}

async function removeContact(contactId) {}

async function addContact(name, email, phone) {}

module.exports = { listContacts, getContactById, removeContact, addContact };
