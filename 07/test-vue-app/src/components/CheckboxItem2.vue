<template>
    <li>
        <input type="checkbox" :checked="idol.checked" /> {{ idol.name }}
    </li>
</template>

<script>
    export default {
        name: "CheckboxItem2",
        props : [ "idol" ],
        created() {
            console.log(this.idol.name, this.idol.checked);
            this.idol.checked = true;
        }
    }
</script>

<style scoped>

</style>