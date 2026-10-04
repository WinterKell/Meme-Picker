import { catsData } from "/data.js";

const emotionRadio = document.getElementById('emotion-radios')
const getImgBtn = document.getElementById('get-image-btn')
const gifOnlyBox = document.getElementById('gifs-only-option')

getImgBtn.addEventListener('click', getMatchingCatsArray)



function getMatchingCatsArray() {

    if (document.querySelector('input[type="radio"]:checked')) {
        
        const selectedEmotion = document.querySelector('input[type="radio"]:checked').value
        const isGif = gifOnlyBox.checked

        const matchingCatsArray = catsData.filter((catsData)=>{
            if(isGif){
                return catsData.emotionTags.includes(selectedEmotion) && catsData.isGif
            }
            else{
                return catsData.emotionTags.includes(selectedEmotion)
            } 
        })
        return matchingCatsArray
    }

}

function getSingleCatObject() {

}

function renderCat() {
    
}

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
