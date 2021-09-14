import os

print("Start Translating")
print(os.environ['key'])
print(os.environ['location'])
print(os.environ['name'])


endpoint = "https://" + os.environ['name'] + ".cognitiveservices.azure.com/translator/text/batch/v1.0"
subscriptionKey =  os.environ['key']
path = '/batches'
constructed_url = endpoint + path

print(constructed_url)
