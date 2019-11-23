from flask import Flask, request
from secrets import SystemRandom
import time

from wordlists import wordlist1

app = Flask(__name__, static_folder='frontend/build')


def dice_roll():
    key = [SystemRandom().randrange(1, 7) for p in range(0, 5)]
    keyInt = ''.join(map(str, key))
    return int(keyInt)


@app.route('/passphrase', methods=['POST'])
def word_return():
    passphrase = []
    count = 1
    if request.method == 'POST':
        data = request.get_json(force=True)
        word_count = data['word_count']
        if 'seperator' in data:
            seperator = request.get_json(force=True)['seperator']
        else:
            seperator = ''

        while count <= word_count:
            count += 1
            word = wordlist1.dice[dice_roll()]
            passphrase.append(word)

        final_passphrase = seperator.join(passphrase)
        time.sleep(2)  # Simulate slower loading
        return {'password': final_passphrase}


if __name__ == ("__main__"):
    app.run(debug=True)
