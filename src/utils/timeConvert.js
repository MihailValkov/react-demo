export default function convertMinutes(num){
    const d = Math.floor(num/1440);
    const h = Math.floor((num-(d*1440))/60);
    const m = Math.round(num%60);
  
    if(d===1){ return('1 day ago'); }
    if(d>1){ return(`${d} days ago`);}  
    else{
        if(h===1){ return('1 hour ago'); }
        if(h>1){ return(`${h} hours ago`);}  
        else {
            if(m===1){ return('1 minute ago'); }
            if(m>1){ return(`${m} minutes ago`);}  
        }
    }
  }