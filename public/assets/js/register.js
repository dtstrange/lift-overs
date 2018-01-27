$(document).ready(function () {
    $("#register_submit").on("click", function (event) {
        event.preventDefault();
        var email = $("#login_email").val().trim();
        var password = $("#login_password").val().trim();
        var type = $('#login_type').find(":selected").text();
        var firstName = $("#user_first_name").val().trim();
        var lastName = $("#user_last_name").val().trim();
        

        //console.log(email, password);

        axios.post("/auth/register", { email: email, password: password, user_type: type, user_first_name: firstName, user_last_name:lastName })
            .then(function (response) {
                console.log(response);
                location.assign("/login");

            })
            .catch(function(err) {
                console.error(err);
            })

    });

});