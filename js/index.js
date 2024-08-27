const today = new Date();
const thisYear = today.getFullYear();
const footer = document.querySelector('footer');
const copyright = document.createElement('p');
copyright.innerHTML = `Aigul Stetchi &copy; ${thisYear}`;
footer.appendChild(copyright);


//add skills section
const skills = ["JavaScript", "HTML", "CSS", "Adobe Photoshop", "GitHub"];
const skillsSection = document.getElementById("skills");
const skillsList = skillsSection.querySelector('ul');

for (let i = 0; i < skills.length; i++) {
    let skill = document.createElement('li');
    skill.innerHTML = skills[i];
    skillsList.appendChild(skill);
}

//Handle Message Form Submit
const messageForm = document.querySelector('form[name = "leave_message"]');
messageForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const userName = e.target.usersName.value;
    const email = e.target.usersEmail.value;
    const messages = e.target.usersMessage.value;
    console.log("Name:", userName);
    console.log("Email:", email);
    console.log("Message:", messages);


//Display Messages in List
const messageSection = document.getElementById("messages");
const messageList = messageSection.querySelector('ul');
const newMessage = document.createElement ('li');
newMessage.innerHTML = `<a href = "mailto:${email}"> ${userName} </a>
<span>wrote: ${messages}</span>`;

//Remove button
const removeButton = document.createElement('button');
    removeButton.innerText = 'remove';
    removeButton.type = 'button';
    removeButton.addEventListener('click', (e) => {
        entry.remove();
//Hide the #messages section,

        if (messageList.childElementCount === 0) {
            messageSection.style.display = "none";
        
        }
    });


//Create an "edit" button
const editButton = document.createElement('button');
editButton.innerText = 'edit';
editButton.type = 'button';
editButton.addEventListener('click', (e) => {
    const updateMessages = prompt('Please edit your message');
    let editedMessage = newMessage.querySelector ('span');
    editedMessage.textContent = 'wrote: ${updateMessage}';
});
  newMessage.appendChild(removeButton);
  newMessage.appendChild(editButton);
  newMessage.appendChild(newMessage);
  messageSection.style.display = "block";
  messageForm.requestFullscreen();
})