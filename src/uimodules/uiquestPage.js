//for each quest button clicking adds active class and appends objective form. 

const uiQuestButtonPage = (newQuest) => {
    const questButton = document.createElement('button')
    questButton.classList.add('quest-button')
    // questButton.setAttribute('data-quest', newQuest.name)
    questButton.textContent = newQuest.name

    questButton.addEventListener('click', (e) => {
        
    })  

    return questButton
}

export default uiQuestButtonPage