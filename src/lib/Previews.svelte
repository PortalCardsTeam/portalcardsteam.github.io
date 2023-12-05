<script lang="ts">
    export let name: string;
    import exp from "../assets/preview_exp.svelte";
    import fee from "../assets/preview_fee.svelte";
    import tut from "../assets/preview_tut.svelte";

    let previews = [
        {
            name: "experience",
            html: exp
        },
        {
            name: "feedback",
            html: fee
        },
        {
            name: "tutorial",
            html: tut
        },
    ];
    let preview = previews.find((e) => e.name === name);
</script>

{ #if preview }
  <svelte:component this={preview.html} id={$$props.id} class={$$props.class}/>
{ /if }