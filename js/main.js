$(document).ready(function(){

  initCircles();
  repeatColor();

  /*1*/
  var height = $('.case-list li').width();
  $('.case-list li').css('height', height);
  /***1***/

  /*2*/
  $('.tabs-toggle li a').click(function(){
    var target = $(this).attr('href');
    var targetClass = '.' + target.substr(target.length - 5);
    console.log(targetClass);
    if ( $(targetClass).css('display') != 'none') {
      initHighlight(targetClass);
      return false;
    }
    $('#profile .active').hide('clip', 800).removeClass('active');
    setTimeout( function() {
      $(targetClass).show('clip', 800).addClass('active');
      setTimeout(function(){
        initHighlight(targetClass);
      }, 600);
    }, 900);
    return false;
  })
  /***2***/


});

particlesJS('particles-js',
{
  "particles": {
    "number": {
      "value": 55,
      "density": {
        "enable": true,
        "value_area": 789.1476416322727
      }
    },
    "color": {
      "value": "#2fe624"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.49716301422833176,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 8.551448551448551,
        "opacity_min": 0.7752247752247752,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 172.62737262737264,
        "size_min": 25.574425574425575,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#1b8e36",
      "opacity": 0.40246529723245905,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 3,
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab"
      },
      "onclick": {
        "enable": true,
        "mode": "repulse"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});


function repeatColor() {
  $('.case-list li').css('border-color') == 'rgb(0, 0, 0)' ?  $('.case-list li').css('border-color', 'green') :  $('.case-list li').css('border-color', 'black');
  setTimeout(repeatColor, 500);
}

function initHighlight(targetClass) {
  $(targetClass).addClass('highlight');
  setTimeout(function(){
    $(targetClass).removeClass('highlight');
  }, 600);
  console.log('lit');
}

function initCircles() {
  $('#circle1').circleProgress({
    value: 0.8,
    size: 225,
    startAngle: (3*Math.PI)/2,
    thickness: 14,
    fill: {
      gradient: ["red","yellow","green"]
    }
  }).on('circle-animation-progress', function(event, progress) {
    $(this).find('strong').html(parseInt(80 * progress) + ' %');
  });

  $('#circle2').circleProgress({
    value: 0.50,
    size: 225,
    startAngle: Math.PI/2,
    thickness: 14,
    fill: {
      gradient: ["red","yellow","green"]
    }
  }).on('circle-animation-progress', function(event, progress) {
    $(this).find('strong').html(parseInt(50 * progress) + ' %');
  });

  $('#circle3').circleProgress({
    value: 0.6,
    size: 225,
    startAngle: Math.PI,
    thickness: 14,
    fill: {
      gradient: ["red","yellow","green"]
    }
  }).on('circle-animation-progress', function(event, progress) {
    $(this).find('strong').html(parseInt(60 * progress) + ' %');
  });
}