<template>
  <div id="app">
   <Navbar></Navbar>
   <main>
     <split-pane :min-percent='25' :default-percent='25' split="vertical">
        <template slot="paneL">

        <split-pane :min-percent='40' :default-percent='40' split="horizontal">
          <template slot="paneL">
           <div class="w-100 h-100"></div>
          </template>
          <template slot="paneR">
            <Userlist :clients="clients"></Userlist>
          </template>
        </split-pane>

        </template>
        <template slot="paneR">
          <Messagelist :messages="messages"></Messagelist>
        </template>
      </split-pane>
    </main>
    <footer class="bg-light border-top">
      <Message></Message>
    </footer>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Userlist from './components/Userlist.vue'
import Messagelist from './components/Messagelist.vue'
import Message from './components/Message.vue'
export default {
  data () {
    return {
      uid: null,
      clients: [],
      messages: [{
        id: '',
        user: 'notchris',
        dt: '12:30 PM',
        msg: `This is an example message, not much to see here yet since I'm talking to myself to fill white-space.`
      },{
        id: '',
        user: 'notchris',
        dt: '12:30 PM',
        msg: `This is an example message, not much to see here yet since I'm talking to myself to fill white-space.`
      },{
        id: '',
        user: 'notchris',
        dt: '12:30 PM',
        msg: `This is an example message, not much to see here yet since I'm talking to myself to fill white-space.`
      }]
    }
  },
  sockets: {
      connect: function (c) {
        console.log('socket connected')
      },
      assign: function (data) {
        if (!this.uid) this.uid = data.id;
      },
      update: function (data) {
        this.clients = data.clients;
      }
  },
  methods: {

  },
  components: {
    Navbar,
    Userlist,
    Messagelist,
    Message
  }
}
</script>
<style>
 .splitter-paneR.horizontal  {
    overflow:scroll;
 } 
</style>