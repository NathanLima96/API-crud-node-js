import { FastifyRequest, FastifyReply } from "fastify"
import { ListWebhookServices } from "../services/ListWebhookServices"

class ListWebhookController {
	async handle(request: FastifyRequest, reply: FastifyReply) {
		const listWebhook = new ListWebhookServices()

		const data = await listWebhook.execute()

		reply.send(data)
	}
}

export { ListWebhookController }
