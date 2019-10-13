console.log("🐱‍💻🐱‍💻🐱‍💻")

// window.onload = () => {
// document.write('blah')
let a = document.getElementById('fancybox-overlay')

let b = document.getElementById('fancybox-wrap')
// console.log(a)
// console.log(b)

if (a && b) {
	a.style.display = 'none'
	document.body.removeChild(b)
	console.log('works')
}
// }
