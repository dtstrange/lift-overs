$(document).ready(function() {
    $("#driver-update").on("submit", function(event) {
        event.preventDefault();
        var userFirstName = $("#user_first_name").val().trim();
        var userLastName = $("#user_last_name").val().trim();
        var userPhone = $("#user_phone").val().trim();
        var userEmail = $("#user_email").val().trim();
        var userPassword = $("#user_password").val().trim();
        $.ajax({
            method: "PUT",
            url: "/api/user/update/" + user_id,
            data: {
                first_name: userFirstName,
                last_name: userLastName,
                phone: userPhone,
                email: userEmail,
                user_password: userPassword
            }
        })
        .done(function(user) {
            console.log(user);
            location.href = "/";
        })
        .fail(function(xhr, text, error) {
            console.log(error);
        });
})

})