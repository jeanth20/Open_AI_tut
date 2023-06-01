
// This is a post request for auto completion
// POST https://api.openai.com/v1/completions


API_KEY="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"

fetch("https://api.openai.com/v1/completions", {
    method: "POST",
    headers: {
        Authorization: `Bearer ${API_KEY}`,
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        model: "text-davinci-003",
        prompt: "Hello, how are you today?",
        max_tokens: 7, // 2048 max
        temprature: 0, // 0.8 = random, 0.2 = focused/deterministic
    })
})



// available body
// model
// prompt
// suffix
// max_tokens
// temprature
// top_p
// n
// stream
// logprobs
// echo
// presence_penalty
// frequency_penalty
// best_of
// logit_bias
// user


