//Step 1: Where does the data live

var url = 'https://docs.google.com/spreadsheets/d/1drroEqrVyaKaXUvX-4MA5wget5ruzfTDgSQhu4iqD64/export?format=csv'

//The 5 steps of data visualization
//1. Fetch
var fetch = require('./fetch.js')

fetch(url, function(err, rawData) {
if (err) {alert(err.message)}
res.header('Access-Control-Allow-Origin', "*")
show(rawData)
})

//helper
function show (data) {
textarea = document.createElement('textarea')
textarea.style.width = window.innerWidth + 'px'
textarea.style.height = window.innerHeight + 'px'
textarea.value = JSON.stringify(data, null, 2)
document.body.appendChild(textarea)
}

//2. Transform


//3. Display


//4. Interact


//5. Publish