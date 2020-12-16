const yargs = require('yargs');
const fs = require('fs');
yargs.version('1.1.0');

yargs.command({
    command: 'books',
    describe: 'Something',
    handler: function() {
        const data = fs.readFileSync('books.json');
        console.log(data.toString());
    }
});

debugger

yargs.command({
    command: 'language',
    describe: 'start application',
    handler: function() {
        console.log(process.env.LANG);

    }
})
const obj = {
    name: 'Mostafa',
    title: 'Full stack developer'
}


module.exports = {
    name: 'Mostafa',
    title: 'JavaScript Developer',
    stack: ['Html', 'Css', 'Sass', 'JavaScript', 'React', 'Node', 'Express', 'PostgreSQL', 'firebase[Google Clouds]', 'data structure&Algorithm', 'Git']
}