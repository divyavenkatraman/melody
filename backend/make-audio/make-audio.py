API_KEY = "fcb6ff00a17965143e25d5fd36da7e85"
VOICE_ID = "q8RVB7ZX5RjFJXCjFUOl" #David Attenborough voice
URL = "https://api.elevenlabs.io/v1/text-to-speech/{}".format(VOICE_ID)

import requests
from elevenlabs import set_api_key
set_api_key(API_KEY)
from elevenlabs import voices, generate, play

def read_article(article, url=URL, API_KEY=API_KEY):
    
    headers = {
      "Accept": "audio/mpeg",
      "Content-Type": "application/json",
      "xi-api-key": API_KEY
    }

    data = {
      "text": article,
      "model_id": "eleven_monolingual_v1",
      "voice_settings": {
        "stability": 0.5,
        "similarity_boost": 0.5
      }
    }

    response = requests.post(url, json=data, headers=headers)
    play(response.content)