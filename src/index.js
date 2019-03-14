const Discord = require("discord.js")
const axios = require("axios")
require("dotenv").config()

const CARD_POST_URL = "https://trello.com/1/cards"

if(!process.env.DISCORD_USER_TOKEN) throw Error("Undefined discord user token")

const client = new Discord.Client()
const token = process.env.DISCORD_USER_TOKEN

const onMessage = async(message) => {
  if(message.author.bot)return

  const messageArray = message.content.replace(/　+/g, ' ').split(" ")
  if(messageArray[0] !== "タスク") return
  if(!messageArray[1]) return

  const param = {
    key: process.env.TRELLO_API_KEY,
    token: process.env.TRELLO_API_TOKEN,
    idList: process.env.TRELLO_LIST_ID,
    pos: "top",
    name: messageArray[1]
  }
  await axios.post(CARD_POST_URL, param);

  const res = await message.reply(`タスク「${messageArray[1]}」を登録したよ`)
  console.log(`Sent message: ${res}`)
  return
}

client.on("ready", () => console.log("listen"))
client.on("message", onMessage)
client.on('error', console.error)
client.login(token)
