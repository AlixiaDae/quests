const uiobjective = (chosenObjective) => {
    const objective = document.createElement('div')
    objective.classList.add('objective')
    objective.id = chosenObjective.name

    const objectiveBtn = document.createElement('button')
    objectiveBtn.classList.add('remove-objective')
    objectiveBtn.id = chosenObjective.name
    objectiveBtn.textContent = 'X'
    objectiveBtn.addEventListener('click', (e) => {
        objective.remove()
    })
    objective.appendChild(objectiveBtn)

    const objectiveHeader = document.createElement('h2')
    objectiveHeader.textContent = chosenObjective.name
    objective.appendChild(objectiveHeader)

    const objectiveDescription = document.createElement('div')
    objectiveDescription.textContent = chosenObjective.description
    objective.appendChild(objectiveDescription)

    const objectiveStatusLabel = document.createElement('label')
    objectiveStatusLabel.setAttribute('for', 'status')
    objectiveStatusLabel.textContent = 'Objective complete?'
    objective.appendChild(objectiveStatusLabel)

    const objectiveStatus = document.createElement('input')
    objectiveStatus.type = 'checkbox'
    objectiveStatus.name = 'status'
    objectiveStatus.addEventListener('change', () => {
        if(objectiveStatus.checked) {
            chosenObjective.status = 'Completed'
            console.log(chosenObjective.status)
        } else {
            chosenObjective.status = 'Incomplete'
            console.log(chosenObjective.status)
        }
    })
    objectiveStatusLabel.appendChild(objectiveStatus)

    
    return objective
}

export default uiobjective