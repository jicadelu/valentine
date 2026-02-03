$(document).ready(function () {
  var envelope = $("#envelope");
  var btn_open = $("#open");
  var yesBtn = $("#yes");
  var noBtn = $("#no");

  // Hide Yes / No at first
  yesBtn.hide();
  noBtn.hide();

  // Envelope click
  envelope.click(openEnvelope);
  btn_open.click(openEnvelope);

  function openEnvelope() {
    envelope.addClass("open").removeClass("close");

    // Swap buttons
    btn_open.hide();
    yesBtn.show();
    noBtn.show();
  }

  // YES → go to yes.html
  yesBtn.click(function () {
    // Store that the user clicked YES
    localStorage.setItem("clickedYes", "true");

    // Navigate to yes.html
    window.location.href = "yes.html";
  });

  // NO → bounce away
  noBtn.on("mouseenter", function () {
    var btn = $(this);

    var btnWidth = btn.outerWidth();
    var btnHeight = btn.outerHeight();

    var padding = 20;

    var maxX = $(window).width() - btnWidth - padding;
    var maxY = $(window).height() - btnHeight - padding;

    var x = Math.random() * maxX;
    var y = Math.random() * maxY;

    btn.css({
      position: "fixed", // keeps it above envelope
      left: x + "px",
      top: y + "px",
      transition: "all 0.25s cubic-bezier(.34,1.56,.64,1)"
    });
  });
});
