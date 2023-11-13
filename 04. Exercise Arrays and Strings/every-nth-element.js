function every_nth_element(arrayParam, step) {
    let result = [];
    for (let i = 0; i < arrayParam.length; i += step) {
        result.push(arrayParam[i])
    }

    return(result)
}

every_nth_element(['5',
    '20',
    '31',
    '4',
    '20'],
    2
)

every_nth_element(['dsa',
    'asd',
    'test',
    'tset'],
    2
)

every_nth_element(['1',
    '2',
    '3',
    '4',
    '5'],
    6
)