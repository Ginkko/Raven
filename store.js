var ravens = [
  {
    id: '0',
    userName: 'Hodor',
    text: 'Hodor, Hodor! Hodor hodor hodor!',
    houseTags: [],
    replies: [],
    date: new Date('April 17, 2011 03:24:00'),
    dateString: 'Sun, 17 Apr 2011 10:24:00 GMT'
  },

  {
    id: '1',
    userName: '3dd4rd St4rk',
    text: 'Damnit Robert, Kings Landing smells.',
    houseTags: [],
    replies: [],
    date: new Date('May 8, 2011 12:24:00'),
    dateString: 'Sun, 08 May 2011 19:24:00 GMT'
  },

  {
    id: '2',
    userName: 'DA KING',
    text: 'STFU NED IM THE KING',
    houseTags: [],
    replies: [],
    date: new Date('May 8, 2011 12:25:00'),
    dateString: 'Sun, 08 May 2011 19:25:00 GMT'
  }

];

ravens[1].replies.push(ravens[2]);


var houseTags = [
  {
    id: '0',
    name: '#Hodor',
    ravens: []
  },

  {
    id: '1',
    name: '#Stark',
    ravens: []
  },

  {
    id: '2',
    name: '#WinterIsComing',
    ravens: []
  },

  {
    id: '3',
    name: '#MOREWINE',
    ravens: []
  },

  {
    id: '4',
    name: '#MOREBROTHELS',
    ravens: []
  }

];

houseTags[0].ravens.push(ravens[0]);
ravens[0].houseTags.push(houseTags[0]);

houseTags[1].ravens.push(ravens[1]);
ravens[1].houseTags.push(houseTags[1]);

houseTags[2].ravens.push(ravens[1]);
ravens[1].houseTags.push(houseTags[2]);

houseTags[3].ravens.push(ravens[2]);
ravens[2].houseTags.push(houseTags[3]);

houseTags[4].ravens.push(ravens[2]);
ravens[2].houseTags.push(houseTags[4]);
