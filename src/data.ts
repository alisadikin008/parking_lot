const occupiedSlots = new Map<string, number>()
const freeSlots: number[] = []

export const createParkingLot = (size:number) => {
    console.log(`Created parking lot with ${size} slots`)
    for(let i = 1;i < size + 1; i++){
        freeSlots.push(i)
    }

    return freeSlots
}