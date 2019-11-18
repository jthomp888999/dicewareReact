from flask import Flask, request
import json
from secrets import SystemRandom

from wordlists import wordlist1

app = Flask(__name__)


def dice_roll():
    key = [SystemRandom().randrange(1, 7) for p in range(0, 5)]
    keyInt = ''.join(map(str, key))
    return int(keyInt)


@app.route('/passphrase', methods=['POST'])
def word_return():
    passphrase = []
    count = 1
    if request.method == 'POST':
        word_count = request.get_json(force=True)['word_count']

        while count <= word_count:
            count += 1
            word = wordlist1.dice[dice_roll()]
            passphrase.append(word)
    return {'password': passphrase}


if __name__ == ("__main__"):
    app.run(debug=True)
