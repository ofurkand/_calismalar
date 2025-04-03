<script>
    import ToDos from "./ToDos.svelte";
</script>

<div class="container">
    <div class="todo-app">
            <ToDos></ToDos>
    </div>
</div>

<style>
    *{
    margin: 0;
    padding: 0;
    font-family: 'Poppins',sans-serif;
    box-sizing: border-box;
    }

    .container{
    width:calc(100vw - 10px * 2);
    min-height: calc(100vh - 10px * 2);
    background: linear-gradient(135deg,#000000,#e4fd00);
    padding:10px;
    }

    .todo-app{
    width:50%;
    max-width:400px;
    background: #fff;
    margin: 100px auto 20px;
    padding: 40px 30px 70px;
    border-radius: 10px;
    }
</style>
