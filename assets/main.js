var app = new Vue ({
    el : '#root',
    data : {
        inputSearch : '',
        moviesList : []
    },
    methods : {
        movieSrc() {
            if (this.inputSearch != '') {
                axios
                .get('https://api.themoviedb.org/3/search/movie', { params : {
                    api_key : 'b2051a7083718dd2e6253bdfd616ec4e',
                    query : this.inputSearch,
                } })
                .then((response) => {
                    console.log(response.data.results);
                    this.moviesList = response.data.results;
                    // pulisce l'input
                    this.inputSearch = '';
                });
            };
        },

    },


    mounted() {},
});
