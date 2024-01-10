import { FastifyRequest, FastifyReply } from "fastify"
import { DeleteWebhookService } from "../services/DeleteWebhookService"

class DeleteWebhookController {
	async handle(request: FastifyRequest, reply: FastifyReply) {
		const { id } = request.query as { id: string }
		const webhook = new DeleteWebhookService()

		const data = await webhook.execute({ id })

		reply.send(data)
	}
}

export { DeleteWebhookController }
