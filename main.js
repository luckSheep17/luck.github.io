var confirm = document.getElementById("yes");
      confirm.onclick = function () {
        var confirmBox = document.getElementsByClassName("confirm");
        var video = document.getElementsByClassName("video");
        confirmBox[0].style.display = "none";
        video[0].style.display = "block";
        video[0].style.animation = "load 1s";
        video[0].play();
        video[0].addEventListener(
          "ended",
          function () {
            location.href = "https://www.yuanshen.com";
          },
          false
        );
      };
      var cancel = document.getElementById("no");
      cancel.onclick = function () {
        alert("取消是我的谎言");
      };
      function click(e) {
        if (document.all) {
          if (event.button == 2 || event.button == 3) {
            oncontextmenu = "return false";
          }
        }
        if (document.layers) {
          if (e.which == 3) {
            oncontextmenu = "return false";
          }
        }
      }
      if (document.layers) {
        document.captureEvents(Event.MOUSEDOWN);
      }
      document.onmousedown = click;
      document.oncontextmenu = new Function("return false;");

      document.onkeydown =
        document.onkeyup =
        document.onkeypress =
          function () {
            if (window.event.keyCode == 123) {
              window.event.returnValue = false;
              return false;
            }
          };
