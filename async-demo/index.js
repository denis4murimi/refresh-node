console.log('start');

// Callback approach
/* getUser(1, (user) => {
    console.log(user);
    getRepos(user.githubUsername, (repos) => {
        console.log(repos);
    });
}); */

// Promises approach
/* getUser(1)
    .then(user => getRepos(user.githubUsername))
    .then(repos => console.log(repos[0]))
    .catch(err => console.log(new Error('message')));
 */

// Async / Await Approach
async function displayFirstRepo() {
    try {
        const user = await getUser(1);
        console.log(user.githubUsername);
        
        const repos = await getRepos(user.githubUsername);
        console.log(repos[0]);
    } catch (error) {
        console.log('Error: ', error.message);
    }
}

displayFirstRepo();

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
            console.log('Calling Github api...');
            resolve(['repo 1', 'repo 2', 'repo 3']);
            //reject(new Error('Could not get repos'));
        })
    });
}