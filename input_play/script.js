

$(document).ready(function () {
    $(".inp-1").focus(function () {
        $(".first-p").html("Name")
    })
    $(".inp-1").focusout(function () {
        $(".first-p").html("")
        $(".first-p").append("&nbsp;")
    })

    $(".inp-2").focus(function () {
        $(".sec-p").html("Email")
    })
    $(".inp-2").focusout(function () {
        $(".sec-p").html("")
        $(".sec-p").append("&nbsp;")
    })

    $(".inp-3").focus(function () {
        $(".third-p").html("Number")
    })
    $(".inp-3").focusout(function () {
        $(".third-p").html("")
        $(".third-p").append("&nbsp;")
    })

    $(".inp-4").focus(function () {
        $(".forth-p").html("Phone Number")
    })
    $(".inp-4").focusout(function () {
        $(".forth-p").html("")
        $(".forth-p").append("&nbsp;")
    })

    $(".inp-5").focus(function () {
        $(".fifth-p").html("Password")
    })
    $(".inp-5").focusout(function () {
        $(".fifth-p").html("")
        $(".fifth-p").append("&nbsp;")
    })
});