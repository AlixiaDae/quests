const uiObjective = (newObjective) => {
    const objective = document.createElement('button')
    objective.textContent = newObjective.name
    

    return objective
}

export default uiObjective