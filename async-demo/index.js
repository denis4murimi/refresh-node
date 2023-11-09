console.log('start');

getUser(1)
    .then(user => getRepos(user.githubUsername))
    .then(repos => console.log(repos[0]))
    .catch(err => console.log(new Error('message')));

function getUser(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Getting user from db...');
            resolve({ id: id, githubUsername: 'username' });
        }, 2000);
    });

}

function getRepos(username) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('getting repos...');
            resolve(['repo 1', 'repo 2', 'repo 3']);
        })
    });
}