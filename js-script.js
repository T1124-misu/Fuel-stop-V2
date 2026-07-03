const data = {
logo:"img/FS-logo.png",
heroImage:"img/FP-img.png",
socials:[
{
icon:"img/IG-logo.png",
link:"https://www.instagram.com/fuelstop.smoothies"
},
{
icon:"img/gopud-logo.png",
link:"https://gofood.co.id/en"
},
{
icon:"img/WA-logo.png",
link:"https://wa.me/628871827081" //
}
],
products:[
{
name:"Berry Stop",
image:"img/Berry-stop.png",
description:"A refreshing smoothie made with mixed berries, yogurt, and low-fat milk, providing a delicious meal replacement packed with natural antioxidants.",
nutrition:[
"Rich in anthocyanins",
"High in Vitamin C",
"Supports immune system",
"Promotes natural collagen production"
]
},
{
name:"Choco Charge",
image:"img/Choco-charge.png",
description:"A creamy blend of banana, pure cocoa powder, milk, and vanilla yogurt, designed to provide lasting energy while supporting mental focus.",
nutrition:[
"High in potassium",
"Source of dietary fiber",
"Rich in cocoa antioxidants",
"Helps reduce stress and improve focus"
]
},
{
name:"Tropical Fuel",
image:"img/Tropical-fuel.png",
description:"A tropical combination of pineapple, mango, and pure coconut water, delivering refreshing hydration and essential nutrients for an active lifestyle.",
nutrition:[
"High in Vitamin C",
"Contains natural digestive enzymes",
"Rich in electrolytes",
"Supports daily hydration"
]
}
],
team:[
{
photo:"img/PH-CEO.png",
name:"Muhammad Rafi Kanza",
role:"CEO"
},
{
photo:"img/PH-Finance.png",
name:"Muhammad Iksan Hakiki",
role:"Financial Manager"
},
{
photo:"img/PH-Marketing.png",
name:"Mochamad Windu Gamara Akuba",
role:"Marketing Manager"
},
{
photo:"img/PH-Production.png",
name:"Rafif Aran Kusumo",
role:"Production Manager"
},
{
photo:"img/PH-CS.png",
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