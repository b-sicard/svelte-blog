<script>
    import { Heading, Input, Label, Button } from 'flowbite-svelte';
    import { login } from './services/auth';

    let email = ''
    let password = ''
</script>

<div class="container">
    <Heading tag="h1" class="mb-10" customSize="text-4xl font-extrabold  md:text-5xl lg:text--6xl">
        Login
    </Heading>
    
    <form>
        <div class="mb-6">
            <Label for="email" class="mb-2">Email address</Label>
            <Input type="email" id="email" placeholder="john.doe@company.com" bind:value={email} required />
        </div>
        <div class="mb-6">
            <Label for="password" class="mb-2">Password</Label>
            <Input type="password" id="password" placeholder="•••••••••" bind:value={password} required />
        </div>
        <Button type="submit" on:click={() => login(email, password)}>Sign in</Button>
    </form>
</div>

<style>
    .container {
        height: 100%;
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
