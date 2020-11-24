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
                    this.moviesList = response.data.response;
                })
            }
        },

    },


    mounted() {},
});
