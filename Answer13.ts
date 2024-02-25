// Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”

var favourite_transport : Array <[transport:string,brand:string]> = []

favourite_transport.push(["Bike","Honda"])
favourite_transport.push(["Car","Audi"])
favourite_transport.push(["Car","Grande"])
favourite_transport.push(["Car","BMW"])

favourite_transport.forEach(([transport,brand]) =>{
    console.log("I would Like to Own a " + brand + transport)

})