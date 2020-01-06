new Vue ({
    el:"#app",
    data:{
        titulo: "formulario",
        marca:[],
        modelo:[],
        ano:[],
        combustível:[],
        quilometragem:[],
        fipeapi: axios.create({
            baseURL: ("http://fipeapi.appspot.com/%5D(http://fipeapi.appspot.com/")
            
        }),
    },
    methods: {
    getModelos:  function(id_marca) {
        this.fipeapi
        .get("veiculos/" + id_marca + ".json")
        .then(resposta => (this.marcas = resposta.data))
    },

    function(id_modelo) {
            this.fipeapi
            .get("veiculos/" + id_modelo + ".json")
            .then(resposta => (this.modelo = resposta.data))
    },

    function(id_ano) {
            this.fipeapi
            .get("veiculos/" + id_ano + ".json")
            .then(resposta => (this.ano = resposta.data))
    },
    
    function(id_combustível) {
             this.fipeapi
             .get("veiculos/" + id_combustível + ".json")
             .then(resposta => (this.combustível = resposta.data))
    },

    function(id_quilometragem) {
             this.fipeapi
             .get("veiculos/" + id_quilometragem + ".json")
             .then(resposta => (this.quilometragem = resposta.data))
    },
    },
computed: {
    isValid: function () {
      return this.marca !== '' && this.modelo !== '' && this.ano !== ''
       && this.combustível !== '' && this.quilometragem !== ''
    },
    
    },

mounted: function() {
    this.fipeapi
    .get("carros/marcas.json")
    .then(resposta => (this.marca = resposta.data))

},

});
