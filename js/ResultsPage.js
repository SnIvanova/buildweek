document.addEventListener('DOMContentLoaded', function () {
    const correctAnswers = 8;
    const wrongAnswers = 2;

    const totalAnswers = correctAnswers + wrongAnswers;
    const correctPercentage = ((correctAnswers / totalAnswers) * 100).toFixed(1);
    const wrongPercentage = ((wrongAnswers / totalAnswers) * 100).toFixed(1);

    const results = document.getElementsByClassName('resultsItem');
    createResultElement('Correct', correctPercentage, correctAnswers, results[0], 'left');
    createResultElement('Wrong', wrongPercentage, wrongAnswers, results[2], 'right');

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
        const countElement = createParagraph(`${count}/${totalAnswers} questions`, '1em', '0', '100px');
        const emptyElement = createParagraph('\n', '0', '0', '0');

        container.appendChild(titleElement);
        container.appendChild(percentageElement);
        container.appendChild(countElement);
        container.appendChild(emptyElement);
        container.style.textAlign = textAlign;
    }

    const updateDonutChart = () => {
        const svg = document.getElementById("donut-2");
        const circleSegment = svg.querySelector(".donut-segment-2");

        const correctAnswersPercentage = correctPercentage;
        const wrongAnswersPercentage = wrongPercentage;

        updateElementText("correctScore", `${correctAnswersPercentage.toFixed(1)}%`);
        updateElementText("wrongScore", `${wrongAnswersPercentage.toFixed(1)}%`);
        updateElementText("answered-right", `${correctAnswers.length}/${totalQuestions} questions`);
        updateElementText("answered-wrong", `${totalQuestions - correctAnswers.length}/${totalQuestions} questions`);

        const feedback = document.getElementById("feedback");
        const evaluation =
            correctPercentage >= 60
                ? "Congratulations! You passed the exam."
                : "Unfortunately, you didn't pass the exam.";

        feedback.innerHTML = `<h5 id="final-evaluation" class="t-align-cen">${evaluation}</h5>
          <p id="valutation" class="t-align-cen">We'll send you the certificate in a few minutes. Check your email (including promotions/spam folder)</p>`;

        const donutChartValues = {
            dasharrayStart: 0,
            dasharrayEnd: correctPercentage,
            complementValue: wrongPercentage,
            strokeDasharray: `${wrongPercentage} ${correctPercentage}`
        };

        updateDonutStyle(circleSegment, donutChartValues);

        const resultsRateUs = document.getElementById("results-rate-us");
        resultsRateUs.addEventListener("click", goToFeedbackPage);

        function goToFeedbackPage() {
            const resultsPage = document.getElementById("resultsPage");
            const feedbackPage = document.getElementById("feedbackPage");

            resultsPage.classList.toggle("hide");
            feedbackPage.classList.toggle("hide");
        }
    };

    const calculatePercentage = (part, total) => (part / total) * 100;

    const updateElementText = (elementId, text) => {
        const element = document.getElementById(elementId);
        if (element) {
            element.innerText = text;
        }
    };

    const updateDonutStyle = (circleSegment, { dasharrayStart, dasharrayEnd, complementValue, strokeDasharray }) => {
        circleSegment.style.setProperty("--dasharrayStart", dasharrayStart);
        circleSegment.style.setProperty("--dasharrayEnd", dasharrayEnd);
        circleSegment.style.setProperty("--complementValue", complementValue);
        circleSegment.setAttribute("stroke-dasharray", strokeDasharray);
    };

    updateDonutChart();
});


 /*    function configureDoughnutChart(canvas, wrongPercentage, correctPercentage) {
        const context = canvas.getContext('2d');
        const backgroundColors = ['#D20094', '#00FFFF'];
        const cutoutPercentage = '70%';

        const resizeCanvas = () => {
            canvas.width = window.innerWidth * 0.8;
            canvas.height = window.innerHeight * 0.8; 
            context.clearRect(0, 0, canvas.width, canvas.height);
            configureText(context, canvas.width, canvas.height, 2);
        };

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        if (wrongPercentage < 50) {
            document.getElementById('right').style.opacity = '0.8';
        } else {
            document.getElementById('left').style.opacity = '0.8';
            configureSorryText(context, canvas.width, canvas.height);
        }

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

    function configureCongratulationsText(ctx, width, height) {
        configureText(ctx, 'Congratulations!', 'white', width , height, 3);
        configureText(ctx, 'You passed the exam', 'aqua', width, height, 3);
        configureText(ctx, `We'll send you the certificate in`, 'white', width, height, 1.8);
        configureText(ctx, 'in few minutes.', 'white', width, height, 1.65);
        configureText(ctx, 'Check your email (including', 'white', width, height, 1.55);
        configureText(ctx, 'promotions/spam folder)', 'white', width, height, 1.45);
    }


    function configureSorryText(ctx, width, height) {
        configureText(ctx, 'Sorry!', 'white', width, height, 2.5);
        configureText(ctx, "You didn't pass the exam", 'red', width, height, 2);
    }

    function configureText(ctx, text, color, width, height, ratio) {
        ctx.restore();
        ctx.font = '0.8em sans-serif';
        ctx.textBaseline = 'middle';
        ctx.textAlign = 'center'; 
    
        const textX = width / 2;
        const textY = height / ratio;
    
        ctx.fillStyle = color;
        ctx.fillText(text, textX, textY);
    }
 */
