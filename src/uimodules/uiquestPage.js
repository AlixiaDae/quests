//for each quest button clicking adds active class and appends objective form. 

const uiQuestButtonPage = (newQuest) => {
    const questButton = document.createElement('button')
    questButton.classList.add('quest-button')
    // questButton.setAttribute('data-quest', newQuest.name)
    questButton.textContent = newQuest.name

    questButton.addEventListener('click', (e) => {
        if(e.target.classList.contains('active')) return
        setActiveBtn(questButton)
    })

    return questButton
}

function objectiveForm() {
    const objectiveForm = document.createElement('form')
    objectiveForm.classList.add('objective-form')
    objectiveForm.style.display = 'none'

    const objectiveField = document.createElement('fieldset')
    objectiveForm.appendChild(objectiveField)

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
    objectiveDescription.name = 'description'
    objectiveField.appendChild(objectiveDescription)

    const objectiveSubmitBtn = document.createElement('button')
    objectiveSubmitBtn.textContent = 'Submit Objective'
    objectiveSubmitBtn.id = 'submit-objective'
    objectiveField.appendChild(objectiveSubmitBtn)

    return objectiveForm
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