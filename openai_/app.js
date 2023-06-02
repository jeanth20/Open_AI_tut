
const API_KEY="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"

async function fetchData_davinci_003() {
    const response = await fetch("https://api.openai.com/v1/completions", {
        method: "POST",
        headers: {
            Authorization: `Bearer ${API_KEY}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            model: "davinci",
            prompt: "Hello, how are you today?",
            max_tokens: 7,
            // temprature: 0,
        })

    });
    const data = await response.json()
    console.log(data)
}

fetchData_davinci_003()

async function fetchData_gpt4() {
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


async function fetchData_gpt3() {
    const API_KEY = "YOUR_API_KEY";
    const response = await fetch("https://api.openai.com/v1/engines/davinci-codex/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        prompt: "Hello, how are you today?",
        max_tokens: 100
      })
    });
    const data = await response.json();
    console.log(data.choices[0].text);
  }

fetchData_gpt3()