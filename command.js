// command: (slash) "/start"
let created = false
if ((created = false)) {
  const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

  await lib.discord.channels['@0.1.0'].messages.create({
    channel_id: context.params.event.channel_id,
    content: `**YOU SUCCESSFULLY BUILT YOUR FACTORY**\nAutomating commands is **NOT** allowed. Do the command "/factory" to check your factory.`
  });
} else if ((created = true)) {
  const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});
  
  await lib.discord.channels['@0.1.0'].messages.create({
    channel_id: context.params.event.channel_id,
    content: `**INVALID**\nYour factory already exists.`
  });
  created = true
}
