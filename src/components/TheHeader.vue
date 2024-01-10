<template>
<div>
    <nav>
        <ul>
            <li>
                <h2><i class="fa-brands fa-studiovinari"></i> Veenil Tech Solutions</h2>
            </li>
            <li>
                <!-- <a href="#home"  @mouseover="showDialogue('home')">Home <i class="fa-solid fa-circle-chevron-down"></i></a> -->
                <a href="#home" @mouseover="showDialogue('home')"> Home <i :class="{'fa-solid fa-circle-chevron-down': title !== 'home', 'fa-solid fa-circle-chevron-up': title === 'home'}"></i></a>

            </li>
            <li>
                <a href="#projects" @mouseover="showDialogue('projects')">Projects <i :class="{'fa-solid fa-circle-chevron-down':title !== 'projects', 'fa-solid fa-circle-chevron-up': title === 'projects'}"></i></a>
            </li>
            <li>
                <a href="#careers" @mouseover="showDialogue('careers')"> Careers <i :class="{'fa-solid fa-circle-chevron-down': title !== 'careers', 'fa-solid fa-circle-chevron-up': title === 'careers'}"></i></a>
            </li>
            <li>
                <a href="#about us" @mouseover="showDialogue('about us')">About Veenil <i :class="{'fa-solid fa-circle-chevron-down': title !== 'about us', 'fa-solid fa-circle-chevron-up': title === 'about us'}"></i></a>
            </li>
            <li>
                <!-- <a href="#contact us"  @click="scrollToContactForm" @mouseover="showDialogue('contact us')">contact us <i :class="{'fa-solid fa-circle-chevron-down': title !== 'contact us', 'fa-solid fa-circle-chevron-up': title === 'contact us'}"></i></a> -->
                <a href="#contact us" @click="scrollToContactForm" @mouseover="isdialogue = false">contact us</a>
            </li>
        </ul>
        <DialogueBox v-if="isdialogue" @click="showDialogue">
            <!-- <h1>Welcome To {{title}} Page</h1> -->
            <AboutUs v-if="title === 'about us'" :title="title"/>
            
        </DialogueBox>

    </nav>
    <div class="images" @mouseover="notShowDialogue">
        <div class="image1">

        </div>
        <div class="image2">

        </div>
        <div class="image3">

        </div>
    </div>
</div>
</template>

<script>
import DialogueBox from './DialogueBox.vue';
import AboutUs from './AboutUs.vue';
export default {
    name: 'HeaderView',
    components: {
        DialogueBox,
        AboutUs
    },
    data() {
        return {
            isdialogue: false,
            title: "",

        }
    },
    methods: {
        showDialogue(title) {
            this.title = title
            this.isdialogue = true;
        },
        notShowDialogue() {
            this.isdialogue = false;
            this.title = "";

        },
        scrollToContactForm() {
            this.$emit('contact-us-clicked', 'Contact Us Clicked');
        }

    }

}
</script>

<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css');

* {

    margin: 0px;
}

h1 {
    text-align: center;
}
.fa-brands fa-studiovinari{
    font-family: 'Times New Roman', Times, serif;
}

.images {
    display: flex;
    height: 639px;
    position: relative;
    top: 0px;
}

.image1 {
    background-image: url("../assets/pexels-cottonbro-studio-5474038.jpg");
    background-size: cover;

    width: 500px;
}

.image2 {
    background-image: url("../assets/Consulting-image-tile.png");
    background-size: cover;
    width: 512px;

}

.image3 {
    background-image: url("../assets//pexels-tiger-lily-7109291.jpg");
    background-size: cover;
    width: 524px;

}

nav {
    height: 110px;
    background-color: aliceblue;
}

ul {
    justify-content: space-evenly;
    display: flex;
    position: relative;
    top: 41px;
}

a {
    text-decoration: none;
    color: #2B0060;
    font: 18px proxima_novasemibold;
    font-weight: bold;

}

li {
    list-style-type: none;
}
</style>
