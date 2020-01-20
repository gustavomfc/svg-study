module.exports = function(app){
    app.get('/status', (req, res) => res.json({clients: clients.length}));
    app.get('/updates', eventsHandler);
    app.post('/news', update);

    // Iterate clients list and use write res object method to send new nest
    function sendEventsToAll(update) {
        clients.forEach(c => c.res.write(`data: ${JSON.stringify(update)}\n\n`))
    }

    async function update(req, res, next) {
        const statusPush = req.body;
        statusUpdate = statusPush;
      
        // Send recently added nest as POST result
        res.json(statusUpdate)
      
        // Invoke iterate and send function
        return sendEventsToAll(statusUpdate);
      }
    
      // Middleware for GET /events endpoint
    function eventsHandler(req, res, next) {
        // Mandatory headers and http status to keep connection open
        const headers = {
          'Content-Type': 'text/event-stream',
          'Connection': 'keep-alive',
          'Cache-Control': 'no-cache'
        };
        res.writeHead(200, headers);
      
        // After client opens connection send all nests as string
        const data = `data: ${JSON.stringify(statusUpdate)}\n\n`;
        res.write(data);
      
        // Generate an id based on timestamp and save res
        // object of client connection on clients list
        // Later we'll iterate it and send updates to each client
        const clientId = Date.now();
        const newClient = {
          id: clientId,
          res
        };
        clients.push(newClient);
      
        // When client closes connection we update the clients list
        // avoiding the disconnected one
        req.on('close', () => {
          console.log(`${clientId} Connection closed`);
          clients = clients.filter(c => c.id !== clientId);
        });
      }
    
      let clients = [];
      let statusUpdate = [];

}