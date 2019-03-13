const Discord = require("discord.js")

if(!process.env.DISCORD_USER_TOKEN) throw Error("Undefined discord user token")

const client = new Discord.Client()
const token = process.env.DISCORD_USER_TOKEN

const onMessage = async(message) => {
  if(message.author.bot)return

  const messageArray = message.content.replace(/　+/g, ' ').split(" ")
  if(messageArray[0] !== "タスク") return
  if(!messageArray[1]) return

  const res = await message.reply(`タスク「${messageArray[1]}」を登録したよ`)
  console.log(`Sent message: ${res}`)
  return
}

client.on("ready", () => console.log("listen"))
client.on("message", onMessage)
client.login(token)
