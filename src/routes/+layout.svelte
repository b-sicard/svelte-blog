<script lang="ts">
    import "../app.pcss";
    import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, Button } from 'flowbite-svelte';
    import { goto } from "$app/navigation";

    export let data;
</script>

<Navbar class="mb-10" style={'border-bottom: 1px solid #E5E7EB;'}>
    <NavBrand href="/">
        <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Blog
        </span>
    </NavBrand>
    <NavUl>
        <NavLi href="/">Home</NavLi>
        <NavLi href="/posts">Posts</NavLi>
    </NavUl>
    <div class="flex">
        {#if data.user === undefined}
            <Button color="dark" href="/login" size="sm">Login</Button>
        {:else}
            <Button color="dark" on:click={() => goto('/logout')} size="sm">Logout</Button>
        {/if}
        <NavHamburger />
    </div>
</Navbar>

<div class="container">
    <slot></slot>
</div>

<style>
    .container {
        max-width: 800px;
        margin: 0 auto;
    }
</style>
