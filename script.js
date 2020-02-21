document.addEventListener("keydown", event => {
  if (event.isComposing || event.keyCode === 27) {
    hideModal();
  }
});

function showNav() {
  document.getElementById("mobile-hamburger").style.display = "none";
  document.getElementById("mobile-nav").style.display = "flex";
  document.getElementById("mobile-nav-close").style.display = "block";
  document.getElementById("social").style.display = "none";
}

function hideNav() {
  document.getElementById("mobile-hamburger").style.display = "block";
  document.getElementById("mobile-nav").style.display = "none";
  document.getElementById("mobile-nav-close").style.display = "none";
  document.getElementById("social").style.display = "block";
}

function showFooter() {
  document.getElementById("footer-links").style.display = "inline-flex";
  document.getElementById("footer-emails").style.display = "inline-flex";

  document.getElementById("footer-expand-up").style.display = "none";
  document.getElementById("footer-expand-down").style.display = "flex";

  $("#mobile-footer-contact-us").hide();
}

function hideFooter() {
  document.getElementById("footer-links").style.display = "none";
  document.getElementById("footer-emails").style.display = "none";

  document.getElementById("footer-expand-up").style.display = "flex";
  document.getElementById("footer-expand-down").style.display = "none";

  $("#mobile-footer-contact-us").show();
}

function showModal() {
  $("#modal-holder").show(250);
  $("body").addClass("overflow-none");
}

function hideModal() {
  $("#modal-holder").hide(250);
  $("body").removeClass("overflow-none");
}

$(document).ready(() => {
  $(".accordian").click(function() {
    $(this)
      .next(".panel")
      .toggle(100);

    const text = $(this)
      .children("h4")
      .eq(1)
      .text();
    $(this)
      .children("h4")
      .eq(1)
      .text(text === "+" ? "-" : "+");
  });

  var scroll_start = 0;
  var startchange = $("#info");
  var offset = startchange.offset();
  $(document).scroll(function() {
    scroll_start = $(this).scrollTop();
    if (scroll_start > offset.top) {
      $("nav").addClass("nav-scrolled");
    } else {
      $("nav").removeClass("nav-scrolled");
    }
  });

  $("#modal-bg")
    .click(() => {
      hideModal();
    })
    .children()
    .click(function(e) {
      e.stopPropagation();
    });
});
