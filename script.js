const API_URL = "https://api.adviceslip.com/advice";

const adviceId = document.querySelector('.advice__id');
const adviceMsg = document.querySelector(".advice__msg");

async function getAdvice(){
    const resp = await fetch(API_URL);
    const respData = await resp.json();
    adviceId.innerText = `ADVICE #${respData.slip.id}`;
    adviceMsg.innerText = `“${respData.slip.advice}”`;
    return respData;
}

function generateNewAdvice(){
    getAdvice();
}

getAdvice();