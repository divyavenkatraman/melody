document.addEventListener('DOMContentLoaded', function() {
  const bookmarkForm = document.getElementById('bookmark-form');
  const bookmarkTitle = document.getElementById('bookmark-title');
  const bookmarkUrl = document.getElementById('bookmark-url');
  const bookmarkCategory = document.getElementById('bookmark-category');
  const bookmarksContainer = document.getElementById('bookmarks-container');

  function loadCategories() {
    chrome.storage.sync.get(['categories'], function(result) {
      bookmarkCategory.innerHTML = '';
      result.categories.forEach(category => {
        const option = document.createElement('option');
        option.textContent = category;
        bookmarkCategory.appendChild(option);
      });
    });

function loadBookmarks() {
chrome.storage.sync.get(['bookmarks'], function(result) {
bookmarksContainer.innerHTML = '';
  for (const category in result.bookmarks) {
  const categoryDiv = document.createElement('div');
  const categoryTitle = document.createElement('h2');
  const categoryBookmarks = document.createElement('div');

  categoryTitle.textContent = category;
  categoryDiv.appendChild(categoryTitle);
  categoryDiv.appendChild(categoryBookmarks);

  result.bookmarks[category].forEach(bookmark => {
    const bookmarkDiv = document.createElement('div');
    const bookmarkTitle = document.createElement('h3');
    const bookmarkLink = document.createElement('a');

    bookmarkDiv.className = 'bookmark';
    bookmarkTitle.textContent = bookmark.title;
    bookmarkLink.href = bookmark.url;
    bookmarkLink.textContent = bookmark.url;

    bookmarkDiv.appendChild(bookmarkTitle);
    bookmarkDiv.appendChild(bookmarkLink);
    categoryBookmarks.appendChild(bookmarkDiv);
  });

  bookmarksContainer.appendChild(categoryDiv);
}});
}

bookmarkForm.addEventListener('submit', function(event) {
event.preventDefault();

const title = bookmarkTitle.value.trim();
const url = bookmarkUrl.value.trim();
const category = bookmarkCategory.value;

if (!title || !url) return;

const newBookmark = { title: title, url: url };

chrome.storage.sync.get(['bookmarks'], function(result){
const updatedBookmarks = { ...result.bookmarks };
updatedBookmarks[category] = updatedBookmarks[category].concat(newBookmark);
  chrome.storage.sync.set({ bookmarks: updatedBookmarks }, function() {
  bookmarkTitle.value = '';
  bookmarkUrl.value = '';
  loadBookmarks();
});
});
});

loadCategories();
loadBookmarks();
}});