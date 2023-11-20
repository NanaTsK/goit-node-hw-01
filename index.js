const contacts = require("./contacts");
const { Command } = require("commander");

const program = new Command();

program
	.option("-a, --action <type>", "choose action")
	.option("-i, --id <type>", "user id")
	.option("-n, --name <type>", "user name")
	.option("-e, --email <type>", "user email")
	.option("-p, --phone <type>", "user phone");

// .action((str, options) => {
// 	const limit = options.first ? 1 : undefined;
// 	console.log(str.split(options.separator, limit));
// });

program.parse(process.argv);

const argv = program.opts();

async function invokeAction({ action, id, name, email, phone }) {
	switch (action) {
		case "list":
			const allContacts = await contacts.listContacts();
			break;

		case "get":
			const singleContact = await contacts.getContactById(id);
			console.log(singleContact);
			break;

		case "add":
			const newContact = await contacts.addContact(name, email, phone);
			console.log(singleContact);
			break;

		case "remove":
			const removedContact = await contacts.removeContactont(id);
			console.log(removedContact);
			break;

		default:
			console.warn(xxx);
	}
}

invokeAction(argv);
