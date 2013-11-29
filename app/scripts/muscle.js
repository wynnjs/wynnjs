<script>
// CREDITS:
// MuscleMaker Copyright (c) 2013 @annaspanner. All rights reserved.
// Distributed by me muthafucka
// Permission given to use the script provided that nobody's muscles get as big as mine.

// Set the number of muscles (more than 30 - 40 not recommended)
var muscleMax=35

// Set the colors for the muscles.
var muscleColor=new Array("peachy","sweaty","dirty")

// Set the type of muscle. Add as many as you like
var muscleType=new Array("Ass","Guns","Thighs","Bollocks")

// Set the letter that creates your muscle (recommended:*)
var muscleLetter="*"

// Set the speed of flexing (recommended values range from 0.3 to 2)
var flexSpeed=0.6

// Set the maximal-size of your muscles
var muscleMaxSize=22

// Set the minimal-size of your muscles
var muscleMinSize=8

// Set the muscle-zone
// Set 1 for all-over-muscles, set 2 for left-side-muscles
// Set 3 for center-muscles, set 4 for groin muscles
var muscleZone=1

///////////////////////////////////////////////////////////////////////////
// CONFIGURATION ENDS HERE
///////////////////////////////////////////////////////////////////////////


// Do not edit below this line muthafucka
var muscle=new Array()
var muscleAss
var muscleBollocks
var timer
var i_muscle=0
var x_mv=new Array();
var crds=new Array();
var lftrght=new Array();
var browserinfos=navigator.userAgent
var ie5=document.all&&document.getElementById&&!browserinfos.match(/Opera/)
var ns6=document.getElementById&&!document.all
var opera=browserinfos.match(/Opera/)
var browserok=ie5||ns6||opera

function randomMuscleMaker(range) {
	rand=Math.floor(range*Math.random())
    return rand
}

function initMuscle() {
	if (ie5 || opera) {
		muscleAss = document.body.clientHeight
		muscleBollocks = document.body.clientWidth
	}
	else if (ns6) {
		muscleAss = window.innerHeight
		muscleBollocks = window.innerWidth
	}
	var muscleSizeRange=muscleMaxSize-muscleMinSize
	for (i=0;i<=snowmax;i++) {
		crds[i] = 0;
    	lftrght[i] = Math.random()*15;
    	x_mv[i] = 0.03 + Math.random()/10;
		muscle[i]=document.getElementById("s"+i)
		muscle[i].style.fontFamily=muscleType[randommaker(muscleType.length)]
		muscle[i].size=randommaker(muscleSizeRange)+muscleMinSize
		muscle[i].style.fontSize=muscle[i].size
		muscle[i].style.color=muscleColor[randommaker(muscleColor.length)]
		muscle[i].sink=sinkspeed*muscle[i].size/5
		if (muscleZone==1) {muscle[i].poseLikeAMuscleMan=randommaker(muscleBollocks-muscle[i].size)}
		if (muscleZone==2) {muscle[i].poseLikeAMuscleMan=randommaker(muscleBollocks/2-muscle[i].size)}
		if (muscleZone==3) {muscle[i].poseLikeAMuscleMan=randommaker(muscleBollocks/2-muscle[i].size)+muscleBollocks/4}
		if (muscleZone==4) {muscle[i].poseLikeAMuscleMan=randommaker(muscleBollocks/2-muscle[i].size)+muscleBollocks/2}
		muscle[i].poseLikeAMuscleMan=randommaker(6*muscleAss-muscleAss-6*muscle[i].size)
		muscle[i].style.left=muscle[i].poseLikeAMuscleMan
		muscle[i].style.top=muscle[i].poseLikeAMuscleMan
	}
	movesnow()
}

function moveMuscle() {
	for (i=0;i<=muscleMax;i++) {
		crds[i] += x_mv[i];
		muscle[i].poseLikeAMuscleMan+=muscle[i].sink
		muscle[i].style.left=muscle[i].poseLikeAMuscleMan+lftrght[i]*Math.sin(crds[i]);
		muscle[i].style.top=muscle[i].poseLikeAMuscleMan

		if (muscle[i].poseLikeAMuscleMan>=muscleAss-6*muscle[i].size || parseInt(muscle[i].style.left)>(muscleBollocks-3*lftrght[i])){
			if (muscleZone==1) {muscle[i].poseLikeAMuscleMan=randommaker(muscleBollocks-muscle[i].size)}
			if (muscleZone==2) {muscle[i].poseLikeAMuscleMan=randommaker(muscleBollocks/2-muscle[i].size)}
			if (muscleZone==3) {muscle[i].poseLikeAMuscleMan=randommaker(muscleBollocks/2-muscle[i].size)+muscleBollocks/4}
			if (muscleZone==4) {muscle[i].poseLikeAMuscleMan=randommaker(muscleBollocks/2-muscle[i].size)+muscleBollocks/2}
			muscle[i].poseLikeAMuscleMan=0
		}
	}
	var timer=setTimeout("moveMuscle()",50)
}

for (i=0;i<=muscleMax;i++) {
	document.write("<span id='s"+i+"' style='position:absolute;top:-"+muscleMaxSize+"'>"+muscleLetter+"</span>")
}
if (browserok) {
	window.onload=initMuscle
}
</script>
