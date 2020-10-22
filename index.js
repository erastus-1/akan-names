

function myAkangenerator(){
    let yourAkhan
    let userDate
    var dayOfBirth = document.getElementById("day").value
    var monthofBirth = document.getElementById("month").value
    var yearOfBirth = document.getElementById("year").value
    userDate= monthofBirth +"/"+dayOfBirth+"/"+yearOfBirth
    var ourDate = new Date(userDate).getDay()
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    var userDayOfBirth = weekday[ourDate]
    if(userDayOfBirth===undefined){
        document.getElementById("show").innerText = ``  
    } else {
        document.getElementById("show").innerText = `You were born on a ${userDayOfBirth}`
    }
   
    
    var genderM = document.getElementById("male").checked
    var genderF = document.getElementById("female").checked

    let gender 

    if(genderM){
        gender = "male" 
    } else if(genderF) {
        gender = "female"
    }

    if(dayOfBirth < 1 || dayOfBirth > 31 ){
        document.getElementById("dayError").innerText = "Day cannot be less than one or greater than 31 "
        document.getElementById("showday").innerText = " "
        
    }

    if(monthofBirth < 1 || monthofBirth > 12 ){
        document.getElementById("monthError").innerText = "Month cannot be less than one or greater than 12 "
        document.getElementById("showmonth").innerText = " "
        
    }

    if(yearOfBirth.length < 4 || yearOfBirth < 1000 ){
        document.getElementById("yearError").innerText = "year cannot be less than 1000 "
        document.getElementById("showyear").innerText = " "
    }   
    

    const akanMale = [
        "Kwasi",
        "Kwadwo",
        "Kwabena",
        "Kwaku",
        "Yaw",
        "Kofi",
        "Kwame",
       
    ]
    const akanFemale = [
        "Akosua","Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Amna"
    ] 

    if(gender==="male"){
        yourAkan = akanMale[ourDate]
        if(yourAkan===undefined){
            document.getElementById("showAkan").innerHTML=""
        } else {
            document.getElementById("showAkan").innerText=`Your akan name is ${yourAkan}`
        }
       
    } 

    if(gender==="female"){
        yourAkan = akanFemale[ourDate]
        if(yourAkan===undefined){
            document.getElementById("showAkan").innerHTML=""
        } else {
            document.getElementById("showAkan").innerText=`Your akan name is ${yourAkan}`
        }
       
    }
    document.getElementById("day").value = ""
    document.getElementById("month").value = ""
    document.getElementById("year").value = ""
    document.getElementById("showAkan").innerHTML=""
    
    return yourAkhan
}
