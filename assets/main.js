var app = new Vue ({
    el : '#root',
    data : {
        inputSearch : '',
        displaySearch : '',
        searchList : [],
        moviesList : [],
        seriesList : [],
        flags : ['it','en','de','fr'],      
        baseUrl : 'https://image.tmdb.org/t/p/'
    },
    methods : {
        movieSrc() {
            if (this.inputSearch != '') {
                this.displaySearch = this.inputSearch;
                axios
                .get('https://api.themoviedb.org/3/search/movie', { params : {
                    api_key : 'b2051a7083718dd2e6253bdfd616ec4e',
                    query : this.inputSearch,
                    language :'it',
                } })
                .then((response) => {
                    this.moviesList = response.data.results;
                });
                // // pulisce l'input
                // this.inputSearch = '';
                // chiamata per le serie tv
                axios
                .get('https://api.themoviedb.org/3/search/tv', { params : {
                    api_key : 'b2051a7083718dd2e6253bdfd616ec4e',
                    query : this.inputSearch,
                    language :'it',
                } })
                .then( (response) => {
                    // riempio l'array
                    this.seriesList = response.data.results;
                    // riempio l'array dei risultati
                    this.searchList = this.moviesList.concat(this.seriesList);
                    console.log(this.searchList);
                    // pulisce l'input
                    this.inputSearch = '';
                })
            };

        },
        //funzione che converte il voto da base 10 a base 5
        calcVote(vote_average) {
            return Math.round((vote_average * 5) / 10);
        }

    },
    mounted() {},
});
