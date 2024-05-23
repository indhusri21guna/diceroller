
const btn=document.getElementById("btn");
btn.onclick=function roll()
{  
      const diceResult=document.getElementById("diceresult");
      const diceImage=document.getElementById("diceimage");  
      const noofdice=document.getElementById("getele").value;
      const values=[]; 
      const images=[];
   let value2= 0;
   for(let i=0;i<noofdice;i++)
    {
      value2=Math.floor(Math.random()*6)+1;
      values.push(value2);
    images.push(`<img src="dice-six-faces-${value2}.png" width=100px height=100px alt="this is a image">`);
    }

diceResult.textContent= `dice: ${values.join(',')}`;
diceImage.innerHTML=images.join(`    `);
}