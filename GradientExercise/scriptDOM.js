
/* console.log("seconda parte")

//

// Returns a reference to the element by its ID.
document.getElementById('someid');

// Returns an array-like object of all child elements which have all of the given class names.
document.getElementsByClassName('someclass');

// Returns an HTMLCollection of elements with the given tag name.
document.getElementsByTagName('LI');

//new

// Returns the first element within the document that matches the specified group of selectors.
document.querySelector('.someclass');

// Returns a list of the elements within the document (using depth-first pre-order traversal of the document's nodes)
// that match the specified group of selectors.
document.querySelectorAll('div.note, div.alert');



// Get child nodes
var stored = document.getElementById('someid');
var children = stored.childNodes;

// Get parent node
var parental = children.parentNode;

// create new elments
var newHeading = document.createElement('h1');
var newParagraph = document.createElement('p');

// create text nodes for new elements
var h1Text= document.createTextNode('This is a nice header text!');
var pText= document.createTextNode('This is a nice paragraph text!');

// attach new text nodes to new elements
newHeading.appendChild(h1Text);
newParagraph.appendChild(pText);

// elements are now created and ready to be added to the DOM.

// grab element on page you want to add stuff to
var firstHeading = document.getElementById('firstHeading');

// add both new elements to the page as children to the element we stored in firstHeading.
firstHeading.appendChild(newHeading);
firstHeading.appendChild(newParagraph);

// can also insert before like so

// get parent node of firstHeading
var parent = firstHeading.parentNode;

// insert newHeading before FirstHeading
parent.insertBefore(newHeading, firstHeading);

// update style
stored.style.color = "red";

function dosomething(){
    console.log("ciao")
}

let text = document.getElementById("text")

function js_style() {
    //font styles added by JS:
    if(text.style.color == "green"){
        text.style.color = "black";
        text.style.fontSize = "20px";
    }else {
        text.style.fontSize = "10px";
        text.style.color = "green";
    }
}  

let riferimento = document.getElementById("elementoprova");
let h1 = document.createElement('h1');
let h1testo = document.createTextNode('Testo di prova');
h1.appendChild(h1testo)
riferimento.appendChild(h1) */
/* 
titoloCarotoso.style.color ="orange";

let nuovoParagrapho = document.createElement("p");
let contenutoParagrapho = document.createTextNode("gnaff");

let erDiv = document.getElementById("papichulo");

nuovoParagrapho.appendChild(contenutoParagrapho);
erDiv.appendChild(nuovoParagrapho);


function poolzante (){
    if(nuovoParagrapho.style.color != "blue"){
    nuovoParagrapho.style.color = "blue";
    nuovoParagrapho.style.fontSize = "4rem";}
    else{
    nuovoParagrapho.style.color = "black";
    nuovoParagrapho.style.fontSize = "1rem";
    }

}

function sabmìt(){
    
let nome = document.getElementById("nome");
let cgnome = document.getElementById("cgnome");
console.log("Nome: "+nome.value)
console.log("Cognome: "+cgnome.value)

document.getElementById("sabmìtted").innerHTML = nome.value+" "+cgnome.value;
}

 */
/* 
function aggiungi(){
    let lista =document.getElementById("lista");
    let elemento = document.getElementById("elemento");
    console.log(elemento.value);   

    let idElemento = document.getElementsByTagName("li").length;

    
    let indiciLista=document.getElementsByTagName("li");

    let nuovoElemento =document.createElement("li");
    nuovoElemento.id = idElemento;
    nuovoElemento.innerHTML = elemento.value;


    let bottoneElimina = document.createElement("button");
    bottoneElimina.innerHTML ="elimina";
    bottoneElimina.type="button";
    bottoneElimina.name="elimina"

    bottoneElimina.onclick= function (){
        return elimina(idElemento);
    } 

    nuovoElemento.appendChild(bottoneElimina);
    lista.appendChild(nuovoElemento);
    
    if(elemento.value == ""){
        console.log("fesso")
        return elimina(idElemento);
    }
}
function elimina(elemento){
    let lunghezzaLista = document.getElementsByTagName("li").length;
    console.log(lunghezzaLista)

    let daRimuovere = document.getElementById(elemento);
    daRimuovere.parentNode.removeChild(daRimuovere);
    
    let idCorrente = parseInt(elemento);
    console.log("Id pre correzione: "+idCorrente);

    lunghezzaLista = document.getElementsByTagName("li").length;
    console.log(lunghezzaLista)

    if(idCorrente<lunghezzaLista){
        for(let i = idCorrente;i<lunghezzaLista;i++){
            let idSuperiore = document.querySelector("[id='"+(i+1)+"']");
            idSuperiore.id = i;
        }
    }
    console.log("Id post correzione: "+idCorrente);
} */
//creating nodes
var container = document.createElement('div');
var titolo = document.createElement('h1');
var paragrafo = document.createElement('h2');
var bottone = document.createElement('button');
//applying class names
container.className='container';
//creating starting gradient
var gradientValue1 = '#ffffff';
var gradientValue2 = '#ffffff';
var gradientStyling =`linear-gradient(to right, ${gradientValue1}, ${gradientValue2})`;
var gradient = `background:${gradientStyling} ;`;
//creating text nodes
var testoTitolo= document.createTextNode('CLICK THE BUTTON BELOW TO GENERATE A RANDOM GRADIENT HEX COLOR COMBINATION');
var testoParagrafo= document.createTextNode(gradient);
var testoBottone = document.createTextNode('Click Me');
//aplyying text nodes
titolo.appendChild(testoTitolo);
paragrafo.appendChild(testoParagrafo);
bottone.appendChild(testoBottone);
//setting onclick event
bottone.onclick = function(){
    return newGradient();
};
//creating page
document.body.appendChild(container);
container.appendChild(titolo);
container.appendChild(paragrafo);
container.appendChild(bottone);
//random hexcolor function
function randomHexColor(){
    return '#' + Math.floor(Math.random()*16777215).toString(16);
}
//new gradient change function
function newGradient(){
//generating gradients
    gradientValue1 = randomHexColor();
    gradientValue2 = randomHexColor();
    gradientStyling =`linear-gradient(to right, ${gradientValue1}, ${gradientValue2})`;
//applying to bg & showing gradient formula
    document.body.style.background = gradientStyling;
    gradient = `background:${gradientStyling} ;`;
    paragrafo.innerHTML = gradient;
}




