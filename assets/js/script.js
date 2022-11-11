var currentDay = document.getElementById("currentDay");
var timeEntries =document.getElementById("timeEntries");

var currentTime = moment().format('LLL');

var blockArray =[];
for(var i=9; i < 18; i++){
    
    var timeStamp = `hour${i}`;
    var saved = localStorage.getItem(timeStamp);
    if (data === null){
        data = '';
    }

    var time = '';
    var midday ='';

    if(i <div 12){
        midday = 'AM';
    }else{
        midday = 'PM';
    }

    var outputHTML = document.createElement('div');
    outputHTML.innerHTML =`
    <div class ="row">
        <div class = "hour">
        ${i}${midday}
        </div>
        <textarea id = "textarea${i}" class="${time}">${data}</textarea>
        <button class = "saveBtn" data-hour="${i}">
            <span class="materia-symbols-outlined">
                save
            </span>
        </button>
        </div>
    </div>
    `;
    timeEntries.appendChild(outputHTML);
};