$(document).ready(function () {
"use strict";

/*$('nav ul li a').hover(function(){
    if ($(this).hasClass('menu-select')) {
        $(this).css('color', 'white');
    } else {
        $(this).css('color', 'color: rgba(86,247,189,1)');
    }
});*/


function clickWork() {
            $menuWork.addClass('menu-select');
            $menuContact.removeClass('menu-select');
            $menuAbout.removeClass('menu-select');
            $mainContent.hide().fadeOut(1000).html(main).fadeIn(1000);
            bn.fadeIn(1000);
            setTimeout(function() {$('.span3')[0].click(function(){});}, 750);
}
    var $menuWork = $('#menu-work');
    var $menuContact = $('#menu-contact');
    var $menuAbout = $('#menu-about');
    var $mainContent = $('#main-content');

    var $row34 = $("#row3-4");
    var $row56 = $("#row5-6");
    var $row12 = $("#row1-2");

    var bn = $("#bottom-nav");
    var main = $('#main-content').html();
    var profile = '<div id="lateral" class="pull-left"><p>PROFILE</p></div><div id="lateral-dir" class="pull-right"><p class="bold">Name</p><p class="nbold">Daniela Pereira</p><p class="bold">Born</p><p class="nbold">July &rsquo;87</p><p class="bold">Nationality</p><p class="nbold">Portuguese</p><p class="bold">Interests</p><p class="nbold">Photography . Design . Illustration . Music . Cinema</p></div><div class="bottom-nav"><br><div class="square-active square-profile"></div><div class="square-inactive square-work"></div><div class="square-inactive square-edu"></div><div class="square-inactive square-skills"></div></div>';
    var workTab = '<div id="lateral" class="pull-left"><p>WORK</p></div><div id="lateral-dir" class="pull-right"><p class="bold">UPPARTNER | THE TOUCH POINT AGENCY</p><p class="nbold">APRIL&rsquo; 12 _ SEPTEMBER&rsquo; 12</p><p class="bold">SHARKBITE | INTEGRATED COMMUNICATION</p><p class="nbold">APRIL&rsquo; 10 _ SEPTEMBER&rsquo; 11</p></div><div class="bottom-nav"><br><div class="square-inactive square-profile"></div><div class="square-active square-work"></div><div class="square-inactive square-edu"></div><div class="square-inactive square-skills"></div></div>';    
    var edu = '<div id="lateral" class="pull-left"><p>EDUCATION</p></div><div id="lateral-dir" class="pull-right"><p class="bold">school of communication, arts and information technology | lusófona</p><p class="nbold">post graduate | design</p><p class="bold">higher school of communication and media studies | ipl</p><p class="nbold">graduate | audiovisual and multimedia</p><p class="bold">lxschool</p><p class="nbold">master graphic designer</p><p class="bold">iefp</p><p class="nbold">macromedia flash and actionscript 2</p></div><div class="bottom-nav"><br><div class="square-inactive square-profile"></div><div class="square-inactive square-work"></div><div class="square-active square-edu"></div><div class="square-inactive square-skills"></div></div>';
    var skills = '<div id="lateral" class="pull-left"><p>SKILLS</p></div><div id="lateral-dir" class="pull-right"><p class="bold">Graphic Design</p><p class="nbold">Adobe Illustrator . Adobe Indesign</p><p class="bold">Photography</p><p class="nbold">Adobe Photoshop</p><p class="bold">Video</p><p class="nbold">Avid . Adobe After Effects</p><p class="bold">3D</p><p class="nbold">Blender</p><p class="bold">Web</p><p class="nbold">Adobe Dreamweaver . Adobe Flash</p></div><div class="bottom-nav"><br><div class="square-inactive square-profile"></div><div class="square-inactive square-work"></div><div class="square-inactive square-edu"></div><div class="square-active square-skills"></div></div>';
    var contactLinks = '<div id="lateral" class="pull-left"><p>FOLLOW</p></div><a href="http://www.flickr.com/photos/dpdanielapereira/" target="_blank"><div class="lateral-contacts pull-right contact-flickr"></div></a><a href="http://pt.linkedin.com/pub/daniela-pereira/27/5b5/4b/pt" target="_blank"><div class="lateral-contacts pull-right contact-linkedin"></div></a><a href="http://vimeo.com/user2372629" target="_blank"><div class="lateral-contacts pull-right contact-vimeo"></div></a><a href="http://instagram.com/instagramgramstyle" target="_blank"><div class="lateral-contacts pull-right contact-insta"></div></a>';
   
    $(".work1").click(function () {
        $.fancybox.open([{
            href: "img/works/agendaola_1.jpg"
        }, {
            href: "img/works/agendaola_10.jpg"
        }, {
            href: "img/works/agendaola_11.jpg"
        }, {
            href: "img/works/agendaola_13.jpg"
        }, {
            href: "img/works/agendaola_14.jpg"
        }, {
            href: "img/works/agendaola_15.jpg"
        }, {
            href: "img/works/agendaola_16.jpg"
        }, {
            href: "img/works/agendaola_17.jpg"
        }, {
            href: "img/works/agendaola_18.jpg"
        }, {
            href: "img/works/agendaola_19.jpg"
        }, {
            padding: 0
        }]);
        return !1;
    });
    $(".work2").click(function () {
        $.fancybox.open([{
            href: "img/works/danone_1.jpg"
        }, {
            href: "img/works/danone_2.jpg"
        }, {
            padding: 10
        }]);
        return !1;
    });
    $(".work3").click(function () {
        $.fancybox.open([{
            href: "img/works/ea_1.jpg",
            title: "work1"
        }, {
            href: "img/works/ea_2.jpg",
            title: "work2"
        }, {
            href: "img/works/ea_3.jpg",
            title: "work3"
        }, {
            href: "img/works/ea_4.jpg",
            title: "work4"
        }, {
            href: "img/works/ea_5.jpg",
            title: "work5"
        }, {
            padding: 10
        }]);
        return !1;
    });
    $(".work4").click(function () {
        $.fancybox.open([{
            href: "img/works/ementa_1.jpg"
        }, {
            href: "img/works/ementa_2.jpg"
        }, {
            href: "img/works/ementa_3.jpg"
        }, {
            href: "img/works/ementa_4.jpg"
        }, {
            href: "img/works/ementa_5.jpg"
        }, {
            href: "img/works/ementa_6.jpg"
        }, {
            href: "img/works/ementa_7.jpg"
        }, {
            padding: 0
        }]);
        return !1;
    });
    $(".work5").click(function () {
        $.fancybox.open([{
            href: "img/works/full_data_1.jpg"
        }, {
            href: "img/works/full_data_2.jpg"
        }, {
            href: "img/works/full_data_3.jpg"
        }, {
            href: "img/works/full_data_4.jpg"
        }, {
            href: "img/works/full_data_5.jpg"
        }, {
            padding: 0
        }]);
        return !1;
    });
    $(".work6").click(function () {
        $.fancybox.open([{
            href: "img/works/hs_1.jpg"
        }, {
            href: "img/works/hs_2.jpg"
        }, {
            href: "img/works/hs_3.jpg"
        }, {
            href: "img/works/hs_4.jpg"
        }, {
            href: "img/works/hs_5.jpg"
        }, {
            padding: 0
        }]);
        return !1;
    });
    $(".work7").click(function () {
        $.fancybox.open([{
            href: "img/works/ilustra_1.jpg"
        }, {
            href: "img/works/ilustra_2.jpg"
        }, {
            padding: 0
        }]);
        return !1;
    });
    $(".work8").click(function () {
        $.fancybox.open([{
            href: "img/works/KV_sonae.jpg"
        }, {
            padding: 0
        }]);
        return !1;
    });
    $(".work9").click(function () {
        $.fancybox.open([{
            href: "img/works/brochuraLagoalva_1.jpg"
        }, {
            href: "img/works/brochuraLagoalva_2.jpg"
        }, {
            href: "img/works/brochuraLagoalva_3.jpg"
        }, {
            href: "img/works/brochuraLagoalva_4.jpg"
        }, {
            href: "img/works/brochuraLagoalva_5.jpg"
        }, {
            href: "img/works/brochuraLagoalva_6.jpg"
        }, {
            href: "img/works/brochuraLagoalva_7.jpg"
        }, {
            padding: 0
        }]);
        return !1;
    });
    $(".work10").click(function () {
        $.fancybox.open([{
            href: "img/works/la_prod_1.jpg"
        }, {
            href: "img/works/la_prod_2.jpg"
        }, {
            href: "img/works/la_prod_3.jpg"
        }, {
            href: "img/works/la_prod_4.jpg"
        }, {
            href: "img/works/la_prod_5.jpg"
        }, {
            href: "img/works/la_prod_6.jpg"
        }, {
            padding: 0
        }]);
        return !1;
    });
    $(".work11").click(function () {
        $.fancybox.open([{
            href: "img/works/mor_2.jpg"
        }, {
            href: "img/works/mor_3.jpg"
        }, {
            href: "img/works/mor_4.jpg"
        }, {
            padding: 0
        }]);
        return !1;
    });
    $(".work12").click(function () {
        $.fancybox.open([{
            href: "img/works/MT_1.jpg"
        }, {
            href: "img/works/MT_2.jpg"
        }, {
            href: "img/works/MT_3.jpg"
        }, {
            href: "img/works/MT_4.jpg"
        }, {
            padding: 0
        }]);
        return !1;
    });
    $(".work13").click(function () {
        $.fancybox.open([{
            href: "img/works/myself_1.jpg"
        }, {
            href: "img/works/myself_2.jpg"
        }, {
            href: "img/works/myself_3.jpg"
        }, {
            padding: 0
        }]);
        return !1;
    });
    $(".work14").click(function () {
        $.fancybox.open([{
            href: "img/works/nestle_1.jpg"
        }, {
            href: "img/works/nestle_2.jpg"
        }, {
            padding: 0
        }]);
        return !1;
    });
    $(".work15").click(function () {
        $.fancybox.open([{
            href: "img/works/oralB_0_1.jpg"
        }, {
            href: "img/works/oralB_0.jpg"
        }, {
            href: "img/works/oralB_1.jpg"
        }, {
            href: "img/works/oralB_2.jpg"
        }, {
            href: "img/works/oralB_3.jpg"
        }, {
            href: "img/works/oralB_4.jpg"
        }, {
            href: "img/works/oralB_5.jpg"
        }, {
            href: "img/works/oralB_6.jpg"
        }, {
            href: "img/works/oralB_7.jpg"
        }, {
            href: "img/works/oralB_8.jpg"
        }, {
            href: "img/works/oralB_9.jpg"
        }, {
            href: "img/works/oralB_10.jpg"
        }, {
            href: "img/works/oralB_11.jpg"
        }, {
            href: "img/works/oralB_12.jpg"
        }, {
            href: "img/works/oralB_13.jpg"
        }, {
            padding: 0
        }]);
        return !1;
    });
    $(".work16").click(function () {
        $.fancybox.open([{
            href: "img/works/sagres_1.jpg"
        }, {
            href: "img/works/sagres_2.jpg"
        }, {
            href: "img/works/sagres_3.jpg"
        }, {
            href: "img/works/sagres_4.jpg"
        }, {
            href: "img/works/sagres_5.jpg"
        }, {
            href: "img/works/sagres_6.jpg"
        }, {
            href: "img/works/sagres_7.jpg"
        }, {
            href: "img/works/sagres_8.jpg"
        }, {
            href: "img/works/sagres_9.jpg"
        }, {
            href: "img/works/sagres_10.jpg"
        }, {
            href: "img/works/sagres_11.jpg"
        }, {
            padding: 0
        }]);
        return !1;
    });
    $(".work17").click(function () {
        $.fancybox.open([{
            href: "img/works/stand_upContinente_1.jpg"
        }, {
            href: "img/works/stand_upContinente_2.jpg"
        }, {
            href: "img/works/stand_upContinente_3.jpg"
        }, {
            padding: 0
        }]);
        return !1;
    });
    $(".work18").click(function () {
        $.fancybox.open([{
            href: "img/works/urbity_1.jpg"
        }, {
            href: "img/works/urbity_2.jpg"
        }, {
            href: "img/works/urbity_3.jpg"
        }, {
            padding: 0
        }]);
        return !1;
    });

    $(".work19").click(function () {
        $.fancybox.open([{
            href: "img/works/chicletetv_1.jpg"
        }, {
            href: "img/works/chicletetv_2.jpg"
        }, {
            href: "img/works/chicletetv_3.jpg"
        }, {
            href: "img/works/chicletetv_4.jpg"
        }, {
            href: "img/works/chicletetv_5.jpg"
        }, {
            href: "img/works/chicletetv_6.jpg"
        }, {
            href: "img/works/chicletetv_7.jpg"
        }, {
            padding: 0
        }]);
        return !1;
    });

    $(".thumbs").hover(function () {
        $(".thumb-overlay", this).stop().css({
            display: "block"
        }).animate({
            left: "-20px"
        });
    }, function () {
        $(".thumb-overlay", this).stop().animate({
            left: "-240px"
        });
    });

    var squareOne = $(".square-one");
    squareOne.click(function () {
        $row34.hide().delay(1000).fadeOut(1000);
        $row56.hide().delay(1000).fadeOut(1000);
        $row12.fadeIn(1000);
        //squareOne.hasClass("square-inactive") ? (squareOne.removeClass("square-inactive").addClass("square-active"), squareTwo.removeClass("square-active").addClass("square-inactive"), squareThree.removeClass("square-active").addClass("square-inactive")) : squareOne.removeClass("square-active").addClass("square-inactive")
        if (squareOne.hasClass("square-inactive")) {
            squareOne.removeClass("square-inactive").addClass("square-active");
            squareTwo.removeClass("square-active").addClass("square-inactive");
            squareThree.removeClass("square-active").addClass("square-inactive");
        } else {
            squareOne.removeClass("square-active").addClass("square-inactive");
        }
    });

    var squareTwo = $(".square-two");
    squareTwo.click(function () {
        $row12.hide().delay(1000).fadeOut(1000);
        $row56.hide().delay(1000).fadeOut(1000);
        $row34.fadeIn(1000);
        //squareTwo.hasClass("square-inactive") ?
          //  (squareTwo.removeClass("square-inactive").addClass("square-active"), squareOne.removeClass("square-active").addClass("square-inactive"), squareThree.removeClass("square-active").addClass("square-inactive")) : squareTwo.removeClass("square-active").addClass("square-inactive")
        if (squareTwo.hasClass("square-inactive")) {
            squareTwo.removeClass("square-inactive").addClass("square-active");
            squareOne.removeClass("square-active").addClass("square-inactive");
            squareThree.removeClass("square-active").addClass("square-inactive");
        } else {
            squareTwo.removeClass("square-active").addClass("square-inactive");
        }
    });
    
    var squareThree = $(".square-three");
    squareThree.click(function () {
        $row34.hide().delay(1000).fadeOut(1000);
        $row12.hide().delay(1000).fadeOut(1000);
        $row56.fadeIn(1000);
        //squareThree.hasClass("square-inactive") ? (squareThree.removeClass("square-inactive").addClass("square-active"), squareOne.removeClass("square-active").addClass("square-inactive"),
          //  squareTwo.removeClass("square-active").addClass("square-inactive")) : squareThree.removeClass("square-active").addClass("square-inactive")
        if (squareThree.hasClass("square-inactive")) {
            squareThree.removeClass("square-inactive").addClass("square-active");
            squareOne.removeClass("square-active").addClass("square-inactive");
            squareTwo.removeClass("square-active").addClass("square-inactive");
        } else {
            squareThree.removeClass("square-active").addClass("square-inactive");
        }
    });

    // WORK
    /*var work = $("#menu-work");
    work.click(function(){
        $("body").fadeOut( 
            function(){
                location.reload();
                $(document).ready(function(){
                    $(body).fadeIn(1000);
                }); 
            });
    });*/

    // ABOUT
    var about = $("#menu-about");
    about.on('click', function(){
        about.addClass('menu-select');
        $menuWork.removeClass('menu-select');
        $menuContact.removeClass('menu-select');

        $row34.hide().delay(1000).fadeOut(1000);
        $row56.hide().delay(1000).fadeOut(1000);
        $row12.delay(1000).fadeOut(1000);
        $mainContent.hide().fadeIn();
        $mainContent.html(profile);

        // SKILLS
        $mainContent.on('click', '.square-skills', function(){
            $mainContent.hide().fadeIn(1000);
            $mainContent.html(skills);
        });

        // EDUCATION
        $mainContent.on('click', '.square-edu', function(){
            $mainContent.hide().fadeIn(1000);
            $mainContent.html(edu);
        });

        // PROFILE
        $mainContent.on('click', '.square-profile', function(){
            $mainContent.hide().fadeIn(1000);
            $mainContent.html(profile);
        });

        // WORK
        $mainContent.on('click', '.square-work', function(){
            $mainContent.hide().fadeIn(1000);
            $mainContent.html(workTab);
        });

        // WORKS
        $menuWork.on('click', clickWork);

    });

    // CONTACT
    var contact = $menuContact;
    contact.on('click', function(){
        contact.addClass('menu-select');
        $menuWork.removeClass('menu-select');
        $menuAbout.removeClass('menu-select');

        $row34.hide().delay(1000).fadeOut(1000);
        $row56.hide().delay(1000).fadeOut(1000);
        $row12.delay(1000).fadeOut(1000);
        $mainContent.hide().fadeIn(1000);
        $mainContent.html(contactLinks);

        // WORK
        $menuWork.on('click', clickWork);
    });

    // LOGO
    var logo = $("#logo");
    logo.click(function(){
        $("body").fadeOut( 
            function(){
                location.reload();
                $(document).ready(function(){
                    $(body).fadeIn(1000);
                }); 
            });
    });

});
