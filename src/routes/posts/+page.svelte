<script lang="ts">
    import { goto } from '$app/navigation';
    import { Heading, Card, Button } from 'flowbite-svelte';

    export let data
    const { user, props } = data
    const { posts } = props
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
        <Card>
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {post.title}
            </h5>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">
                Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
            </p>
            <Button on:click={() => goto(`/posts/${post.id}`)} class="w-fit">
                Read more
            </Button>
        </Card>
    {/each}
</div>
