from chatterbot import ChatBot
from chatterbot.trainers import ListTrainer
import os

def initialize():
	chatbot = ChatBot("John",storage_adapter='chatterbot.storage.SQLStorageAdapter',trainer='chatterbot.trainers.ListTrainer')
	conversation = ["Hello", "Hi there!", "Good Morning", "Good Morning to you too", "How are you doing?", "I'm doing great","This is good to hear", "Thank you", "You're welcome."]
	chatbot.set_trainer(ListTrainer)
	# To train using files, use this code
	for files in os.listdir('/mnt/e/ChatBot/chatterbot-corpus/data/english/'):
		data = open('/mnt/e/ChatBot/chatterbot-corpus/data/english/' + files, 'r').readlines()
		chatbot.train(data)
	# To use pre-trained DB, comment the above code
	chatbot.train(conversation)
	print("Training completed")

initialize()
#while True:
#	message = raw_input('You:')
#	if message.strip() != 'Bye':
#		reply = chatbot.get_response(message)
#		print('Chatbot: ',reply)
#	if message.strip() == 'Bye':
#		print('Chatbot: Bye')
#		break
