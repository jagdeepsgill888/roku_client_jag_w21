import LoginComponent from './components/TheLoginComponent.js';
import AllUsers from './components/TheAllUsersComponents.js';
import HomeComponent from './components/TheHomeComponent.js';

const router = new VueRouter({
    routes: [
        { path: '/', name: 'root', component: LoginComponent },
        { path: '/users', name: 'users', component: AllUsers },
        { path: '/home', name: 'home', component: HomeComponent, props: true }
    ]
});

(() =>{
    const vm = new Vue({
        data: {
            allMovies: [],
            authenticated: false,
            isAdmin: false
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
            logout() {
                //remove the cached user from localSorage, if it exists
                if(localStorage.getItem('cacheduser')){
                    localStorage.removeItem('cacheduser')
                }
             this.$router.push({ name: "root"});
         }
        },

        components: {
            // moviethumb: TheMovieThumbnail
        },

        router
    }).$mount("#app");
})();