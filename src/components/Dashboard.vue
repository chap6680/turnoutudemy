<template>
<div class="">
	<h3>Dashboard Component</h3>
	<button class="btn btn-danger btn-sm btn signout-btn" @click="signOut">SignOut</button>
	<hr>
	<AddEvent/>
	<hr>
	<!-- {{$store.state.events}} -->
	<div class="col-md-12">
		<EventItem v-for="(event_item, index) in this.$store.state.events"
		:event="event_item"
		key="index"
		/>
	</div>
	

</div>
</template>

<script>
import {firebaseApp, eventsRef} from '../firebaseApp'
import AddEvent from './AddEvent.vue'
import EventItem from './EventItem.vue'

export default {
	methods: {
		signOut(){
			this.$store.dispatch('signOUt')
			firebaseApp.auth().signOut()
		}
	},
	components: {
		AddEvent,
		EventItem
	},
	mounted(){
		eventsRef.on('value',snap=>{
			let events = []
			snap.forEach(event=>{
				events.push(event.val())
			})
			this.$store.dispatch('setEvents', events)
		})
	}
}
</script>
