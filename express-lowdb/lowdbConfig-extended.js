import { Low } from "lowdb";
import { JSONFile } from "lowdb/node";

// 1. Initialisieren LowDB und lege Pfad und Namen der Datei fest
const adapter = new JSONFile("./db.json");
const defaultData = [{}];
const db = new Low(adapter, defaultData);

// await db.read();


// *** Eigene Erweiterung ***

// findet ein Element
// und gibt dieses zurück
db.find = function(obj) {
    const prop = Object.keys(obj)[0];
    obj[prop] = String( obj[prop] )

    return this.data.find( item => {
        item[prop] = String( item[prop] );
        return item[prop].toLowerCase() === obj[prop].toLowerCase()
    
    })
}

// findet ein oder mehrere Elemente
// und gibt sie als Array zurück
db.findAll = function(obj) {
    const prop = Object.keys(obj)[0];
    obj[prop] = String( obj[prop] )


    return this.data.filter( item => {
        item[prop] = String( item[prop] );
        return item[prop].toLowerCase() === obj[prop].toLowerCase()
    
    })
}

// löscht ein oder mehrere Element(e)
// und gibt die gelöschten Elemente als Array zurück
db.delete = function(obj) {
    const prop = Object.keys(obj)[0];
    let deletedItems = []

    this.data = this.data.filter( (item, index, arr) =>{
       if( item[prop].toLowerCase() !== obj[prop].toLowerCase() ) {
        return true;
       } else {
        deletedItems.push(arr[index]);
        return false
       }
    
    });

    this.write();
    return deletedItems;
}


// Beispiel Anwendung
// console.log( db.find({title: "Pulp Fiction"}) ); // { title: 'Pulp Fiction', year: '1994', costs: '8 Millionen USD' }
// console.log( db.delete({title: "dodo"}) ); // [{ title: 'dodo', year: '1999', costs: '63 Millionen USD' }],
// console.log( db.findAll({year: 1994}) ); // [ { title: 'Pulp Fiction', year: '1994', costs: '8 Millionen USD' },{ title: 'Forrest Gump', year: '1994', costs: '55 Millionen USD' } ],

export default db;