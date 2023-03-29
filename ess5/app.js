
const yan = document.querySelector("#yan")

const som = document.querySelector("#som")
const usd = document.querySelector("#usd")
const eur = document.querySelector("#eur")



const ten = document.querySelector("#ten")

const convert = (element, target, target2) => {
    element.addEventListener("input", () => {
        const request = new XMLHttpRequest()


        request.open("GET", "data.json")
        request.setRequestHeader("Content-Type", "application/jason")
        request.send()



        request.addEventListener("load", () => {
            const data = JSON.parse(request.response)

            target.forEach(event => {
                target2 === 'som' ?
                    event.value = (element.value / data [event.id]).toFixed(2) : event === som?
                        event.value = (element.value * data[element.id]).toFixed(2)
                        :event.value = ((element.value * data[element.id]) / data[event.id]).toFixed(2)
            })
            element.value === '' && (target.forEach(event => event.value = ''))
        })
    })
}
convert(som, [eur,usd,yan,ten])
convert(eur, [som,usd,yan,ten])
convert(usd, [eur,som,yan,ten])
convert(yan, [eur,som,ten,usd])
convert(ten, [eur,som,yan,usd])
