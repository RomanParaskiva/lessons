import { matrixArray } from './functions' 

describe('create matrix', () => {
    const matrix = matrixArray(10, 10)
    it('matrix 10*10', () => {
        expect(matrixArray(10, 10)).toEqual(matrix)
    })
})