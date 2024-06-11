let profile = ["1.png", "2.jpeg", '3.webp', '4.webp', '5.jpeg', '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpeg', '11.jpeg']
let cname = ['vk_fan_club', 'iit_guwahati', 'Virat-Kohli', 'Ferrari', 'Ferrari', 'Messi', 'CSK', 'Ronaldo', 'RR', "Messi", 'Real_Madrid']
let hsh = ['@Viratkohli . 12h', '@IITGuwahati . 1h', '@Virat_kohli . 2h', '@ferrari . 27h', '@ferrari . 18h', '@mossi . 19h', '@csk . 2min', '@portugal . 2d', '@messi . 12h', '@the_real_madrid . 30min']


let n = profile.length
for (let i = 0; i < n; i++) {

    let post = document.createElement("div");
    let firstpost = document.body.querySelector(".firstpost")
    post.innerHTML = firstpost.innerHTML
    post.className = "border-[0.5px] flex flex-col items-end";

    let center = document.body.querySelector(".center");
    post.getElementsByTagName("img")[1].src = profile[i];
    post.getElementsByTagName("img")[0].src = profile[i];
    post.querySelector(".cname").innerHTML = cname[i];
    post.querySelector(".hsh").innerHTML = hsh[i];



    center.append(post);


}

document.body.getElementsByTagName("textarea")[0].addEventListener("click", () => {
    document.body.querySelector(".public").classList.remove("public");
    document.body.querySelector(".post2").classList.remove("opacity-50");
    document.body.querySelector(".belowtext").classList.add("border-t-[0.3px]");
    document.body.getElementsByTagName("textarea")[0].addEventListener("keypress", () => {
        document.body.querySelector(".aftertext").classList.remove("aftertext");
    })

})

var height = window.innerHeight


let account = document.body.querySelector(".account").innerHTML;
let topnew = document.body.querySelector(".top").innerHTML;



if (height <= 585) {
    document.body.querySelector(".top").innerHTML = document.body.querySelector(".account").innerHTML;
    document.body.querySelector(".top").getElementsByTagName("span")[1].innerHTML = "Home"
    document.body.querySelector(".top").classList.remove("justify-around")

    document.body.querySelector(".top").classList.add("justify-center")
    document.body.querySelector(".top").classList.add("items-center")

}
else {
    document.body.querySelector(".top").innerHTML = topnew;
    document.body.querySelector(".top").classList.add("justify-around")

    document.body.querySelector(".top").classList.remove("justify-center")
    document.body.querySelector(".top").classList.remove("items-center")
}

window.addEventListener('resize', function () {
    var height = window.innerHeight
    if (height <= 585) {
        document.body.querySelector(".top").innerHTML = document.body.querySelector(".account").innerHTML;
        document.body.querySelector(".top").getElementsByTagName("span")[1].innerHTML = "Home"
        document.body.querySelector(".top").classList.remove("justify-around")

        document.body.querySelector(".top").classList.add("justify-center")
        document.body.querySelector(".top").classList.add("items-center")
    }
    else {
        document.body.querySelector(".top").innerHTML = topnew;
        document.body.querySelector(".top").classList.add("justify-around")

        document.body.querySelector(".top").classList.remove("justify-center")
        document.body.querySelector(".top").classList.remove("items-center")
    }

});

let post1 = document.querySelector(".post1");
let width = window.innerWidth;
if (width <= 1160) {
    let img = document.createElement("img");
    img.src = "leaf.svg";
    post1.innerHTML = '';
    post1.append(img);

}
else {
post1.innerHTML="Post"
}

window.addEventListener('resize', function () {
    var width = window.innerWidth;
    if (width <= 1160) {
        let img = document.createElement("img");
        img.src = "leaf.svg";
        post1.innerHTML = '';
        post1.append(img);
    }
    else {
post1.innerHTML="Post"
    }

});

