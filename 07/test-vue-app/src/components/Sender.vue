<template>
    <div style="border: solid 1px gray; margin: 5px; padding: 5px;">
        <h2>Sender</h2><hr>
        <button @click="sendMessage">메시지 발신</button>
        <p>발신된 메시지 : {{ message }}</p>
    </div>
</template>

<script>
    export default {
        name: "Sender",
        methods: {
            sendMessage() {
                this.emitter.emit("message", Date.now() + "에 발신된 메시지 ");
            }
        }
    }
</script>

<style scoped>

</style>