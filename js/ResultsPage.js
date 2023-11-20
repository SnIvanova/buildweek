/*
document.addEventListener('DOMContentLoaded', function () {
    let totalQuestions = parseInt(localStorage.getItem('totalQuestions'));
    let match =parseInt(localStorage.getItem('score'));

    let unmatch = totalQuestions - match;

    const answer = {
        match,
        unmatch,
    };

    const total = answer.match + answer.unmatch;
    const correctPercentage = ((answer.match / total) * 100).toFixed(1);
    const wrongPercentage = ((answer.unmatch / total) * 100).toFixed(1);

    const results = document.getElementsByClassName('resultsItem');
    createResultElement('Correct', correctPercentage, answer.match, results[0], 'left');
    createResultElement('Wrong', wrongPercentage, answer.unmatch, results[2], 'right');

    const canvas = document.getElementById('myCanvas');

    if (canvas) {
        configureDoughnutChart(canvas, wrongPercentage, correctPercentage);
    }

    if (correctPercentage > 50) {

        for (let i = 0; i < 10; i++) {
            confetti({
                particleCount: 20,
                spread: 120,
                origin: { y: Math.random(), x: Math.random() },
                colors: ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'],
                shapes: ['circle', 'square'],
                scalar: 1.2,
            });
        }
    }
    
    
    
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
        const percentageElement = createParagraph(`${percentage}%`, '3em', '0', 'bold');
        const countElement = createParagraph(`${count}/${total} questions`, '1em', '0', '100px');
        const emptyElement = createParagraph('\n', '0', '0', '0');

        container.appendChild(titleElement);
        container.appendChild(percentageElement);
        container.appendChild(countElement);
        container.appendChild(emptyElement);
        container.style.textAlign = textAlign;
    }

    function configureDoughnutChart(canvas, wrongPercentage, correctPercentage) {
        const context = canvas.getContext('2d');
        const backgroundColors = ['#D20094', '#00FFFF'];
        const cutoutPercentage = 115;

        adjustOpacityBasedOnPercentage(wrongPercentage, context, canvas.width, canvas.height);

        const chartOptions = {
            animation: {
                animateRotate: true,
                animateScale: true,
                easing: 'easeInOutQuad',
                duration: 2000,
            },
        };

        createDoughnutChart(context, [wrongPercentage, correctPercentage], backgroundColors, cutoutPercentage, chartOptions);
    }


    function adjustOpacityBasedOnPercentage(wrongPercentage, context, width, height) {
        const leftElement = document.getElementById('left');
        const rightElement = document.getElementById('right');

        if (wrongPercentage < 50) {
            rightElement.style.opacity = '0.8';
        } else {
            leftElement.style.opacity = '0.8';
            configureSorryText(context, width, height);
        }
    }

    function createDoughnutChart(context, data, backgroundColors, cutoutPercentage, chartOptions) {
        new Chart(context, {
            type: 'doughnut',
            data: {
                datasets: [{
                    label: 'Result',
                    data: data,
                    backgroundColor: backgroundColors,
                    hoverOffset: 1,
                    borderColor: 'transparent',
                }],
            },
            options: {
                cutout: cutoutPercentage,
                borderAlign: 'inner',
                elements: {
                    arc: {
                        borderAlign: 'inner'
                    }
                },
                ...chartOptions,
            },
            
            plugins: [{
                id: 'text',
                beforeDatasetsDraw: function (chart) {
                    if (wrongPercentage >= 50) {
                        configureSorryText(context, canvas.width, canvas.height);
                    } else {
                        configureCongratulationsText(context, canvas.width, canvas.height);
                    }
                    
                },
            }],
        });
    }
    

    function configureText(ctx, text, color, width, height, ratioX, ratioY, fontSize = '0.8em') {
        ctx.restore();
        ctx.font = `${fontSize} sans-serif`;
        ctx.textBaseline = 'middle';
        ctx.textAlign = 'center';
        ctx.fillStyle = color;
        ctx.fillText(text, width * ratioX, height * ratioY);
    }
    

    function configureCongratulationsText(ctx, width, height) {
        configureText(ctx, 'Congratulations!', 'white', width, height, 0.4, 0.25, '1.2em');
        configureText(ctx, 'You passed the exam', 'aqua', width, height, 0.4, 0.30, '1.2em');
        configureText(ctx, `We'll send you the certificate in`, 'white', width, height, 0.4, 0.4);
        configureText(ctx, 'a few minutes.', 'white', width, height, 0.4, 0.45);
        configureText(ctx, 'Check your email (including', 'white', width, height, 0.4, 0.5);
        configureText(ctx, 'promotions/spam folder)', 'white', width, height, 0.4, 0.55);
        
    
    }

    function configureSorryText(ctx, width, height) {
        configureText(ctx, 'Sorry!', 'white', width, height, 0.4, 0.4, '1.2em');
        configureText(ctx, "You didn't pass the exam", 'red', width, height, 0.4, 0.45, '1.2em');
    }

});

*/



