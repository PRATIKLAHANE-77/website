<template>
<div id="contact-us-form">
    <form>
        <div id="First-Name">
            <!-- <label id="first-name">First Name</label> -->
            <b-form-input placeholder="Enter your First Name"></b-form-input>
        </div>
        <div id="Last-Name">
            <!-- <label for="last-name">Last Name</label> -->
            <!-- <input type="text" id="last-name"> -->
            <b-form-input placeholder="Enter your Last Name"></b-form-input>

        </div>
        <div id="Company">
            <!-- <label for="company">Company</label>
                <input type="text" id="company"> -->
            <b-form-input placeholder="Enter your Company Name"></b-form-input>

        </div>
        <div id="Job-Title">
            <!-- <label for="job-title">Job Title</label>
                <input type="text" id="job-title"> -->
            <b-form-input placeholder="Enter your Job Title"></b-form-input>

        </div>
        <div id="Work-Email">
            <!-- <label for="work-email">Work email</label>
                <input type="email" id="work-email"> -->
            <b-form-input placeholder="Enter your Work email" type="email"></b-form-input>

        </div>
        <div id="Phone-Number">
            <!-- <label for="phone-number">Phone number</label>
                <input type="number" id="phone-number"> -->
            <b-form-input placeholder="Enter your Phone number" type="number"></b-form-input>

        </div>
        <div id="Help">
            <!-- <label for="help">how we can help you</label>
                <input type="textarea" id="help"> -->
            <!-- <b-form-input placeholder="How can we help you?" type="textarea"></b-form-input> -->
            <b-form-textarea id="help" rows="4" placeholder="How can we help you?"></b-form-textarea>

        </div>
        <div id="Agreement">
            <!-- <input type="checkbox" id="agreement">
              <label for="agreement">I agree to the privacy policy</label> -->
            <b-form-checkbox>I agree to the privacy policy</b-form-checkbox>
        </div>
        <div id="Notification">
            <!-- <input type="checkbox" id="notification">
                   <label for="notification">Subscribe me to Veenil Tech Solution’s latest thought leadership, blogs and updates.</label> -->
            <b-form-checkbox>Subscribe me to Veenil Tech Solution’s latest thought leadership, blogs and updates.</b-form-checkbox>
        </div>
        <div id="Submit">
            <b-button pill variant="info">Submit</b-button>

        </div>
    </form>
</div>
</template>

<script>
import { BFormInput, BButton, BFormTextarea,BFormCheckbox } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Vue.use(BootstrapVue)
export default {
    name: 'ContactUs',
    components: {
        BFormInput,
        BButton,
        BFormTextarea,
        BFormCheckbox

    },
    props: {
        scroll: Boolean
    },
    watch: {
    scroll(newScrollValue) {
      if (newScrollValue) {
        const contactusform = document.getElementById("contact-us-form");
            contactusform.scrollIntoView({
                behavior: 'smooth'
            });
            this.$emit('reached-to-the-page');
      }
    },
  },

}
</script>

<style scoped>
form {
    margin-left: 448px;
    margin-right: 482px;
}

div {
    margin-top: 14px;
}

button {
    border-radius: 100px;
    position: relative;
    bottom: 5px;
    left: 224px;
}
</style>
