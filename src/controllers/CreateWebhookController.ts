import { FastifyRequest, FastifyReply } from "fastify"
import { CreateWebhookServices } from "../services/CreateWebhookServices"

class CreateWebhookController {
	async handle(request: FastifyRequest, reply: FastifyReply) {
		const { key_seller, key_value, data_value, url } = request.body as {
			key_seller: string
			key_value: string
			data_value: string
			url: string
		}

		const CreateWebhook = new CreateWebhookServices()
		const data = await CreateWebhook.execute({
			key_seller,
			key_value,
			data_value,
			url,
		})

		reply.send(data)
	}
}

export { CreateWebhookController }
