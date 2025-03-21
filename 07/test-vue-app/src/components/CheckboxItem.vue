<template>
    <li>
        <input type="checkbox" :checked="checked" /> {{ name }}
    </li>
</template>

<script>
    export default {
        name: "CheckboxItem",
        props : [ "name", "checked" ],
        created() {
            console.log(this.name, this.checked);
            this.checked = true;
        }
    }
</script>

<style scoped>

</style>