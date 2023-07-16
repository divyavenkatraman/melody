chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({
    categories: ['Science', 'Technology', 'Programming', 'Design', 'Entertainment', 'News'],
    bookmarks: {
      'Science':
      [
        { title: 'NASA', url: 'https://www.nasa.gov/' },
        { title: 'Scientific American', url: 'https://www.scientificamerican.com/' }
      ],
      'Technology':
      [
        { title: 'Ars Technica', url: 'https://arstechnica.com/' },
        { title: 'The Verge', url: 'https://www.theverge.com/' }
      ],
      'Programming':
      [
        { title: 'Stack Overflow', url: 'https://stackoverflow.com/' },
        { title: 'GitHub', url: 'https://github.com/' }
      ],
      'Design':
      [
        { title: 'Awards', url : "https://www.awwwards.com/" },
        { title: 'Behance', url: 'https://www.behance.net/' }
      ],
      'Entertainment':
      [
        { title: 'YouTube', url: 'https://www.youtube.com/' },
        { title: 'Netflix', url: 'https://www.netflix.com/' }
      ],
      'News':  [
        { title: 'CNN', url: 'https://www.cnn.com/' },
        { title: 'BBC', url: 'https://www.bbc.com/' }
      ]
    }
  });
});