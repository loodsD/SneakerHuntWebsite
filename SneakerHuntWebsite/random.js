const menSneakers = [
     "Nike Air Force 1 Mid React.PNG",
     "Air Jordan 1 Mid SE.PNG",
     "Nike Air Max Terrascape 97.PNG",
     "Nike Air Max Terrascape Plus.PNG",
     "Nike Blazer Mid '77 Jumbo.jpeg",
     "FORCEBOUNCE VOLLEYBALL SHOES.jpg",
     "LITE RACER ADAPT 4.0 SHOES.png",
     "LITE RACER ADAPT 5.0 SHOES.png",
     "SWIFT RUN SHOES.png",
     "ULTRABOOST 1.0 SHOES.png",
     "CosmicCheckOldSkool_1.jpg",
     "CrayolaComfycushOldSkool_1.jpg",
     "JungleClash_01.jpg",
     "blackclassic_OldSkool_1.jpg",
     "mintclassic_OldSkool_1.jpg",
     "Blaze of Glory (Reverse Classics) Trainers .jpg",  //puma
     "PUMA Relax Men's Slip-On Shoes.jpg",
     "Puma Fire V2 Men's Shoes.jpg",
     "RS-Z Trainers.jpg",
     "Smash v2 Trainers.jpg"
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
    "Puma Fire V2 Men's Shoes",
    "Puma RS-Z Trainers",
    "Puma Smash v2 Trainers"
];

const womenSneakers = [
     "Air Jordan 1 Elevate High.PNG",
     "Nike AF-1 Shadow.PNG",
     "Nike Air Max Flyknit Racer.PNG",
     "Nike Air Max Koko.PNG",
     "Nike SuperRep Cycle 2 Next Nature.PNG",
     "GRAND COURT CLOUDFOAM LIFESTYLE COURT COMFORT SHOES.png",
     "MULTIX SHOES.png",
     "NMD_R1 SHOES.png",
     "ULTRA 4DFWD RUNNING SHOES.png",
     "ULTRABOOST DNA SHOES.png",
     "SLIPON_3.jpg",
     "Skateclassic_1.jpg",
     "VANSXONEPIECE_1.jpg",
     "VansxDanielJohnston_1.jpg",
     "VANSXSPONGEBOB_1.jpg",
     "Harrow Women's Shoes .jpg",
     "Muse Metal Women Trainers.jpg",
     "PUMA x AMI Rider FV Sneakers.jpg",
     "PUMA x POKON Rider FV Bulbasaur Sneakers .jpg",
     "PUMA x POKON Rider FV Pikachu Sneakers.jpg" 
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

var gender = "men";
function verifyGender(){
    var male = document.getElementById("men");  
  var female = document.getElementById("women");  
   if(female.checked == true){
        gender = "women";
   }
   return gender;
}

function displayImage(){   
    var pic = menSneakers;
    var desc = maleSneakerName;
    if(verifyGender() == "women"){
         pic = womenSneakers;
         desc = womenSneakerName;
    }       
    var i = Math.floor(Math.random()*pic.length);
    document.getElementById("name").innerHTML = 'Get yourself a pair of '+desc[i]+'! 😍';
    document.getElementById("sneaker").src = pic[i];
}
