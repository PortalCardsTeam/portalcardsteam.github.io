<script lang="ts">
    import Tutorial_SVG from "../assets/svg_tutorial.svelte";
    let clicked = false;
    function fullScreen() {
        clicked = !clicked;
    }
</script>

<div class="card" on:click={fullScreen} class:clicked>
    <Tutorial_SVG class="title" />

</div>