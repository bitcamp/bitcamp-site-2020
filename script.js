document.addEventListener("keydown", event => {
  if (event.isComposing || event.keyCode === 27) {
    hideModal();
  }
});

function showNav() {
  document.getElementById("mobile-nav").style.display = "flex";
  document.getElementById("mobile-nav-close").style.display = "block";
}

function hideNav() {
  document.getElementById("mobile-nav").style.display = "none";
  document.getElementById("mobile-nav-close").style.display = "none";
}

function showFooter() {
  $("#footer-emails").slideDown({
    start: function() {
      $(this).css({
        display: "inline-flex"
      });
    }
  });
  $("#footer-links").slideDown({
    start: function() {
      $(this).css({
        display: "inline-flex"
      });
    }
  });
  $("#social").slideDown({
    start: function() {
      $(this).css({
        display: "inline-flex"
      });
    }
  });

  document.getElementById("footer-expand-up").style.display = "none";
  document.getElementById("footer-expand-down").style.display = "flex";

  $("#mobile-footer-contact-us").hide();
}

function hideFooter() {
  $("#footer-emails").slideUp({
    end: function() {
      $(this).css({
        display: "none"
      });
    }
  });
  $("#footer-links").slideUp({
    end: function() {
      $(this).css({
        display: "none"
      });
    }
  });
  $("#social").slideUp({
    end: function() {
      $(this).css({
        display: "none"
      });
    }
  });
  document.getElementById("footer-expand-up").style.display = "flex";
  document.getElementById("footer-expand-down").style.display = "none";

  $("#mobile-footer-contact-us").show();
}

function showModal() {
  $("#modal-holder")
    .show(250)
    .attr("aria-hidden", "false");
  $("body").addClass("overflow-none");
}

function hideModal() {
  $("#modal-holder")
    .hide(250)
    .attr("aria-hidden", "true");
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
      $("#mobile-nav-scrolled").removeClass("hide");
      $("#mobile-nav-scrolled").addClass("mobile-nav-scrolled");
    } else {
      $("nav").removeClass("nav-scrolled");
      $("#mobile-nav-scrolled").addClass("hide");
      $("#mobile-nav-scrolled").removeClass("mobile-nav-scrolled");
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
