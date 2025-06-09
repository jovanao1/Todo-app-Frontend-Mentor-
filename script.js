var slikaTama = document.getElementById('slikaTama');
var ikonica = document.getElementById('ikonica');
var body = document.getElementsByTagName('body')[0];
var obaveze = document.getElementById('obaveze');
var input1 = document.getElementById('input');
var brojObaveza = 0;
ikonica.addEventListener('click', function(e){
    e.preventDefault();
    ikonica.src = 'icon-moon.svg';
    body.style.backgroundColor = 'whitesmoke';
    obaveze.style.backgroundColor = 'white';
    obaveze.childNodes.forEach(node => {
        if (node.nodeType === 1) {
            node.style.backgroundColor = 'white';
            node.style.color = 'black';
        }
    });
    input1.style.backgroundColor = 'white';
    slikaTama.src = 'bg-desktop-light.jpg';
    slikaTama.classList.add('slikaSunce');
    var slikaSunce = document.getElementsByClassName('slikaSunce')[0];
    if(slikaSunce != null){
        ikonica.addEventListener('click', function(e){
            e.preventDefault();
            ikonica.src = 'icon-sun.svg';
            body.style.backgroundColor = 'rgb(56, 49, 49)';
            slikaTama.src = 'bg-desktop-light.jpg';
            slikaTama.classList.remove('slikaSunce');
            obaveze.childNodes.forEach(node => {
                if (node.nodeType === 1) {
                    node.style.backgroundColor = 'rgb(48, 47, 47)';
                    node.style.color = 'white';
                }
            });
            obaveze.style.backgroundColor = 'rgb(48, 47, 47)';
            input1.style.backgroundColor = 'rgb(48, 47, 47)';
        });
    }
});
    



var submit = document.getElementById('submit');
var a = document.getElementById('a');

var active = document.getElementById('active');
var all = document.getElementById('all');
var completed = document.getElementById('completed');
var clear = document.getElementById('clear');
submit.addEventListener('click', function(e){
    brojObaveza++;
    a.textContent = brojObaveza + "items left";
    e.preventDefault();
    var input = document.getElementById('input').value;
    var noviDiv = document.createElement('div');
    var dugme = document.createElement('button');
    dugme.classList.add('dugme');
    var iks = document.createElement('img');
    iks.src = "icon-cross.svg";

    iks.classList.add('iks');
    noviDiv.classList.add('active');
    noviDiv.classList.add('noviDiv');
    noviDiv.append(dugme, input, iks);
    obaveze.prepend(noviDiv);

    dugme.addEventListener('click', function(e){
        e.preventDefault();
        var kros = document.createElement('img');
        kros.src = 'icon-check.svg';
        dugme.appendChild(kros);
        dugme.style.backgroundColor = 'blue';
        noviDiv.style.textDecoration = 'line-through';
        noviDiv.style.color = 'grey';
        iks.style.display = 'none';
        noviDiv.classList.remove('active');
        brojObaveza--;
        a.textContent = brojObaveza + "items left";
        noviDiv.classList.add('completed');
    });

    iks.addEventListener('click', function(e){
        brojObaveza--;
        a.textContent = brojObaveza + "items left";
        e.preventDefault();
        var roditelj = iks.parentElement;
        roditelj.style.display = 'none';
        roditelj.remove();
    });

    active.addEventListener('click', function(e){
        e.preventDefault();
        var sviNoviDivovi = document.getElementsByClassName("noviDiv");
        let nizDivova = Array.from(sviNoviDivovi);
        nizDivova.forEach(element => {
            if(!element.classList.contains('active') && element.classList.contains('completed')){
                element.style.display = 'none';
            }
        });
    });

    completed.addEventListener('click', function(e){
        e.preventDefault();
        var sviNoviDivovi = document.getElementsByClassName("noviDiv");
        let nizDivova = Array.from(sviNoviDivovi);
        nizDivova.forEach(element => {
            if(element.classList.contains('active') && !element.classList.contains('completed')){
                element.style.display = 'none';
            }
        });
    });

    all.addEventListener('click', function(e){
        e.preventDefault();
        var sviNoviDivovi = document.getElementsByClassName("noviDiv");
        let nizDivova = Array.from(sviNoviDivovi);
        nizDivova.forEach(element => {
            element.style.display = 'flex';
        });
    });

    clear.addEventListener('click', function(e){
        e.preventDefault();
        var sviNoviDivovi = document.getElementsByClassName("noviDiv");
        let nizDivova = Array.from(sviNoviDivovi);
        nizDivova.forEach(element => {
            if(!element.classList.contains('active') && element.classList.contains('completed')){
                obaveze.removeChild(element);
            }
        });
    });

    

});