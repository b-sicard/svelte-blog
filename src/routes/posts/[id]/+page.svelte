<script>
    import { Heading, P, Button } from 'flowbite-svelte';

    export let data;

    const { user, post } = data;
</script>

<svelte:head>
    <title>Blog - {post.title}</title>
</svelte:head>

{#if user?.id === post.author.id}
    <Button href="{post.id}/edit">Edit</Button>
    <Button color="red" href="{post.id}/delete">Delete</Button>
{/if}

<Heading tag="h1" class="mb-10" customSize="text-4xl font-extrabold md:text-5xl lg:text--6xl">
    {post.title}
</Heading>

<P weight="light" color="text-gray-500 dark:text-gray-400">
    By {post.author.first_name} {post.author.last_name}
</P>

<div>
    {@html post.content}
</div>
