import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';
import path from 'path';

export const removeAllContacts = async () => {
    try {
        const filePathDb = path.resolve(PATH_DB);
        const contacts = [];
        await fs.writeFile(filePathDb, JSON.stringify(contacts, null, 2), 'utf8');
        console.log("contacts removed");
    } catch (error) {
        console.error('Problems with removing contacts', error);
    };
};

removeAllContacts();
