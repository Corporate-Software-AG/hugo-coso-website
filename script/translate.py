import os
import requests
from pprint import pprint

print("Start Translating")
subscriptionKey =  "f902ada3ba8e41ec8fa3d7445ee01d94"
serviceName = "cosowebtranslator"

sourceUrl = "https://cosoweb.blob.core.windows.net/source?sv=2020-08-04&st=2021-09-15T09%3A16%3A37Z&se=2021-09-16T09%3A16%3A37Z&sr=c&sp=rl&sig=Nz%2FhCrwRr8V52MUy0N8t%2FVuFitIXsen2XOoy7glxGzw%3D"
targetUrl = "https://cosoweb.blob.core.windows.net/destination?sv=2020-08-04&st=2021-09-15T09%3A19%3A06Z&se=2021-09-16T09%3A19%3A06Z&sr=c&sp=racwl&sig=D8bsy%2FWcK%2B0JaqW3%2FxUMZnl1brT1AF2DfJE2K08oO54%3D"

endpoint = "https://" + serviceName + ".cognitiveservices.azure.com/translator/text/batch/v1.0"
path = '/batches'
constructed_url = endpoint + path

payload= {
    "inputs": [
        {
            "source": {
                "sourceUrl": sourceUrl,
                "storageSource": "AzureBlob",
                "language": "de"
            },
            "targets": [
                {
                    "targetUrl": targetUrl,
                    "storageSource": "AzureBlob",
                    "category": "general",
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

print(f'response status code: {response.status_code}\nresponse status: {response.reason}\n')
pprint(response.headers)