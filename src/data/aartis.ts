import ganeshAarti from './ganeshAarti';
import hanumanAarti from './hanumanAarti';
import ganeshAtharvashirsha from './ganeshAtharvashirsha';

export const aartiData = [
  {
    id: "ganesh-aarti",
    deity: "श्री गणपती बाप्पा",
    title: "गणपतीची आरती",
    content: ganeshAarti,
    audioUrl: undefined,
    thumbnail: "ganesh"
  },
  {
    id: "ganesh-atharvashirsha",
    deity: "श्री गणपती बाप्पा",
    title: "गणपती अथर्वशीर्ष",
    content: ganeshAtharvashirsha,
    audioUrl: undefined,
    thumbnail: "ganesh"
  },
  {
    id: "ganesh-stotra",
    deity: "श्री गणपती बाप्पा",
    title: "गणपती स्तोत्र",
    content: ganeshAarti,
    audioUrl: undefined,
    thumbnail: "ganesh"
  },
  {
    id: "shiva-aarti",
    deity: "श्री शिव",
    title: "जय शिव ओंकारा",
    content: `जय शिव ओंकारा, स्वामी जय शिव ओंकारा ।
ब्रह्मा, विष्णु, सदाशिव, अर्धांगी धारा ॥

एकानना, चतुरानना, पंचानना, रखे ।
हंसासना, गरुड़ासना, वृषवाहना रखे ॥
दो भुजा, दस भुजा, बीस भुजा, रखे ।
तीनों रूप निरंजना, अर्धांगी धारा ॥
जय शिव ओंकारा...

शिव शंभु कैलाशे, पार्वती रखे ।
गंग जटा में बहे, चंद्र मस्तक रखे ॥
पशुपति, पिनाकी, अमर, अर्धांगी धारा ।
क्षैम कुशल के दाता, अर्धांगी धारा ॥
जय शिव ओंकारा...`,
    audioUrl: undefined,
    thumbnail: "shiva"
  },
  {
    id: "vishnu-aarti",
    deity: "श्री विष्णु",
    title: "ॐ जय जगदीश हरे",
    content: `ॐ जय जगदीश हरे,
स्वामी जय जगदीश हरे।
भक्त जनों के संकट,
क्षण में दूर करे॥
ॐ जय जगदीश हरे।

जो ध्यावे फल पावे,
दुःख बिनसे मन का।
स्वामी दुःख बिनसे मन का।
सुख संपति घर आवे,
कष्ट मिटे तन का॥
ॐ जय जगदीश हरे।

मात-पिता तुम मेरे,
शरण गहूँ मैं किसकी।
स्वामी शरण गहूँ मैं किसकी।
तुम बिन और न दूजा,
आस करूँ मैं जिसकी॥
ॐ जय जगदीश हरे।`,
    audioUrl: undefined,
    thumbnail: "vishnu"
  },
  {
    id: "durga-aarti",
    deity: "श्री दुर्गा",
    title: "जय अंबे गौरी",
    content: `जय अंबे गौरी मैया जय श्यामा गौरी।
तुमको नीसदीन ध्यावत हरि ब्रह्मा शिवरी॥
जय अंबे गौरी।

मांग सिंदूर विराजत टीको मृगमद को।
उज्ज्वल से दोउ नैना चंद्रवदन नीको॥
जय अंबे गौरी।

कनक समान कलेवर, रक्ताम्बर राजै।
रक्तपुष्प गल माला, कण्ठन पर साजै॥
जय अंबे गौरी।

केहरि वाहन राजत, खड्ग खप्पर धारी।
सुर-नर-मुनिजन सेवत, तिनके दुखहारी॥
जय अंबे गौरी।`,
    audioUrl: undefined,
    thumbnail: "durga"
  },
  {
    id: "hanuman-aarti",
    deity: "श्री हनुमान",
    title: "श्री हनुमान चालीसा",
    content: hanumanAarti,
    audioUrl: undefined,
    thumbnail: "hanuman"
  },
  {
    id: "lakshmi-aarti",
    deity: "श्री लक्ष्मी",
    title: "ॐ जय लक्ष्मी माता",
    content: `ॐ जय लक्ष्मी माता, मैया जय लक्ष्मी माता।
तुमको निशिदिन सेवत, हरि विष्णु विधाता॥
ॐ जय लक्ष्मी माता।

उमा, रमा, ब्रह्माणी, तुम ही जग-माता।
सूर्य-चंद्रमा ध्यावत, नारद ऋषि गाता॥
ॐ जय लक्ष्मी माता।

दुर्गा रूप निरंजनी, सुख संपत्ति दाता।
जो कोई तुमको ध्यावत, ऋद्धि-सिद्धि धन पाता॥
ॐ जय लक्ष्मी माता।

तुम पाताल-निवासिनी, तुम ही शुभदाता।
कर्म-प्रभाव-प्रकाशिनी, भवनिधि की त्राता॥
ॐ जय लक्ष्मी माता।`,
    audioUrl: undefined,
    thumbnail: "lakshmi"
  }
];

export const getAartiById = (id: string) => {
  return aartiData.find(aarti => aarti.id === id);
};
