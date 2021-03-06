import { 
    createParkingLot,
    addVehicle,
    removeVehicle,
    printParkingLot,
    calculateParkingCharges } from './data'

describe('Create parking lot.', () => {
    test('Should return an array representing queue in parking lot', () => {
        expect(createParkingLot(6)).toEqual(expect.arrayContaining([1,2,3,4,5,6]))
    })
})

describe('Park a vehicle.', () => {
    test('Should park a vehicle to the first spot and return 1.', () => {
        expect(addVehicle('KA-01-HH-1234')).toEqual(1)
    })
    test('Should park a vehicle to the second spot and return 2.', () => {
        expect(addVehicle('KA-01-HH-9999')).toEqual(2)
    })
    test('Should park a vehicle to the third spot and return 3.', () => {
        expect(addVehicle('KA-01-BB-0001')).toEqual(3)
    })
    test('Should park a vehicle to the fourth spot and return 4.', () => {
        expect(addVehicle('KA-01-HH-7777')).toEqual(4)
    })
    test('Should park a vehicle to the fifth spot and return 5.', () => {
        expect(addVehicle('KA-01-HH-2701')).toEqual(5)
    })
    test('Should park a vehicle to the sixth spot and return 6.', () => {
        expect(addVehicle('KA-01-HH-3141')).toEqual(6)
    })
    test('Should refuse to park as parking lot if full.', () => {
        expect(addVehicle('MH-02-HH-5577')).toEqual(undefined)
    })
})

describe('Leave a vehicle.', () => {
    test('Should leave the vehicle at position 1 and return updated free slots.', () => {
        expect(removeVehicle('KA-01-HH-1234')).toEqual(expect.arrayContaining([1]))
    })

    test('Should leave the vehicle at position 4 and return updated free slots.', () => {
        expect(removeVehicle('KA-01-HH-7777', 5)).toEqual(expect.arrayContaining([1, 4]))
    })
})

describe('Park a vehicle after parking lot have slots free.', () => {
    test('Should park the vehicle returning allotted parking slot.', () => {
        expect(addVehicle('NL-02-HH-4122')).toEqual(1)
    })

    test('Should park the vehicle returning allotted parking slot.', () => {
        expect(addVehicle('AS-05-RT-8767')).toEqual(4)
    })

    test('Should refuse to park as parking lot is full.', () => {
        expect(addVehicle('ML-09-CD-9981')).toEqual(undefined)
    })
})

describe('Show parking lot status.', () => {
    const occupiedSlots = new Map([
        ['NL-02-HH-4122', 1],
        ['KA-01-HH-9999', 2],
        ['KA-01-BB-0001', 3],
        ['AS-05-RT-8767', 4],
        ['KA-01-HH-2701', 5],
        ['KA-01-HH-3141', 6]
    ])
    test('Should match with status of both occupied and empty slots.', () => {
        expect(printParkingLot().freeSlots).toEqual(expect.arrayContaining([]))
        expect(printParkingLot().occupiedSlots).toEqual(occupiedSlots)
    })
})

describe('Calculate parking charges.', () => {
    test('Should return charges $30 for 4 hours.', () => {
        expect(calculateParkingCharges('NL-02-HH-4122', 4)).toBe(30)
    })
    test('Should return charges $10 for 2 hours.', () => {
        expect(calculateParkingCharges('NL-02-HH-4122', 2)).toBe(10)
    })
    test('Should return charges $10 for 0.5 hours.', () => {
        expect(calculateParkingCharges('NL-02-HH-4122', 0.5)).toBe(10)
    })
    test('Should return charges $3990 for 400 hours.', () => {
        expect(calculateParkingCharges('NL-02-HH-4122', 400)).toBe(3990)
    })
})