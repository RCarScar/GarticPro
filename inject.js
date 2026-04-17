// inject.js
console.log("[GP Hook] Advanced Injection loaded. Monitoring network traffic...");

const OriginalWebSocket = window.WebSocket;

window.WebSocket = class extends OriginalWebSocket {
    constructor(...args) {
        super(...args);
        console.log(`[GP Hook] WS Connected: ${args[0]}`);

        // Intercept incoming server messages
        this.addEventListener('message', (event) => {
            this.analyzePacket(event.data, "INCOMING");
        });
    }

    // Intercept outgoing client messages
    send(data) {
        this.analyzePacket(data, "OUTGOING");
        
        // TODO: Mutate data here once we know what we are looking for
        // if (data.includes("my_target_string")) { data = mutate(data); }

        super.send(data);
    }

    // Helper function to decode and format the traffic
    analyzePacket(data, direction) {
        if (typeof data === 'string') {
            // Check if it looks like a Socket.io event (e.g., starts with a number)
            const match = data.match(/^(\d+)(.*)/);
            if (match && match[2]) {
                try {
                    // Try to parse the JSON payload
                    const parsed = JSON.parse(match[2]);
                    console.log(`[GP Hook] ${direction} Event:`, parsed);
                } catch (e) {
                    // Not JSON, just log the string
                    console.log(`[GP Hook] ${direction} String:`, data);
                }
            } else {
                console.log(`[GP Hook] ${direction} Raw String:`, data);
            }
        } else if (data instanceof ArrayBuffer || data instanceof Blob) {
            // Binary data is usually drawing vectors or image data
            console.log(`[GP Hook] ${direction} Binary Data. Size:`, data.byteLength || data.size, "bytes");
        } else {
            console.log(`[GP Hook] ${direction} Unknown Type:`, data);
        }
    }
};