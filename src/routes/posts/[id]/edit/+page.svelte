<script lang="ts">
    import PostForm from '$lib/components/PostForm.svelte';

    export let data;

    const { post } = data
</script>

<svelte:head>
    <title>Blog - {post.title}</title>
</svelte:head>

<PostForm post={post} />
