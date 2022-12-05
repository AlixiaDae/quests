const QuestLine = (name,description) => {
    let quests = []

    const getQuestLineName = () => name

    //remove .name later

    const getQuests = () => quests.map(quest => quest.getQuestName())

    const addQuest = (newQuest) => {
        if(quests.find(quest => quest.getQuestName() == newQuest.getQuestName())) return 
        quests.push(newQuest)
    } 

    const removeQuest = (chosenQuest) => {
        const questToDelete = quests.find(quest => quest.getQuestName() == chosenQuest.getQuestName())
        quests.splice(quests.indexOf(questToDelete), 1)
    }

    return {
        description,
        getQuestLineName,
        getQuests,
        addQuest,
        removeQuest
    }
}

export default QuestLine