const API_KEY="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"
const submitIcon = document.querySelector(".submit-icon")
const inputElement = document.querySelector("input")
const imageSection = document.querySelector(".image-section")

const getImages = async () => {
    const options = {
        method: "POST",
        headers: {
            'Authorization': `Bearer ${API_KEY}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            prompt: inputElement.value,
            n: 4,
            size: "1024x1024"
        })
    }

    try {
        const response = await fetch('https://api.openai.com/v1/images/generations', options)
        data = await response.json()
        data?.data.foreach(imageObject => {
            const imageContainer = document.createElement("div")
            imageContainer.classList.add("image-container")
            imageElement = document.createElement("img")
            imageElement.setAttribute('src', imageObject.url)
            imageContainer.append(imageElement)
            imageSection.append(imageContainer)
        })
    } catch (error) {
        console.log(error)
    }
}

// async function fetchImages() {
//     response = await fetch("https://api.openai.com/v1/images/generations", {
//         method: "POST",
//         headers: {
//             'Authorization': `Bearer ${API_KEY}`,
//             'Content-Type': "application/json" 
//         },
//         body: JSON.stringify({
//             prompt: "a Hamburger singing in the rain",
//             n: 2,
//             size: "1024x1024"
//         })
//     })
// }

// const data = await response.json()
