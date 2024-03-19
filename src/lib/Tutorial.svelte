<script lang="ts">
    import Tutorial_SVG from "../assets/svg_tutorial.svelte";
    let clicked = false;
    function fullScreen() {
        clicked = !clicked;
    }
    let tutorialVideos: object = {
        onboarding: '<iframe src="https://drive.google.com/file/d/1aEBl0hrRWiGLdlikrzekF1mg3spae8H3/preview" width="640" height="480" allow="autoplay"></iframe>',
        navigation: '<iframe src="https://drive.google.com/file/d/15cYJqKZPdXsYbufRghcnbSg1tAK64DEg/preview" width="640" height="480" allow="autoplay"></iframe>',
        "card completion": '<iframe src="https://drive.google.com/file/d/17xqOlfs1kVHbCIr-T4rOkW5ces7-7Bwb/preview" width="640" height="480" allow="autoplay"></iframe>'
    };
</script>

<div class="card" on:click={fullScreen} class:clicked>
    {#if !clicked}
        <Tutorial_SVG class="title" />
    {:else if clicked}
        <div class=" video">
            {#each Object.entries(tutorialVideos) as [title, video]}
                <div id={ title } class="content-text">
                    <h1 class="content-text-title">{ title }</h1>
                    <p class="content-text-paragraph">{@html video }</p>
                </div>
            {/each} 
        </div>
    {/if}
</div>