document.addEventListener('DOMContentLoaded', function () {
    let totalQuestions = parseInt(localStorage.getItem('totalQuestions'));
    let match = parseInt(localStorage.getItem('score'));
    console.log(totalQuestions);

    let unmatch = totalQuestions - match;

    const answer = {
        match,
        unmatch,
    };

    const total = answer.match + answer.unmatch;
    const correctPercentage = ((answer.match / total) * 100).toFixed(1);
    const wrongPercentage = ((answer.unmatch / total) * 100).toFixed(1);

    const results = document.getElementsByClassName('resultsItem');
    createResultElement('Correct', correctPercentage, answer.match, results[0], 'left');
    createResultElement('Wrong', wrongPercentage, answer.unmatch, results[2], 'right');

    const canvasContainer = document.getElementById('center');
    const canvas = document.getElementById('myCanvas');
    const centeredDiv = createCenteredDiv('Il tuo testo qui');

    if (canvas) {
        configureDoughnutChart(canvas, wrongPercentage, correctPercentage);
        canvasContainer.appendChild(centeredDiv);

        // Aggiunto un listener per gestire il ridimensionamento della pagina
        window.addEventListener('resize', function () {
            canvasContainer.innerHTML = ''; // Rimuove il contenuto del container prima di ricreare il canvas
            configureDoughnutChart(canvas, wrongPercentage, correctPercentage);
        });

        // Chiamata a updateCenteredDivContent spostata qui per garantire che avvenga dopo la configurazione del canvas
        updateCenteredDivContent(correctPercentage);
    }

    if (correctPercentage > 50) {
        const duration = 5000;
        const end = Date.now() + duration;
        const colors = ['#fce18a', '#ff726d', '#b48def', '#f4306d', '#3ae374', '#1f4287', '#7400b8'];
        const animations = ['slow', 'medium', 'fast'];
        const particlesPerFrame = 4; 
        (function frame() {
            for (let i = 0; i < particlesPerFrame; i++) {
                const particle = document.createElement('div');
                particle.style.position = 'fixed';
                particle.style.top = '0%';
                const leftPosition = Math.random() * 100;
                particle.style.left = `${leftPosition}%`;
                const size = Math.floor(Math.random() * 3 + 7);
                particle.style.width = `${size}px`;
                particle.style.height = `${size}px`;
                particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
                particle.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
                document.body.appendChild(particle);
    
                const fallSpeed = animations[Math.floor(Math.random() * animations.length)];
    
                const keyframes = [
                    { transform: `translateY(0vh) rotateX(0deg) rotateY(0deg) rotateZ(0deg)`, opacity: 1 },
                    { transform: `translateY(105vh) rotateX(360deg) rotateY(360deg) rotateZ(360deg)`, opacity: 1 }
                ];
    
                const animationOptions = {
                    duration: fallSpeed === 'slow' ? 2250 : fallSpeed === 'medium' ? 1750 : 1250,
                    easing: 'linear',
                    fill: 'forwards'
                };
    
                particle.animate(keyframes, animationOptions);
    
                setTimeout(() => {
                    document.body.removeChild(particle);
                }, animationOptions.duration);
            }
    
            if (Date.now() < end) {
                requestAnimationFrame(frame);
            }
        }());
    }

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
        const percentageElement = createParagraph(`${percentage}%`, '3em', '0', 'bold');
        const countElement = createParagraph(`${count}/${total} questions`, '1em', '0', '100px');
        const emptyElement = createParagraph('\n', '0', '0', '0');

        container.appendChild(titleElement);
        container.appendChild(percentageElement);
        container.appendChild(countElement);
        container.appendChild(emptyElement);
        container.style.textAlign = textAlign;
    }

    function configureDoughnutChart(canvas, wrongPercentage, correctPercentage) {
        // Rimuovi il canvas esistente per evitare sovrapposizioni
        canvasContainer.innerHTML = '';
        const newCanvas = document.createElement('canvas');
        newCanvas.id = 'myCanvas';
        canvasContainer.appendChild(newCanvas);

        const context = newCanvas.getContext('2d');
        const backgroundColors = ['#D20094', '#00FFFF'];
        const cutoutPercentage = 75;

        adjustOpacityBasedOnPercentage(wrongPercentage, context, newCanvas.width, newCanvas.height);

        const chartOptions = {
            animation: {
                animateRotate: true,
                animateScale: true,
                easing: 'easeInOutQuad',
                duration: 2000,
            },
        };

        createDoughnutChart(context, [wrongPercentage, correctPercentage], backgroundColors, cutoutPercentage, chartOptions);
        canvasContainer.appendChild(centeredDiv);
    }

    function adjustOpacityBasedOnPercentage(wrongPercentage, context, width, height) {
        const leftElement = document.getElementById('left');
        const rightElement = document.getElementById('right');

        if (wrongPercentage < 50) {
            rightElement.style.opacity = '0.8';
        } else {
            leftElement.style.opacity = '0.8';
            configureSorryText(context, width, height);
        }
    }

    function createDoughnutChart(context, data, backgroundColors, cutoutPercentage, chartOptions) {
        new Chart(context, {
            type: 'doughnut',
            data: {
                datasets: [{
                    label: 'Result',
                    data: data,
                    backgroundColor: backgroundColors,
                    hoverOffset: 1,
                    borderColor: 'transparent',
                }],
            },
            options: {
                cutout: `${cutoutPercentage}%`,
                borderAlign: 'inner',
                elements: {
                    arc: {
                        borderAlign: 'inner'
                    }
                },
                ...chartOptions,
            },
        });
    }

    function configureText(ctx, text, color, width, height, ratioX, ratioY, fontSize = '0.8em') {
        ctx.restore();
        ctx.font = `${fontSize} sans-serif`;
        ctx.textBaseline = 'middle';
        ctx.textAlign = 'center';
        ctx.fillStyle = color;
        ctx.fillText(text, width * ratioX, height * ratioY);
    }

    function configureCongratulationsText(ctx, width, height) {
        configureText(ctx, 'Congratulations!', 'white', width, height, 0.4, 0.25, '1.2em');
        configureText(ctx, 'You passed the exam', 'aqua', width, height, 0.4, 0.30, '1.2em');
        configureText(ctx, `We'll send you the certificate in`, 'white', width, height, 0.4, 0.4);
        configureText(ctx, 'a few minutes.', 'white', width, height, 0.4, 0.45);
        configureText(ctx, 'Check your email (including', 'white', width, height, 0.4, 0.5);
        configureText(ctx, 'promotions/spam folder)', 'white', width, height, 0.4, 0.55);
    }

    function configureSorryText(ctx, width, height) {
        configureText(ctx, 'Sorry!', 'white', width, height, 0.4, 0.4, '1.2em');
        configureText(ctx, "You didn't pass the exam", 'red', width, height, 0.4, 0.45, '1.2em');
    }

    function createCenteredDiv(text) {
        const div = document.createElement('div');
        div.id = 'centered-div';
        div.innerText = text;
        return div;
    }
});

// Funzione per aggiornare il contenuto di centeredDiv in base alla percentuale corretta
function updateCenteredDivContent(correctPercentage) {
    const centeredDiv = document.getElementById('centered-div');

    // Sostituisci questo testo con il tuo HTML o testo desiderato
    if (correctPercentage >= 60) {
        centeredDiv.innerHTML = `
            <p class="uno boldi">Congratulations!</p>
            <p class="due pColore">You passed the exam</p>
            <p class="tre">We'll send you the certificate in a few minutes.</p>
            <p class="quattro">Check your email (including promotions/spam folder)</p>
        `;
    } else {
        centeredDiv.innerHTML = `
            <p class="rosso cinque">Sorry!</p>
            <p class="sei">You didn't pass the exam</p>
        `;
    }
}

// Chiama questa funzione con la corretta percentuale
updateCenteredDivContent(correctPercentage);

