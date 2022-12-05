import objective from "./todomodules/objective"
import Quest from "./todomodules/quest"
import QuestLine from "./todomodules/questline"

const questLine = QuestLine('Initial questline')

const newQuest = Quest('First Quest', 'Starting quest', 'Today')

const secondQuest = Quest('Second Quest', 'Second quest', 'Tomorrow')

const newObjective = objective('First objective', 'First objective of first quest', 'Incomplete')

const secondObjective = objective('Second objective', 'Second objective of first quest', 'Incomplete')

newQuest.addObjective(newObjective)
newQuest.addObjective(secondObjective)

console.log(newQuest.getObjectives())
console.log(newQuest.getQuestName())

questLine.addQuest(newQuest)
questLine.addQuest(secondQuest)

console.log(questLine.getQuests())

newQuest.completeObjective(newObjective)



