const data = {
logo:"/img/FS-logo.png",
heroImage:"/img/general-placeholder.png",
socials:[
{
icon:"/img/IG-logo.png",
link:"https://www.instagram.com/fuelstop.smoothies"
},
{
icon:"/img/gopud-logo.png",
link:"https://gofood.co.id/en"
},
{
icon:"/img/WA-logo.png",
link:"https://wa.me/628871827081" //
}
],
products:[
{
name:"Green Energy",
image:"/img/general-placeholder.png",
description:"Smoothie berbahan sayuran hijau dan buah segar untuk membantu menjaga energi dan mendukung aktivitas harian.",
nutrition:["High fiber","Vitamin A","Vitamin C","Low fat"]
},
{
name:"Berry Boost",
image:"/img/general-placeholder.png",
description:"Smoothie dengan kombinasi buah berry alami sebagai pilihan meal replacement yang praktis dan menyegarkan.",
nutrition:["Antioxidant","High vitamin","Natural sweetness","Rich in minerals"]
},
{
name:"Tropical Mix",
image:"/img/general-placeholder.png",
description:"Perpaduan buah tropis segar dengan rasa ringan untuk menemani aktivitas sehari-hari.",
nutrition:["Vitamin C","Natural fruit nutrients","Source of energy","Contains fresh fruit fiber"]
}
],
team:[
{
photo:"/img/PH-CEO.png",
name:"Muhammad Rafi Kanza",
role:"CEO"
},
{
photo:"/img/PH-Finance.png",
name:"Muhammad Iksan Hakiki",
role:"Financial Manager"
},
{
photo:"/img/PH-Marketing.png",
name:"Mochamad Windu Gamara Akuba",
role:"Marketing Manager"
},
{
photo:"/img/PH-Production.png",
name:"Rafif Aran Kusumo",
role:"Production Manager"
},
{
photo:"/img/PH-CS.png",
name:"Yanti Dewi Lestari",
role:"Customer Service"
}
]
};
//=========================================================
document.getElementById("logoImage").src=data.logo;
document.getElementById("heroImage").src=data.heroImage;
data.socials.forEach(s=>{
if(s.type==="icon"){
document.getElementById("socialLinks").innerHTML +=`
<a href="${s.link}" target="_blank">
<i class="fa-brands ${s.icon}"></i>
</a>
`;
}
else{
document.getElementById("socialLinks").innerHTML +=`
<a href="${s.link}" target="_blank">
<img 
src="${s.icon}"
class="social-image">
</a>
`;
}
});
data.products.forEach(p=>{
document.getElementById("productContainer").innerHTML+=`
<div class="card">
<img src="${p.image}">
<h3>${p.name}</h3>
<p>${p.description}</p>
<ul>
${p.nutrition.map(n=>`
<li>${n}</li>`).join("")}
</ul>
</div>
`;
});
data.team.forEach(t=>{
document.getElementById("teamContainer").innerHTML+=`
<div class="card">
<img src="${t.photo}">
<h3>${t.name}</h3>
<p>${t.role}</p>
</div>
`;
});