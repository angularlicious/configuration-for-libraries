demo = {
  initDocumentationCharts: function() {
    if ($('#dailySalesChart').length != 0 && $('#websiteViewsChart').length != 0) {
      /* ----------==========     Daily Sales Chart initialization For Documentation    ==========---------- */

      dataDailySalesChart = {
        labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
        series: [[12, 17, 7, 17, 23, 18, 38]]
      };

      optionsDailySalesChart = {
        lineSmooth: Chartist.Interpolation.cardinal({
          tension: 0
        }),
        low: 0,
        high: 50, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
        chartPadding: {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0
        }
      };

      var dailySalesChart = new Chartist.Line('#dailySalesChart', dataDailySalesChart, optionsDailySalesChart);

      var animationHeaderChart = new Chartist.Line('#websiteViewsChart', dataDailySalesChart, optionsDailySalesChart);
    }
  }

  // initGoogleMaps: function() {
  //   var myLatlng = new google.maps.LatLng(40.748817, -73.985428);
  //   var mapOptions = {
  //     zoom: 13,
  //     center: myLatlng,
  //     scrollwheel: false, //we disable de scroll over the map, it is a really annoing when you scroll through page
  //     styles: [
  //       {
  //         elementType: 'geometry',
  //         stylers: [
  //           {
  //             color: '#f5f5f5'
  //           }
  //         ]
  //       },
  //       {
  //         elementType: 'labels.icon',
  //         stylers: [
  //           {
  //             visibility: 'off'
  //           }
  //         ]
  //       },
  //       {
  //         elementType: 'labels.text.fill',
  //         stylers: [
  //           {
  //             color: '#616161'
  //           }
  //         ]
  //       },
  //       {
  //         elementType: 'labels.text.stroke',
  //         stylers: [
  //           {
  //             color: '#f5f5f5'
  //           }
  //         ]
  //       },
  //       {
  //         featureType: 'administrative.land_parcel',
  //         elementType: 'labels.text.fill',
  //         stylers: [
  //           {
  //             color: '#bdbdbd'
  //           }
  //         ]
  //       },
  //       {
  //         featureType: 'poi',
  //         elementType: 'geometry',
  //         stylers: [
  //           {
  //             color: '#eeeeee'
  //           }
  //         ]
  //       },
  //       {
  //         featureType: 'poi',
  //         elementType: 'labels.text.fill',
  //         stylers: [
  //           {
  //             color: '#757575'
  //           }
  //         ]
  //       },
  //       {
  //         featureType: 'poi.park',
  //         elementType: 'geometry',
  //         stylers: [
  //           {
  //             color: '#e5e5e5'
  //           }
  //         ]
  //       },
  //       {
  //         featureType: 'poi.park',
  //         elementType: 'labels.text.fill',
  //         stylers: [
  //           {
  //             color: '#9e9e9e'
  //           }
  //         ]
  //       },
  //       {
  //         featureType: 'road',
  //         elementType: 'geometry',
  //         stylers: [
  //           {
  //             color: '#ffffff'
  //           }
  //         ]
  //       },
  //       {
  //         featureType: 'road.arterial',
  //         elementType: 'labels.text.fill',
  //         stylers: [
  //           {
  //             color: '#757575'
  //           }
  //         ]
  //       },
  //       {
  //         featureType: 'road.highway',
  //         elementType: 'geometry',
  //         stylers: [
  //           {
  //             color: '#dadada'
  //           }
  //         ]
  //       },
  //       {
  //         featureType: 'road.highway',
  //         elementType: 'labels.text.fill',
  //         stylers: [
  //           {
  //             color: '#616161'
  //           }
  //         ]
  //       },
  //       {
  //         featureType: 'road.local',
  //         elementType: 'labels.text.fill',
  //         stylers: [
  //           {
  //             color: '#9e9e9e'
  //           }
  //         ]
  //       },
  //       {
  //         featureType: 'transit.line',
  //         elementType: 'geometry',
  //         stylers: [
  //           {
  //             color: '#e5e5e5'
  //           }
  //         ]
  //       },
  //       {
  //         featureType: 'transit.station',
  //         elementType: 'geometry',
  //         stylers: [
  //           {
  //             color: '#eeeeee'
  //           }
  //         ]
  //       },
  //       {
  //         featureType: 'water',
  //         elementType: 'geometry',
  //         stylers: [
  //           {
  //             color: '#c9c9c9'
  //           }
  //         ]
  //       },
  //       {
  //         featureType: 'water',
  //         elementType: 'labels.text.fill',
  //         stylers: [
  //           {
  //             color: '#9e9e9e'
  //           }
  //         ]
  //       }
  //     ]
  //   };
  //   var map = new google.maps.Map(document.getElementById('map'), mapOptions);

  //   var marker = new google.maps.Marker({
  //     position: myLatlng,
  //     title: 'Hello World!'
  //   });

  //   // To add the marker to the map, call setMap();
  //   marker.setMap(map);
  // }
};

