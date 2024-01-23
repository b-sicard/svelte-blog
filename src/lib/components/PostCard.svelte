<script lang="ts">
    import { goto } from '$app/navigation';
    import type { Post } from '$lib/models/post.model';
    import { Card, Button } from 'flowbite-svelte';

    export let post: Post;

</script>

<Card>
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {post.title}
    </h5>
    <span class="text-sm text-gray-500 dark:text-gray-400 mb-3">By {post.author.first_name} {post.author.last_name}</span>
    <Button on:click={() => goto(`/posts/${post.id}`)} class="w-fit">
        Read more
    </Button>
</Card>
