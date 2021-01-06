function test () {
    let birthMonth = document.getElementById('birthMonth').value
    let birthDay = document.getElementById('birthDay').value
    let returnWorkout = document.getElementById('btn')
    let display = document.getElementById('display')
    let image = document.createElement('img')
    let sets = document.getElementById('set')
    console.log(birthDay + "and" + birthMonth)
         if (birthMonth == 12 && birthDay > 22 && birthDay <= 31 || birthMonth == 01 && birthDay >= 0 && birthDay <=19){
             display.innerText = "Capricorn" 
             sets.innerText = "1 set = 10 reps of each card. Do 3 reps 💪🏾"
             image.src="./biggerzodfit/1.png"
             display.appendChild(image)
             console.log(birthMonth)
             console.log(display)
             //Capricorn
         }else if (birthMonth == 01 && birthDay > 20 && birthDay <= 31 || birthMonth == 02 && birthDay > 0 && birthDay <= 18){
            display.innerText = "Aquarius" 
            sets.innerText = "1 set = 10 reps of each card. Do 3 reps 💪🏾"
            image.src="./biggerzodfit/2.png"
            display.appendChild(image)
            console.log(birthMonth)
            console.log(display)
            //Aquarius
         }else if (birthMonth == 02 && birthDay > 19 && birthDay <= 31 || birthMonth == 03 && birthDay > 0 && birthDay <= 20){
            display.innerText = "Pisces" 
            sets.innerText = "1 set = 10 reps of each card. Do 3 reps 💪🏾"
            image.src="./biggerzodfit/3.png"
            display.appendChild(image)
            console.log(birthMonth)
             console.log(display)
            //pisces
         }else if (birthMonth == 03 && birthDay > 21 && birthDay <= 31 || birthMonth == 04 && birthDay > 0 && birthDay <= 19){
            display.innerText = "Aries" 
            sets.innerText = "1 set = 10 reps of each card. Do 3 reps 💪🏾"
            image.src="./biggerzodfit/4.png"
            display.appendChild(image)
            console.log(birthMonth)
             console.log(display)
             //Aries
         }else if (birthMonth == 04 && birthDay > 20 && birthDay <= 31 || birthMonth == 05 && birthDay > 0 && birthDay <= 20) {
            display.innerText = "Taurus" 
            sets.innerText = "1 set = 10 reps of each card. Do 3 reps 💪🏾"
            image.src="./biggerzodfit/5.png"
            display.appendChild(image)
            console.log(birthMonth)
             console.log(display)
             //Taurus
         } else if (birthMonth == 05 && birthDay > 21 && birthDay <= 31 || birthMonth == 06 && birthDay > 0 && birthDay <= 20){
            display.innerText = "Gemini" 
            sets.innerText = "1 set = 10 reps of each card. Do 3 reps 💪🏾"
            image.src="./biggerzodfit/6.png"
            display.appendChild(image)
            console.log(birthMonth)
             console.log(display)
             //Gemini
         }else if(birthMonth == 06 && birthDay > 21 && birthDay <= 31 || birthMonth == 07 && birthDay > 0 && birthDay <= 22) {
            display.innerText = "Cancer" 
            sets.innerText = "1 set = 10 reps of each card. Do 3 reps 💪🏾"
            image.src="./biggerzodfit/7.png"
            display.appendChild(image)
             //cancer
         }else if(birthMonth == 07 && birthDay > 23 && birthDay <= 31 || birthMonth == 08 && birthDay > 0 && birthDay <= 22){
            display.innerText = "Leo" 
            sets.innerText = "1 set = 10 reps of each card. Do 3 reps 💪🏾"
            image.src="./biggerzodfit/8.png"
            display.appendChild(image)
             //Leo
         }else if (birthMonth == 08 && birthDay > 23 && birthDay <= 31 || birthMonth == 09 && birthDay > 0 && birthDay <= 22){
            display.innerText = "Virgo" 
            sets.innerText = "1 set = 10 reps of each card. Do 3 reps 💪🏾"
            image.src="./biggerzodfit/9.png"
            display.appendChild(image)
             //virgo
         }else if(birthMonth == 09 && birthDay > 23 && birthDay <= 31 || birthMonth == 10 && birthDay > 0 && birthDay <= 22){
            display.innerText = "Libra" 
            sets.innerText = "1 set = 10 reps of each card. Do 3 reps 💪🏾"
            image.src="./biggerzodfit/10.png"
            display.appendChild(image)
             //libra
         }else if(birthMonth == 10 && birthDay > 23 && birthDay <= 31 || birthMonth == 11 && birthDay > 0 && birthDay <= 21){
            display.innerText = "Scorpio" 
            sets.innerText = "1 set = 10 reps of each card. Do 3 reps 💪🏾"
            image.src="./biggerzodfit/11.png"
            display.appendChild(image)
             //scorpio
         }else if(birthMonth == 11 && birthDay > 22 && birthDay <= 31 || birthMonth == 12 && birthDay > 0 && birthDay <= 21){
            display.innerText = "Sagittarius" 
            sets.innerText = "1 set = 10 reps of each card. Do 3 reps 💪🏾"
            image.src="./biggerzodfit/12.png"
            display.appendChild(image)
             //sagittarius 
         }
         else{
             display.innerText = "Drop and give me 10"
         }
    document.getElementById('birthMonth').value = '';   
    document.getElementById('birthDay').value = '';
        }
    document.getElementById('btn').addEventListener("click", test);
    // display.innerHTML = "Scorpio <br> 3 sets of 10"
    //      image.src="./biggerzodfit/1.png"
    //      display.appendChild(image)
    //      console.log(Number(birthDay.value) + Number(birthMonth.value))