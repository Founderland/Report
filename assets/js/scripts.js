$(document).ready(function(){

// Off Canvas Navigation
$(".burger").click(function() {
    $("nav").toggleClass("active");
});
$(".close").click(function() {
    $("nav ").toggleClass("active");
});
$(".overlay").click(function() {
    $("nav").toggleClass("active");
});


// Scrollspy 
// source: https://codepen.io/acarlie/pen/LKmORw?editors=1010
// var sectionIds = $('nav a');

// $(document).scroll(function(){
//     sectionIds.each(function(){

//         var container = $(this).attr('href');
//         var containerOffset = $(container).offset().top;
//         var containerHeight = $(container).outerHeight();
//         var containerBottom = containerOffset + containerHeight;
//         var scrollPosition = $(document).scrollTop();

//         if(scrollPosition < containerBottom - 20 && scrollPosition >= containerOffset - 20){
//             $(this).addClass('active');
//         } else{
//             $(this).removeClass('active');
//         };

//     });
// });




// FDL Charts
var colors =  [
    '#0063E2', // blue
    '#F6331C', // red
    '#EE93B5', // pink
    '#D7FB03', // lime
    '#000' // black
];

// Chart.defaults.global.data.datasets.backgroundColor = true;
// Chart.defaults.global.animationSteps = 160;


const bar1 = document.getElementById('barChart').getContext('2d');
const barChart = new Chart(bar1, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            data: [12, 19, 3, 5, 2, 3],
            label: '# of Votes',
            backgroundColor: colors,
            borderColor: colors,
            borderWidth: 0
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

const pie1 = document.getElementById('pieChart').getContext('2d');
const pieChart = new Chart(pie1, {
    type: 'pie',
    data: {
        labels: ['Everyone else', 'Women of color founders'],
        datasets: [{
            data: [99.5, 0.5,],
            //label: '# of Votes',
            backgroundColor: colors,
            borderColor: colors,
            borderWidth: 0
        }]
    },
    options: {
       
    }
});


}); // end of document ready