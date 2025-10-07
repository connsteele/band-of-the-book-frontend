import queryString from "query-string";

/**
 * 
 * @param {*} state React state for post
 * @returns 
 */
async function searchBook({book: inTitle = null, author: inAuthor = null}) {
    // Build a search request from the post state

    const resouce = "/books/search"
    const base = import.meta.env.VITE_API_URL + resouce;
    const url = queryString.stringifyUrl({
        url: base,
        query: {
            title: inTitle,
            author: inAuthor,
        },
        skipNull: true,
        skipEmptyString: true,
    });

    const res = await fetch(url, {
        method: "GET",
    })
    if (!res.ok) {
        console.error(`Error, search for "${inTitle}" by "${inAuthor} resulted in ${res.status}"`);
        return;
    }
    const data = await res.json();
    console.log(data);
    // use this to fetch the actual books data for form filling
    return data.result;
};

/**
 * Submit a GET request to the backend for a specific book resource
 * @param {*} e 
 */
const getDbBook = async (endpoint) => {
    try {
        const res = await fetch(endpoint, {method: "GET"});
        if (!res.ok) {
            console.error(`Error ${res.status} trying to access url: ${endpoint}`);
        }
        const data = await res.json();
        console.log(data);
        return data;

    } catch (err) {

    }
};

export {
    searchBook,
    getDbBook,
};