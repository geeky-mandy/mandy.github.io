
$(document).ready(function () {
    $(".inp-1").focus(function () {
        $(".first-p").html("Name")
        $(".fa-times-circle").css("display", "none")
    })
    $(".inp-1").focusout(function () {
        $(".first-p").html("")
        $(".first-p").append("&nbsp;")
    })

    $(".inp-2").focus(function () {
        $(".sec-p").html("Phone No.")
    })
    $(".inp-2").focusout(function () {
        $(".sec-p").html("")
        $(".sec-p").append("&nbsp;")
        // $(".fa-times-circle").css("display", "none")
    })
    $(".inp-3").focus(function () {
        $(".third-p").html("E-mail")
        $(".fa-times-circle").css("display", "none")
    })
    $(".inp-3").focusout(function () {
        $(".third-p").html("")
        $(".third-p").append("&nbsp;")
    })

    $(".inp-4").focus(function () {
        $(".fourth-p").html("Address")
        $(".fa-times-circle").css("display", "none")
    })
    $(".inp-4").focusout(function () {
        $(".fourth-p").html("")
        $(".fourth-p").append("&nbsp;")
    })

    $(".inp-5").focus(function () {
        $(".fifth-p").html("Firm Name")
    })
    $(".inp-5").focusout(function () {
        $(".fifth-p").html("")
        $(".fifth-p").append("&nbsp;")
    })

    $(".inp-6").focus(function () {
        $(".sixth-p").html("Firm Address")
    })
    $(".inp-6").focusout(function () {
        $(".sixth-p").html("")
        $(".sixth-p").append("&nbsp;")
    })

    $(".change-photo-btn").on("click", function () {
        $(".file-upload").click();
    })
    $(".file-upload").change(function () {
        var path = $(this).val();
        var filename = path.replace(/^C:\\fakepath\\/, "images/");
        $(".image-prof").attr('src', filename);
        console.log(filename);
    })

    // Cross Operation to delete all elements in input at once
    // Cross for Name
    $(".inp-1").keydown(function () {
        $(".cross-1").css("display", "inline")
    })
    $(".cross-1").on("click", function () {
        $(".inp-1").val(" ");
    })
    // Cross for Phone Number
    $(".inp-2").keydown(function () {
        $(".cross-2").css("display", "inline")
    })
    $(".cross-2").on("click", function () {
        $(".inp-2").val(" ");
    })
    // Cross for mail
    $(".inp-3").keydown(function () {
        $(".cross-3").css("display", "inline")
    })
    $(".cross-3").on("click", function () {
        $(".inp-3").val(" ");
    })
    // Cross for personal address
    $(".inp-4").keydown(function () {
        $(".cross-4").css("display", "inline")
    })
    $(".cross-4").on("click", function () {
        $(".inp-4").val(" ");
    })
    // Cross for firm name
    $(".inp-5").keydown(function () {
        $(".cross-5").css("display", "inline")
    })
    $(".cross-5").on("click", function () {
        $(".inp-5").val(" ");
    })
    // Cross for firm address
    $(".inp-6").keydown(function () {
        $(".cross-6").css("display", "inline")
    })
    $(".cross-6").on("click", function () {
        $(".inp-6").val(" ");
    })
});