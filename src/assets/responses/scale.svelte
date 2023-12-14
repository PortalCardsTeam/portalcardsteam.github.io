<script lang="ts">
    export let question: string;
    let selectedValue: number = 0;

    function handleScaleChange(event: Event) {
        const target = event.target as HTMLInputElement;
        selectedValue = parseInt(target.value);
    }
</script>

<div class={$$props.class}>
    <label>{question}</label>
    <inner>
        <input type="range" min="0" max="10" step="1" bind:value={selectedValue} on:input={handleScaleChange} />
        <span>{selectedValue}</span>
    </inner>
</div>

<style  lang="sass">
    $background-color-dark: #181b1f
    $background-color-light: #2b2e33
    $theme-color-exp: #e07758
    $theme-color-tut: #c798c5
    $theme-color-fee: #214745
    $theme-color-neutral: #eeeae1
    div
        display: flex
        flex-direction: column
        justify-content: space-evenly
        align-items: left
        width: 50vw
        margin: 1vw
        padding: 1vw
        background-color: $theme-color-neutral
        border-radius: 1vh
        text-align: left
        label
            color: $theme-color-fee
            margin-left: 1vw
            margin-bottom: 1vh
        inner
            display: flex
            flex-direction: row
            justify-content: center
            input
                flex-basis: 80%
            span
                color: $theme-color-fee
    textarea
        width: 90%
        height: 2vh
        text-overflow: ellipsis
        background: none
        border: none
        border-bottom: 0.2vh dotted $background-color-dark
        margin-left: 1vw
        font-size: 1rem
        font-family: inherit
        resize: none
        outline: none
        transition: all 0.2s ease-in-out
        &:focus
            text-overflow: wrap
            border-bottom: 0.2vh solid $theme-color-fee
</style>