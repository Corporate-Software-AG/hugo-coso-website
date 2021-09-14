import os
import requests

print("Start Translating")

"""
print(os.environ['key'])
print(os.environ['location'])
print(os.environ['name'])

endpoint = "https://" + os.environ['name'] + ".cognitiveservices.azure.com/translator/text/batch/v1.0"
subscriptionKey =  os.environ['key']
path = '/batches'
constructed_url = endpoint + path
"""

endpoint = "https://coso-web-translator.cognitiveservices.azure.com/translator/text/batch/v1.0"
subscriptionKey =  "e392619116934fd494c05a14e2d0d5e6"
path = '/batches'
constructed_url = endpoint + path


print(constructed_url)

payload= {
    "inputs": [
        {
            "source": {
                "sourceUrl": "https://cosoweb.blob.core.windows.net/source/homepage.yml?sv=2020-08-04&ss=b&srt=c&sp=rwdlacx&se=2021-09-14T20:34:15Z&st=2021-09-14T12:34:15Z&spr=https&sig=bgMYQ3A86wSEt248JzB5eTl6wOCO0M%2FvuEcS0cn9Iqk%3D",
                "storageSource": "AzureBlob",
                "language": "en",
                "filter":{
                    "prefix": "Demo_1/"
                }
            },
            "targets": [
                {
                    "targetUrl": "https://cosoweb.blob.core.windows.net/destination/homepage-es.yml?sv=2020-08-04&ss=b&srt=c&sp=rwdlacx&se=2021-09-14T20:34:15Z&st=2021-09-14T12:34:15Z&spr=https&sig=bgMYQ3A86wSEt248JzB5eTl6wOCO0M%2FvuEcS0cn9Iqk%3D",
                    "storageSource": "AzureBlob",
                    "category": "general",
                    "language": "es"
                }
            ]
        }
    ]
}

headers = {
  'Ocp-Apim-Subscription-Key': subscriptionKey,
  'Content-Type': 'application/json'
}

response = requests.post(constructed_url, headers=headers, json=payload)

print(f'response status code: {response.status_code}\nresponse status: {response.reason}\nresponse headers: {response.headers}')
