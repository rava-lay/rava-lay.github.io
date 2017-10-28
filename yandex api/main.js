ymaps.ready(init);

function init() {
    var result = document.getElementById('result'), 

        destinations = {
            'Чечня': [43.24778259681907,45.74841249999995],
                'ДНР': [47.988847618976365,37.76118149999997],
        },
        myMap = new ymaps.Map('map', {
            center: destinations['Чечня'], 
            zoom: 10
        });
    result.textContent = 'Чечня это круто!';
    function clickGoto() {
        var pos = this.textContent;
        result.textContent = pos;
        myMap.panTo(destinations[pos], {
            flying: 1
        });
        return false;
    }
    var col = document.getElementsByClassName('goto');
    for (var i = 0, n = col.length; i < n; ++i) {
        col[i].onclick = clickGoto;
        result.textContent = result.textContent;
    }
}