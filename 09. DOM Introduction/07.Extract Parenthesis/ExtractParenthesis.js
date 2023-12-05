function extract(id) {
    const text = document.getElementById(id).textContent
    const pattern = /\((.+?)\)/g;
    let result = text.match(pattern);
    
    return result.join("; ")
}  