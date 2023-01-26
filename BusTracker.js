mapboxgl.accessToken = 'pk.eyJ1IjoiY2J1cm5ldHQxOCIsImEiOiJjbGQyOWx0djkwMGY4M25ydnBsMW1xOTFyIn0.8XLMGdI939rB_j9W-0e4cQ';

const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-71.12022,42.37323],
    zoom: 15,
});

// create marker
var marker = new mapboxgl.Marker()
    .addTo(map);

// Request 86 bus data from MBTA
async function getBusLocations(){
	const url = 'https://api-v3.mbta.com/vehicles?filter[route]=1&include=trip';
	const response = await fetch(url);
	const json     = await response.json();
	return json.data;
}

//get bus data
async function run(){ 
	const locations = await getBusLocations();
	console.log(new Date());
	console.log(locations);
	setTimeout(run, 15000);
}

run();

/////////////////////////////////////////////////////////////////////////////////////////////////

// var newBusses = [];
// var currentBusses = [];
// async function run(){
//   // get bus data    
// const locations = await getBusLocations();
// console.log(new Date());
// console.log(locations);
//   console.log(currentBusses);

//   currentBusses.forEach((marker) => {marker.remove()});
//   currentBusses = [];

//   var busses = [];
//   if (typeof locations === 'undefined'){
//       console.log("nodata"); 
//   }else {
//   locations.forEach((attribute, i) =>{
//       var marker = 'marker' + locations[i].id;
//       var latlng = [locations[i].attributes.longitude, locations[i].attributes.latitude];
//       busses.push({bus:marker, loc:latlng});
//   });
  
//   newBusses = busses;
//   busses = [];	
// }

// addBusses(newBusses);
// }


// var counter = 0;
// function addBusses(arr1){
// if(arr1.length === 0){
//   console.log("no busses");
// }else{
//   arr1.forEach((bus, k) =>{
//       var marker = new mapboxgl.Marker()
//           .setLngLat(arr1[k].loc)
//           .addTo(map);
//       currentBusses.push(marker);
//       });
//   }
// }

// run();
// setInterval(run, 15000);