import './style.css'
import { bmiRules } from './bmi_calc/rules.js'

const app = document.getElementById('app')

let cards = ''

for (let rule of bmiRules) {
  cards += `
    <div class="kartya">
      <img src="/src/bmi_calc/${rule.image}">
      <h3>${rule.category}</h3>
      <p>${rule.message}</p>
    </div>
  `
}

app.innerHTML = `
  <h1>BMI-kategóriák</h1>
  <div class="kartyak">
    ${cards}
  </div>
`