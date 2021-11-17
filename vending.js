var coins = {
    coin500: 3,   coin100: 3,   coin50: 3,   coin10: 10 
   };
   var deposit = 0;
   var change = 0;
   function putcoin(e){
     
     
       if (e === 500 && coins.coin500 > 0) {
         document.getElementById('mpCoin').play();
         document.getElementById('coin500').innerHTML = '500円玉:' + (--coins.coin500)  + '個';
         deposit = deposit + 500;
         document.getElementById('deposit').innerHTML = deposit + '円';
         return;
       }
   
       if(e === 100 && coins.coin100 > 0){
         document.getElementById('mpCoin').play();
         document.getElementById('coin100').innerHTML = '100円玉:' + (--coins.coin100)  + '個';
         deposit = deposit + 100;
         document.getElementById('deposit').innerHTML = deposit + '円';
         return;
       }
       if (e === 50 && coins.coin50 > 0) {
         document.getElementById('mpCoin').play();
         document.getElementById('coin50').innerHTML = '500円玉:' + (--coins.coin50)  + '個';
         deposit = deposit + 50;
         document.getElementById('deposit').innerHTML = deposit + '円';
         return;
       }
     
     
       if(e === 10 && coins.coin10 > 0){
         document.getElementById('mpCoin').play();
         document.getElementById('coin10').innerHTML = '10円玉:' + (--coins.coin10)  + '個';
         deposit = deposit + 10;
         document.getElementById('deposit').innerHTML = deposit + '円';
         return;
       }
     
   }
   
   function getDrink(e){
       
     if (e == 'coke' && deposit >= 120) {
       document.getElementById('mpCan').play();
       deposit = deposit - 120;
   
       change = deposit;
       deposit = 0;
       document.getElementById('deposit').innerHTML = deposit + '円';
       document.getElementById('change').innerHTML = change + '円';
       var img = document.createElement('img');
       img.src = document.getElementById("cokeImg").src;
       img.alt = 'coke画像';
       document.getElementById("pickcan").appendChild(img);
       return;
     } 
     
     if (e == 'pokari' && deposit >= 160) {
       document.getElementById('mpCan').play();
       deposit = deposit - 160;
   
       change = deposit;
       deposit = 0;
       document.getElementById('deposit').innerHTML = deposit + '円';
       document.getElementById('change').innerHTML = change + '円';
       var img = document.createElement('img');
       img.src = document.getElementById("pokariImg").src;
       img.alt = 'pokari画像';
       document.getElementById("pickcan").appendChild(img);
       return;
     } 
     if (e == 'water' && deposit >= 110) {
       document.getElementById('mpCan').play();
       deposit = deposit - 110;
   
       change = deposit;
       deposit = 0;
       document.getElementById('deposit').innerHTML = deposit + '円';
       document.getElementById('change').innerHTML = change + '円';
       var img = document.createElement('img');
       img.src = document.getElementById("waterImg").src;
       img.alt = 'water画像';
       document.getElementById("pickcan").appendChild(img);
       return;
     } 
     
     if (e == 'orange' && deposit >= 260) {
       document.getElementById('mpCan').play();
       deposit = deposit - 260;
   
       change = deposit;
       deposit = 0;
       document.getElementById('deposit').innerHTML = deposit + '円';
       document.getElementById('change').innerHTML = change + '円';
       var img = document.createElement('img');
       img.src = document.getElementById("orangeImg").src;
       img.alt = 'orange画像';
       document.getElementById("pickcan").appendChild(img);
       return;
     } 
   }
   
   function pickupAll(){
     var changes = deposit + change;
     deposit = 0; change = 0;
     document.getElementById('deposit').innerHTML = deposit + '円';
     document.getElementById('change').innerHTML = change + '円';
     document.getElementById("pickcan").innerHTML = "";
     document.getElementById('mpCoin').play();
     pickupCoins(changes);
     
   }
   
   function pickupCoins(e){
     var n = 0;
     n = Math.floor(e/500);
     coins.coin500 = coins.coin500 + n;
     document.getElementById('coin500').innerHTML = '500円玉:' + (coins.coin500) + '個';
     
     e = e - 500*n;
     n = Math.floor(e/100);
     coins.coin100 = coins.coin100 + n;
     document.getElementById('coin100').innerHTML = '100円玉:' + (coins.coin100) + '個'; 
     
     e = e - 100*n;
     n = Math.floor(e/50);
     coins.coin50 = coins.coin50 + n;
     document.getElementById('coin50').innerHTML = '50円玉:' + (coins.coin50) + '個'; 
     
     e = e - 50*n;
     n = Math.floor(e/10);
     coins.coin10 = coins.coin10 + n;
     document.getElementById('coin10').innerHTML = '10円玉:' + (coins.coin10) + '個'; 
     
   }