/**
 * Object.keys()
 */

const data = {
    gameName: 'Lost Ark',
    Company: 'Smilegate',
    co_company: 'tripod',
    before_director: 'gold-river',
    director: '제인숙',
    class: [
        {
            class_name: 'Demonic',
            tribe: 'Delain', 
            Identity: ['complete restraint', 'unstoppable impulse']

        },
        {
            class_name: 'Sorcerous',
            tribe: 'Magician', 
            Identity: ['ignition', 'reflux']

        },
        {
            class_name: 'Scouter',
            tribe: 'Hunter', 
            Identity: ['Artetines Skills', 'legacy of evolution']

        },

    ]
}

const values = Object.values(data);

console.log(values); 
/**
 * [
  'Lost Ark',
  'Smilegate',
  'tripod',
  'gold-river',
  '제인숙',
  [
    { class_name: 'Demonic', tribe: 'Delain', Identity: [Array] },
    { class_name: 'Sorcerous', tribe: 'Magician', Identity: [Array] },
    { class_name: 'Scouter', tribe: 'Hunter', Identity: [Array] }
  ]
]
 */