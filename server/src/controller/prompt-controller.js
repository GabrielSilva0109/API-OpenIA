const openai = require("../config/openai")

module.exports = {
    async sendText(req, res){
        const openaiAPI =openai.configuration()
        
        try {
            const response = await openaiAPI.createCompletion(
                openia.textCompletion("Me de nome de artigos de node")
            )
        } catch (error) {
            
        }
    }
}