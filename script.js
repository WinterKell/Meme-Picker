import { catsData } from "/data.js";

const emotionRadio = document.getElementById('emotion-radios')
const radioBtn = document.getElementById('radio')

function getEmotionsArray(cats){
    let catEmotions = []
    for (let data of cats) {
        for (let emotion of data.emotionTags) {
           if (!catEmotions.includes(emotion)) {
                catEmotions.push(emotion)
            }  
        }
    }
    return catEmotions
}

function renderEmotionsRadios(cats) {

    let HTML = ``

    const emotions = getEmotionsArray(cats)
    
    for (let eachEmotion of emotions) {
        HTML += 
        `
        <div class="radio">
        <label for="${eachEmotion}">${eachEmotion}</label> 
        <input type="radio" id="${eachEmotion}" value="${eachEmotion}" name="emotion">
        </div>
        `
    }
    
    emotionRadio.innerHTML = HTML
}

renderEmotionsRadios(catsData)
