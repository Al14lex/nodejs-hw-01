import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';
import path from 'path';

export const getAllContacts = async () => {
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

         return contacts;
    } catch (error) {
        console.error('Problems with getting contacts', error);
         return [];
    }
};

getAllContacts().then(contacts => {
  console.log('All contacts:', contacts);
});
