var franchise={
    Location1:"Delhi",
    Location2:"Mumbai"
}

for(x in franchise){
    console.log(x)//  for printing the name
    console.log(franchise[x])// for printing the name with value
}

var franchisedetails={
    Location1:{
        Managername:"puneet",
        Phone:999999999
    },
    Location2:{
        Managername:"sumit",
        phone:9090909090
    }
}

for (x in franchisedetails){
    console.log(x)
    for(let y in franchisedetails[x]){
        console.log(" ",y,":",franchisedetails[x][y])
    }
}

var carprice={
    Creta:1700000,
    verna:1100000
}
//insert property

carprice.swift=950000
carprice.xuv500=2200000

console.log("After insertion:",carprice)

//update properties
carprice["Creta"]=1500000
console.log("After updating creta value",carprice)

//delete property
delete carprice.swift
console.log("value after deleting value",carprice)