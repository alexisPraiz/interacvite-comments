/*---==== Creating a Data Base and CRUD: Start ====---*/
const IDBRequest = indexedDB.open('comments','1');

IDBRequest.addEventListener('upgradeneeded',()=>{
    const dataBase = IDBRequest.result;
    dataBase.createObjectStore('comment',{
        autoIncrement: true
    });
});

IDBRequest.addEventListener('error',(e)=>{
    console.log(e);
});

const addComment = comment =>{
    const dataBase       = IDBRequest.result;
    const IDBTransaction = dataBase.transaction('comment','readwrite').objectStore('comment');
    IDBTransaction.add(comment);
}

const readComment = data =>{
    const dataBase       = IDBRequest.result;
    const IDBTransaction = dataBase.transaction('comment','readonly').objectStore('comment');
    const cursor         = IDBTransaction.openCursor();
    const fragment       = document.createDocumentFragment();
    cursor.addEventListener('success', e=>{
        if(cursor.result){
            let element = read(data,cursor.result.value,cursor.result.key);
            fragment.appendChild(element);
            cursor.result.continue();       
		}else document.querySelector('.replies').appendChild(fragment);
    });
}

const modifyComment = (key,comment) =>{
    const dataBase       = IDBRequest.result;
    const IDBTransaction = dataBase.transaction('comment','readwrite').objectStore('comment');
    IDBTransaction.put(comment,key);
}

const deleteComment = key =>{
    const dataBase       = IDBRequest.result;
    const IDBTransaction = dataBase.transaction('comment','readwrite').objectStore('comment');
    IDBTransaction.delete(key);
}
/*---==== Creating a Data Base and CRUD: End ====---*/