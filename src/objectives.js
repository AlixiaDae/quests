import { toDate, isToday, isThisWeek, subDays } from 'date-fns'

export class Objective {
    constructor(name, description, dueDate = 'No Date') {
        this.name = name
        this.description = description
        this.dueDate = dueDate
    }

}