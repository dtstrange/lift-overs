$(document).ready(function() {
    $("#register-form").on("submit", function(event) {
        event.preventDefault()
        var userEmail = $("#user_email").val().trim();
        var userPassword = $("#user_password").val().trim();
        var userType = $("#user_type").val().trim();

        $.ajax({
                method: "POST",
                dataType: "json",
                url: "/api/user/create",
                data: {
                    first_name: userEmail,
                    user_password: userPassword,
                    user_type: userType
                }
            })
            .done(function(user) {
                console.log(user);
                location.href = "/driver-reg";
            })
            .fail(function(xhr, text, error) {
                console.log(error);
            });
    })

})
