export function getChoices() {
    let url = `${process.env.REACT_APP_GAME_SERVICE_BASE_URL}${process.env.REACT_APP_GAME_SERVICE_CHOICES_URL_PATH}`;
    return fetch(url)
        .then((res) => {
            let responseJSON = res.json();
            if (res.ok) {
                return responseJSON;
            } else {
                throw new Error(responseJSON.message);
            }
        });
}

export function getRandomChoice() {
    let url = `${process.env.REACT_APP_GAME_SERVICE_BASE_URL}${process.env.REACT_APP_GAME_SERVICE_CHOICE_URL_PATH}`;
    return fetch(url)
        .then((res) => {
            let responseJSON = res.json();
            if (res.ok) {
                return responseJSON;
            } else {
                throw new Error(responseJSON.message);
            }
        });
}

export function play(choiceID) {
    let url = `${process.env.REACT_APP_GAME_SERVICE_BASE_URL}${process.env.REACT_APP_GAME_SERVICE_PLAY_URL_PATH}`;
    let fetchObject = {
        method: 'POST',
        body: JSON.stringify({
            player: choiceID,
        }),
    };

    return fetch(url, fetchObject)
        .then((res) => {
            let responseJSON = res.json();
            if (res.ok) {
                return responseJSON;
            } else {
                throw new Error(responseJSON.message);
            }
        })
}
