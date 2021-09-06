const form = document.getElementById('form')
const selects = document.querySelectorAll('select')
const input = document.getElementById('time')
const erro = document.getElementById('erro')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log(input.value)
    
    if(input.value >= 1){
        handleData()
    } else {
        erro.style.visibility = 'visible'
    }
})

selects.forEach(select => select.addEventListener('change', () => {
    if(select.value === ''){
        selects[0].options.selectedIndex = 0;
        selects[1].options.selectedIndex = 0;

        selects[0].options[1].disabled = false; 
        selects[0].options[2].disabled = false; 
        selects[0].options[3].disabled = false; 
        selects[0].options[4].disabled = false; 
        selects[1].options[1].disabled = false; 
        selects[1].options[2].disabled = false; 
        selects[1].options[3].disabled = false; 
        selects[1].options[4].disabled = false; 
    }else if(selects[0] === select && select.value === '11'){
        selects[1].options[1].disabled = true; 
    } else if(selects[0] === select && select.value !== '11'){
        selects[1].options[1].disabled = false; 
        selects[1].options[2].disabled= true;
        selects[1].options[3].disabled= true;
        selects[1].options[4].disabled= true;
    }else if(selects[1] === select && select.value === '11'){
        selects[0].options[1].disabled = true;
    } else if(selects[1] === select && select.value !== '11'){
        selects[0].options[1].disabled = false; 
        selects[0].options[2].disabled= true;
        selects[0].options[3].disabled= true;
        selects[0].options[4].disabled= true;
    }
}))

async function handleData(){
    erro.style.visibility = 'hidden'

    const origin = parseInt(form.elements['origin'].value)
    const destiny = parseInt(form.elements['destiny'].value)
    const time = parseInt(form.elements['time'].value)
    const plan = parseInt(form.elements['plan'].value)
    const cards = document.querySelectorAll('#cards')
    const prices = document.querySelectorAll('#price')

    const data = { origin, destiny, time, plan}
    
    const sendData = await fetch('/reqUser', {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(data)
    });

    await sendData.json().then(res => {
        cards[0].style.visibility = 'visible'
        cards[1].style.visibility = 'visible'

        prices[0].innerHTML = `R$${res.prices.withPlan}`
        prices[1].innerHTML = `R$${res.prices.withouPlan}`

        console.log(res)
   })
}