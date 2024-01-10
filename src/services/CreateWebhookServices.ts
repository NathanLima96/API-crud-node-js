import prismaClient from "../prisma/banco"

interface CreateWebhookProps {
	key_seller: string
	key_value: string
	data_value: string
	url: string
}

class CreateWebhookServices {
	async execute({
		key_seller,
		key_value,
		data_value,
		url,
	}: CreateWebhookProps) {
		const Webhook = await prismaClient.webhook.create({
			data: { key_seller, key_value, data_value, url },
		})
		return Webhook
	}
}

export { CreateWebhookServices }
