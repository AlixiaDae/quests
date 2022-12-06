const uiObjectiveForm = () => {
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

    return objectiveForm
}

export default uiObjectiveForm