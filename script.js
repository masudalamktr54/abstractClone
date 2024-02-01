const ham = document.querySelector(".hamburger")
ham.addEventListener("click", () => {
	window.open('./abstract.html')
})

const signIn = document.querySelector('.hello')
signIn.addEventListener('click', () => {
	window.open('https://www.google.com/', 'popUpWindow','height=400,width=600,left=10,top=10','scrollbars=yes','menubar=no')
}, false)
