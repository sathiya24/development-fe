export function getBooksAPI(){
    return fetch('http://mybe.sathya.shop/book')
    .then(res => res.json())
    .then(data => data);
}

export function addBookAPI(book){
    return fetch('http://mybe.sathya.shop/book', {
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
    return fetch(`http://mybe.sathya.shop/book${book._id}`, {
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
    return fetch(`http://mybe.sathya.shop/book${id}`, {
        method: 'DELETE',
        headers: {
            'content-type': 'application/json'
        }
    })
    .then(res => res.json())
    .then(data => data);
}