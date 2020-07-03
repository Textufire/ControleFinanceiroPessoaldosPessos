const produtos = [];


function cadprod(){
    const  nome  =    document.getElementById("nome").value
    const  preco =    document.getElementById("preco").value;
    
    
    const produtos = {id: Date.now(),nome, preco};
    // usuarios.push(usuario);
    // DADOS EM CACHE
    window.localStorage.setItem("produtos", JSON.stringify([]));
    let prodgravado = JSON.parse( window.localStorage.getItem('produtos'));
    
    prodgravado.push(produtos);
  
    window.localStorage.setItem("produtos", JSON.stringify(prodgravado));
  
  
    Swal.fire({
      
      icon: 'success',
      title: 'Usuário cadastrado com sucesso!',
      showConfirmButton: false,
      timer: 1500
    });
    limpar();
    
    window.location.href = 'index.html';

    listarUsuarios();
  
  }

  function listarUsuarios(){
    let linha = "";
    produtos.forEach(produtos => {
      row = document.getElementById("tbody");
       linha += "<tr>"+
                "<td id='tdid'>"+produtos.id +"</td>"+
                "<td id='tdnome'>"+produtos.nome +"</td>"+
                "<td id='tdendereco'>"+produtos.preco+"</td>"+
                "<td id='tdacoes'><button class='icon-pencil verd btn btn-outline-success' onclick='editarUsuario("+usuario.id+")'><i class='fa fa-edit'></i></button>"+
                "<button class='icon-trash ver btn btn-outline-danger'onclick='apagarUsuario("+usuario.id+")'><i class='fa fa-trash'></i></button></td>"
              +"</tr>";
      row.innerHTML = linha;        
  
    
    
    });
   }