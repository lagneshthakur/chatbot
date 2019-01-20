from SimpleWebSocketServer import SimpleWebSocketServer, WebSocket
from chatbot_api import get_response

class ChatBotServer(WebSocket):

    def handleMessage(self):
        # echo message back to client
        message = self.data
        print('request ', message)
        response = get_response(message)
        response = unicode(response, "utf-8")
        print('response ', response)
        self.sendMessage(response)

    def handleConnected(self):
        print(self.address, 'connected')

    def handleClose(self):
        print(self.address, 'closed')

server = SimpleWebSocketServer('', 9000, ChatBotServer)
print('Server started')
server.serveforever()