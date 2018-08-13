
// ----------------   GET DATA -----------------

fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(function(json){
	  console.log(json)
	  data = json;
  })




// ---------------- VIEW.JS -------------------
Vue.use(Buefy.default);

    const example = {
        data() {
            return {
data: [],
total: 0,
loading: false,
sortField: 'user_id',
sortOrder: 'desc',
defaultSortOrder: 'desc',
page: 1,
perPage: 10
            }
        },
        methods: {
            /*
             * Load async data
             */
            loadAsyncData() {
/*const params = [
    'api_key=bb6f51bef07465653c3e553d6ab161a8',
    'language=en-US',
    'include_adult=false',
    'include_video=false',
    `sort_by=${this.sortField}.${this.sortOrder}`,
    `page=${this.page}`
].join('&')*/

this.loading = true
axios.get(`https://jsonplaceholder.typicode.com/posts`)
    .then(({ data }) => {
		
		for(var i=0; i<data.length; i++){
			
			//console.log(data[i]);
			this.data.push(data[i]);
			
			this.total = 100;
		}
		
        /*this.data = []
        let currentTotal = data.total_results
        if (data.total_results / this.perPage > 1000) {
            currentTotal = this.perPage * 1000
        }
        this.total = currentTotal
        data.results.forEach((item) => {
            console.log("item: "+item.title);
            this.data.push(item)
        })*/
        this.loading = false
    })
    .catch((error) => {
        this.data = []
        this.total = 0
        this.loading = false
		console.log(error)
        throw error
    })
            },
            /*
             * Handle page-change event
             */
            onPageChange(page) {
this.page = page
this.loadAsyncData()
            },
            /*
             * Handle sort event
             */
            onSort(field, order) {
this.sortField = field
this.sortOrder = order
this.loadAsyncData()
            },
            /*
             * Type style in relation to the value
             */
            type(value) {
const number = parseFloat(value)
if (number < 6) {
    return 'is-danger'
} else if (number >= 6 && number < 8) {
    return 'is-warning'
} else if (number >= 8) {
    return 'is-success'
}
            }
        },
        filters: {
            /**
             * Filter to truncate string, accepts a length parameter
             */
            truncate(value, length) {
return value.length > length
    ? value.substr(0, length) + '...'
    : value
            }
        },
        mounted() {
            this.loadAsyncData()
        }
    }


const app = new Vue(example)

app.$mount('#app')
            

