<template>
    <div id="all-routes">
        <!-- <h1>Welcome To {{title}} Page</h1> -->
        <div id="group1">
            <a href="#about-us">About Us</a>
            <a href="#ambition-realized">Ambitions Realized</a>
            <a href="#ambition-realized">Analyst Reports</a>
            <a href="#ambition-realized">Awards And Recognitions</a>
        </div>
        <div id="group2">
            <a href="#ambition-realized">Events</a>
            <a href="#ambition-realized">Inclusion And Diversity</a>
            <a href="#ambition-realized">Investors</a>
            <a href="#ambition-realized">Innovation Labs</a>
        </div>
        <div id="group3">
            <a href="#ambition-realized">Leadership</a>
            <a href="#locations">Locations</a>
            <a href="#news">News</a>
            <a href="#partner-ecosystem">Partner Ecosystem</a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AboutUs',
    props: {
        title: String
    }
}
</script>

<style scoped>
#all-routes {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
}

#group1,
#group2,
#group3 {
    display: flex;
    flex-direction: column;
}

a {
    margin: 8px 0;

}
</style>
