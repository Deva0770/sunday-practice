var colors = [{
    fav: 'green'
},
    {fav: 'red'},
    {fav: 'blue'},
    {fav: 'yellow'}
]

var bestColor = colors.filter ((colors) => {
    return colors.fav == 'green'

})
//console.log (bestColor)
//return only color that has two letter 'ee'
//do not return color with one letter 'e'

//if (colors.length) {
var whichOne = bestColor.map ((colors) => {
var response = colors
response.display = colors.fav + ' has two e'
return response
})
//if (whichOne === [0]) {
//    return response
//}
//return whichOne
//}
console.log(whichOne)

