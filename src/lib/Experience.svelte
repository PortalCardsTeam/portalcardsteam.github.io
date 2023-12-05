<script lang="ts">
    import { onMount } from 'svelte';
    import Experience_SVG from "../assets/svg_experience.svelte";
    import Preview from "./Previews.svelte"

    function typedKeys<T>(o: T): (keyof T)[] {
    // type cast should be safe because that's what really Object.keys() does
        return Object.keys(o) as (keyof T)[];
    }

    let clicked: boolean = false;
    let hovered: boolean = false;

    let aboutTexts: object = {
        exposition: "",
        evaluation: "",
        embryo: ""
    };

    function fullScreen(): void {
        clicked = !clicked;
    }

    function preview(is: boolean): void {
        hovered = is;
    }

    async function getText(name: string): Promise<void> {
        const path = `${name}.txt`;
        const response = await fetch(path);
        const text = await response.text();
        const lines = text.split("\n");
        const keys = typedKeys(aboutTexts);
        for (let i = 0; i < keys.length; i++) {
            aboutTexts[keys[i]] = lines[i];
        }
    }

    onMount(() => {
        getText("about");
    });
</script>

<div class="card" on:click={ fullScreen } on:mouseenter={ () => preview(true) } on:mouseleave={ () => preview(false) } on:keydown={ fullScreen } class:clicked>
    <Experience_SVG class="title" />
    {#if hovered && !clicked}
        <Preview name="experience" id="preview" class="preview" />
    {/if}
    {#if clicked}
        <div class="content">
            {#each Object.entries(aboutTexts) as [title, text]}
                {#if title != "experience"}
                    <div id={ title } class="content-text">
                        <h1 class="content-text-title">{ title }</h1>
                        <p class="content-text-paragraph">{ text }</p>
                    </div>
                {:else}
                    <Preview name="experience" id={ title } class="content-footer" />
                {/if}
            {/each}
        </div>
    {/if}
</div>
