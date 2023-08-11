time = document.getElementById("time");
welcome = document.getElementById("welcome");
todoInput = document.getElementById("todoInput");
save = document.getElementById("save");



//idő megjelenítése
function showTime(){
    var date = new Date();
    hour = date.getHours();
    min = date.getMinutes();
    sec = date.getSeconds();

    time.innerHTML = hour + ":" + addZero(min) + ":" + addZero(sec);

    setTimeout(showTime, 1000); 
}
function addZero(number){
    if(number<10){
        number = '0' + number;
            return number;
    }
    else return number;
}

//napszokhoz igazodó formázás
function dayPart(){
    if(hour>=5 && hour<12){
        welcome.innerHTML = "Jó reggelt!";
        document.body.className = "morning";
    }
    else if(hour>=12 && hour<20){
        welcome.innerHTML = "Szép napot!";
        document.body.className = "afternoon";
    }
    else {
        welcome.innerHTML = "Szép estét!";
        document.body.className = "night";
        todoInput.className = "nightInput";
        save.className = "nightBtn";
    }

    setTimeout(showTime, 60000); 
}


//todo mentés
todoInput.addEventListener("keyup", function(event){
    
    if(todoInput.value !="" && event.keyCode == 13){

        var input = document.createElement("input");
        input.type = "checkbox";

        var span = document.createElement("span");
        span.innerText = todoInput.value;

        var div = document.createElement("div");
        div.appendChild(input);
        div.appendChild(span);

        document.getElementById("todos").appendChild(div);

        todoInput.value = "";

        input.addEventListener("change", function(){
            span.classList.toggle("done");
        })
    }
})
save.addEventListener("click", function(){
    
    if(todoInput.value !=""){
        
        var input = document.createElement("input");
        input.type = "checkbox";

        var span = document.createElement("span");
        span.innerText = todoInput.value;

        var div = document.createElement("div");
        div.appendChild(input);
        div.appendChild(span);

        document.getElementById("todos").appendChild(div);

        todoInput.value = "";

        input.addEventListener("change", function(){
            span.classList.toggle("done");
        })
    }
});



showTime();
dayPart();