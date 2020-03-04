// Bar graphs 

// document.addEventListener('DOMContentLoaded', function () {
//     var myChart = Highcharts.chart('container', {
//         chart: {
//             type: 'bar',
//             height: 4000
//         },
//         title: {
//             text: 'Bar Chart of Users'
//         },
//         // Commented out just to test injecting data from csv
//         // xAxis: {
//         //     categories: ['Nigeria', 'US', 'India']
//         // },
//         // yAxis: {
//         //     title: {
//         //         text: 'Number of people'
//         //     }
//         // },
//         // series: [{
//         //     name: 'Users',
//         //     data: [212, 159, 158]
//         // }, {
//         //     name: 'New Users',
//         //     data: [138, 108, 147]
//         // }]

//         data: {
//             csv: document.getElementById('csv').innerHTML
//         },
//     });
// });


// High charts map data

// Prepare demo data
// Data is joined to map using value of 'hc-key' property by default.
// See API docs for 'joinBy' for more info on linking data and map.
var data = [
    ['fo', 0],
    ['us', 1],
    ['fr', 2],
    ['cn', 3],
    ['pt', 4],
    ['sw', 5],
    ['sh', 6],
    ['ec', 7],
    ['ph', 8],
    ['bu', 9],
    ['mv', 10],
    ['sp', 11],
    ['gb', 12],
    ['gr', 13],
    ['dk', 14],
    ['gl', 15],
    ['pr', 16],
    ['um', 17],
    ['vi', 18],
    ['ca', 19],
    ['cl', 20],
    ['cv', 21],
    ['dm', 22],
    ['sc', 23],
    ['jm', 24],
    ['om', 25],
    ['vc', 26],
    ['bd', 27],
    ['sb', 28],
    ['lc', 29],
    ['no', 30],
    ['kn', 31],
    ['bh', 32],
    ['id', 33],
    ['mu', 34],
    ['ru', 35],
    ['tt', 36],
    ['br', 37],
    ['bs', 38],
    ['pw', 39],
    ['ng', 40],
    ['gd', 41],
    ['ag', 42],
    ['tw', 43],
    ['fj', 44],
    ['bb', 45],
    ['it', 46],
    ['mt', 47],
    ['pg', 48],
    ['sg', 49],
    ['cy', 50],
    ['km', 51],
    ['va', 52],
    ['sm', 53],
    ['am', 54],
    ['az', 55],
    ['tj', 56],
    ['ga', 57],
    ['uz', 58],
    ['ls', 59],
    ['in', 60],
    ['kp', 61],
    ['kg', 62],
    ['es', 63],
    ['mx', 64],
    ['ma', 65],
    ['co', 66],
    ['tz', 67],
    ['ar', 68],
    ['sa', 69],
    ['qa', 70],
    ['nl', 71],
    ['ye', 72],
    ['ae', 73],
    ['ke', 74],
    ['tr', 75],
    ['my', 76],
    ['vn', 77],
    ['pa', 78],
    ['ir', 79],
    ['ht', 80],
    ['do', 81],
    ['gw', 82],
    ['hr', 83],
    ['th', 84],
    ['ee', 85],
    ['cd', 86],
    ['kw', 87],
    ['de', 88],
    ['cz', 89],
    ['ie', 90],
    ['mm', 91],
    ['gq', 92],
    ['ug', 93],
    ['kz', 94],
    ['kr', 95],
    ['tl', 96],
    ['mr', 97],
    ['dz', 98],
    ['pe', 99],
    ['ao', 100],
    ['mz', 101],
    ['cr', 102],
    ['sv', 103],
    ['gt', 104],
    ['bz', 105],
    ['ve', 106],
    ['gy', 107],
    ['hn', 108],
    ['ni', 109],
    ['mw', 110],
    ['tm', 111],
    ['zm', 112],
    ['nc', 113],
    ['za', 114],
    ['lt', 115],
    ['et', 116],
    ['gh', 117],
    ['si', 118],
    ['ba', 119],
    ['jo', 120],
    ['sy', 121],
    ['mc', 122],
    ['al', 123],
    ['uy', 124],
    ['cnm', 125],
    ['mn', 126],
    ['rw', 127],
    ['bo', 128],
    ['cm', 129],
    ['cg', 130],
    ['eh', 131],
    ['rs', 132],
    ['me', 133],
    ['bj', 134],
    ['tg', 135],
    ['la', 136],
    ['af', 137],
    ['ua', 138],
    ['sk', 139],
    ['jk', 140],
    ['pk', 141],
    ['bg', 142],
    ['li', 143],
    ['at', 144],
    ['sz', 145],
    ['hu', 146],
    ['ne', 147],
    ['lu', 148],
    ['ad', 149],
    ['ci', 150],
    ['lr', 151],
    ['sl', 152],
    ['bn', 153],
    ['be', 154],
    ['iq', 155],
    ['ge', 156],
    ['gm', 157],
    ['ch', 158],
    ['td', 159],
    ['kv', 160],
    ['lb', 161],
    ['sx', 162],
    ['so', 163],
    ['dj', 164],
    ['er', 165],
    ['bi', 166],
    ['sr', 167],
    ['il', 168],
    ['sn', 169],
    ['gn', 170],
    ['pl', 171],
    ['mk', 172],
    ['py', 173],
    ['by', 174],
    ['lv', 175],
    ['bf', 176],
    ['ss', 177],
    ['cf', 178],
    ['na', 179],
    ['ro', 180],
    ['zw', 181],
    ['kh', 182],
    ['sd', 183],
    ['tn', 184],
    ['ly', 185],
    ['ml', 186],
    ['bt', 187],
    ['bw', 188],
    ['md', 189],
    ['jp', 190],
    ['au', 191],
    ['nz', 192],
    ['cu', 193],
    ['fi', 194],
    ['se', 195],
    ['mg', 196],
    ['vu', 197],
    ['is', 198],
    ['lk', 199],
    ['eg', 200],
    ['np', 201]
];

