<template>
    <div style="border: solid 1px gray; padding: 5px;">
        <label for="name">이름</label>
        <input type="text" id="name" v-model="name" />
        <button @click="$emit('nameChanged', { name })">이벤트발신</button>
    </div>
</template>

<script>
    export default {
        name: "InputName",
        // emits: [ "nameChanged1" ],
        emits: {
            nameChanged: (e) => {
                console.log("inputName vue 이벤트발신", e)
                return e.name && typeof(e.name) === 'string' && e.name.trim().length >= 3 ? true : false
            }
        },
        data() {
            return {
                name: ""
            }
        }
    }
</script>

<style scoped>

</style>