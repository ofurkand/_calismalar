<script lang="ts">
    export function createCountStore(initialValue: number){
        let cnt = $state(initialValue);

        function increment(){
            cnt += 1;
        }
        function decrement(){
            cnt-=1;
        }
        function square(){
            cnt*=cnt;
        }
        function reset(){
            cnt=0;
        }
        return{           
            cnt,
            increment,
            decrement,
            square,
            reset
        }
    }
</script>
