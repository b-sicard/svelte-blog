<script lang="ts">
    import { Heading, Input, Label, Button, Alert, Textarea } from 'flowbite-svelte';
    import Editor from '@tinymce/tinymce-svelte';

    let value: any;
</script>

<form method="POST">
    <div class="mb-6">
        <Label for="title" class="mb-2">Title</Label>
        <Input type="text" name="title" placeholder="My new post" required />
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