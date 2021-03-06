
var length = 200;
var stroke = 14;

if(view.bounds.width < 800) {
length=100
stroke = 7;
}
var hoursPath = new Path();
hoursPath.strokeColor = 'blue';
hoursPath.strokeWidth = 0;
hoursPath.add(new Point(view.center));
hoursPath.add(new Point(view.center - [0, length]));

var minutesPath = new Path();
minutesPath.strokeColor = 'green';
minutesPath.strokeWidth = 0;
minutesPath.add(new Point(view.center));
minutesPath.add(new Point(view.center - [0, length]));

var secondsPath = new Path();
secondsPath.strokeColor = 'red';
secondsPath.strokeWidth = 0;
secondsPath.add(new Point(view.center));
secondsPath.add(new Point(view.center - [0, length]));

var monthPath = new Path();
monthPath.strokeColor = 'grey';
monthPath.strokeWidth = 0;
monthPath.add(new Point(view.center));
monthPath.add(new Point(view.center - [0, length]));




var d = new Date();
var full = d.getTime();
var seconds = d.getSeconds() + 1;
var minutes = d.getMinutes() + 1;
var hours = d.getHours() + 1;
var month = d.getMonth() + 1;


var rotateDiv = 360 / 60; 

var rotateSec = seconds * rotateDiv;
secondsPath.rotate(rotateSec, view.center);

var rotateMin = minutes * rotateDiv;
minutesPath.rotate(rotateMin, view.center);

var rotateDivHours = 360 / 12; 

var rotateHour = hours * rotateDivHours;
hoursPath.rotate(rotateHour, view.center);

var rotateDivMonth = 360 / 12; 

var rotateMonth = month * rotateDivMonth;
monthPath.rotate(rotateMonth, view.center);


	var outerCircle = new Path.Circle ({
	center: view.center,
	radius: length,
	strokeColor: 'black',
	strokeWidth: stroke
		
})
	
function onFrame (event) {
secondsPath.rotate(.1, view.center);
minutesPath.rotate(0.001666666667, view.center);
hoursPath.rotate(0.00002777777778, view.center);	

outerCircle.segments[0].point = 	secondsPath.segments[1].point;
outerCircle.segments[1].point = 	minutesPath.segments[1].point;
outerCircle.segments[2].point = 	hoursPath.segments[1].point;
outerCircle.segments[3].point = 	monthPath.segments[1].point;


}

	
	
	
