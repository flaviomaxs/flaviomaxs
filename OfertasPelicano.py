import requests
from bs4 import BeautifulSoup
from telegram.ext import Updater, CommandHandler

# Função para o comando /start
def start(update, context):
    update.message.reply_text('Olá! Eu sou um bot do Telegram.')

# Função para o comando /ajuda
def help(update, context):
    update.message.reply_text('Você solicitou ajuda?')

# Função para coletar promoções da Amazon e enviar para um canal ou grupo
def get_amazon_deals(update, context):
    amazon_url = "https://www.amazon.com.br/gp/goldbox/"

    response = requests.get(amazon_url)
    if response.status_code == 200:
        soup = BeautifulSoup(response.content, 'html.parser')
        deals = soup.find_all('a', class_='a-link-normal dealTitle')

        for deal in deals[:5]:  # Pegue apenas os 5 primeiros negócios
            deal_title = deal.text.strip()
            deal_href = deal.get('href')
            if deal_href:
                deal_link = f"https://www.amazon.com.br{deal_href}"
                affiliate_link = generate_affiliate_link(deal_link)  # Gere o link de afiliado
                message = f"{deal_title}\n{affiliate_link}"

                # Envie a mensagem para o canal ou grupo
                context.bot.send_message(chat_id='@OfertasPelicano | Geral', text=message)
            else:
                update.message.reply_text("Não foi possível obter o link da promoção.")

    else:
        update.message.reply_text("Desculpe, não foi possível acessar as promoções da Amazon no momento.")

# Função para gerar um link de afiliado
def generate_affiliate_link(original_link):
    affiliate_id = "ofertaspelica-20"
    affiliate_link = original_link + "?tag=" + affiliate_id
    return affiliate_link

def main():
    # Crie um objeto Updater e passe o token do seu bot
    updater = Updater("6305931838:AAEX-_ALY3ovedBl-4XHz1UNE9b7wk7tGXY", use_context=True)

    # Obtenha o despachante para registrar manipuladores
    dp = updater.dispatcher

    # Adicione manipuladores para comandos /start e /help
    dp.add_handler(CommandHandler("start", start))
    dp.add_handler(CommandHandler("help", help))

    # Adicione um manipulador para o comando /promo
    dp.add_handler(CommandHandler("promo", get_amazon_deals))

    # Inicie o bot
    updater.start_polling()

    # Execute o bot até que o usuário pressione Ctrl-C para sair
    updater.idle()

if __name__ == '__main__':
    main()
