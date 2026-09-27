import { catsData } from "/data.js";

const emotionRadio = document.getElementById('emotion-radios')

function getEmotionsArray(cats){
    let catEmotions = []
    for (let data of cats) {
        for (let emotion of data.emotionTags) {
            catEmotions.push(emotion)
        }
    }
    return catEmotions
}

function renderEmotionsRadios(cats) {

    let HTML = ``

    const emotions = getEmotionsArray(cats)
    
    for (let eachEmotion of emotions) {
        HTML += `<p>${eachEmotion}</p>`
    }
    
    emotionRadio.innerHTML = HTML
}

renderEmotionsRadios(catsData)
