<script lang="ts">
    import { Heading, Input, Label, Button, Alert, P, A } from 'flowbite-svelte';

    export let form;
</script>

<svelte:head>
    <title>Blog - Login</title>
</svelte:head>

<div class="container">
    <Heading tag="h1" class="mb-10" customSize="text-4xl font-extrabold  md:text-5xl lg:text--6xl">
        Join us
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
            <div class="mb-6">
                <Label for="first_name" class="mb-2">First Name</Label>
                <Input type="text" name="first_name" placeholder="John" required />
            </div>
            <div class="mb-6">
                <Label for="last_name" class="mb-2">Last Name</Label>
                <Input type="text" name="last_name" placeholder="Doe" required />
            </div>
        </div>
        <div class="mb-6">
            <Label for="email" class="mb-2">Email address</Label>
            <Input type="email" name="email" placeholder="john.doe@company.com" required />
        </div>
        <div class="mb-6">
            <Label for="password" class="mb-2">Password</Label>
            <Input type="password" name="password" placeholder="••••••••" required />
        </div>
        <div class="mb-6">
            <Label for="confirm_password" class="mb-2">Confirm password</Label>
            <Input type="password" name="confirm_password" placeholder="••••••••" required />
        </div>
        <P class="mb-4">
            Already have an account? <A href="/login" class="underline hover:no-underline">Sign in now!</A>
        </P>
        <Button type="submit">Login</Button>
    </form>
</div>

<style>
    .container {
        max-width: 500px;
        margin: 0 auto;
        padding: 100px 0;
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
