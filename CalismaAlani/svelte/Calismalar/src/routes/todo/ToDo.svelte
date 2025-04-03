<script lang="ts">

</script>

<div class="row">
    <input type="checkbox">
    <input placeholder="Ne gireceksiniz?" type="text">
</div>

<style>
    /* input {
    flex: 1;
    border: none;
    outline: none;
    background: transparent;
    margin-left: -10px;
    padding: 15px;
    font-size: 16px;
    height: 45px;
    } */
    
    input[type="text"]{
        outline: none;
        background: transparent;
        border: none;
        font-size: 16px;
    }

    .row {
    display: flex;
    align-items: center; /* Dikey hizalamayı düzeltir */
    justify-content: space-between;
    background: ghostwhite;
    border-radius: 30px;
    padding-left: 10px;  /* Fazla boşluğu azalttık */
    margin-bottom: 25px;
    width: 100%; /* Row'un genişliğini artırır */
    max-width: 400px; /* İsteğe bağlı: çok genişlememesini sağlar */
}
    
    input[type="checkbox"] {
    width: 25px;
    height: 25px;
    border-radius: 5px;    
    transition: transform 1s, opacity 1s, accent-color 1s;
    opacity: 0.3;
    cursor: pointer;
    margin-right: 20px;
    }   

    input[type="checkbox"]:hover {
        box-shadow: 0 0 5px 2px rgba(0,0,0,0.2);
    }

    input[type="checkbox"]:checked {
        accent-color: blue;
        opacity: 1;
        transform: rotate(-360deg);
    }
</style>