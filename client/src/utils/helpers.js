export function idbPromise (storeName, method, object) {
    return new Promise ((resolve, reject) => {
        // open connection to database. the '1' is the database version number
        const request = window.indexedDB.open('actracker', 1);

        let db, tx, store;

        request.onupgradeneeded = function(e) {
            const db = request.result;
            
            db.createObjectStore('bugs', {keyPath: '_id'});
            db.createObjectStore('caughtBugs', {keyPath: 'data-id'});

            db.createObjectStore('fish', {keyPath: '_id'});
            db.createObjectStore('caughtFish', {keyPath: '_id'});

            db.createObjectStore('seaCreatures', {keyPath: '_id'});
            db.createObjectStore('caughtSeaCreatures', {keyPath: '_id'});

            db.createObjectStore('fossils', {keyPath: '_id'});
            db.createObjectStore('foundFossils', {keyPath: '_id'});

            db.createObjectStore('art', {keyPath: '_id'});
            db.createObjectStore('foundArt', {keyPath: '_id'});
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

            switch (method) {
                case 'put':
                    store.put(object);
                    resolve(object);
                    break;
                case 'delete':
                    store.delete(object._id);
                    break;
                default: 
                    console.log('No valid method');
                    break;
            }

            tx.oncomplete = function() {
                db.close();
            };
            
        };
    })
}