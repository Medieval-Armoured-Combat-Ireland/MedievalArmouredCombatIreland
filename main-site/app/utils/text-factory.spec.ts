import TextFactory from './text-factory';
import path from 'path';
import { promises as fs } from 'fs';

const textFactory = new TextFactory();

describe('TextFactory', () => {
    beforeEach(() => {
        jest.clearAllMocks();
        jest.resetModules();
    });

    describe('loadTextFromFile', () => {
        it('should load a text file from the file system and convert it to html', async () => {
            const filePath = 'some-file-path';
            const fileContents = 'some-file-contents';
            const expectedHtml = '<p>some-file-contents</p>';
            jest.spyOn(fs, 'readFile').mockResolvedValue(fileContents);
            jest.spyOn(path, 'join').mockReturnValue(filePath);
            const actualHtml = await textFactory.loadTextFromFile(filePath);
            expect(actualHtml).toBe(expectedHtml);
            expect(path.join).toHaveBeenCalledWith(process.cwd(), filePath);
            expect(fs.readFile).toHaveBeenCalledWith(filePath, 'utf8');
        });
    });
});
