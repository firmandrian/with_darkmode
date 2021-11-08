function imgSlider(anything){
    document.querySelector('.starbucks').src = anything;
}

function changeCircleColor(color){
    const circle = document.querySelector('.circle');
    circle.style.background = color;
}
// const toggle = document.getElementById("toggle");
//     console.log(toggle)
//     toggle.addEventListener('change', (e) => {
//     document.body.classList.toggle("dark", e.target.checked)
// })
function toggle2() { 
    var condition = false
    //memanggil id
    var toggle2 = document.getElementById("nyoba");
    var text = document.getElementById("text");
    var bingung = document.getElementById("bingung");
        // console.log(toggle)
        // toggle.addEventListener('change', (e) => {
        // document.body.classList.toggle("dark", e.target.checked)
    // })
    if(condition) {
        //manggil class
        toggle2.classList.toggle("section")
        text.classList.toggle("textBox")
        text.classList.toggle("teks")
        // bingung.classList.toggle("pusing")
        
    }
    else{
        toggle2.classList.toggle("section-dua") 
        text.classList.toggle("textBox-dua")
        text.classList.toggle("teks-dua")
        bingung.classList.toggle("pusing-dua")
    }
}
