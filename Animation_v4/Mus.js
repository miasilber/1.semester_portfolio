$("#btn_startposition").on("click", btn_startposition_klik);
$("#btn_mus_ind").on("click", btn_mus_ind_klik);
$("#btn_mus_kigger").on("click", btn_mus_kigger_klik);
$("#btn_ugle_taler").on("click", btn_ugle_taler_klik);
$("#btn_mus_kaster_noed_paa_ugle").on("click", btn_mus_kaster_noed_paa_ugle_klik);
$("#btn_mus_disko").on("click", btn_mus_disko_klik);

/*baggrundslyd = document.getElementById("baggrundslyd");
baggrundslyd[0].play();
baggrundslyd[0].volume = 2;*/
function titel_start_pos() {
    $ ("#titel").addClass ("btn_start")

}

function btn_startposition_klik() {
    $("#baggrundslyd")[0].play();
    $("#baggrundslyd")[0].volume = 0;
    $("#baggrundslyd").animate({
        volume: .3
    }, 10000);
    $("#mus_container").addClass("mus_start_pos");
}

function btn_mus_ind_klik() {
    $("#mus_container").removeClass("mus_start_pos");
    $("#mus_container").addClass("mus_move_right");
    $("#mus_sprite").addClass("mus_walkcycle");
    $("#mus_container").on("animationend");
}

function btn_mus_kigger_klik() {
    $("#mus_sprite").removeClass("mus_walkcycle");
    $("#mus_sprite").addClass("mus_kigger");
}

function btn_ugle_taler_klik() {
    $("#ugle_snak")[0].play();
    $("#ugle_snak").animate({
        volume: .7
    }, 10000);
    $("#ugle_container").addClass("ugle_taler");
    $("#ugle_sprite").addClass("ugle_walkcycle");
    $("#ugle_container").on("animationend");
}

function btn_mus_kaster_noed_paa_ugle_klik() {
    $("#mus_snak")[0].play();
    $("#mus_snak").animate({
        volume: .7
    }, 10000);
    $("#ugle_container").removeClass("ugle_taler");
    $("#mus_sprite").addClass("mus_walkcycle_2");
    /*$("#ugle_container").removeClass("ugle_walkcycle");*/
    $("#mus_container").on("animationend", function () {
        $("#nut_container").addClass("nut_flyver");
        $("#nut_container").on("animationend", ugle_falder_ned);
    });

}

function ugle_falder_ned() {
    $("#ugle_sprite").addClass("ugle_walkcycle_2");
    $("#ugle_container").removeClass("");

    $("#ugle_container").addClass("ugle_falder_ned");
    $("#ugle_container").on("animationend");
}

/*function btn_mus_disko_klik {
    $("#ugle_container").removeClass("");
    $("#mus_container").removeClass("");
    $("#mus_container").addClass("mus_move_right_2");
    $("#mus_sprite").addClass("mus_walkcycle_3");
    $("#mus_container").on("animationend");
}*/

function btn_reset_klik() {
    $("#mus_sprite").removeClass();
    $("#mus_container").removeClass();
    $("#ugle_container").removeClass();
    $("#ugle_sprite").removeClass();

}
