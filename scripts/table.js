const salario=JSON.parse(localStorage.getItem("renda")) || "00,00";
document.getElementById("valorRenda").value = "R$ "+salario;

const gastos=JSON.parse(localStorage.getItem("gastos")) || "00,00";
document.getElementById("valorGastos").innerText = "R$ "+gastos;

const saldo=JSON.parse(localStorage.getItem("saldo")) || "00,00";
document.getElementById("valorSaldo").innerText = "R$ "+saldo;

function salvarRenda(){
    const inputRenda = document.getElementById("valorRenda");
    localStorage.setItem("renda",JSON.stringify(inputRenda.value));
    //Page reload
    window.location.reload(true);
};

function calcularGastos(){
    const lancamentos=JSON.parse(localStorage.getItem("lancamentos")) || [];
    
    let x = 0;
    let somaGastos = 0;
    let somaReceita = 0;
    while(x < lancamentos.length){
        if(lancamentos[x].despesa == true){
            somaGastos += Number(lancamentos[x].valor)
        }
        else
        {
            somaReceita += Number(lancamentos[x].valor)
        }
        x++;
    }
    localStorage.setItem("gastos",JSON.stringify(somaGastos));
    localStorage.setItem("receita",JSON.stringify(somaReceita));
    document.getElementById("valorGastos").innerText = "R$ "+somaGastos;
};

function calcularSaldo(){
    const db_salario=JSON.parse(localStorage.getItem("renda"));
    const db_gastos=JSON.parse(localStorage.getItem("gastos"));
    const db_receita=JSON.parse(localStorage.getItem("receita"));
    let resultado = Number(db_salario) - Number(db_gastos) + Number(db_receita);
    localStorage.setItem("saldo",JSON.stringify(resultado));
    document.getElementById("valorSaldo").innerText = "R$ "+resultado;
};

const lancamentos=JSON.parse(localStorage.getItem("lancamentos")) || [];

const addLancamento = (data,nome,categoria,valor,descricao,despesa) =>{
    localStorage.setItem("backupLancamentos",JSON.stringify(lancamentos));
    lancamentos.push({
        data,
        nome,
        categoria,
        valor,
        descricao,
        despesa,
    });
    localStorage.setItem("lancamentos",JSON.stringify(lancamentos));

    return {data,nome,categoria,valor,descricao,despesa};
};

const createRowTable = ({data,nome,categoria,valor,descricao,despesa}) => {

    const table = document.getElementById("tabela");
    // Insert a row at the end of the table
    let newRow = table.insertRow(-1);

    // Insert a cell in the row at index 0
    let DataCell = newRow.insertCell(0);
    let NomeCell = newRow.insertCell(1);
    let CategoriaCell = newRow.insertCell(2);
    let ValorCell = newRow.insertCell(3);
    let DescricaoCell = newRow.insertCell(4);
    let DespesaCell = newRow.insertCell(5);

    // Append a text node to the cell
    DataCell.appendChild(document.createTextNode(data));
    NomeCell.appendChild(document.createTextNode(nome));
    CategoriaCell.appendChild(document.createTextNode(categoria));
    ValorCell.appendChild(document.createTextNode(valor));
    DescricaoCell.appendChild(document.createTextNode(descricao));
    DespesaCell.appendChild(document.createTextNode(despesa));
    
};

function loadTable(){
    let x = 0;
    while(x < lancamentos.length){
        createRowTable(lancamentos[x]);
        x++;
    }
};
loadTable();

