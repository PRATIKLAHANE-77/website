<template>
<div>
    <Header @contact-us-clicked="clickedContact"/>
    <ContactUs @reached-to-the-page="reachedAtContactUs" :scroll="scroll"/>
    
</div>

</template>

<script>
import Header from './components/TheHeader.vue'
import ContactUs from './components/NavTools/ContactUs.vue';
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
        console.log("scroll value = " + this.scroll);
        this.scroll = true;
       
        
    },
    reachedAtContactUs() {
        this.scroll = false
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
