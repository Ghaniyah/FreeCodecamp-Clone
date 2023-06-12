const key = 'AIzaSyCLlgZjxWpakU7WI0f0D3s5HusG_b4OvV8'

async function getTranslation(text, language) {
    let result = await fetch(`https://translation.googleapis.com/language/translate/v2?q=${text}&target=${language}&key=${key}`)

    let translationData = await result.json()

    return translationData.data.translations[0].translatedText
}

async function getTranslationFromAPI() {
    console.log('button clicked')
    let textToTranslate = document.getElementById('translation-text').value

    let language = document.getElementById('select-lang').value

    let translatedText = await getTranslation(textToTranslate, language)

    document.getElementById('trans-result').innerHTML = translatedText
}