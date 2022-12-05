import objective from "../todomodules/objective"
import Quest from "../todomodules/quest"
import QuestLine from "../todomodules/adventureline"
import uiobjective from "./uiobjective"
import '../style.css'

const questJournal = (() => {
    const content = document.createElement('div')
    document.body.appendChild(content)

    const questLine = QuestLine()
    
    const firstQuest = Quest('First Quest', 'starting quest', 'today')
    const newObjective = objective('First objective', 'First objective of first quest', 'Incomplete')
    const otherObjective = objective('Second objective', 'Second objective of first quest', 'Incomplete')


    questLine.addQuest(firstQuest)

    firstQuest.addObjective(newObjective)
    firstQuest.addObjective(otherObjective)

    console.log(firstQuest.getObjectives())
    //use a for loop to make the ui objectives and append them to content

    // content.appendChild(uiobjective(questLine.getQuest(firstQuest).getObjective(newObjective)))
})()

export default questJournal