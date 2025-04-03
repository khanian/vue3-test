<template>
    <div style="border: solid 1px gray; margin: 5px; padding: 5px;">
        <h2>Receiver</h2><hr>
        <p>수신된 메시지 : {{ textMessage }}</p>
    </div>
</template>

<script>
    export default {
        name: "Receiver",
        data() {
            return {
                textMessage: ""
            }
        },
        created() {
            this.emitter.on("message", this.receiveHandler);
        },
        methods: {
            receiveHandler(message) {
                console.log("Receiver에서 수신한 메시지 : ", message);
                this.textMessage = message;
            }
        },
        
    }
</script>

<style scoped>

</style>