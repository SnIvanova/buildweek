document.addEventListener('DOMContentLoaded', function (){

})

const answer = {
    match,
    wrong,
};

const total = answer.match + answer.wrong;
    const correctPercentage = ((answer.match / total) * 100).toFixed(1);
    const wrongPercentage = ((answer.wrong / total) * 100).toFixed(1);

const results = document.getElementsByClassName('resultsItem');
    createResultElement('Correct', correctPercentage, answer.match, results[0], 'left');
    createResultElement('Wrong', wrongPercentage, answer.wrong, results[2], 'right');

const canvas = document.getElementById('myCanvas');
    DoughnutChart(canvas, wrongPercentage, correctPercentage);

function createParagraph(text, fontSize, margin, fontWeight) {
        const paragraph = document.createElement('p');
        paragraph.innerText = text;
        paragraph.style.fontSize = fontSize;
        paragraph.style.margin = margin;
        paragraph.style.fontWeight = fontWeight;
        return paragraph;
    }
 
function createResultElement(title, percentage, count, container, textAlign) {
        const titleElement = createParagraph(title, '3em', '0', '1em');
        const percentageElement = createParagraph(percentage + '%', '3em', '0', 'bold');
        const countElement = createParagraph(`${count}/${total} questions`, '0', '0', '100px');
        const emptyElement = createParagraph('\n', '0', '0', '0');

        container.appendChild(titleElement);
        container.appendChild(percentageElement);
        container.appendChild(countElement);
        container.appendChild(emptyElement);
        container.style.textAlign = textAlign;
    }    
