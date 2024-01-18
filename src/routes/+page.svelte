<script>
    import { Heading, Card, Button } from 'flowbite-svelte';

    export let data;

    const { user } = data
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

<Heading tag="h6">Last articles</Heading>

<Card>
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Noteworthy technology acquisitions 2021
    </h5>
    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">
        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
    </p>
    <Button class="w-fit">
        Read more
    </Button>
</Card>

<style>
    
</style>
