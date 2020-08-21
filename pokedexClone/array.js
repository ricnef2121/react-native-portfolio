const ww = [70,72,68,65,74,74,73];
let mas_delta = Math.abs(ww[0]- ww[1]);
for (let i = 0; i < ww.length; i++) {
   let delta = Math.abs(ww[i] -ww[i+1]);
   if(delta>mas_delta){
       mas_delta = delta
   }
    
}

console.log(mas_delta)