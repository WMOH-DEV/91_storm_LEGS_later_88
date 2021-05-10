  jQuery(() => {
    if ($("#alertMsg")) {
      $("#alertMsg").delay(6000).slideUp(1500);
    }
      if ($("#sessionMsg")) {
          $("#sessionMsg").delay(6000).slideUp(1500);
      }
      if ($("#errorMsg")) {
          $("#errorMsg").delay(6000).slideUp(1500);
      }

    if (!$('.inset-0')) {
      return;
    }
    $(".inset-0").delay(5000).fadeOut(1000);

    $('.nselect').niceSelect();

  });