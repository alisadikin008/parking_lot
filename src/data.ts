const occupiedSlots = new Map<string, number>()
const freeSlots: number[] = []

const getNearestVacantSlot = () => {
    return freeSlots[0]
}

export const createParkingLot = (size: number) => {
    console.log(`Created parking lot with ${size} slots`)
    for(let i = 1;i < size + 1; i++){
        freeSlots.push(i)
    }

    return freeSlots
}

export const addVehicle = (vehicleNumber: string) => {
    if(freeSlots.length === 0){
        console.log(`Sorry, parking lot is full`)
        return
    }

    occupiedSlots.set(vehicleNumber, getNearestVacantSlot())
    freeSlots.shift()
    console.log(`Allocated slot number: ${occupiedSlots.get(vehicleNumber)}`)
    return occupiedSlots.get(vehicleNumber)
}

export const removeVehicle = (vehicleNumber: string, hours: number) => {
    if(!occupiedSlots.get(vehicleNumber)){
        console.log(`Registration number ${vehicleNumber} not found`)
        return
    }

    const parkingSpot = occupiedSlots.get(vehicleNumber)
    const charges = 10
    freeSlots.push(Number(parkingSpot))
    occupiedSlots.delete(vehicleNumber)
    console.log(`Registration number ${vehicleNumber} with Slot Number ${parkingSpot} is free with Charge ${charges}`)
    return freeSlots
}