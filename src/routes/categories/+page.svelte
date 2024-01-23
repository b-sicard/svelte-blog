<script lang="ts">
  import CategoryCard from '$lib/components/CategoryCard.svelte';
    import CategoryModal from '$lib/components/CategoryModal.svelte';
    import { Heading } from 'flowbite-svelte';

    export let data;

    const { user, categories } = data;
</script>

<svelte:head>
    <title>Blog - Categories</title>
</svelte:head>

<Heading tag="h1" class="mb-10" customSize="text-4xl font-extrabold md:text-5xl lg:text--6xl">
    Categories
</Heading>

{#if !!user}
    <CategoryModal />
{/if}

{#each categories as category}
    <CategoryCard category={category} />
{/each}
