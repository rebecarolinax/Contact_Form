var urlLocal = "http://localhost:3000/contatos";
async function preencherCep(e) {
    e.preventDefault;
    const cep = document.getElementById("cep").value;
    const apiUrl = `https://viacep.com.br/ws/${cep}/json/`;
    try {
        const promise = await fetch(apiUrl);
        const cepInfo = await promise.json();

        document.getElementById("rua").value = cepInfo.logradouro;
        document.getElementById("complemento").value = cepInfo.complemento;
        document.getElementById("bairro").value = cepInfo.bairro;
        document.getElementById("cidade").value = cepInfo.localidade;
        document.getElementById("UF").value = cepInfo.uf;
    } catch (error) {
        alert("CEP inválido");
        document.getElementById("rua").value = "";
        document.getElementById("complemento").value = "";
        document.getElementById("bairro").value = "";
        document.getElementById("cidade").value = "";
        document.getElementById("UF").value = "";
    }
}

async function cadastrar(e) {
    e.preventDefault;

    const cadastroDados = {
        nome: document.getElementById("nome").value,
        sobrenome: document.getElementById("sobrenome").value,
        email: document.getElementById("email").value,
        pais: document.getElementById("pais").value,
        ddd: document.getElementById("ddd").value,
        telefone: document.getElementById("telefone").value,
        cep: document.getElementById("cep").value,
        rua: document.getElementById("rua").value,
        numero: document.getElementById("numero").value,
        complemento: document.getElementById("complemento").value,
        bairro: document.getElementById("bairro").value,
        cidade: document.getElementById("cidade").value,
        UF: document.getElementById("UF").value,
        anotacoes: document.getElementById("anotacoes").value,
    };

    try {
        const promise = await fetch(urlLocal, {
            body: JSON.stringify(cadastroDados),
            headers: { "Content-Type": "application/json" },
            method: "post",
        });
    } catch (error) {
        alert(error);
    }
}

function limpar(e) {
    e.preventDefault;
    document.getElementById("nome").value = "";
    document.getElementById("sobrenome").value = "";
    document.getElementById("email").value = "";
    document.getElementById("pais").value = "";
    document.getElementById("ddd").value = "";
    document.getElementById("telefone").value = "";
    document.getElementById("cep").value = "";
    document.getElementById("rua").value = "";
    document.getElementById("numero").value = "";
    document.getElementById("complemento").value = "";
    document.getElementById("bairro").value = "";
    document.getElementById("cidade").value = "";
    document.getElementById("UF").value = "";
    document.getElementById("anotacoes").value = "";
}