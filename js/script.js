var k = document.querySelectorAll(".word .k");
var key = document.querySelectorAll(".keyboard .key");
var warn = document.querySelector(".warn");
var cnt = document.querySelector(".container");

let words = ["HELLOO", "WAROUT", "JUNGLE", "BEAUTY", "CRUELL"];
var rand = Math.floor(Math.random() * words.length);
var wordToGuess = words[rand]; 

let i = 0;

key.forEach(item => {
    item.addEventListener("click", function() {
        if (i >= 6) {
            return;
        }

        let ltr = item.textContent;

        if (wordToGuess[i] === ltr) {
            
            k[i].textContent = ltr; 
            i++; 
            warn.textContent = ""; 

            if (i === 6) {
                // warn.textContent = "You guessed it!";
                var newbtn = document.createElement("button");
                newbtn.textContent= "restart";
                newbtn.value="reset";
                cnt.append(newbtn);
                newbtn.addEventListener("click",function(){
                    k.forEach(item=>{
                        item.textContent=[];
                    })
                    warn.textContent = ""; 
                    newbtn.remove();
                    i=0;
                    rand = Math.floor(Math.random() * words.length);
                })
            }
            
        } else {
            warn.textContent = "Not correct, try again!";
        }
    });
});