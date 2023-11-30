let imgBox =document.getElementById("imgBox")
let qrImg =document.getElementById("qrImage")
let qrText =document.getElementById("qrText")

if (qrImg) {
    
} else {
    alert("please enter url")
}



function generateQR() {
    qrImg.src = " https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+qrText.value
    imgBox.classList.add("show-img")
}