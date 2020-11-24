var app = new Vue ({
    el : '#root',
    data : {
        inputSearch : '',
        moviesList : []
    },
    methods : {

        movieSrc() {
            //controllo if per verificare che l'input non sia una stringa vuota
            if(this.inputSearch != '') {
                console.log('funziona');

            };
        },
    },
    mounted() {},
});
