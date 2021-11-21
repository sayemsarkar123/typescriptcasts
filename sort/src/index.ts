import { CharactersCollection } from './CharactersCollection';
import { NumbersCollection } from './NumbersCollection';
import { SinglyLinkList } from './SinglyLinkList';

const numbersCollection = new NumbersCollection([5, 4, 3, 2, 1]);
numbersCollection.sort();
console.log(numbersCollection.data);

// const charactersCollection = new CharactersCollection('abcABC');
// charactersCollection.sort();
// console.log(charactersCollection.data);

// const linkList = new SinglyLinkList();
// linkList.push(5).push(4).push(3).push(2).push(1);
// linkList.sort();
// linkList.print();
