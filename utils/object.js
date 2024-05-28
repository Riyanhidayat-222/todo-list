const filterPropFn = (obj, props) => {
    let res = {}

    for (let i in props) {
        res[props[i]] = obj[props[i]]
    }

    return res
}

const filterProp = (objs, props) => {
    return objs.map((el) => filterPropFn(el, props))
}

module.exports = filterProp
