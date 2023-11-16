document.addEventListener('DOMContentLoaded', function () {
    const match = 8;
    const unmatch = 2; 

  
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
    configureDoughnutChart(canvas, wrongPercentage, correctPercentage);

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
        const cutoutPercentage = '70%';



        if (wrongPercentage < 50) {
            document.getElementById('right').style.opacity = '0.8';
        } else {
            document.getElementById('left').style.opacity = '0.8';
            configureSorryText(context, canvas.width, canvas.height);
        }

        var options = {
            animation: {
                animateRotate: true,
                animateScale: true,
                easing: 'easeInOutQuad', 
                duration: 2000,
            }
        };

        new Chart(context, {
            type: 'doughnut',
            data: {
                datasets: [{
                    label: 'Result',
                    data: [wrongPercentage, correctPercentage],
                    backgroundColor: backgroundColors,
                    cutout: cutoutPercentage,
                    hoverOffset: 1,
                    borderColor: 'transparent',
                }]
            },
            options: {
                borderAlign: 'inner',
                options
            },
            plugins: [{
                id: 'text',
                beforeDatasetsDraw: function (chart) {
                    if (wrongPercentage < 60) {
                        configureCongratulationsText(context, canvas.width, canvas.height);
                        
                    } else{configureSorryText(context, canvas.width, canvas.height);
                    }
                },
                   
            }],
        });
    }
    function configureText(ctx, text, color, width, height, ratioX, ratioY) {
        ctx.restore();
        ctx.font = '0.8em sans-serif';
        ctx.textBaseline = 'middle';
        ctx.textAlign = 'center';
    
        ctx.fillStyle = color;
        ctx.fillText(text, width * ratioX, height * ratioY);
    }
    
    function configureCongratulationsText(ctx, width, height) {
        configureText(ctx, 'Congratulations!', 'white', width, height, 0.4, 0.25);
        configureText(ctx, 'You passed the exam', 'aqua', width, height, 0.4, 0.30);
        configureText(ctx, `We'll send you the certificate in`, 'white', width, height, 0.4, 0.4);
        configureText(ctx, 'a few minutes.', 'white', width, height, 0.4, 0.45);
        configureText(ctx, 'Check your email (including', 'white', width, height, 0.4, 0.5);
        configureText(ctx, 'promotions/spam folder)', 'white', width, height, 0.4, 0.55);
    }

    function configureSorryText(ctx, width, height) {
        configureText(ctx, 'Sorry!', 'white', width, height, 2.5);
        configureText(ctx, "You didn't pass the exam", 'red', width, height, 2);
    }


});