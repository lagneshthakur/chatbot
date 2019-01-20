from chatterbot import ChatBot
from chatterbot.trainers import ListTrainer

def get_response(inputStr):
	chatbot = ChatBot('John', 
		storage_adapter='chatterbot.storage.SQLStorageAdapter',
		logic_adapters = [
			{
				'import_path': 'chatterbot.logic.BestMatch'
			},
			{
				'import_path': 'chatterbot.logic.LowConfidenceAdapter',
				'threshold': 0.7,
				'default_response': 'I am sorry, I did not catch that.'
			}
		],
		trainer = 'chatterbot.trainers.ListTrainer')
	chatbot.set_trainer(ListTrainer)
	while True:
		if inputStr.strip() != 'Bye':
			reply = chatbot.get_response(inputStr)
			reply = str(reply)
			return(reply)
		if inputStr.strip() == 'Bye':
			return('Bye')
			break