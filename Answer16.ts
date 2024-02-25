var guest = ["Saim","Talha","Faiz","Junaid","Jahanzeb",'Zia']

for (let GuestName of guest){
    console.log("Dear " + GuestName + " Now I found A bigger Table For Dinner")
}

guest.unshift("Khursheed");
console.log(guest);

let middleIndex = Math.floor(guest.length/2)
guest.splice(middleIndex ,0 , "Qasim")

console.log(guest);

guest.push("Muzammil");
console.log("guest")

for (let InvitedGuest of guest){
    console.log("Dear "+InvitedGuest+" You All Are Invited To Dinner")
}