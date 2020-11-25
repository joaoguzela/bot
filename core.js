const Discord = require('discord.js');
const ytdl = require('ytdl-core');
const token = 'NzU1NDc2MTY3MzUxNTk5MTU0.X2D2Ag.lqiVUUW6Y_fzO6dGLoCiV0dAzow';
const client = new Discord.Client();
const streamOptions = {seek:0, volume: 1};
const broadcast = client.voice.createBroadcast();
client.login(token);
let estouPronto = false;

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    if (msg.author.Client){
      return;
    }
    if(msg.content.toLowerCase().startsWith("?cavalo")){
     let VoiceChannel = (msg.guild.channels.cache.find(channel => channel.id === 
      '671506123110744075'));

    if (VoiceChannel == null){
      console.log('Canal não foi encontrado!')
    }
 
    if (VoiceChannel !== null){
      console.log('O canal Foi Encontrado')
   
      VoiceChannel.join()
      .then(connection => {
      const stream = broadcast.play('https://www.youtube.com/watch?v=1xzGPPxKgJM&ab_channel=ManeiroGaimer', { volume: 0.5 });
     const DJ = connection.broadcast(stream)
      DJ.on('end', end => {
      VoiceChannel.leave();
   });
  });

    }
  
  }
  
    });

