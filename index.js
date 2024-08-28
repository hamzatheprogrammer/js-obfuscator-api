const JavaScriptObfuscator = require('javascript-obfuscator');
const express = require('express')
const app = express()
const cors = require('cors');

const PORT = 3600

app.use(cors())


app.get('/obfuscator/code=:code', (req, res) => {
    const code = req.params.code
    try {
        const obfuscatorResults = JavaScriptObfuscator.obfuscate(code)
        const obfuscatedCode = obfuscatorResults.getObfuscatedCode()
        res.json({
            status: 200 ,
            developer: 'Hamza Saleem',
            obfuscatedCode: obfuscatedCode
        })
        
    } 
    catch (error) {
        res.json({
            status: 500 ,
            developer: 'Hamza Saleem',
            error: error.message

        })





}})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})