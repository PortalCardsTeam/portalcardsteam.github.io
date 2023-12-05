<script lang="ts">
    import { onMount } from 'svelte';

    import Experience_SVG from "../assets/svg_experience.svelte";

    function typedKeys<T>(o: T): (keyof T)[] {
    // type cast should be safe because that's what really Object.keys() does
        return Object.keys(o) as (keyof T)[];
    }

    let clicked: boolean = false;

    let aboutTexts: object = {
        exposition: "",
        evaluation: "",
        embryo: "",
        experience: ""
    };

    function fullScreen(): void {
        clicked = !clicked;
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

<div class="card" on:click={ fullScreen } on:keydown={ fullScreen } class:clicked>
    <Experience_SVG class="title" />
    {#if clicked}
        <div class="content">
            {#each Object.entries(aboutTexts) as [title, text]}
                {#if title != "experience"}
                    <div id={ title } class="content-text">
                        <h1 class="content-text-title">{ title }</h1>
                        <p class="content-text-paragraph">{ text }</p>
                    </div>
                {:else}
                    <div id={ title } class="content-footer">
                        <a href="https://portal-cards.circle.so/join?invitation_token=490322c75818db0e5ac839ae956a9e4fa220e59c-bb34c7dd-f9b6-4dcd-a776-b1f9ec73504e" target="_blank" rel="noopener noreferrer"></a>
                        <div class="content-text">
                            <h1 class="content-text-title">{ title }</h1>
                            <p class="content-text-paragraph">{ text }</p>
                        </div>
                    </div>
                {/if}
            {/each}
        </div>
    {/if}
</div>
