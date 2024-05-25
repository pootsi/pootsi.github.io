document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('#grade-form');
    const gradesList = document.querySelector('#grades-list');
    const averageSection = document.querySelector('#average');
    const averageValue = document.querySelector('#average-value');
    let grades = [];

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const subject = document.querySelector('#subject').value;
        const grade = parseFloat(document.querySelector('#grade').value);

        if (subject && !isNaN(grade)) {
            grades.push(grade);
            const listItem = document.createElement('li');
            listItem.textContent = `${subject}: ${grade.toFixed(2)}`;
            gradesList.appendChild(listItem);

            form.reset();
            calculateAverage();
        }
    });

    function calculateAverage() {
        if (grades.length > 0) {
            const sum = grades.reduce((acc, grade) => acc + grade, 0);
            const average = (sum / grades.length).toFixed(2);
            averageValue.textContent = average;
            averageSection.classList.remove('hidden');
        } else {
            averageSection.classList.add('hidden');
        }
    }
});
