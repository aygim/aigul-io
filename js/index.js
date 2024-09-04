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
    const messageContent = e.target.usersMessage.value;
    console.log("Name:", userName);
    console.log("Email:", email);
    console.log("Message:", messageContent);


//Display the new message in the list
const messageSection = document.getElementById("messages");
const messageList = messageSection.querySelector('ul');
const newMessage = document.createElement ('li');
newMessage.innerHTML = `<a href = "mailto:${email}"> ${userName} </a>
<span>wrote: ${messageContent}</span>`;

//Create and append the remove button
const removeButton = document.createElement('button');
    removeButton.innerText = 'Remove';
    removeButton.type = 'button';
    removeButton.addEventListener('click', () => {
        newMessage.remove();
        updateMessageSectionDisplay();
    });

  newMessage.appendChild(removeButton);
  messageList.appendChild(newMessage);
  messageSection.style.display = "block";
  messageForm.reset();
  updateMessageSectionDisplay();
})

function updateMessageSectionDisplay() {
    const messageSection = document.getElementById("messages");
    const messageList = messageSection.querySelector('ul');
    
    if (messageList.children.length === 0) {
        messageSection.style.display = "none";
    } else {
        messageSection.style.display = "block";
    }
}

const githubUsername = 'aygim';

const url = `https://api.github.com/users/${aygim}/repos`;

//"GET" request using the Fetch API
fetch(url)
    .then(response => {
        // Check if the response is successful
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        // Return the response JSON data
        return response.json();
    })
    .then(data => {
        const repositories = data;  

        const projectSection = document.getElementById('projects');

        const projectList = projectSection.querySelector('#project-list');

        repositories.forEach(repo => {
            const project = document.createElement('li');
            project.innerText = repo.name;
            projectList.appendChild(project);
        });
    })
    .catch(error => {
        // Handle errors from the fetch operation
        console.error('There was a problem with the fetch operation:', error);
    });