
//esse codigo abaixo se vc clickar em um iconi acima ele mudar a cor de acordo qual item html elemento tiver com esse elemento lista add
let menuitem = document.querySelectorAll('.item')

function select(){
    menuitem.forEach((item)=>
        item.classList.remove('ativo')
    
    )
    this.classList.add('ativo')
}

menuitem.forEach((item)=>
    item.addEventListener('click', select)
)


let expadine = document.querySelector('#expandiner');
// Selecione o elemento de classe "navigation"
let navega = document.querySelector('.menu-lateral');



expadine.addEventListener('click', function() {
        // Adicione ou remova a classe "expandinis" no elemento de classe "navigation"
        navega.classList.toggle('expandir');
});