// Create the chart
$(document).ready(function () {
    Highcharts.getJSON('https://cdn.jsdelivr.net/gh/highcharts/highcharts@v7.0.0/samples/data/australia.geo.json', function (geojson) {

        // Prepare the geojson
        var states = Highcharts.geojson(geojson, 'map'),
            rivers = Highcharts.geojson(geojson, 'mapline'),
            cities = Highcharts.geojson(geojson, 'mappoint'),
            specialCityLabels = {
                Melbourne: {
                    align: 'right'
                },
                Canberra: {
                    align: 'right',
                    y: -5
                },
                Wollongong: {
                    y: 5
                },
                Brisbane: {
                    y: -5
                }
            };
    
        // Skip or move some labels to avoid collision
        states.forEach(function (state) {
            // Disable data labels
            if (state.properties.code_hasc === 'AU.CT' || state.properties.code_hasc === 'AU.JB') {
                state.dataLabels = {
                    enabled: false
                };
            }
            if (state.properties.code_hasc === 'AU.TS') {
                state.dataLabels = {
                    style: {
                        color: '#333333'
                    }
                };
            }
            // Move center for data label
            if (state.properties.code_hasc === 'AU.SA') {
                state.middleY = 0.3;
            }
            if (state.properties.code_hasc === 'AU.QL') {
                state.middleY = 0.7;
            }
        });
    
        cities.forEach(function (city) {
            if (specialCityLabels[city.name]) {
                city.dataLabels = specialCityLabels[city.name];
            }
        });
    
        // Initiate the chart
        Highcharts.mapChart('container', {
            title: {
                text: 'Highmaps from geojson with multiple geometry types'
            },
    
            mapNavigation: {
                enabled: true,
                buttonOptions: {
                    verticalAlign: 'bottom'
                }
            },
    
            series: [{
                name: 'States and territories',
                data: states,
                color: Highcharts.getOptions().colors[2],
                states: {
                    hover: {
                        color: Highcharts.getOptions().colors[4]
                    }
                },
                dataLabels: {
                    enabled: true,
                    format: '{point.name}',
                    style: {
                        width: '80px' // force line-wrap
                    }
                },
                tooltip: {
                    pointFormat: '{point.name}'
                }
            }, {
                name: 'Rivers',
                type: 'mapline',
                data: rivers,
                states: {
                    hover: {
                        lineWidth: 3
                    }
                },
                color: Highcharts.getOptions().colors[0],
                tooltip: {
                    pointFormat: '{point.properties.NAME}'
                }
            }, {
                name: 'Cities',
                type: 'mappoint',
                data: cities,
                color: 'black',
                marker: {
                    radius: 2
                },
                dataLabels: {
                    align: 'left',
                    verticalAlign: 'middle'
                },
                animation: false,
                tooltip: {
                    pointFormat: '{point.name}'
                }
            }]
        });
    });
});
