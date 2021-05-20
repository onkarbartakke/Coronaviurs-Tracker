function updateMap() {
  fetch("data.json")
    .then((response) => response.json())
    .then((resp) => {
      console.log(resp.data);
      resp.data.forEach((element) => {
        latitude = element.latitude;
        longitude = element.longitude;

        cases = element.infected;
        if(cases>255)
        {
            colour="red";
        }
        else {
            colour= 'rbg(${cases},0,0)';
        }
       

        new mapboxgl.Marker({
          draggable: false,
          color: colour
        })
          .setLngLat([longitude, latitude])
          .addTo(map);
      });
    });
}



setInterval(updateMap,20000);