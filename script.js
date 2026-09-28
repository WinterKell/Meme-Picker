import { catsData } from "/data.js";

const emotionRadio = document.getElementById('emotion-radios')

emotionRadio.addEventListener('change', highlightCheckedOption)

function highlightCheckedOption(event) {
    const radioArray = document.getElementsByClassName('radio')
        for(let removeHighlight of radioArray){
            removeHighlight.classList.remove('highlight')
        }
    
    document.getElementById(event.target.id).parentElement.classList.add('highlight')
}


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
