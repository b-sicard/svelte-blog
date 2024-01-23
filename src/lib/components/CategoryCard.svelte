<script lang="ts">
    import { goto } from '$app/navigation';
    import type { Category } from '$lib/models/category.model';
    import { Card } from 'flowbite-svelte';

    export let category: Category;

</script>

<Card on:click={() => goto(`/posts/${category.id}`)} style={`background-color: ${category.color}`}>
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {category.name}
    </h5>
</Card>
