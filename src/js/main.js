//((((((((((((((((night node))))))))))))))))
const sunIcon = document.querySelector(".sun")
const moonIcon = document.querySelector(".moon")
// theme var 
const userTheme = localStorage.getItem('theme')
const systemTheme = window.matchMedia("(prefers-color-scheme:dark)").matches
//icon toggle
const iconToggle = () => {
    moonIcon.classList.toggle("display-none")
    sunIcon.classList.toggle("display-none")
}
//theme check
const themeCheck = () => {
    if (userTheme === "dark" || (!userTheme && systemTheme)) {
        document.documentElement.classList.add("dark")
        moonIcon.classList.add("display-none")
        return;
    }
    sunIcon.classList.add('display-none')
}
//theme manual switch
const themeSwitch = () => {
    if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark')
        localStorage.setItem("theme", "light")
        iconToggle()
        return
    }
    document.documentElement.classList.add('dark')
    localStorage.setItem("theme", "dark")
    iconToggle()
}
// call theme onclick button 
sunIcon.addEventListener("click", () => themeSwitch())
moonIcon.addEventListener("click", () => themeSwitch())
//invoke check
themeCheck()

// ((((((((((((((((finish dark mode))))))))))))))))
//eye vars
let eyeShowPassword = document.getElementById("eyeShowPassword")
let eyeShowConfirm = document.getElementById("eyeShowConfirm")
let password = document.getElementById("password")
let confirmPassword = document.getElementById("confirmPassword")
//handle click text and change img
eyeShowPassword.addEventListener("click", () => {
    if (password.type === "password") {
        password.type = "text"

        eyeShowPassword.src = "./image/show.svg"
    } else {
        password.type = "password"

        eyeShowPassword.src = "./image/hide.svg"
    }
})
eyeShowConfirm.addEventListener("click", () => {
    if (confirmPassword.type === "password") {
        confirmPassword.type = "text"
        eyeShowConfirm.src = "./image/show.svg"
    } else {
        confirmPassword.type = "password"
        eyeShowConfirm.src = "./image/hide.svg"
    }
})
// input number tailwind
// Initialization for ES Users
