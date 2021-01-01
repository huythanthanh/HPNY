// Credits to Tiffan Rayside (@tmrDevelops) for 
// educating me about the touchmove event! ♥

// TODO: debounce scroll event
$(document).ready(function () {
  var $scene = $('.js-scene');

  $(window).on("mousewheel DOMMouseScroll touchmove", function (e) {
    var scrollingDown = (function () {
      var delta,
        compareEvent;

      if (e.type === 'touchmove') {
        compareEvent = 'touchmove';
      } else {
        compareEvent = 'DOMMouseScroll';
      }

      delta = e.type === compareEvent ?
        e.originalEvent.detail * -40 :
        e.originalEvent.wheelDelta;

      return delta > 0 ? 0 : 1;
    }());

    if (scrollingDown) {
      $scene.addClass('is-over');
    } else {
      $scene.removeClass('is-over');
    }
  });
}); //doc.ready()


var x = document.getElementById("myDIV").addEventListener("wheel", myFunction);

function myFunction() {
  $scope.sound = function () {
    if ($scope.totalQueueList) {
        var audio = new Audio();
        audio.src = 'nhacsieuhay.mp3';
        // when the sound has been loaded, execute your code
        audio.oncanplaythrough = (event) => {
            var playedPromise = audio.play();
            if (playedPromise) {
                playedPromise.catch((e) => {
                    console.log(e)
                    if (e.name === 'NotAllowedError' || e.name === 'NotSupportedError') {
                        console.log(e.name);
                    }
                }).then(() => {

                });
            }
        }
    }
}

}

