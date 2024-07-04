import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';
import path from 'path';

export const removeLastContact = async () => {
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
        if (contacts.length > 0) {
            contacts.pop();
            await fs.writeFile(filePathDb, JSON.stringify(contacts, null, 2), 'utf8');
            console.log("contact removed");
        } else {
            console.log('no contacts for removing');
        };
    } catch (error) {
        console.error('Problems with removing contact', error);
    };
};

removeLastContact();
