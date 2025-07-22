const wa = require('@open-wa/wa-automate');

wa.create().then(client => start(client));

function start(client) {
  const owner = ['254712345678']; // Replace with your number

  client.onMessage(async message => {
    if (message.body === '.vv') {
      const senderNumber = message.sender.split('@')[0];
      if (!owner.includes(senderNumber)) {
        await client.sendText(message.chatId, '🚫 This command is restricted to the owner and sudos only.');
      } else {
        await client.sendText(message.chatId, '✅ Verified Version 1.0.0');
      }
    }
  });
}
