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

<div>
    {#if !!user}
        <Card href="/posts/new">
            +
        </Card>
    {/if}

    {#each posts as post}
        <PostCard post={post} />
    {/each}
</div>
