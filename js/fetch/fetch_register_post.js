

window.onload = function () {
    onceLoaded();

};

function onceLoaded() {

    var data_enviar = {
        "email": "eve.holt@reqres.in",
        "password": "pistol"
    };
    fetch('https://reqres.in/api/register', {
        method: 'POST',
        body: JSON.stringify(data_enviar),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    })
            .then((response) => response.json())
            .then((json) => console.log(json));

}
