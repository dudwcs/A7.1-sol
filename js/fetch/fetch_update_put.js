

window.onload = function () {
    update(3);

};

function update(id) {

    var data_enviar = {
        "name": "morpheus",
        "job": "zion resident"
    };

    var data_enviar_dif = {
        "name": "María",
        "job": "Vigo resident"
    };
    fetch(`https://reqres.in/api/users/${id}`, {
        method: 'PUT',
        body: JSON.stringify(data_enviar_dif),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    })
            .then((response) => response.json())
            .then((json) => console.log(json));

}
