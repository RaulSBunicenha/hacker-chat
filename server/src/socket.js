import http from 'http'

export default class SocketServer {
    constructor ({ port }) {
        this.port = port
    }

    async initialize (eventEmitter) {
        const server = http.createServer((req, res) => {
            res.writeHead(200, { 'Content-Type': 'text/json' })
            res.end(JSON.stringify({ message: 'Hello World!' }))
        })

        return new Promise((resolve, reject) => {
            server.on('error', reject)
            server.listen(this.port, () => resolve(server))
        })
    }
}