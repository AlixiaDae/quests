const uiObjective = () => {
    const objectiveBox = document.createElement('div')
    objectiveBox.classList.add('objective-box')
 
    const objectiveBoxHeader = document.createElement('p')
    objectiveBoxHeader.textContent = "Objectives"
    objectiveBox.appendChild(objectiveBoxHeader)

    const objectivesWrapper = document.createElement('div')
    objectivesWrapper.classList.add('objectives-wrapper')
    objectivesWrapper.style.display = 'none'
    objectiveBox.appendChild(objectivesWrapper)

    const addObjectiveBtn = document.createElement('button')
    addObjectiveBtn.id= 'add-objective-button'
    addObjectiveBtn.textContent = '+ Add objective'
    objectivesWrapper.appendChild(addObjectiveBtn)

    const logTerminal = document.querySelector('.log-terminal')

    const objectiveForm = document.createElement('form')
    objectiveForm.classList.add('objective-form')
    objectiveForm.style.display = 'none'
    logTerminal.appendChild(objectiveForm)

    const objectiveField = document.createElement('fieldset')
    objectiveForm.appendChild(objectiveField)

    const objectiveLegend = document.createElement('legend')
    objectiveLegend.textContent = 'New Objective'
    objectiveField.appendChild(objectiveLegend)

    const objectiveNameLabel = document.createElement('label')
    objectiveNameLabel.textContent = 'Objective title: '
    objectiveNameLabel.setAttribute('for','name')
    objectiveField.appendChild(objectiveNameLabel)

    const objectiveName = document.createElement('input')
    objectiveName.name = 'name'
    objectiveField.appendChild(objectiveName)

    const objectiveDescriptionLabel = document.createElement('label')
    objectiveDescriptionLabel.textContent = 'Objective: '
    objectiveDescriptionLabel.setAttribute('for','description')
    objectiveField.appendChild(objectiveDescriptionLabel)

    const objectiveDescription = document.createElement('textarea')
    objectiveDescription.setAttribute('for', 'description')
    objectiveField.appendChild(objectiveDescription)

    const objectiveBtn = document.createElement('button')
    objectiveBtn.id = 'submit-objective'
    objectiveBtn.textContent = 'Add new objective'
    objectiveField.appendChild(objectiveBtn)

    const questForm = document.querySelector('.quest-form')

    return objectiveBox
}

export default uiObjective