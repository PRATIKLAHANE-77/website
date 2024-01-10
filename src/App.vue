<template>
<div>
    <Header @contact-us-clicked="clickedContact"/>
    <ContactUs v-if="scroll == true" :scroll="scroll"/>
    
</div>

</template>

<script>
import Header from './components/TheHeader.vue'
import ContactUs from './components/ContactUs.vue';
export default {
    name: 'App',
    components: {
    Header,
    ContactUs
},
data() {
    return{ 
        ContactUs:false,
        scroll:false,
    }
},
methods:{
    clickedContact() {
        this.scroll = true;
       
        
    }



}
}
</script>


<style scoped>
div{
    position: relative;
    top: -10px;

}
</style>
