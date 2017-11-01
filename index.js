(function(){


	var box = document.createElement('DIV')
	document.body.appendChild(box)
	box.style.width = '700px'
	box.style.height = '200px'
	box.style.border = '5px solid red'


	
var timeLine = [];
for(let i=0;i< 16;i++){
	kiq = document.createElement('DIV')
	kiq.id = 'r' + i
	timeLine.push(kiq)
	kiq.style.width = '30px'
	kiq.style.height = '30px'
	// kiq.style.border = '2px solid red'
	kiq.style.borderRadius = '50%'
	kiq.style.backgroundColor = 'red'
	kiq.style.margin = '5px'
	kiq.style.float = 'left'
	
	box.appendChild(kiq)

}

var currentStep = 1;
var currentSpeed = 200

var playButton = document.getElementById('playButton')
playButton.addEventListener('click', start)

var stopButton = document.getElementById('stopButton')
stopButton.addEventListener('click', stop)

function start(){
	setInterval(() => {
			timeLine[currentStep - 1].style.border = '1px solid blue'
		currentStep += 1;	
		if(currentStep > 16){
			currentStep = 1;
		}
	},currentSpeed)
}

function stop(){
	clearInterval()
}






})()



	