export default class CliConfig {
    constructor ({ username, room, hostUri }) {
        this.username = username
        this.room = room

        const { hostname, protocol, port } = new URL(hostUri)
        this.host = hostname
        this.port = port || '80'
        this.protocol = protocol.replace(/\W/, '')
    }

    static parseArguments (commands) {
        const cmd = new Map()

        for (const key in commands) {
            const index = parseInt(key)
            const commandPrefix = '--'
            const command = commands[key]

            if (!command.includes(commandPrefix)) continue
            cmd.set(
                command.replace(commandPrefix, ``),
                commands[index+1]
            )    
        }

        return new CliConfig(Object.fromEntries(cmd))
    }
}