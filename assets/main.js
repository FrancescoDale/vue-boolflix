var app = new Vue ({
    el : '#root',
    data : {
        inputSearch : '',
        displaySearch : '',
        moviesList : [],
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
                    console.log(response.data.results);
                    this.moviesList = response.data.results;
                });
                // pulisce l'input
                this.inputSearch = '';
            };

        },
        //funzione che converte il voto da base 10 a base 5
        calcVote(vote_average) {
            return Math.round((vote_average * 5) / 10);
        }

    },


    mounted() {},
});
