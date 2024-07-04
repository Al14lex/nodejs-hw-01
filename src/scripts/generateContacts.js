import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import fs from 'fs/promises';
import path from 'path';

const generateContacts = async (number) => {
    try {
        const filePathDb = path.resolve(PATH_DB);
        let contacts = [];
        try {
            const data = await fs.readFile(filePathDb, 'utf8');
            contacts = JSON.parse(data);
        } catch (err) {
            if (err.code !== 'ENOENT') {
                throw err;
            }
        }
        for (let i = 0; i < number; i++){
            const newContact = createFakeContact();
            contacts.push(newContact);
        }

        await fs.writeFile(filePathDb, JSON.stringify(contacts, null, 2), 'utf8');
        console.log("contacts added");
    } catch (error) {
        console.error('Problems with adding contacts', error);
    }
};

generateContacts(5);