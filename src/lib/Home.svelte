<script lang="ts">
    import Logo from '../assets/Logo.svelte'
    
    let heightList: string[] = ["8'0", "7'6", "7'0", "6'6", "6'0", "5'6", "5'0", "4'6", "4'0", ]
</script>
<div class="Home {$$props.class}" >
    <Logo class="logo" />
    <div class="mug">
        {#each {length: 23} as _, i}
                <div class="lines"></div>
        {/each}
    </div>
</div>

