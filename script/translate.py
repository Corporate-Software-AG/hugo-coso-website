import os, uuid, json, time
import requests
import http.client
from azure.storage.blob import BlobServiceClient, BlobClient, ContainerClient


storage_key = os.environ['storage_key']
service_key = os.environ['service_key']
service_name = os.environ['service_name']
german_url = os.environ['cs_german']
english_url = os.environ['cs_english']
french_url = os.environ['cs_french']

def get_status(id, subscription_key, service_name):
    host = service_name + '.cognitiveservices.azure.com'
    parameters = '//translator/text/batch/v1.0/batches/' + id
    conn = http.client.HTTPSConnection(host)
    payload = ''
    headers = {
    'Ocp-Apim-Subscription-Key': subscription_key
    }
    conn.request("GET", parameters , payload, headers)
    res = conn.getresponse()
    data = res.read().decode("utf-8")
    return json.loads(data)["status"]

def translate(subscription_key, service_name, source_url, target_url):
    endpoint = "https://" + service_name + ".cognitiveservices.azure.com/translator/text/batch/v1.0"
    path = '/batches'
    constructed_url = endpoint + path
    
    payload= {
        "inputs": [
            {
                "source": {
                    "sourceUrl": source_url,
                    "storageSource": "AzureBlob",
                    "language": "de"
                },
                "targets": [
                    {
                        "targetUrl": target_url,
                        "storageSource": "AzureBlob",
                        "category": "general",
                        "language": "fr"
                    }
                ]
            }
        ]
    }
    headers = {
        'Ocp-Apim-Subscription-Key': subscription_key,
        'Content-Type': 'application/json'
    }

    response = requests.post(constructed_url, headers=headers, json=payload)
    return response, response.headers['Operation-Location'].split("/")[-1]


print("Start Scrip")

storage_connection_string = "DefaultEndpointsProtocol=https;AccountName=cosoweb;AccountKey=" + storage_key + ";EndpointSuffix=core.windows.net"
blob_service_client = BlobServiceClient.from_connection_string(storage_connection_string)


"""

print("Start Translation")
response, id = translate(subscription_key, service_name, source_url, target_url)

status = get_status(id, subscription_key, service_name)
print("Status: " + status)
while status != "Succeeded" and status != "Failed":
    time.sleep(2)
    status = get_status(id, subscription_key, service_name)
    print("Status: " + status)


"""

print("Finish Script")
