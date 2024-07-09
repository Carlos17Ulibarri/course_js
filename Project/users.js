// Information users
/*
const users = [ //structure
    u1= {
        username: 'Consultor1',
        fullName: 'Jonh Martinez',
        age: 30,
        isStudent: false,
        address: {
            street: 'Av. Culhuacan',
            city: 'CDMX',
            zinCode: 8230,
        },
        hobbies: ['Gym', 'Gaming'],
        perBio: `I'm ${u1.fullName}, I like too the innovation`
    },
];
*/

function createUser(name,username,password,profile){
    this.name = name;
    this.username = username;
    this.password = password;
    this.profile = profile;

    this.getUsers = function getUsers(){
        console.log(`Name: ${this.name}\nUsername: ${this.username}\nProfile: ${this.profile}`);
    };

    this.changeProfile = function changeProfile(){
        this.profile = 'Administrator';
    };
};

const users = {
    u1: new createUser('carlos','carlos17',"nfonsfoj","Operations"),
    u2: new createUser('Karla','kl98',"asopkd","Operations"),
    u3: new createUser('Oscar','ocr36',"5555","Operations"),
}




users.u2.getUsers();
users.u2.changeProfile();
users.u2.getUsers();
