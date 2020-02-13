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
}

function hideFooter() {
  document.getElementById("footer-links").style.display = "none";
  document.getElementById("footer-emails").style.display = "none";

  document.getElementById("footer-expand-up").style.display = "flex";
  document.getElementById("footer-expand-down").style.display = "none";
}

function showModal() {
  document.getElementById("body").style.overflow = "hidden";
  document.getElementById("modal-bg").style.display = "flex";
}

function hideModal() {
  document.getElementById("body").style.overflow = "auto";
  document.getElementById("modal-bg").style.display = "none";
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
});
