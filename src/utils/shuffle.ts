const shuffle = (array: any[]): any[] => {
    let m = array.length; let t; let i

    // While there remain elements to shuffle…
    while (m > 0) {
        // Pick a remaining element…
        i = Math.floor(Math.random() * m--)

        // And swap it with the current element.
        t = array[m]
        array[m] = array[i]
        array[i] = t
    }

    return array
}

// source: https://bost.ocks.org/mike/shuffle/

export default shuffle
