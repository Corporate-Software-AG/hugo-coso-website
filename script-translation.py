import requests, uuid, json, sys, os.path, time

from requests.models import encode_multipart_formdata

# Add your subscription key and endpoint
subscription_key = "705ae0a605754163a0eeb926164e163c"
endpoint = "https://api.cognitive.microsofttranslator.com/"

# Add your location, also known as region. The default is global.
# This is required if using a Cognitive Services resource.
location = "northeurope"

path = '/translate'
constructed_url = endpoint + path

params = {
    'api-version': '3.0',
    'from': 'de',
    'to': ['en', 'fr']
}
constructed_url = endpoint + path

headers = {
    'Ocp-Apim-Subscription-Key': subscription_key,
    'Ocp-Apim-Subscription-Region': location,
    'Content-type': 'application/json',
    'X-ClientTraceId': str(uuid.uuid4())
}

argumentslist = sys.argv

#argumentslist.append('home.md')

for presentfilename in argumentslist[1:]:
    splitfielname = presentfilename.split("/")

    if splitfielname[0] == 'deutsch':

        with open('%s'  %presentfilename, 'r') as file:
            data = file.read()

        # You can pass more than one object in body.
        body = [{
            'text': data
        }]

        request = requests.post(constructed_url, params=params, headers=headers, json=body)
        response = request.json()

        #print(json.dumps(response, sort_keys=True, ensure_ascii=False, indent=4, separators=(',', ': ')))

        translation = json.dumps(response, ensure_ascii=False,separators=(',', ': '))

        parsing = json.loads(translation)


        with open('english/'+'%s' %splitfielname[1], 'w') as outfile:
            json.dump(parsing[0]["translations"][0]["text"], outfile)

        with open('francaise/'+'%s' %splitfielname[1], 'w') as outfile:
            json.dump(parsing[0]["translations"][1]["text"], outfile)