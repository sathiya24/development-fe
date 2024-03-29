export function getBooksAPI(){
    return fetch('http://backend.sathyas.shop/books')
    .then(res => res.json())
    .then(data => data);
}

export function addBookAPI(book){
    return fetch('http://backend.sathyas.shop/books', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(book)
    })
    .then(res => res.json())
    .then(data => data);
}

export function updateBookAPI(book){
    return fetch(`http://backend.sathyas.shop/books${book._id}`, {
        method: 'PATCH',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(book)
    })
    .then(res => res.json())
    .then(data => data);
}

export function deleteBookAPI(id) {
    return fetch(`http://backend.sathyas.shop/books${id}`, {
        method: 'DELETE',
        headers: {
            'content-type': 'application/json'
        }
    })
    .then(res => res.json())
    .then(data => data);
}