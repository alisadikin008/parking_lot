import { createParkingLot } from './data'

describe('Create parking lot.', () => {
    test('Should return an array representing queue in parking lot', () => {
        expect(createParkingLot(5)).toEqual(expect.arrayContaining([1,2,3,4,5]))
    })
})