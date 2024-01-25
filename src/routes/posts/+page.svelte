<script lang="ts">
    import { Heading, Card } from 'flowbite-svelte';
    import PostCard from '$lib/components/PostCard.svelte';

    export let data

    const { user, posts } = data
</script>

<svelte:head>
    <title>Blog - Posts</title>
</svelte:head>

<Heading tag="h1" class="mb-10" customSize="text-4xl font-extrabold md:text-5xl lg:text--6xl">
    Posts
</Heading>

<section>
    {#if !!user}
        <Card style={"height: 160px; width: calc(100% / 2)"} href="/posts/new">
            <span>+</span>
        </Card>
    {/if}

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
    span {
        font-size: 100px;
        font-weight: 100;
        line-height: 100px;
        text-align: center;
    }
</style>
