import prismaClient from "../prisma/banco"

interface DeleteWebhookProps {
	id: string
}
class DeleteWebhookService {
	async execute({ id }: DeleteWebhookProps) {
		try {
			const findWebhook = await prismaClient.webhook.findFirst({
				where: {
					id,
				},
			})

			if (findWebhook) {
				await prismaClient.webhook.delete({
					where: {
						id: findWebhook.id,
					},
				})

				return "deletado com sucesso"
			} else {
				console.error("Webhook não encontrado.")
			}
		} catch (error) {
			console.error("Erro ao excluir o webhook:", error)
		}
	}
}

export { DeleteWebhookService }
