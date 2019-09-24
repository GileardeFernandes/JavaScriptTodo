let btnadd  = document.querySelector('#btnAdd');
let inputText = document.getElementById('textoTodo');
let elementUl = document.querySelector('#app ul');

var listTodo = ['Estudar javaScript',
                'acordar cedo para treinar',
                'controlar alimentação durante todo dia',
                'controlar horarios'];


var  carregaTodo = () => {
    elementUl.innerHTML = '';
    for (item of listTodo){

        var elementLi  = document.createElement('li');
        var textoLi = document.createTextNode(item);
        var link = document.createElement('a');
        var linkText = document.createTextNode('  Excluir');
        link.setAttribute('href','#');

        link.appendChild(linkText);
        elementLi.appendChild(textoLi);
        elementLi.appendChild(link);
        elementUl.appendChild(elementLi);
    }
}

var addNewTodo = () => {
      if (inputText.value != ""){

        listTodo.push(inputText.value );
        carregaTodo();
        inputText.value = '';
      }else{
          alert('Favor digite um novo tudo para adicionar a lista !! ');
      }
}

carregaTodo();


btnadd.onclick = () =>{
   addNewTodo();    
}


