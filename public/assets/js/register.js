$(document).ready(function () {
    $("#register_submit").on("click", function (event) {
        event.preventDefault();
        var email = $("#login_email").val().trim();
        var password = $("#login_password").val().trim();
        var type = $('#login_type').find(":selected").text();
        //console.log(email, password);

        axios.post("/auth/register", { email: email, password: password, user_type: type })
            .then(function (response) {
                console.log(response);
                location.assign("/login");

            })
            .catch(function(err) {
                console.error(err);
            })

    });

});