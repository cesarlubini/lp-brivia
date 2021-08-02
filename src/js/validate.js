$("#form").validate({
  rules: {
    name:{
      required: true,
      minlength: 3
    },
    email:{
      required: true,
      email: true
    },
    tel:{
      required: true,
      digits: true
    }
  },
  messages: {
    name: {
      required: "Por favor, preencha esse campo",
      minlength: "Nome precisa ser maior que 3 letras"
    },
    email: {
      required: "Por favor, preencha esse campo",
      email: "Digite um email válido (exemplo@exemplo.com)"
    },
    tel: {
      required: "Por favor, preencha esse campo",
      digits: "Digite o numero do seu telefone"
    }
  }
});