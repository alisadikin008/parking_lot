import * as path from 'path'
import * as fs from 'fs'
import readline from 'readline'
import * as data from './data'

export const generateCommandsFromInputLines = (line: string) => {
    const command = line.split(' ')
    switch(command[0]){
        case 'create_parking_lot':
            data.createParkingLot(Number(command[1]))
            break
        case 'park':
            data.addVehicle(command[1])
            break
        case 'leave':
            data.removeVehicle(command[1], Number(command[2]))
            break
        case 'status':
            data.printParkingLot()
            break
        default :
            console.log(`command not found: ${command[0]}`)
    }
}

export async function processLineByLine(filePath: string) {
    try {
        const fileStream = fs.createReadStream(filePath);
        const rl = readline.createInterface({
            input: fileStream,
            crlfDelay: Infinity
        });

        rl.on('line', function (line) {
            generateCommandsFromInputLines(line)
        });

    } catch (e) {
        throw new Error(e)
    }
}