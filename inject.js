// inject.js
console.log("[GP Hook] Injection successful. Running in main world.");

// Save a reference to the original WebSocket constructor
const OriginalWebSocket = window.WebSocket;

// Override the native WebSocket
window.WebSocket = class extends OriginalWebSocket {
    constructor(...args) {
        console.log("[GP Hook] WebSocket instantiated with URL:", args[0]);
        super(...args);

        // You can intercept incoming messages here
        this.addEventListener('message', (event) => {
            // console.log("[GP Hook] Incoming:", event.data);
        });
    }

    // Proxy the send method to view or mutate outgoing data
    send(data) {
        console.log("[GP Hook] Outgoing data intercepted:", data);
        
        // Example: If you wanted to mutate the data before it leaves, you would do it here.
        // data = modifiedData;

        super.send(data);
    }
};