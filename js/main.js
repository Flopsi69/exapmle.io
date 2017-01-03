$(document).ready(function(){

  $('#circle1').circleProgress({
    value: 0.8,
    size: 250,
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
    size: 250,
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
    size: 250,
    startAngle: Math.PI,
    thickness: 14,
    fill: {
      gradient: ["red","yellow","green"]
    }
  }).on('circle-animation-progress', function(event, progress) {
    $(this).find('strong').html(parseInt(60 * progress) + ' %');
  });

});

particlesJS('particles-js',
{
  "particles": {
    "number": {
      "value": 80,
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