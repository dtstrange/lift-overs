$(document).ready(function () {
    $("#login_submit").on("click", function (event) {
        event.preventDefault();
        var email = $("#login_email").val().trim();
        var password = $("#login_password").val().trim();

        //console.log(email, password);

        axios.post("/auth/login", { email: email, password: password })
            .then(function (response) {
                console.log(response);
                document.cookie = "token=" + response.data.token;
                localStorage.setItem("token", response.data.token)

            }).then(function () {
                axios({
                    method: "get",
                    url: "/user/driver",
                    headers: {
                        "Authorization": "Bearer " + localStorage.getItem("token")
                    }
                })
                    .then(function (response) {
                        console.log(response);
                        var elem = document.getElementById("msg");
                        elem.innerHTML = response.data;
                        var payload = JSON.parse(window.atob(localStorage.getItem("token").split('.')[1]));
                        console.log(payload)
                    })
                    .catch(function (err) {
                        console.error(err);
                    })
            })

    });

});