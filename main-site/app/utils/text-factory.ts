import path from 'path';
import { promises as fs } from 'fs';
import showdown from 'showdown';

/**
 * Class that conatains reusable fucntions for text manipulation
 */
export default class TextFactory {
    /**
     * Loads a text file from the file system and converts it to html
     * This allows us to have rudementary localisation support as well as
     * keeping the component and page files cleaner.
     *
     * @param {string} filePath - The path to the text file
     * @returns {Promise<string} - The text file converted to html
     */
    public async loadTextFromFile(filePath: string): Promise<string> {
        const converter = new showdown.Converter();
        const textFileDir = path.join(process.cwd(), filePath);
        const fileContents = await fs.readFile(textFileDir, 'utf8');
        const textHtml = converter.makeHtml(fileContents);
        return textHtml;
    }
}