function filtrar()
{
    localStorage.setItem("backupLancamentos",JSON.stringify(lancamentos));
    const inputColuna = document.getElementById("coluna");
    const radioCrescente = document.getElementById("crescente");
    
    if(radioCrescente.checked){
        if(inputColuna.value == "Data"){

            lancamentos.sort(function(a,b){
                if(a.data < b.data){
                    return -1
                }else{
                    return true;
                }
            });
        }
        else if(inputColuna.value == "Lancamentos"){
            lancamentos.sort(function(a,b){
                if(a.nome < b.nome){
                    return -1
                }else{
                    return true;
                }
            });
        }
        else if(inputColuna.value == "Valor"){
            lancamentos.sort(function(a,b){
                let numA = Number(a.valor);
                let numB = Number(b.valor);
                if(numA < numB){
                    return -1
                }else{
                    return true;
                }
            });
        }
        else if(inputColuna.value == "Categoria"){
            lancamentos.sort(function(a,b){
                if(a.categoria < b.categoria){
                    return -1
                }else{
                    return true;
                }
            });
        }
        else{
            lancamentos.sort(function(a,b){
                if(a.despesa < b.despesa){
                    return -1
                }else{
                    return true;
                }
            });
        }

    }
    else
    {
        if(inputColuna.value == "Data"){

            lancamentos.sort(function(a,b){
                if(a.data > b.data){
                    return -1
                }else{
                    return true;
                }
            });
        }
        else if(inputColuna.value == "Lancamentos"){
            lancamentos.sort(function(a,b){
                if(a.nome > b.nome){
                    return -1
                }else{
                    return true;
                }
            });
        }
        else if(inputColuna.value == "Valor"){
            lancamentos.sort(function(a,b){
                let numA = Number(a.valor);
                let numB = Number(b.valor);
                if(numA > numB){
                    return -1
                }else{
                    return true;
                }
            });
        }
        else if(inputColuna.value == "Categoria"){
            lancamentos.sort(function(a,b){
                if(a.categoria > b.categoria){
                    return -1
                }else{
                    return true;
                }
            });
        }
        else{
            lancamentos.sort(function(a,b){
                if(a.despesa > b.despesa){
                    return -1
                }else{
                    return true;
                }
            });
        }
    }
    localStorage.setItem("lancamentos",JSON.stringify(lancamentos));
    //Page reload
    location.reload();
};

function salvarLancamento(){

    const inputData = document.getElementById("Date");
    const inputLancamento = document.getElementById("Lancamentos");
    const inputValor = document.getElementById("valor");
    const inputDescricao = document.getElementById("Descricao");
    const inputDespesa = document.getElementById("Despesa");
    let inputCategoria = 0;
    if(inputDespesa.checked){
        inputCategoria = document.getElementById("categoriaDespesa");
    }else{
        inputCategoria = document.getElementById("categoriaReceita");
    }
    
   
    const newLancamento = addLancamento(
        inputData.value,
        inputLancamento.value,
        inputCategoria.value,
        inputValor.value,
        inputDescricao.value,
        inputDespesa.checked,
    );
    
    inputData.value = "";
    inputLancamento.value = "";
    inputValor.value = "";
    inputDescricao.value = "";
    //Page reload
    location.reload();
};

function removerLancamento(){
    const inputLancamento = document.getElementById("Lancamentos");
    let x = 0;
    while(x < lancamentos.length){
        if(lancamentos[x].nome === inputLancamento.value){
            lancamentos.splice(x,1);
        }
        x++;
    }
    localStorage.setItem("lancamentos",JSON.stringify(lancamentos));
    //Page reload
    location.reload();
};

const tbl = document.getElementById("tabela");
for(var i = 1; i < tbl.rows.length; i++)
{
    tbl.rows[i].onclick = function()
    {
        //rIndex = this.rowIndex;
        document.getElementById("Date").value = this.cells[0].innerHTML;
        document.getElementById("Lancamentos").value = this.cells[1].innerHTML;
       
        document.getElementById("valor").value = this.cells[3].innerHTML;
        document.getElementById("Descricao").value = this.cells[4].innerHTML;

        if(this.cells[5].innerHTML === "true")
        {
            document.getElementById("Despesa").checked = true;
            document.getElementById("categoriaDespesa").value = this.cells[2].innerHTML;
        }
        else{
            document.getElementById("Receita").checked = true;
            document.getElementById("categoriaReceita").value = this.cells[2].innerHTML;
        }
    };
};

function removeAll()
{
    localStorage.removeItem("lancamentos",JSON.stringify(lancamentos));
    //Page reload
    location.reload();
};

function cancelLastAction()
{
    const backupLancamentos = JSON.parse(localStorage.getItem("backupLancamentos"))
    localStorage.setItem("lancamentos",JSON.stringify(backupLancamentos));
    //Page reload
    location.reload()
};
calcularGastos();
calcularSaldo();

function mostraSelecao(){
    if (document.getElementById('Despesa').checked) {
        document.getElementById('categoriaDespesa').style.display = 'block';
        document.getElementById('categoriaReceita').style.display = 'none';
    }
    else{
        document.getElementById('categoriaDespesa').style.display = 'none';
        document.getElementById('categoriaReceita').style.display = 'block';
    }
}