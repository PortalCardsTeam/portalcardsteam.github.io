<script lang="ts">
    export let question: string;
    let response: string = "";

    function handleInput(event: Event) {
        response = (event.target as HTMLInputElement).value;
    }
</script>


<div class={$$props.class}>
    <label>{question}</label>
    <span class="textarea" role="textbox" contenteditable></span>
    <!--textarea bind:value={response} on:input={handleInput} contenteditable="true" placeholder="Enter text here..."></textarea-->
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
            transition: all 0.2s ease-in-out
    .textarea
        display: block
        width: 100%
        width: 90%
        min-height: 2vh
        text-overflow: ellipsis
        overflow: auto
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
            overflow: hidden
            border-bottom: 0.2vh solid $theme-color-fee
            transition: all 0.2s ease-in-out

    .textarea[contenteditable]:empty::before 
        content: "Placeholder still possible"
        color: gray
</style>

