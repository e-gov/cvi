$(document).ready(function () {

  //Closes and opens sidebar. On sidebar close, also closes submenus
  $("#sidebarCollapse").on("click", function () {
    $(".sidebar-controller a").each(function (idx, a) {
      if ($(a).attr("aria-expanded") === "true" && ($(a).hasClass("firstLevel") || $(a).hasClass("secondLevel"))) {
        $(a).click();
      }
    });
    $('.sidebar-controller').toggleClass('active');
  });

  //when submenu is opened, closes all other submenus
  $(".firstLevel").on("click", function () {
    const clicked = $(this);
    $(".firstLevel").each(function (idx, a) {
      if ($(a).attr("aria-expanded") === "true" && clicked[0] !== $(a)[0]) {
        $(a).click();
      }
    });

    //if submenu is clicked when sidebar is collapsed, open sidebar
    if ($('#sidebar').hasClass("active")) {
      $('#sidebar').toggleClass('active');
    }
  });

  $("#sidebar li").on("click", function () {
    if ($("body").width() < 376) return;
    if ($(".c-mobile-header")[0]) return;
    //calculates if there is enough room for the dropdown menu underneath. If not - lift it up.
    const spaceDown = $(window).scrollTop() + $(window).height() - ($(this).offset().top + $(this).height());
    const height = $(this).outerHeight() * $(this).children(":last").children().length;

    if (spaceDown < height) {
      if ($(this).parent().parent().is("li")) {
        const height2 = $(this).outerHeight() * $(this).parent().children().length + $(this).outerHeight();
        $(this).children(":last").each(function (id, el) {
          $(el).attr('style', 'margin-top: -' + height2 + "px")
        })
      } else if ($(this).children().length > 1) {
        $(this).children(":last").each(function (id, el) {
          $(el).attr('style', 'margin-top: -' + height + "px");
        })
      }
      addShadow($(this).children(":last-child"), true);
    } else {
      addShadow($(this).children(":last-child"), false);
    }

  });

  //used to open menu with mobile header
  $("#sidemenuOpen").on("click", function () {
    $('#sidebar').toggleClass('active');
    $(".c-mobile-header").toggleClass('active');
  });

  const addShadow = (element, isShifted) => {
    //guard clauses to check if the element already has shadowClass and if the list is a sublist
    if (element.children(":first").hasClass("shadowClass") || element.children(":last").hasClass("shadowClass")) return;
    if (!$(element).is("ul")) return;


    const parentLength = element.parent().parent().children().length;
    const elementLength = element.children().length;

    if (parentLength >= elementLength) {
      element.children().each((id, el) => {
        $(el).toggleClass("shadowClass")
      });
      return;
    }
    if (isShifted) {
      element.children().slice(parentLength, elementLength).each((id, el) => {
        $(el).toggleClass("shadowClass")
      })
    } else {
      element.children().slice(0, parentLength).each((id, el) => {
        $(el).toggleClass("shadowClass")
      })
    }
  };

});
