<script lang="ts">
    import Feedback_SVG from "../assets/svg_feedback.svelte";
    import Title from "../assets/responses/title.svelte";
    import Scale from "../assets/responses/scale.svelte";
    import LongAnswer from "../assets/responses/longAnswer.svelte";
    import Preview from "./Previews.svelte"

    let clicked = false;
    let hovered = false;
    function openFull(): void {
        clicked = true;
    }
    function closeFull(): void {
        clicked = false;
    }
    function fullScreen(): void {
        clicked = !clicked;
    }
    function preview(is: boolean): void {
        hovered = is;
    }
    let questions = [
        {
            title: "The Portal Cards Experience",
            scale: [
                "How intuitive was the navigation?",
                "How motivating was the progress tracking system?",
                "How easy were the prompts to understand?",
                "What was your engagement level?"
            ],
            longAnswer: [
                "What did you like or dislike about navigating? Explain.",
                "How easy was it to find and use functionalities (e.g., discussion forums, feedback tools)? Explain.",
                "How did the images and other layout choices affect your understanding of the prompt? Explain.",
                "Did the overall aesthetic (colors, fonts, imagery) enhance your learning experience? Why or why not?",
                "Why was Portal Cards engaging or disengaging?",
                "Would you consider Portal game-like? Why or why not?",
                "If you've used other online learning platforms, how does Portal Cards compare in terms of usability and user experience?"
            ],
        },
        {
            title: "The Cards Content",
            longAnswer: [
                "Did the prompts clearly connect to the learning objectives of each card? Explain.",
                "Were prompts relatable enough to be comfortably answered? Explain.",
                "Did the prompts provide opportunities for active learning and reflection? Explain.",
                "Were the resources (articles, videos, etc.) used in the prompts relevant or helpful? Explain.",
                "Did the prompts feel repetitive or predictable across different cards? Explain.",
                "Did the prompts leave you feeling confident in your mastery of the card's subject matter? Why or why not?"
            ],
        },
        {
            title: "Background",
            longAnswer: [
                "What were your overall expectations for Portal Cards?",
                "Did Portal Cards meet or exceed your expectations? Why or why not?",
                "As it is, would you recommend Portal Cards to a friend? Why or why not?",
                "What could be improved to make Portal Cards more effective?",
                "What was the absolute worst part of Portal Cards?"
            ]
        },
        {
            title: "Miscellaneous",
            longAnswer: [
                "Do you have any other suggestions or comments?"
            ]
        },
    ];
    let responses: string[] = [];

    $: prefilledLink = `https://docs.google.com/forms/d/e/1FAIpQLSftUdzMfKeWyvxS5UnUOmxXzJ5B_aXZIHWukcIOoRrGQehl7Q/formResponse?usp=pp_url&entry.183281767=${responses[0]}&entry.1023429075=${responses[1]}&entry.402250124=${responses[2]}+&entry.1815224424=${responses[3]}&entry.2096326107=${responses[4]}&entry.1682932200=${responses[5]}+&entry.817827511=${responses[6]}+&entry.1165737047=${responses[7]}&entry.2073750317=${responses[8]}+&entry.593222785=${responses[9]}+&entry.998363241=${responses[10]}+&entry.1609868740=${responses[11]}+&entry.1447925980=${responses[12]}+&entry.99742739=${responses[13]}+&entry.682629952=${responses[14]}+&entry.1414082629=${responses[15]}+&entry.1958917030=${responses[16]}+&entry.1770400223=${responses[17]}+&entry.1918615978=${responses[18]}+&entry.446311397=${responses[19]}+&entry.1301494103=${responses[20]}+&entry.922060711=${responses[21]}+&entry.844162813=${responses[22]}+&submit=Submit`;
</script>

<!---->
<div class="card" on:click={fullScreen} on:mouseenter={ () => preview(true) } on:mouseleave={ () => preview(false) } on:keydown={ fullScreen }>
    <Feedback_SVG class="title" />
    {#if hovered}
        <Preview name="feedback" id="feedback" class="preview" />
    {/if}
    {#if clicked}
        <!--div class="content">
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScS7sjBrqFyMdiNge9JsRMUFJWklr_ms7nXNxSI1Oy5z7Tv7A/viewform?embedded=true" width="1400" height="300" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
        </div-->
    {/if}
</div>
<!---->
<!--
<div class="card" on:click={openFull} class:clicked>
    <Feedback_SVG class="title" />
    {#if clicked}
        <form class="content form">
            {#each questions as question}
            <div class="question">
                <Title title={question.title} />
                {#if question.scale}
                    {#each question.scale as scale}
                        <Scale question={scale} />
                    {/each}
                {/if}
                {#if question.longAnswer}
                    {#each question.longAnswer as longAnswer}
                        <LongAnswer question={longAnswer} />
                    {/each}
                {/if}
            </div>
            {/each}
            <div>
                <a class="submit" href={prefilledLink} target="_blank" rel="noopener noreferrer">Submit</a>
            </div>
        </form>
    {/if}
</div>
-->

<style lang="sass">
    $card-height: calc(1/3 * 100vh - 4vh)
    $theme-color-neutral: #eeeae1
    $theme-color-fee: #214745
    .exit
        z-index: 100
        position: absolute
        display: flex
        top: 0.5vw
        left: 2.5vh
        background-color: $theme-color-neutral
        width: 3vw
        height: 3vw
        border-radius: 100vw
        text-align: center
        justify-content: center
        align-items: center
        color: red
        transition: 0.3s
        &:hover
            color: $theme-color-neutral
            cursor: pointer
            background-color: red
            transition: 0.3s
    .content
        top: $card-height
    .submit
        
</style>