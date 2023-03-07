window.onload = function() {
  let onload = document.getElementById("onload");
  onload.style.display = "none";
};

swal({
    title: "WARING",
    text: "In order to enjoy it please press F11 on your keyboard",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  })
  .then((willDelete) => {
    if (willDelete) {
      swal("NOW JUST ENJOY!", {
        icon: "success",
      });
    } else {
      swal("IT SEEMS YOU ARE A REBEL!");
    }
  });



