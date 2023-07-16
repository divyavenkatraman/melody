document.addEventListener('DOMContentLoaded', function() {
  const categoryForm = document.createElement('form');
  const categoryInput = document.createElement('input');
  const categoryButton = document.createElement('button');
  const categoryList = document.createElement('ul');

  categoryInput.placeholder = 'New category';
  categoryButton.textContent = 'Add Category';

  categoryForm.appendChild(categoryInput);
  categoryForm.appendChild(categoryButton);
  document.body.appendChild(categoryList);
  document.body.appendChild(categoryForm);

  function loadCategories() {
    chrome.storage.sync.get(['categories'], function(result) {
      categoryList.innerHTML = '';
      result.categories.forEach(category => {
        const li = document.createElement('li');
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        li.textContent = category;
        li.appendChild(deleteButton);
        categoryList.appendChild(li);

        deleteButton.addEventListener('click', function() {
          const updatedCategories = result.categories.filter(item => item !== category);
          chrome.storage.sync.set({categories: updatedCategories}, function() {
            loadCategories();
          });
        });
      });
    });
  }

  categoryForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const categoryName = categoryInput.value.trim();
    if (!categoryName) return;

    chrome.storage.sync.get(['categories'], function(result) {
if (!result.categories.includes(categoryName)) {
const updatedCategories = result.categories.concat(categoryName);
chrome.storage.sync.set({ categories: updatedCategories }, function() {
categoryInput.value = '';
loadCategories();
});
}
});
});

loadCategories();
});


