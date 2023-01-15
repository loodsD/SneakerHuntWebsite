const menSneakers = [
     "imgsrc/nike/male/Nike Air Force 1 Mid React.PNG",
     "imgsrc/nike/male/Air Jordan 1 Mid SE.PNG",
     "imgsrc/nike/male/Nike Air Max Terrascape 97.PNG",
     "imgsrc/nike/male/Nike Air Max Terrascape Plus.PNG",
     "imgsrc/nike/male/Nike Blazer Mid '77 Jumbo.jpeg",
     "imgsrc/adidas/male/FORCEBOUNCE VOLLEYBALL SHOES.jpg",
     "imgsrc/adidas/male/LITE RACER ADAPT 4.0 SHOES.png",
     "imgsrc/adidas/male/LITE RACER ADAPT 5.0 SHOES.jpg",
     "imgsrc/adidas/male/SWIFT RUN SHOES.png",
     "imgsrc/adidas/male/ULTRABOOST 1.0 SHOES.png",
     "imgsrc/vans/male/CosmicCheckOldSkool_1.jpg",
     "imgsrc/vans/male/CrayolaComfycushOldSkool_1.jpg",
     "imgsrc/vans/male/JungleClash_01.jpg",
     "imgsrc/vans/male/blackclassic_OldSkool_1.jpg",
     "imgsrc/vans/male/mintclassic_OldSkool_1.jpg",
     "imgsrc/puma/male/Blaze of Glory (Reverse Classics) Trainers .jpg",  //puma
     "imgsrc/puma/male/PUMA Relax Men's Slip-On Shoes.jpg",
     "imgsrc/puma/male/Puma Fire V2 Men's Shoes.jpg",
     "imgsrc/puma/male/RS-Z Trainers.jpg",
     "imgsrc/puma/male/Smash v2 Trainers.jpg"
];

const maleSneakerName = [
     "Nike Air Force 1 Mid React",
     "Nike Air Jordan 1 Mid SE",
     "Nike Air Max Terrascape 97",
     "Nike Air Max Terrascape Plus",
     "Nike Blazer Mid '77 Jumbo",
     "ADIDAS FORCEBOUNCE VOLLEYBALL SHOES",
     "ADIDAS LITE RACER ADAPT 4.0 SHOES",
     "ADIDAS LITE RACER ADAPT 5.0 SHOES",
     "ADIDAS SWIFT RUN SHOES",
     "ADIDAS ULTRABOOST 1.0 SHOES",
     "Vans CosmicCheckOldSkool",
     "Vans CrayolaComfycushOldSkool",
     "Vans JungleClash",
     "Vans Blackclassic OldSkool",
     "Vans Mintclassic OldSkool",
     "Puma Blaze of Glory (Reverse Classics) Trainers",
     "Puma Relax Men's Slip-On Shoes",
     "iPuma Fire V2 Men's Shoes",
     "Puma RS-Z Trainers",
     "Puma Smash v2 Trainers"
];

const womenSneakers = [
     "imgsrc/nike/female/Air Jordan 1 Elevate High.PNG",
     "imgsrc/nike/female/Nike AF-1 Shadow.PNG",
     "imgsrc/nike/female/Nike Air Max Flyknit Racer.PNG",
     "imgsrc/nike/female/Nike Air Max Koko.PNG",
     "imgsrc/nike/female/Nike SuperRep Cycle 2 Next Nature.PNG",
     "imgsrc/adidas/female/GRAND COURT CLOUDFOAM LIFESTYLE COURT COMFORT SHOES.png",
     "imgsrc/adidas/female/MULTIX SHOES.png",
     "imgsrc/adidas/female/NMD_R1 SHOES.png",
     "imgsrc/adidas/female/ULTRA 4DFWD RUNNING SHOES.png",
     "imgsrc/adidas/female/ULTRABOOST DNA SHOES.png",
     "imgsrc/vans/female/SLIPON_3.jpg",
     "imgsrc/vans/female/Skateclassic_1.jpg",
     "imgsrc/vans/female/VANSXONEPIECE_1.jpg",
     "imgsrc/vans/female/VansxDanielJohnston_1.jpg",
     "imgsrc/vans/female/VANSXSPONGEBOB_1.jpg",
     "imgsrc/puma/female/Harrow Women's Shoes .jpg",
     "imgsrc/puma/female/Muse Metal Women Trainers.jpg",
     "imgsrc/puma/female/PUMA x AMI Rider FV Sneakers.jpg",
     "imgsrc/puma/female/PUMA x POKON Rider FV Bulbasaur Sneakers .jpg",
     "imgsrc/puma/female/PUMA x POKON Rider FV Pikachu Sneakers.jpg"
];

const womenSneakerName = [
     "Nike Air Jordan 1 Elevate High",
     "Nike AF-1 Shadow",
     "Nike Air Max Flyknit Racer",
     "Nike Air Max Koko",
     "Nike SuperRep Cycle 2 Next Nature",
     "ADIDAS GRAND COURT CLOUDFOAM LIFESTYLE COURT COMFORT SHOES",
     "ADIDAS MULTIX SHOES",
     "ADIDAS NMD_R1 SHOES",
     "ADIDAS ULTRA 4DFWD RUNNING SHOES",
     "ADIDAS ULTRABOOST DNA SHOES",
     "Vans SlipOn",
     "Vans Skateclassic",
     "Vans X One Piece",
     "Vans X Daniel Johnston",
     "Vans X Spongebob",
     "Puma Harrow Women's Shoes",
     "Puma Muse Metal Women Trainers",
     "PUMA x AMI Rider FV Sneakers",
     "PUMA x POKON Rider FV Bulbasaur Sneakers",
     "PUMA x POKON Rider FV Pikachu Sneakers"
];


var gender = "";
function verifyGender(){
    var male = document.getElementById("men");  
  var female = document.getElementById("women"); 
  if(male.checked == false && female.checked == false) {
     alert("Please refresh this page and select a gender. 😊");
  }
   if(female.checked == true){
        gender = "women";
   }else if(male.checked == true){
        gender="men"
   }
   return gender;
}

function displayImage(){   
     var male = document.getElementById("men");  
     var female = document.getElementById("women"); 
     if(male.checked == false && female.checked == false) {
        alert("Please refresh this page and select a gender. 😊");
     }
    var pic = "";
    var desc = "";
    if(verifyGender() == "women"){
         pic = womenSneakers;
         desc = womenSneakerName;
    }else if(verifyGender() == "men"){
     pic = menSneakers;
     desc = maleSneakerName;
    }
    var i = Math.floor(Math.random()*pic.length);
    document.getElementById("name").innerHTML = 'Get yourself a pair of '+desc[i]+'! 😍';
    document.getElementById("sneaker").src = pic[i];
}
