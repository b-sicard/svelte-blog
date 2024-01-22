<script lang="ts">
    import { Input, Label, Button } from 'flowbite-svelte';
    import Editor from '@tinymce/tinymce-svelte';

    export let method: string = 'POST';
    export let post: any = {};

    let value: any = post.content;


</script>

<form method={method}>
    <div class="mb-6">
        <Label for="title" class="mb-2">Title</Label>
        <Input type="text" name="title" placeholder="My new post" value={post.title} required />
    </div>
    <div class="mb-6">
        <Label for="editor" class="mb-2">Post</Label>
        <Editor
            bind:value
        />
        <textarea hidden name="content" id="content" cols="30" rows="10" value={value}></textarea>
    </div>
    <Button type="submit">Confirm</Button>
    <Button>Cancel</Button>
</form>
