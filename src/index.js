import objective from "./todomodules/objective"
import Quest from "./todomodules/quest"
import QuestLine from "./todomodules/questline"

import './style.css'
import uiobjective from "./uimodules/uiobjective"

const questLine = QuestLine()
const newObjective = objective('First objective', 'First objective of first quest', 'Incomplete')

const firstQuest = Quest('First Quest', 'starting quest', 'today')

questLine.addQuest(firstQuest)
firstQuest.addObjective(newObjective)

console.log(questLine.getQuests().map(quest => quest.getQuestName()))
console.log(firstQuest.getObjectives().map(objective => objective.name))

// document.body.appendChild(uiobjective(questLine.getQuest(firstQuest).getObjective(newObjective)))




