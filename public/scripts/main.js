import LoginComponent from './components/TheLoginComponent.js';
import AllUsers from './components/TheAllUsersComponents.js';

const router = new VueRouter({
    routes: [
        { path: '/', name: 'root', component: LoginComponent },
        { path: '/users', name: 'users', component: AllUsers }
    ]
});

(() =>{
    const vm = new Vue({
        data: {
            allMovies: []
        },

        created: function() {
            // fetch('/api/movies')
            //   .then(res => res.json())
            //   .then(data => {
            //     // show the data in table form
            //     console.table(data);
            //     this.allMovies = data;
            // })
            // .catch(err => console.error(err));
        },

        methods: {

        },

        components: {
            // moviethumb: TheMovieThumbnail
        },

        router
    }).$mount("#app");
})();