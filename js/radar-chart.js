window.chartColors = {
    aliceblue: '#F0F8FF',
    antiquewhite: '#FAEBD7',
    aqua: '#00FFFF',
    aquamarine: '#7FFFD4',
    azure: '#F0FFFF',
    beige: '#F5F5DC',
    bisque: '#FFE4C4',
    black: '#000000',
    blanchedalmond: '#FFEBCD',
    blue: '#5A99D3',
    blueviolet: '#8A2BE2',
    brown: '#A52A2A',
    burlywood: '#DEB887',
    cadetblue: '#5F9EA0',
    chartreuse: '#7FFF00',
    chocolate: '#D2691E',
    coral: '#FF7F50',
    cornflowerblue: '#6495ED',
    cornsilk: '#FFF8DC',
    crimson: '#DC143C',
    cyan: '#00FFFF',
    darkblue: '#00008B',
    darkcyan: '#008B8B',
    darkgoldenrod: '#B8860B',
    darkgray: '#A9A9A9',
    darkgreen: '#006400',
    darkgrey: '#A9A9A9',
    darkkhaki: '#BDB76B',
    darkmagenta: '#8B008B',
    darkolivegreen: '#556B2F',
    darkorange: '#FF8C00',
    darkorchid: '#9932CC',
    darkred: '#8B0000',
    darksalmon: '#E9967A',
    darkseagreen: '#8FBC8F',
    darkslateblue: '#483D8B',
    darkslategrey: '#2F4F4F',
    darkviolet: '#9400D3',
    deeppink: '#FF1493',
    deepskyblue: '#00BFFF',
    dimgrey: '#696969',
    dodgerblue: '#1E90FF',
    firebrick: '#B22222',
    floralwhite: '#FFFAF0',
    forestgreen: '#228B22',
    fuchsia: '#FF00FF',
    gainsboro: '#DCDCDC',
    ghostwhite: '#F8F8FF',
    goldenrod: '#DAA520',
    gold: '#FFD700',
    green: '#0AA443',
    greenyellow: '#ADFF2F',
    grey: '#A3A3A3',
    honeydew: '#F0FFF0',
    hotpink: '#FF69B4',
    indianred: '#CD5C5C',
    indigo: '#4B0082',
    ivory: '#FFFFF0',
    khaki: '#F0E68C',
    lavender: '#E6E6FA',
    lavenderblush: '#FFF0F5',
    lawngreen: '#7CFC00',
    lemonchiffon: '#FFFACD',
    lightblue: "#ADD8E6",
    lightcoral: '#F08080',
    lightcyan: "#E0FFFF",
    lightgoldenrodyellow: '#FAFAD2',
    lightgreen: "#90EE90",
    lightgrey: "#D3D3D3",
    lightpink: '#FFB6C1',
    lightsalmon: '#FFA07A',
    lightseagreen: "#20B2AA",
    lightskyblue: "#87CEFA",
    lightslategrey: "#778899",
    lightsteelblue: "#B0C4DE",
    lightyellow: '#FFFFE0',
    lime: "#00FF00",
    limegreen: "#32CD32",
    linen: "#FAF0E6",
    magenta: '#FF00FF',
    maroon: "#800000",
    mediumaquamarine: "#66CDAA",
    mediumblue: "#0000CD",
    mediumorchid: '#BA55D3',
    mediumpurple: '#9370DB',
    mediumseagreen: "#3CB371",
    mediumslateblue: '#7B68EE',
    mediumspringgreen: "#00FA9A",
    mediumturquoise: "#48D1CC",
    mediumvioletred: '#C71585',
    midnightblue: "#191970",
    mintcream: "#F5FFFA",
    mistyrose: "#FFE4E1",
    moccasin: '#FFE4B5',
    navajowhite: "#FFDEAD",
    navy: "#000080",
    oldlace: "#FDF5E6",
    olive: "#808000",
    olivedrab: "#6B8E23",
    orange: '#E97C30',
    orangered: '#FF4500',
    orchid: '#DA70D6',
    palegoldenrod: '#EEE8AA',
    palevioletred: '#DB7093',
    palegreen: "#98FB98",
    paleturquoise: "#AFEEEE",
    palevioletred: "#DB7093",
    papayawhip: '#FFEFD5',
    peachpuff: '#FFDAB9',
    peru: "#CD853F",
    pink: '#FFC0CB',
    plum: '#DDA0DD',
    powderblue: "#B0E0E6",
    purple: '#6C18F3',
    rebeccapurple: '#663399',
    red: '#CF3F05',
    rosybrown: "#BC8F8F",
    royalblue: "#4169E1",
    saddlebrown: "#8B4513",
    salmon: '#FA8072',
    sandybrown: "#f4a460",
    seagreen: "#2E8B57",
    seashell: "#FFF5EE",
    sienna: "#A0522D",
    silver: "#C0C0C0",
    skyblue: "#87CEEB",
    slateblue: '#6A5ACD',
    slategrey: "#708090",
    snow: "#FFFAFA",
    springgreen: "#00FF7F",
    steelblue: "#4682B4",
    tan: "#D2B48C",
    teal: "#008080",
    thistle: '#D8BFD8',
    tomato: '#FF6347',
    turquoise: "#40E0D0",
    violet: '#EE82EE',
    wheat: "#F5DEB3",
    white: "#FFFFFF",
    whitesmoke: "#F5F5F5",
    yellow: '#FBBD00',
    yellowgreen: "#9ACD32"
};
var config = {
    type: 'radar',
    data: {
        labels: [
            '傳控', '運球', '力量', '抗擾', '彈跳', '運球'
        ],
        datasets: [{
            label: '光頭櫻木花道',
            backgroundColor: convertHexToRGBA(window.chartColors.red, 50),
            borderColor: window.chartColors.red,
            pointBackgroundColor: convertHexToRGBA(window.chartColors.red, 50),
            data: [
                98,
                126,
                75,
                137,
                96,
                72
            ],
            datalabels: {
                align: 'left',
                display: 'auto'
            }
        }, {
            label: '流川楓',
            backgroundColor: convertHexToRGBA(window.chartColors.steelblue, 40),
            borderColor: window.chartColors.steelblue,
            pointBackgroundColor: convertHexToRGBA(window.chartColors.steelblue, 40),
            data: [
                137,
                113,
                125,
                127,
                83,
                84
            ],
            datalabels: {
                align: 'right',
                display: 'auto'
            }
        }]
    },
    options: {
        animation: {
            onComplete: done
        },
        plugins: {
            datalabels: {
                backgroundColor: function(context) {
                    return context.dataset.borderColor;
                },
                color: 'white',
                font: {
                    weight: 'bold'
                },
                formatter: Math.round,
                padding: 8
            },
            legend: {
                onClick: function(event, legendItem) {},
                position: 'bottom',
            },
        },
        /*
        title: {
            display: true,
            text: '灌籃高手雷達圖'
        },
        */
        scale: {
            ticks: {
                beginAtZero: true
            }
        }
    }
};

window.onload = function() {
    Chart.register(ChartDataLabels);
    var ctx = document.getElementById('chart-area').getContext('2d');
    window.radarChart = new Chart(ctx, config);
};

function convertHexToRGBA(hexCode, opacity) {
    let hex = hexCode.replace('#', '');

    if (hex.length === 3) {
        hex = `${hex[0]}${hex[0]}${hex[1]}${hex[1]}${hex[2]}${hex[2]}`;
    }

    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);

    return `rgba(${r},${g},${b},${opacity / 100})`;
};

function done() {
    var url = window.radarChart.toBase64Image();
    document.getElementById("chart-url").src = url;
}