$(document).ready(function() {
  $().ready(function() {
    $sidebar = $('.sidebar');

    $sidebar_img_container = $sidebar.find('.sidebar-background');

    $full_page = $('.full-page');

    $sidebar_responsive = $('body > .navbar-collapse');

    window_width = $(window).width();

    $('.fixed-plugin a').click(function(event) {
      // Alex if we click on switch, stop propagation of the event, so the dropdown will not be hide, otherwise we set the  section active
      if ($(this).hasClass('switch-trigger')) {
        if (event.stopPropagation) {
          event.stopPropagation();
        } else if (window.event) {
          window.event.cancelBubble = true;
        }
      }
    });

    $('.fixed-plugin .active-color span').click(function() {
      $full_page_background = $('.full-page-background');

      $(this)
        .siblings()
        .removeClass('active');
      $(this).addClass('active');

      var new_color = $(this).data('color');

      if ($sidebar.length != 0) {
        $sidebar.attr('data-color', new_color);
      }

      if ($full_page.length != 0) {
        $full_page.attr('filter-color', new_color);
      }

      if ($sidebar_responsive.length != 0) {
        $sidebar_responsive.attr('data-color', new_color);
      }
    });

    $('.fixed-plugin .background-color .badge').click(function() {
      $(this)
        .siblings()
        .removeClass('active');
      $(this).addClass('active');

      var new_color = $(this).data('background-color');

      if ($sidebar.length != 0) {
        $sidebar.attr('data-background-color', new_color);
      }
    });

    $('.fixed-plugin .img-holder').click(function() {
      $full_page_background = $('.full-page-background');

      $(this)
        .parent('li')
        .siblings()
        .removeClass('active');
      $(this)
        .parent('li')
        .addClass('active');

      var new_image = $(this)
        .find('img')
        .attr('src');

      if ($sidebar_img_container.length != 0 && $('.switch-sidebar-image input:checked').length != 0) {
        $sidebar_img_container.fadeOut('fast', function() {
          $sidebar_img_container.css('background-image', 'url("' + new_image + '")');
          $sidebar_img_container.fadeIn('fast');
        });
      }

      if ($full_page_background.length != 0 && $('.switch-sidebar-image input:checked').length != 0) {
        var new_image_full_page = $('.fixed-plugin li.active .img-holder')
          .find('img')
          .data('src');

        $full_page_background.fadeOut('fast', function() {
          $full_page_background.css('background-image', 'url("' + new_image_full_page + '")');
          $full_page_background.fadeIn('fast');
        });
      }

      if ($('.switch-sidebar-image input:checked').length == 0) {
        var new_image = $('.fixed-plugin li.active .img-holder')
          .find('img')
          .attr('src');
        var new_image_full_page = $('.fixed-plugin li.active .img-holder')
          .find('img')
          .data('src');

        $sidebar_img_container.css('background-image', 'url("' + new_image + '")');
        $full_page_background.css('background-image', 'url("' + new_image_full_page + '")');
      }

      if ($sidebar_responsive.length != 0) {
        $sidebar_responsive.css('background-image', 'url("' + new_image + '")');
      }
    });

    $('.switch-sidebar-image input').change(function() {
      $full_page_background = $('.full-page-background');

      $input = $(this);

      if ($input.is(':checked')) {
        if ($sidebar_img_container.length != 0) {
          $sidebar_img_container.fadeIn('fast');
          $sidebar.attr('data-image', '#');
        }

        if ($full_page_background.length != 0) {
          $full_page_background.fadeIn('fast');
          $full_page.attr('data-image', '#');
        }

        background_image = true;
      } else {
        if ($sidebar_img_container.length != 0) {
          $sidebar.removeAttr('data-image');
          $sidebar_img_container.fadeOut('fast');
        }

        if ($full_page_background.length != 0) {
          $full_page.removeAttr('data-image', '#');
          $full_page_background.fadeOut('fast');
        }

        background_image = false;
      }
    });

    $('.switch-sidebar-mini input').change(function() {
      $body = $('body');

      $input = $(this);

      if (md.misc.sidebar_mini_active == true) {
        $('body').removeClass('sidebar-mini');
        md.misc.sidebar_mini_active = false;

        $('.sidebar .sidebar-wrapper, .main-panel').perfectScrollbar();
      } else {
        $('.sidebar .sidebar-wrapper, .main-panel').perfectScrollbar('destroy');

        setTimeout(function() {
          $('body').addClass('sidebar-mini');

          md.misc.sidebar_mini_active = true;
        }, 300);
      }

      // we simulate the window Resize so the charts will get updated in realtime.
      var simulateWindowResize = setInterval(function() {
        window.dispatchEvent(new Event('resize'));
      }, 180);

      // we stop the simulation of Window Resize after the animations are completed
      setTimeout(function() {
        clearInterval(simulateWindowResize);
      }, 1000);
    });
  });
});
