import { createParkingLot, addVehicle, removeVehicle } from './data'

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

    test('Should leave the vehicle at position 1 and return updated free slots.', () => {
        expect(removeVehicle('KA-01-HH-7777')).toEqual(expect.arrayContaining([1, 4]))
    })
})