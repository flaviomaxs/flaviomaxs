import requests
from bs4 import BeautifulSoup
from telegram.ext import Updater, CommandHandler
import telegram

# Número máximo de ofertas a serem enviadas por vez
MAX_DEALS = 3

# URL da página de ofertas da Amazon
AMAZON_URL = "https://www.amazon.com.br/gp/goldbox/"

# Função para o comando /start
def start(update, context):
    update.message.reply_text('Olá! Eu sou o bot Ofertas Pelicano. Envio as melhores ofertas da Amazon para você!')

# Função para o comando /ajuda
def help(update, context):
    update.message.reply_text('**Comandos:**\n\
    /start - Inicia o bot\n\
    /ajuda - Mostra esta mensagem\n\
    /promo - Envia as últimas ofertas da Amazon')

# Função para coletar promoções da Amazon e enviar para um canal ou grupo
def get_amazon_deals(update, context):
    try:
        response = requests.get(AMAZON_URL)
        response.raise_for_status()  # Verifica se houve erro na requisição HTTP

        soup = BeautifulSoup(response.content, 'html.parser')
        deals = soup.find_all('a', class_='a-link-normal dealTitle')

        # Limita o número de ofertas a serem enviadas
        deals_to_send = deals[:MAX_DEALS]

        for deal in deals_to_send:
            deal_title = deal.text.strip()
            deal_href = deal.get('href')

            if deal_href:
                deal_link = f"https://www.amazon.com.br{deal_href}"
                affiliate_link = generate_affiliate_link(deal_link)
                send_deal_message(update, context, deal_title, affiliate_link)
            else:
                update.message.reply_text("Não foi possível obter o link da promoção.")
    except requests.RequestException as e:
        update.message.reply_text(f"Erro ao buscar ofertas: {e}")
    except Exception as e:
        update.message.reply_text(f"Erro inesperado: {e}")

# Função para enviar mensagem com a oferta
def send_deal_message(update, context, deal_title, affiliate_link):
    message = f"**Oferta imperdível!**\n\
{deal_title}\n\
{affiliate_link}"
    context.bot.send_message(chat_id='@OfertasPelicano | Geral', text=message)

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
