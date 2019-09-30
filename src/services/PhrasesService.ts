import firebase from './FirebaseService';

const db = firebase.firestore();

class PhrasesService {
  private minPhrases = 3;
  private maxPhrases = 6;

  getPhrases = async (paragraphs: number = 1) => {
    let statement = "";
    const phrases : any = []
    
    const snapshot = await db.collection("phrases").get();
    snapshot.forEach((doc) => {
      phrases.push(doc.data());
    });

    for(let i = 0; i < paragraphs; i++) {
      const phrasesCount = Math.floor(Math.random() * (this.maxPhrases - this.minPhrases + 1) + this.minPhrases);
      for(let p = 0; p < phrasesCount; p++) {
        const index = Math.floor(Math.random() * Math.floor(phrases.length));
        statement += `${phrases[index].phrase} `;
      }
      statement += '\n\n';
    }

    return statement;
  }

}

export default PhrasesService;