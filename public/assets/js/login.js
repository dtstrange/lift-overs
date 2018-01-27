$(document).ready(function () {
    $("#login_submit").on("click", function (event) {
        event.preventDefault();
        var email = $("#login_email").val().trim();
        var password = $("#login_password").val().trim();
        var type = $('#login_type').find(":selected").text();
        //console.log(email, password);

        axios.post("/auth/login", { email: email, password: password, user_type: type })
            .then(function (response) {
                console.log(response);
                document.cookie = "token=" + response.data.token;
                localStorage.setItem("token", response.data.token)
                var payload = JSON.parse(window.atob(localStorage.getItem("token").split('.')[1]));
                var userID = payload.id;
                var route = ""
                if(payload.type === "Organization") {
                    route = "org";
                }
                else {
                    route = "driver";
                }
                location.assign("/user/" + route + "/" + userID);

            })
            .catch(function(err) {
                console.error(err);
            })

    });

});