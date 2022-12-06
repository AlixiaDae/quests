const uiQuestButton = (newQuest) => {
    const quest = document.createElement('button')
    quest.classList.add('quest-navigation')
    quest.textContent = newQuest.name
    
    return quest
}

export default uiQuestButton