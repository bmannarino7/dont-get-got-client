export default function shuffleList(listToShuffle) {
    let numItems = listToShuffle.length;

    // iterate from back of array to front, swapping item at last index with item at random index
    while (numItems) {

        let randomIndex = Math.floor(Math.random() * numItems);

        let temp = listToShuffle[numItems - 1];
        listToShuffle[numItems - 1] = listToShuffle[randomIndex];
        listToShuffle[randomIndex] = temp;
        numItems--;
    }
    return listToShuffle;
}
