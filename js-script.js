const data = {


logo:
"https://images.unsplash.com/photo-1615485925873-0b1c2c4f8f4a",



heroImage:

"https://images.unsplash.com/photo-1553530666-ba11a7da3888",






socials:[


{
type:"icon",
icon:"fa-instagram",
link:"https://www.instagram.com/fuelstop.smoothies"
},


{
type:"image",
icon:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Gojek_logo_2022.svg/512px-Gojek_logo_2022.svg.png",
link:"https://gofood.co.id/en"
}


],






products:[


{

name:"Green Energy",

image:
"https://images.unsplash.com/photo-1622597467836-f3285f2131b8",


description:
"Smoothie berbahan sayuran hijau dan buah segar untuk membantu menjaga energi dan mendukung aktivitas harian.",


nutrition:[

"High fiber",

"Vitamin A",

"Vitamin C",

"Low fat"

]


},





{

name:"Berry Boost",


image:
"https://images.unsplash.com/photo-1553530666-ba11a7da3888",


description:
"Smoothie dengan kombinasi buah berry alami sebagai pilihan meal replacement yang praktis dan menyegarkan.",


nutrition:[

"Antioxidant",

"High vitamin",

"Natural sweetness",

"Rich in minerals"

]


},






{

name:"Tropical Mix",


image:
"https://images.unsplash.com/photo-1542444459-db47a7bd1d6b",


description:
"Perpaduan buah tropis segar dengan rasa ringan untuk menemani aktivitas sehari-hari.",


nutrition:[

"Vitamin C",

"Natural fruit nutrients",

"Source of energy",

"Contains fresh fruit fiber"

]


}



],





team:[


{

photo:
"https://randomuser.me/api/portraits/men/1.jpg",

name:
"Muhammad Rafi Kanza",

role:
"CEO"

},



{

photo:
"https://randomuser.me/api/portraits/men/2.jpg",

name:
"Muhammad Iksan Hakiki",

role:
"Financial Manager"

},



{

photo:
"https://randomuser.me/api/portraits/men/3.jpg",

name:
"Mochamad Windu Gamara Akuba",

role:
"Marketing Manager"

},



{

photo:
"https://randomuser.me/api/portraits/men/4.jpg",

name:
"Rafif Aran Kusumo",

role:
"Production Manager"

},



{

photo:
"https://randomuser.me/api/portraits/women/5.jpg",

name:
"Yanti Dewi Lestari",

role:
"Customer Service"

}



]

};





document
.getElementById("logoImage")
.src=data.logo;



document
.getElementById("heroImage")
.src=data.heroImage;







data.socials.forEach(s=>{


if(s.type==="icon"){


document
.getElementById("socialLinks")
.innerHTML +=`


<a href="${s.link}" target="_blank">

<i class="fa-brands ${s.icon}"></i>

</a>


`;


}


else{


document
.getElementById("socialLinks")
.innerHTML +=`


<a href="${s.link}" target="_blank">

<img 
src="${s.icon}"
class="social-image">

</a>


`;


}


});








data.products.forEach(p=>{


document
.getElementById("productContainer")
.innerHTML+=`


<div class="card">


<img src="${p.image}">


<h3>
${p.name}
</h3>



<p>
${p.description}
</p>



<ul>

${p.nutrition.map(n=>`

<li>${n}</li>

`).join("")}


</ul>


</div>


`;

});










data.team.forEach(t=>{


document
.getElementById("teamContainer")
.innerHTML+=`


<div class="card">


<img src="${t.photo}">


<h3>
${t.name}
</h3>


<p>
${t.role}
</p>


</div>


`;


});