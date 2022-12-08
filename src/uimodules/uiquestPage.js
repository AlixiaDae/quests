import objective from "../todomodules/objective"
import uiObjective from "./uiobjective"
//domhandler for created quests

const uiQuestButtonPage = (newQuest) => {
    const questButton = document.createElement('button')
    questButton.classList.add('quest-button')
    // questButton.setAttribute('data-quest', newQuest.name)
    questButton.textContent = newQuest.name

    const logTerminal = document.querySelector('.log-terminal')

    const objectiveBox= document.querySelector('.objective-box')
    const objectiveBoxHeader = document.querySelector('.objective-box > p')

    const objectivesWrapper = document.createElement('div')
    objectivesWrapper.classList.add('objectives-wrapper')

    const addObjectiveBtn = document.createElement('button')
    addObjectiveBtn.classList.add('add-objective-button')
    addObjectiveBtn.textContent = '+ Add Objective'

    questButton.addEventListener('click', (e) => {
        logTerminal.textContent = ''
        objectiveBox.textContent = ''
        setActiveBtn(questButton)
        objectiveBox.appendChild(objectiveBoxHeader)
        objectiveBox.appendChild(addObjectiveBtn)
        objectiveBox.appendChild(objectivesWrapper)
    })

    addObjectiveBtn.addEventListener('click', () => {
        logTerminal.textContent = ''
        logTerminal.appendChild(objectiveForm(newQuest))
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
        const objectivesWrapper = document.querySelector('.objectives-wrapper')
        let name = objectiveName
        let description = objectiveDescription
        const newObjective = objective(name.value, description.value)
        if(name.value == '') {
            alert('Please do not leave objective name empty!')
            return
        }
        if(quest.containsObjective(newObjective)) return
        quest.addObjective(newObjective)
        objectivesWrapper.textContent = ''
        for(let i = 0; i < quest.getObjectives().length; i++) {
            objectivesWrapper.appendChild(uiObjective(quest.getObjectives()[i]))
        }
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