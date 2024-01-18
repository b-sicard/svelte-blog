<script>
    import { Heading, Input, Label, Button, Alert } from 'flowbite-svelte';

    export let form;
</script>

<svelte:head>
    <title>Blog - Login</title>
</svelte:head>

<div class="container">
    <Heading tag="h1" class="mb-10" customSize="text-4xl font-extrabold  md:text-5xl lg:text--6xl">
        Login
    </Heading>

    {#if form?.errors?.length > 0}
        {#each form?.errors as error}
            <Alert color="red" class="mb-5">
                {error.message}
            </Alert>
        {/each}
    {/if}
    
    <form method="POST">
        <div class="mb-6">
            <Label for="email" class="mb-2">Email address</Label>
            <Input type="email" name="email" placeholder="john.doe@company.com" required />
        </div>
        <div class="mb-6">
            <Label for="password" class="mb-2">Password</Label>
            <Input type="password" name="password" placeholder="••••••••" required />
        </div>
        <Button type="submit">Login</Button>
    </form>
</div>

<style>
    .container {
        max-width: 500px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    form {
        border: 1px solid #E5E7EB;
        border-radius: 5px;
        padding: 15px;
    }
</style>
