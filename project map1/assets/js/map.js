function initMap() {
    let pos = {lat:50.265425564693366, lng: 21.043355180271693 };
    let opt = {
        center: pos,
        zoom: 4
    };

    let myMap = new google.maps.Map(document.getElementById("map"), opt);

    
}
function initMap1() {
    let pos = {lat:-25.02942494458699, lng: 134.42872345260844};
    let opt = {
        center: pos,
        zoom: 4
    };

    let myMap1 = new google.maps.Map(document.getElementById("map1"), opt);

    
}


