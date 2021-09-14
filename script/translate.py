import os
import requests

print("Start Translating")
print(os.environ['key'])
print(os.environ['location'])
print(os.environ['name'])


endpoint = "https://" + os.environ['name'] + ".cognitiveservices.azure.com/translator/text/batch/v1.0"
subscriptionKey =  os.environ['key']
path = '/batches'
constructed_url = endpoint + path

print(constructed_url)

{
    "inputs": [
        {
            "source": {
                "sourceUrl": "data/de"
            },
            "targets": [
                {
                    "targetUrl": "data/en",
                    "language": "en"
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
