<template>
<div class="">
	<h3>Dashboard Componentx</h3>
	<button class="btn btn-danger btn-sm btn signout-btn" @click="signOut">SignOut</button>
	{{$store.state}}
</div>
</template>

<script>
import {firebaseApp} from '../firebaseApp'

export default {
	methods: {
		signOut(){
			this.$store.dispatch('signOUt')
			firebaseApp.auth().signOut()
		}
	}
}
</script>
