
const API_KEY="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"

async function fetchData() {
    const response = await fetch("https://api.openai.com/v1/completions", {
        method: "POST",
        headers: {
            Authorization: `Bearer ${API_KEY}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            model: "gtp-4",
            message: [{
                    role: "user",
                    content: "Hello, how are you today?"
                }],
        })
    });
    const data = await response.json()
    console.log(data)
}

fetchData()