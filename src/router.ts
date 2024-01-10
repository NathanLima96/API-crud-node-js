import {
	FastifyPluginOptions,
	FastifyRequest,
	FastifyReply,
	FastifyInstance,
} from "fastify"

import { CreateWebhookController } from "./controllers/CreateWebhookController"
import { ListWebhookController } from "./controllers/ListWebhookController"
import { DeleteWebhookController } from "./controllers/DeleteWebhookController"

export async function routes(
	fastify: FastifyInstance,
	options: FastifyPluginOptions
) {
	fastify.get(
		"/teste",
		async (request: FastifyRequest, reply: FastifyReply) => {
			return { ok: true }
		}
	)

	fastify.post(
		"/webhook",
		async (request: FastifyRequest, reply: FastifyReply) => {
			return new CreateWebhookController().handle(request, reply)
		}
	)

	fastify.get("/list", async (request: FastifyRequest, reply: FastifyReply) => {
		return new ListWebhookController().handle(request, reply)
	})

	fastify.delete(
		"/delete",
		async (request: FastifyRequest, reply: FastifyReply) => {
			return new DeleteWebhookController().handle(request, reply)
		}
	)
}
