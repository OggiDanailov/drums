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




var currentStep = 0;
var currentSpeed = 200

var playButton = document.getElementById('playButton')
playButton.addEventListener('click', start)

function start(){
	setInterval(() => {
		currentStep += 1;
		currentKiq = 0;
		if(currentKiq = timeLine[currentStep - 1]){
			currentKiq.style.backgroundColor = 'green'
		}else {
			currentKiq.style.backgroundColor = 'red'
		}
		
		if(currentStep >= 16){
			currentStep =1;
		}
		

	},currentSpeed )

}






})()



	