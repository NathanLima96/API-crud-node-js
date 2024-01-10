import fastify from "fastify"
import { routes } from "./router"
import cors from "@fastify/cors"

const app = fastify({ logger: true })

const start = async () => {
	await app.register(cors)
	await app.register(routes)
	try {
		await app.listen({ port: 3000 })
	} catch (error) {
		process.exit(1)
	}
}

start()
