<script lang="ts">
    import ToDo from "./ToDo.svelte";
    import { Task } from "./Task";
    let tasks: string | null = localStorage.getItem("todos");
    let parsedTasks: Task[] = tasks ? JSON.parse(tasks) : [];    
    if (tasks) {
        
    }
</script>

<ToDo/>