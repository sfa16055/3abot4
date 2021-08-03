// command (slash): "/delete"
if ((created = true)) {
    const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});
  
    await lib.discord.channels['@0.1.0'].messages.create({
      channel_id: context.params.event.channel_id,
      content: `Factory demolished and all your stats have been reset.`
    });
    created = false
  } else if ((created = false)){
    const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});
    
    await lib.discord.channels['@0.1.0'].messages.create({
      channel_id: context.params.event.channel_id,
      content: `You don't even have a factory!'`
    });
  }
