const customers = [
    { id: 1, name: 'John Doe', isGold: true, email: 'johndoe@gmail.com' },
    { id: 2, name: 'John Doee', isGold: false, email: 'johndoee@gmail.com' },
    { id: 3, name: 'John Doeee', isGold: true, email: 'johndoeee@gmail.com' },
    { id: 4, name: 'John Doeeee', isGold: false, email: 'johndoeeee@gmail.com' }
];

send(3);

async function send(id) {
   try {
    const customer = await getCustomer(id);
    if (customer.isGold) {
        const topMovies = await getTopMovies();
        console.log('Top Movies: ', topMovies);
        const email = await sendEmail();
        console.log('Email Sent!');
    }
   } catch (error) {
    console.log('Error: ', error.message);
   }
}

function getCustomer(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Getting customer data from db...');
            const customer = customers.find(x => x.id === parseInt(id));
            if(!customer)  reject(new Error('Customer with the specified id does not exist'));
            resolve(customer);
        }, 3000);
    });
}

function getTopMovies() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Getting Top Movies...');
            resolve(['Movie 1', 'Movie 2', 'Movie 3']);
        }, 3000);
    });
}

function sendEmail() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(true);
            // reject(new Error('Unknown error occurred when sending email.'));
        }, 3000);
    });
}