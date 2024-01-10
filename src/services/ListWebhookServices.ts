import prismaClient from "../prisma/banco"

class ListWebhookServices {
	async execute() {
		const webhooks = await prismaClient.webhook.findMany()
		return webhooks
	}
}

export { ListWebhookServices }
