export function idbPromise (storeName, method, object) {
    return new Promise ((resolve, reject) => {
        const request = window.indexedDB.open('actracker', 1);

        let db, tx, store;

        request.onupgradeneeded = function(e) {
            const db = request.result;

            db.createObjectStore('bugs', {keyPath: '_id'});
        };

        request.onerror = function(e) {
            console.log('There was an error');
        };

        request.onsuccess = function(e) {
            db = request.result;
            tx = db.transaction(storeName, 'readwrite');
            store = tx.objectStore(storeName)

            db.onerror = function(e) {
                console.log('error', e);
            };

            
        }
    })
}