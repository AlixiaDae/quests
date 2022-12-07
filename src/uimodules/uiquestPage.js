//for each quest button clicking adds active class and appends objective form. 

const uiQuestButtonPage = (newQuest) => {
    const questButton = document.createElement('button')
    questButton.classList.add('quest-button')
    questButton.textContent = newQuest.name


    return questButton
}

export default uiQuestButtonPage