$(document).ready(function() {
  $(".hide-design, .show-design").click(function() {
    $(".show-design").toggle();
    $(".hide-design").toggle();
  });
  $(".hide-dev, .show-dev").click(function() {
    $(".show-dev").toggle();
    $(".hide-dev").toggle();
  });
  $(".hide-pd, .show-pd").click(function() {
    $(".show-pd").toggle();
    $(".hide-pd").toggle();
  });
});
$(document).ready(function() {
  $(".p-2").hover(
    function() {
      $(this)
        .find(".project")
        .show();
    },
    function() {
      $(this)
        .find(".project")
        .hide();
    }
  );
});
$(document).ready(function() {
  document.getElementById("form").addEventListener("submit", message);
  function message() {
    alert("Great, you have successfully summited your querry. We shall get back to you as soon as possible");
  }
});
