import objective from "../todomodules/objective"
//domhandler for created quests

const uiQuestButtonPage = (newQuest) => {
    const questButton = document.createElement('button')
    questButton.classList.add('quest-button')
    // questButton.setAttribute('data-quest', newQuest.name)
    questButton.textContent = newQuest.name

    const logTerminal = document.querySelector('.log-terminal')

    const objectivesWrapper= document.querySelector('.objectives-wrapper')
    const addObjectiveBtn = document.createElement('button')
    addObjectiveBtn.textContent = '+ Add Objective'

    questButton.addEventListener('click', (e) => {
        logTerminal.textContent = ''
        objectivesWrapper.textContent = ''
        setActiveBtn(questButton)
        objectivesWrapper.appendChild(addObjectiveBtn)
    })

    addObjectiveBtn.addEventListener('click', () => {
        logTerminal.textContent = ''
        logTerminal.appendChild(objectiveForm(questButton))
    })

    return questButton
}

//for each quest button clicking adds active class. 

function objectiveForm(quest) {
    const form = document.createElement('form')
    form.classList.add('objective-form')
    // form.style.display = 'none'

    const objectiveField = document.createElement('fieldset')
    form.appendChild(objectiveField)

    const objectiveNameLabel = document.createElement('label')
    objectiveNameLabel.setAttribute('for', 'name')
    objectiveNameLabel.textContent = 'Objective Name: '
    objectiveField.appendChild(objectiveNameLabel)

    const objectiveName = document.createElement('input')
    objectiveName.classList.add('objective-name')
    objectiveName.name = 'name'
    objectiveField.appendChild(objectiveName)

    const objectiveDescriptionLabel = document.createElement('label')
    objectiveDescriptionLabel.setAttribute('for', 'description')
    objectiveDescriptionLabel.textContent = 'Your objective: '
    objectiveField.appendChild(objectiveDescriptionLabel)

    const objectiveDescription = document.createElement('textarea')
    objectiveDescription.classList.add('objective-description')
    objectiveDescription.name = 'description'
    objectiveField.appendChild(objectiveDescription)

    const objectiveSubmitBtn = document.createElement('button')
    objectiveSubmitBtn.textContent = 'Submit Objective'
    objectiveSubmitBtn.addEventListener('click', (e) => {
        e.preventDefault()
        console.log(quest.textContent)
    })
    objectiveSubmitBtn.id = 'submit-objective'
    objectiveField.appendChild(objectiveSubmitBtn)
    
    return form
}

function setActiveBtn(button) {
    const questButtons = document.querySelectorAll('.quest-button')

    questButtons.forEach(button => {
        if(button !== this) {
            button.classList.remove('active')
        }
    })
    button.classList.add('active')
}

export default uiQuestButtonPage