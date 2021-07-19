import paper from './imgs/paper.png';
import rock from './imgs/rock.png';
import lizard from './imgs/lizard.png';
import scissors from './imgs/scissors.png';
import spock from './imgs/spock.png';


export function getChoiceImage(id) {
    let image;
    if (id === 1) {
        image = rock;
    } else if (id === 2) {
        image = paper;
    } else if (id === 3) {
        image = scissors;
    } else if (id === 4) {
        image = lizard;
    } else {
        image = spock;
    }

    return image;
}