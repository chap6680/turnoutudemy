<template>
<div class="">
	<h3>Dashboard Component</h3>
	<button class="btn btn-danger btn-sm btn signout-btn" @click="signOut">SignOut</button>
	<hr>
	<AddEvent/>
	<hr>
	{{$store.state}}
	

</div>
</template>

<script>
import {firebaseApp} from '../firebaseApp'
import AddEvent from './AddEvent.vue'

export default {
	methods: {
		signOut(){
			this.$store.dispatch('signOUt')
			firebaseApp.auth().signOut()
		}
	},
	components: {
		AddEvent
	}
}
</script>
