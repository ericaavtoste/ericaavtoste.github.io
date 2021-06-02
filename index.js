function progressBarHandler() {
    var progressBars = document.querySelectorAll('.progress-container');

    progressBars.forEach(element => {
        var percentage = element.getElementsByClassName('percentage')[0].textContent;
        var progress = element.getElementsByClassName('progress')[0];

        progress.style.width = percentage;
    });
}

window.onload = progressBarHandler();