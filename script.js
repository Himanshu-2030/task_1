function showAllPosts() {
    const posts = document.querySelectorAll('.post');
    posts.forEach(post => post.style.display = "block");
}

function showCategory(category) {
    const posts = document.querySelectorAll('.post');
    posts.forEach(post => post.style.display = "none");

    const categoryPosts = document.querySelectorAll(`.post[data-category="${category}"]`);
    categoryPosts.forEach(post => post.style.display = "block");
}

function toggleDropdown(button) {
    const dropdownContent = button.nextElementSibling;
    dropdownContent.classList.toggle("show");
}