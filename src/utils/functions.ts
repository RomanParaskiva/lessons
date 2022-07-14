
export const matrixArray = (rows: number, columns: number) => {
    const arr: {}[][] = []
    for (var i: number = 0; i < rows; i++) {
        arr[i] = []
        for (var j: number = 0; j < columns; j++) {
            arr[i][j] = { id: j + (i * 10) + 1, checked: false }
        }
    }
    return arr
}

export const handleMatrix = (matrix: {}[][], cb: any) => {
    let newArr = []
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
           newArr.push(cb(matrix[i][j]))
        }
    }

    return newArr
}