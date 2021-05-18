import {processLineByLine, generateCommandsFromInputLines} from './helper'
import { ReadLine, createInterface } from "readline";

const fileInput = process.argv.slice(2)
const readLine = createInterface({
	input: process.stdin,
	output: process.stdout,
	terminal: false
});

if (!fileInput.length) {
    readLine.on('line', function (line) {
        generateCommandsFromInputLines(line)
    });
}else{
    processLineByLine(`${fileInput}`).catch((e) => {
        console.log(e)
    })
}





