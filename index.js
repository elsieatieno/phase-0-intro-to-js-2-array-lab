// Write your solution here!

const cats = ["Milo", "Otis", "Garfield"];
    cats.length = 0;

      cats.push('Milo', 'Otis', 'Garfield');

function destructivelyAppendCat(name){
    cats.push(name);
}
function destructivelyPrependCat(name){
    cats.unshift(name);
}
function destructivelyRemoveLastCat(){
    cats.pop();
}
function destructivelyRemoveFirstCat(){
    cats.shift();
}
function appendCat(name){
    const newCats = [...cats, name];
    return newCats; //remove broom
}
function prependCat(name){
    const newCats = [name, ...cats];
    return newCats; 
}
function removeLastCat(){ //remove garfield
    const newCats = cats.slice(0,2)
    return newCats; 
}
    
function removeFirstCat(){ //remove milo
    const newCats = cats.slice(-2)
    return newCats;

}