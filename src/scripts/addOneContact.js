import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import fs from 'fs/promises';
import path from 'path';

export const addOneContact = async () => {
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
            const newContact = createFakeContact();
            contacts.push(newContact);

        await fs.writeFile(filePathDb, JSON.stringify(contacts, null, 2), 'utf8');
        console.log("contact added");
    } catch (error) {
        console.error('Problems with adding contact', error);
    }
};

addOneContact();
