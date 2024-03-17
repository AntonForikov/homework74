import {promises as fs} from 'fs';
import {Message} from './types';

let messages: Message[] = [];

const fileDB = {
  async init () {
    try {
      const path = './messages';
      const files = await fs.readdir(path);
      const lastFive = files.slice((files.length - 5), files.length);

      lastFive.map(async (message) => {
        const data = await fs.readFile(`${path}/${message}`);
        const parsed = JSON.parse(data.toString());
        messages.push(parsed);
      });
    } catch {
      messages = [];
    }
  },
  async getData ()  {
    return messages;
  }
};

export default fileDB;