const contacts = require(`./contacts`);
const argv = require("yargs").argv;

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const allContacts = await contacts.listContacts();
      console.log(allContacts);
      break;

    case "get":
      const getContact = await contacts.getContactById(id.toString());
      console.log(getContact);
      break;

    case "add":
      const addContact = await contacts.addContact({ name, email, phone });
      console.log(addContact);
      break;

    case "remove":
      const deleteContact = await contacts.removeContact(id.toString());
      console.log(deleteContact);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};
invokeAction(argv);
