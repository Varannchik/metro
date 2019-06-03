
let redRoad=document.querySelector('.red_road');
let blueRoad=document.querySelector('.blue_road');
let greenRoad=document.querySelector('.green_road');
let metroRed=document.querySelectorAll(".rRed");
let metroBlue=document.querySelectorAll(".rBlue");
let metroGreen=document.querySelectorAll(".rGreen"); 
redRoad.addEventListener('click',function(){   
    document.querySelector('.red_station').classList.add('visible');
    document.querySelector('.blue_station').classList.remove('visible');
    document.querySelector('.green_station').classList.remove('visible');
    document.querySelector('.red_road').classList.add('red_road_active');
    document.querySelector('.blue_road').classList.remove('blue_road_active');
    document.querySelector('.green_road').classList.remove('green_road_active');
    for(let i=0; i<metroRed.length; i++){
        metroRed[i].style.strokeWidth='3'
    }
    for(let i=0; i<metroBlue.length; i++){
        metroBlue[i].style.strokeWidth='2'
    }
    for(let i=0; i<metroGreen.length; i++){
        metroGreen[i].style.strokeWidth='2'
    }
});
blueRoad.addEventListener('click',function(){   
    document.querySelector('.blue_station').classList.add('visible');
    document.querySelector('.red_station').classList.remove('visible');
    document.querySelector('.green_station').classList.remove('visible');
    document.querySelector('.red_road').classList.remove('red_road_active');
    document.querySelector('.blue_road').classList.add('blue_road_active');
    document.querySelector('.green_road').classList.remove('green_road_active');
    for(let i=0; i<metroRed.length; i++){
        metroRed[i].style.strokeWidth='2'
    }
    for(let i=0; i<metroBlue.length; i++){
        metroBlue[i].style.strokeWidth='3'
    }
    for(let i=0; i<metroGreen.length; i++){
        metroGreen[i].style.strokeWidth='2'
    }
    
});
greenRoad.addEventListener('click',function(){    
    document.querySelector('.green_station').classList.add('visible');
    document.querySelector('.blue_station').classList.remove('visible');
    document.querySelector('.red_station').classList.remove('visible');
    document.querySelector('.red_road').classList.remove('red_road_active');
    document.querySelector('.blue_road').classList.remove('blue_road_active');
    document.querySelector('.green_road').classList.add('green_road_active');
    for(let i=0; i<metroRed.length; i++){
        metroRed[i].style.strokeWidth='2'
    }
    for(let i=0; i<metroBlue.length; i++){
        metroBlue[i].style.strokeWidth='2'
    }
    for(let i=0; i<metroGreen.length; i++){
        metroGreen[i].style.strokeWidth='3'
    }
});

//blue stations and names
let nameBlue=document.querySelectorAll('.blue_station_lable > span');
let stationBlue=document.querySelectorAll('.blueStation');
for (let i = 0; i<nameBlue.length; i++){    
    nameBlue[i].addEventListener('mouseover',function(){
        for (let i = 0; i<nameBlue.length; i++){
            stationBlue[i].style.stroke='#000';
            stationBlue[i].style.fill='white';
            stationBlue[i].style.r='4';
            nameBlue[i].style.color='black';
            nameBlue[i].style.border='1px solid transparent';            
        }
        stationBlue[i].style.stroke='#1e1df5';
        stationBlue[i].style.fill='#1e1df5';
        stationBlue[i].style.r='6';
        nameBlue[i].style.color='black';
        nameBlue[i].style.border='1px solid #1e1df5';
        nameBlue[i].style.color='#1e1df5'; 
    });
    nameBlue[i].addEventListener('mouseout',function(){
        stationBlue[i].style.stroke='#000';
        stationBlue[i].style.fill='white';
        stationBlue[i].style.r='4';
        nameBlue[i].style.color='black';
        nameBlue[i].style.border='1px solid transparent';
    });
}

//red stations and names
let nameRed=document.querySelectorAll('.red_station_lable > span');
let stationRed=document.querySelectorAll('.redStation');
for (let j = 0; j<nameRed.length; j++){    
    nameRed[j].addEventListener('mouseover',function(){
        for (let j = 0; j<nameRed.length; j++){
            stationRed[j].style.stroke='#000';
            stationRed[j].style.fill='white';
            stationRed[j].style.r='4';
            nameRed[j].style.color='black';
            nameRed[j].style.border='1px solid transparent';            
        }
        stationRed[j].style.stroke='#ff4445';
        stationRed[j].style.fill='#ff4445';
        stationRed[j].style.r='6';
        nameRed[j].style.color='black';
        nameRed[j].style.border='1px solid #ff4445';
        nameRed[j].style.color='#ff4445'; 
    });
    nameRed[j].addEventListener('mouseout',function(){
        stationRed[j].style.stroke='#000';
        stationRed[j].style.fill='white';
        stationRed[j].style.r='4';
        nameRed[j].style.color='black';
        nameRed[j].style.border='1px solid transparent';
    });
}

//green stations and names
let nameGreen=document.querySelectorAll('.green_station_lable > span');
let stationGreen=document.querySelectorAll('.greenStation');
for (let k = 0; k<nameGreen.length; k++){    
    nameGreen[k].addEventListener('mouseover',function(){
        for (let k = 0; k<nameGreen.length; k++){
            stationGreen[k].style.stroke='#000';
            stationGreen[k].style.fill='white';
            stationGreen[k].style.r='4';
            nameGreen[k].style.color='black';
            nameGreen[k].style.border='1px solid transparent';            
        }
        stationGreen[k].style.stroke='#0ac842';
        stationGreen[k].style.fill='#36ac53';
        stationGreen[k].style.r='6';
        nameGreen[k].style.color='black';
        nameGreen[k].style.border='1px solid #36ac53';
        nameGreen[k].style.color='#36ac53'; 
    });
    nameGreen[k].addEventListener('mouseout',function(){
        stationGreen[k].style.stroke='#000';
        stationGreen[k].style.fill='white';
        stationGreen[k].style.r='4';
        nameGreen[k].style.color='black';
        nameGreen[k].style.border='1px solid transparent'; 
    });
}


