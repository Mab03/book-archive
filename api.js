const searchBook = () => {
    const searchField = document.getElementById('search-field');
        const searchText = searchField.value;
        searchField.value = '';
        const url = `https://openlibrary.org/search.json?q=${searchText}`;
        fetch(url)
        .then(res => res.json())
        .then(data => displaySearchResult(data));
        //console.log(data.length);
}

const displaySearchResult = books => {
    const numberOfItemFound = document.getElementById('number-of-item-found');
    numberOfItemFound.innerHTML=`Number of items found: ${books.docs.length ? books.docs.length: 'Sorry, No match found'}`;
    const searchResult = document.getElementById('search-result');
    searchResult.innerHTML = '';
    books.docs.forEach(book => {
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
            <div class="card-body bg-info border border-secondary rounded-3" style="height: 400px;">
                <img src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top" style="height: 150px; width: 110px;" alt="Photo not available">
                <h5 class="card-title">${book.title}</h5>
                <h6 class="card-subtitle mb-2 text-muted">Author: ${book.author_name ? book.author_name: 'Author info not available'}</h6>
                <h6>First published year: ${book.first_publish_year ? book.first_publish_year: 'Publish year not available'}</h6>
                <h6>Publisher: ${book.publisher ? book.publisher.slice(0,5): 'Publisher info not available'}</h6>
            </div>
    `;
    searchResult.appendChild(div);
    })
}



//first_publish_year, publisher, author_name, from images link, cover_i