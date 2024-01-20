<script>
    import { Heading } from 'flowbite-svelte';

    export let data;

    const { props } = data
    const { post } = props

    console.log(post)
</script>

<svelte:head>
    <title>Blog - {post.title}</title>
</svelte:head>

<Heading tag="h1" class="mb-10" customSize="text-4xl font-extrabold md:text-5xl lg:text--6xl">
    {post.title}
</Heading>

<div>
    {@html post.content}
</div>
