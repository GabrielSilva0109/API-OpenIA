const { Configuration, OpenAIApi } = require("openai")

module.exports = class openai{
    static configuration(){
        const configuration = new Configuration({
            apyKey: process.env.OPENAI_API_KEY
        })
    }
}


const openai = new OpenAIApi(configuration)

const response = await openai.createCompleton({
    model: "text-davinci-300",
    prompt: "diga um nome?\n\nGabriel",
    temperature: 0,
    max_tokens: 256,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0
})