<script lang="ts">
    import { Heading } from 'flowbite-svelte';
    import PostCard from '$lib/components/PostCard.svelte';

    export let data;

    const { user, posts } = data;
</script>

<svelte:head>
    <title>Blog - Home</title>
</svelte:head>

{#if user === undefined}
    <Heading tag="h1" class="mb-10" customSize="text-4xl font-extrabold md:text-5xl lg:text--6xl">
        Welcome to the blog
    </Heading>
{:else}
    <Heading tag="h1" class="mb-10" customSize="text-4xl font-extrabold md:text-5xl lg:text--6xl">
        Welcome back, {user.first_name}
    </Heading>
{/if}

<Heading tag="h6" class="mb-5">Last articles</Heading>

<section>
    {#each posts as post}
        <PostCard post={post} />
    {/each}
</section>

<style>
    section {
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
    }
</style>