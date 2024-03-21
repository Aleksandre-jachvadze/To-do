function updateCurrentDateTime() {
    const currentDateTimeElement = document.getElementById('currentDateTime');
    const currentDayOfWeekElement = document.getElementById('currentDayOfWeek');
    const currentDateTime = new Date();

    const hours = currentDateTime.getHours() % 12 || 12;
    const minutes = (currentDateTime.getMinutes() < 10 ? '0' : '') + currentDateTime.getMinutes();
    const seconds = (currentDateTime.getSeconds() < 10 ? '0' : '') + currentDateTime.getSeconds();
    const day = (currentDateTime.getDate() < 10 ? '0' : '') + currentDateTime.getDate();
    const month = ((currentDateTime.getMonth() + 1) < 10 ? '0' : '') + (currentDateTime.getMonth() + 1); // Months are zero-based
    const dayOfWeek = currentDateTime.toLocaleDateString('en-US', { weekday: 'short' });
    const amOrPm = currentDateTime.getHours() >= 12 ? 'PM' : 'AM';

    const formattedDayOfWeek = `${dayOfWeek} ${day}`;
    const formattedDateTime = `${hours}:${minutes} ${amOrPm}`;

    currentDateTimeElement.textContent = formattedDateTime;
    currentDayOfWeekElement.textContent = formattedDayOfWeek;
}

setInterval(updateCurrentDateTime, 1000); 
updateCurrentDateTime();


setInterval(updateCurrentDateTime, 1000);

updateCurrentDateTime();

function addItem() {
    const input = document.getElementById("inputi");
    const inputValue = input.value.trim();

    if (inputValue.length > 1) {
        const li = document.createElement('li');

        const checkboxDiv = document.createElement('div');

        const checkbox = document.createElement('input');
        checkbox.type = 'button';
        checkbox.value = ''; // Set a value to make the button visible
        

        const removeBtn = document.createElement('button');
        removeBtn.innerText = '';
        removeBtn.onclick = function () {
            li.remove();
        };

        checkboxDiv.appendChild(checkbox);
        checkboxDiv.appendChild(removeBtn);

        li.appendChild(document.createTextNode(inputValue));
        li.appendChild(checkboxDiv);

        checkbox.addEventListener('click', function () {
            checkbox.classList.toggle('clicked');
        });

        document.getElementById("todoList").appendChild(li);

        input.value = "";
    }
}