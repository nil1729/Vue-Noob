import Home from './components/pages/Home.vue';
import About from './components/pages/About.vue';
import AddCustomer from './components/pages/addCustomer.vue';
import ViewCustomer from './components/pages/View.vue';
import EditCustomer from './components/pages/Edit.vue';
const routes = [
	{
		path: '/',
		component: Home,
		name: 'Home',
	},
	{
		path: '/about',
		component: About,
		name: 'About',
	},
	{
		path: '/add',
		component: AddCustomer,
		name: 'AddCustomer',
	},
	{
		path: '/view/:id',
		component: ViewCustomer,
		name: 'ViewCustomer',
	},
	{
		path: '/edit/:id',
		component: EditCustomer,
		name: 'EditCustomer',
	},
];

export default routes;
