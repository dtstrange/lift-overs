// $(document).ready(function() {
//     $("#register-form").on("submit", function(event) {
//         event.preventDefault()
//         var userFirstName = $("#first_name").val().trim();
//         var userLastName = $("#last_name").val().trim();
//         var userType = $("#user_type").val().trim();
//         var userEmail = $("#user_email").val().trim();
//         var userPassword = $("#user_password").val().trim();

//         $.ajax({
//                 method: "POST",
//                 dataType: "json",
//                 url: "/api/user/create",
//                 data: {
//                     first_name: userFirstName,
//                     last_name: userLastName,
//                     user_type: userType,
//                     user_email: userEmail,
//                     user_password: userPassword
//                 }
//             })
//             .done(function(user) {
//                 console.log(user);
//                 location.href = "/user/driver";
//             })
//             .fail(function(xhr, text, error) {
//                 console.log(error);
//             });
//     })

// })
