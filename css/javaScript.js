var name = male; if(sunday); { console.log(Kwasi);
} elseif(monday); { console.log(Kwadwo);
} elseif(tuesday); { console.log(Kwabena);
} elseif(wednesday); { console.log(Kwaku);
} elseif(thursday); { console.log(Yawa);
} elseif(friday);{ console.log(Kofi);
} elseif(saturday); { console.log(Kwame);
}
var name = female; if(sunday); { console.log(Akosua);
} elseif(monday); { console.log(Adwoa);
} elseif(tuesday); { console.log(Abenaa);
} elseif(wednesday); { console.log(Akua);
} elseif(thursday); { console.log(Yaa);
} elseif(friday);{ console.log(Afua);
} elseif(saturday); { console.log(Ama);
}
Day of the week (d) = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) mod 7;
var day = function(name, date) {
    return name + date;
} 
var calculate = day(name, date);
alert(calculate);