const client = require('./client');
client.list({}, (error, notes) => {
  if (error) { console.log(error) };
  console.log(notes);
});