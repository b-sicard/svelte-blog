<script lang="ts">
    import { Input, Label, Button } from 'flowbite-svelte';
    import Editor from '@tinymce/tinymce-svelte';
    import { Post } from '$lib/models/post.model';

    export let method: string = 'POST';
    export let post: Post = new Post({});

    let value: string = post.content;
</script>

<form class="mb-10" method={method}>
    <div class="mb-6">
        <Label for="title" class="mb-2">Title</Label>
        <Input type="text" name="title" placeholder="My new post" value={post.title} required />
    </div>
    <div class="mb-6">
        <Label for="editor" class="mb-2">Content</Label>
        <Editor
            bind:value
        />
        <textarea hidden name="content" id="content" cols="30" rows="10" value={value}></textarea>
    </div>
    <Button color="green" type="submit">Confirm</Button>
    <Button color="red" on:click={() => history.back()}>Cancel</Button>
</form>
