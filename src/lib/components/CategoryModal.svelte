<script lang="ts">
    import { Card, Modal, Label, Input, Button } from 'flowbite-svelte';

    let isModalOpen = false;
</script>

<Card on:click={() => (isModalOpen = true)}>
    +
</Card>
<Modal title="New category" bind:open={isModalOpen} autoclose>
    <form action="POST">
        <div class="mb-6">
            <Label for="name" class="mb-2">Name</Label>
            <Input type="text" name="name" placeholder="My new category" required />
        </div>
        <div class="mb-6">
            <Label for="color" class="mb-2">Color</Label>
            <Input type="color" name="color" value="#e66465" required />
        </div>
    </form>
    <svelte:fragment slot="footer">
        <Button type="submit" on:click={() => (isModalOpen = false)} color="green">Confirm</Button>
        <Button color="alternative" on:click={() => (isModalOpen = false)}>Cancel</Button>
    </svelte:fragment>
</Modal>
