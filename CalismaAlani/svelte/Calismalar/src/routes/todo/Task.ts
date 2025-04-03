export class Task {
    task: string;
    completedStatus: boolean;
    desc: string;

    constructor(task: string, completedStatus: boolean, desc: string) {
        this.task = task;
        this.completedStatus = completedStatus;
        this.desc = desc;
    }

    toggleStatus()
    // : void
    {
        this.completedStatus = !this.completedStatus;
    }
}