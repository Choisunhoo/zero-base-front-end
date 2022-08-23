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

const keys = Object.keys(data);

console.log(keys); // ['gameName','Company','co_company','before_director','director', 'class']