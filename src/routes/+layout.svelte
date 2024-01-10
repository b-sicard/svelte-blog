<script>
    import "../app.pcss";
    import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, Button } from 'flowbite-svelte';
</script>

<Navbar style={
    `
        border-bottom: 1px solid #E5E7EB;
        margin-bottom: 50px;
    `
}>
    <NavBrand href="/">
        <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Blog
        </span>
    </NavBrand>
    <NavUl>
        <NavLi href="/">Home</NavLi>
        <NavLi href="/posts">Posts</NavLi>
        <NavLi href="/categories">Categories</NavLi>
    </NavUl>
    <div class="flex">
        <Button href="/login" size="sm">Login</Button>
        <NavHamburger />
    </div>
</Navbar>

<slot></slot>
