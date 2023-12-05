<script lang="ts">
    import Feedback_SVG from "../assets/svg_feedback.svelte";
    let clicked = false;
    function fullScreen() {
        clicked = !clicked;
    }
</script>

<div class="card" on:click={fullScreen} class:clicked>
    <Feedback_SVG class="title" />

</div>