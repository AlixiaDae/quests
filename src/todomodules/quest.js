const quest = (name,description,priority) => {
    let objectives = []

    const getObjectives = () => objectives
    const getObjective = (newObjective) => objectives.find(objective => objective.name == newObjective.name)

    const addObjective = (newObjective) => {
        if(objectives.find(objective => objective.name == newObjective.name)) return
        objectives.push(newObjective)
    }

    const removeObjective = (newObjective) => {
        const objectiveToDelete = objectives.find(objective => objective.name == newObjective.name)
        objectives.splice(objectives.indexOf(objectiveToDelete),1)
    }

    return {
        name,
        getObjectives,
        getObjective,
        addObjective,
        removeObjective
    }
}

export default quest