import './style.css'
window.katt = function katt() {
  const egyes = document.getElementById("egyes").value
  const kettes = document.getElementById("kettes").value/100
        const bmi = egyes/(kettes*kettes)
        console.log(bmi);
                
      }

