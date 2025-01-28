// function toggle() {
//     document.getElementById('toogle1').style.display = 'block'
// }

let menulist = document.getElementById('toogle')
menulist.style.maxHeight = "0px"

function toggle() {
    if (menulist.style.maxHeight == "0px") {
        menulist.style.maxHeight = '500px'
    } else {
        menulist.style.maxHeight = "0px"
    }
}


let socialmedia = document.getElementById('toogle1')
socialmedia.style.maxHeight = "0px"

function toggle1() {
    if (socialmedia.style.maxHeight == "0px") {
        socialmedia.style.maxHeight = "500px"
    } else {
        socialmedia.style.maxHeight = "0px"
    }
}