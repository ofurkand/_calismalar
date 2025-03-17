<script>
    import { writable } from "svelte/store";
    export const MusicList = writable(
        [
            {
                audio:"DOU - Aşk-ı Kıyamet (Official Audio).mp3",
                image:"hqdefault.png",
                artist:"DOU"
            }, 
            {
                audio:"kazım koyuncu şevval sam'ben seni sevduğumi'.mp3",
                image:"videoframe_8477.png",
                artist:"Kazım Koyuncu"
            }, 
            {
                audio:"Mahşer [Official Video] - Gökhan Türkmen #Mahşer.mp3",
                image:"videoframe_1686.png",
                artist:"Gökhan Türkmen"
            },
        ]
    );
</script>

