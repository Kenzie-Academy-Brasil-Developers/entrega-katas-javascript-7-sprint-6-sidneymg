const good = (element) => console.log(`${element} é muito bom!`)
const maiorDez = (element) => element > 10
const vezesDois = (element) => element * 2
const ehPar = (element) => element % 2 === 0
const callReduce = (acc, cur) => acc + cur

/** ------------------ */
/** ---- forEach ---- */
/** ------------------ */

function newForEach(arr, callback) {

    for (let i = 0; i < arr.length; i++) {
        callback(arr[i], i, arr)
    }
}

newForEach(['batata', 'churros'], good)

/** ------------------ */
/** ---- fill -------- */
/** ------------------ */

function newFill(arr, value, start = 0, end = arr.length) {

    for (let i = start; i < end; i++) {
        arr[i] = value
    }

    return arr
}

console.log(newFill([1, 2, 3], 4, 1, 2))

/** ------------------ */
/** ------- map ------ */
/** ------------------ */

function newMap(arr, callback) {

    let res = []

    for (let i = 0; i < arr.length; i++) {
        res.push(callback(arr[i], i, arr))
    }

    return res;
}

console.log(newMap([1, 2, 3, 4], vezesDois))

/** ------------------ */
/** ------ some ------ */
/** ------------------ */

function newSome(arr, callback) {

    for (let i = 0; i < arr.length; i++) {

        if (callback(arr[i], i, arr)) {
            return true;
        }
    }

    return false;
}

console.log(newSome([1, 3, 5, 7, 8], ehPar))

/** ------------------ */
/** ------ find ------ */
/** ------------------ */

function newFind(arr, callback) {

    for (let i = 0; i < arr.length; i++) {

        if (callback(arr[i], i, arr)) {
            return arr[i]
        }
    }

    return undefined
}

console.log(newFind([1, 2, 3, 12, 15], maiorDez))

/** ------------------- */
/** ---- findIndex ---- */
/** ------------------- */

function newFindIndex(arr, callback) {

    for (let i = 0; i < arr.length; i++) {

        if (callback(arr[i], i, arr)) {
            return i
        }
    }

    return -1
}
console.log(newFindIndex([1, 2, 3, 12], maiorDez))
console.log(newFindIndex([1, 2, 3, 4], maiorDez))

/** ------------------ */
/** ----- every ------ */
/** ------------------ */

function newEvery(arr, callback) {

    for (let i = 0; i < arr.length; i++) {

        if (!callback(arr[i], i, arr)) {
            return false
        }
    }

    return true
}

console.log(newEvery([2, 4, 6], ehPar))
console.log(newEvery([1, 3, 6], ehPar))

/** ------------------ */
/** ----- filter ----- */
/** ------------------ */

function newFilter(arr, callback) {

    let newArr = []

    for (let i = 0; i < arr.length; i++) {

        if(callback(arr[i], i, arr)) {
            newArr.push(arr[i])
        }
    }

    return newArr
}

console.log(newFilter([2, 3, 4, 11, 12, 13], maiorDez))

/** ------------------ */
/** ----- concat ----- */
/** ------------------ */

function newConcat(arr1, arr2) {

    let newArr = []
    
    for (let i = 0; i < arr1.length; i++) {
        newArr.push(arr1[i])
    }
    for (let i = 0; i < arr2.length; i++) {
        newArr.push(arr2[i])
    }

    return newArr
}

console.log(newConcat(['a', 'b', 'c'], [1, 2, 3]))

/** ------------------ */
/** ---- includes ---- */
/** ------------------ */

function newIncludes(arr, elemento, indexInicial = 0) {

    let found = false

    for (let i = indexInicial; i < arr.length; i++) {

        if (elemento === arr[i]) {
            found = true
        }
    }

    return found
}
console.log(newIncludes(['batata', 'churros'], 'churros', 1))

/** ------------------ */
/** ---- indexOf ----- */
/** ------------------ */

function newIndexOf(arr, elemento, indexInicial = 0) {

    for (let i = indexInicial; i < arr.length; i++) {
        if (elemento === arr[i]) {
            return i
        }
    }

    return -1
}

console.log(newIndexOf([2, 5, 9, 9], 9, 2))
console.log(newIndexOf([2, 5, 9], 7))

/** ------------------ */
/** ------ join ------ */
/** ------------------ */

function newJoin(arr, separador = ',') {

    let str = ''

    for (let i = 0; i < arr.length; i++) {
        str += arr[i]

        if (i !== (arr.length-1)) {
            str += separador
        }
    }

    return str
}

console.log(newJoin(['Fire', 'Air', 'Water']))
console.log(newJoin(['Fire', 'Air', 'Water'], '**'))

/** ------------------ */
/** ----- reduce ----- */
/** ------------------ */

function newReduce(arr, callback, valorInicial = 0) {

    let acc = valorInicial

    for (let i = 0; i < arr.length; i++) {
        acc = callback(acc, arr[i], i, arr)
    }

    return acc
}

console.log(newReduce([2, 3, 5, 8], callReduce))

/** ------------------ */
/** ------ BONUS ----- */

/** ----- slice ------ */
/** ------------------ */

function newSlice(arr, inicio = 0, fim = arr.length) {


    if (inicio < 0) {
        inicio = arr.length + inicio
    }
    if (fim < 0) {
        fim = arr.length + fim
    }

    let copiaArr = []

    for (let i = inicio; i < fim; i++) {
        copiaArr.push(arr[i])
    }

    return copiaArr
}

console.log(newSlice(['Banana', 'Laranja', 'Limao'], 1, 3))