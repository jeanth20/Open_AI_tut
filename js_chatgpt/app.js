const API_KEY="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"
const submitButton = document.querySelector("#submit")
const outputElement = document.querySelector("#output")
const inputElement = document.querySelector('input')
const historyElement = document.querySelector('.history')
const buttonElement = document.querySelector("button")

function changeInput(value) {
    inputElement = document.querySelector("input")
}

async function getMessage() {
    console.log("clicked")

    const options = {
        method: "POST",
        headers: {
            'Authorization': `Bearer ${API_KEY}`,
            'Content-Type': "application/json" 
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [{"role": "user", "content": inputElement.value}],
            max_tokens: 100,
            temperature: 0.7
        })
    }

    try {
        response = await fetch("https://api.openai.com/v1/completions", options)
        data = await response.json()
        outputElement.textContent = data.choices[0].messages.content

        if (data.choices[0].messages.content && inputElement.value) {
            const pElement = document.createElement("p")
            pElement.textContent = inputElement.value
            pElement.addEventListener("click", () => changeInput(pElement.textContent))
            historyElement.append(pElement)
        }


        console.log("data")
    } catch (error) {
        console.log(error)
    }

}

submitButton.addEventListener("click", getMessage)

function clearInput() {
    inputElement.value = ""
}


buttonElement.addEventListener("click", getMessage, clearInput)