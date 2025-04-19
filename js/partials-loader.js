export function insertPartial(selector, url, position = 'beforeend') {
    return new Promise((resolve, reject) => {
        const target = document.querySelector(selector);
        if (!target) {
            reject(`Target "${selector}" not found.`);
            return;
        }

        fetch(url)
            .then(res => {
                if (!res.ok) {
                    throw new Error(`Failed to load ${url}`);
                }
                return res.text();
            })
            .then(html => {
                target.insertAdjacentHTML(position, html);
                resolve(); // Resolve when the HTML is inserted
            })
            .catch(err => {
                console.error(`Error inserting partial:`, err);
                reject(err); // Reject in case of error
            });
    });
}



