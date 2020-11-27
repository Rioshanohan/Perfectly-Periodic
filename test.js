function circle (x, y, context) {
    context.moveTo(x + 5, y)
    context.arc(x, y, 5, 0, 2 * Math.PI)
}
var cnv1 = document.getElementById('myCanvas1')
var ctx1 = cnv1.getContext('2d')
ctx1.fillStyle = '#000000'
circle(110, 56, ctx1)
ctx1.stroke()
ctx1.font = "18px Arial";
ctx1.fillText("H", 80, 55);
var cnv2 = document.getElementById('myCanvas2')
var ctx2 = cnv2.getContext('2d')
ctx2.fillStyle = '#000000'
circle(110, 56, ctx2)
circle(110, 44, ctx2)
ctx2.stroke()
ctx2.font = "18px Arial";
ctx2.fillText("H", 80, 55);
var cnv3 = document.getElementById('myCanvas3')
var ctx3 = cnv3.getContext('2d')
ctx3.fillStyle = '#000000'
circle(110, 56, ctx3)
circle(110, 44, ctx3)
circle(98, 34, ctx3)
ctx3.stroke()
ctx3.font = "18px Arial";
ctx3.fillText("Og", 80, 55);
var cnv4 = document.getElementById('myCanvas4')
var ctx4 = cnv4.getContext('2d')
ctx4.fillStyle = '#000000'
circle(110, 56, ctx4)
circle(110, 44, ctx4)
circle(98, 34, ctx4)
circle(86, 34, ctx4)
ctx4.stroke()
ctx4.font = "18px Arial";
ctx4.fillText("Og", 80, 55);
var cnv5 = document.getElementById('myCanvas5')
var ctx5 = cnv5.getContext('2d')
ctx5.fillStyle = '#000000'
circle(111, 56, ctx5)
circle(111, 44, ctx5)
circle(98, 34, ctx5)
circle(86, 34, ctx5)
circle(72, 44, ctx5)
circle(72, 56, ctx5)
circle(98, 66, ctx5)
circle(86, 66, ctx5)
ctx5.stroke()
ctx5.font = "18px Arial";
ctx5.fillText("Og", 80, 55);
var cnv6 = document.getElementById('myCanvas6')
var ctx6 = cnv.getContext('2d')
ctx5.fillStyle = '#000000'
circle(111, 56, ctx6)
circle(111, 44, ctx6)
circle(98, 34, ctx6)
circle(86, 34, ct6)
circle(72, 44, ctx6)
circle(72, 56, ctx6)
circle(98, 66, ctx6)
circle(86, 66, ctx6)
ctx6.stroke()
ctx6.font = "18px Arial";
ctx6.fillText("Og", 80, 55);