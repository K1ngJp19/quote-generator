let quote = document.querySelector('.quote');
let person = document.querySelector('.person');
let btn = document.querySelector('#btn');

const quotes = [
    {
        quote: ' “Live with intention, not by default.” ',
        person: 'Iman Ghadzi'
    },
    {
        quote: ' “The more you learn, the more you earn.” ',
        person: 'Iman Ghadzi'
    },
    {
        quote: ' "If you truly wanted to be successful you would be successful. Most people say they WANT IT but their habits and lifestyle say the complete opposite." ',
        person: 'Luke Belmar'
    },
    {
        quote: ' "Getting healthy is like getting fat. Both require small daily compounding actions that lead to a lifestyle. You don’t become fat in one day. You don’t become healthy in one day. Consistency compounds." ',
        person: 'Luke Belmar'
    },
    {
        quote: ' “I don’t stop when I’m tired, I stop when I’m done. ',
        person: 'David Goggins'
    },
    {
        quote: ' “A warrior is a guy that goes, I’m here again today. I’ll be here again tomorrow and the next day. It’s a person who puts no limit on what’s possible.” ',
        person: 'David Goggins'
    },
    {
        quote: ' “The key to success is to focus on what you can control and let go of what you can’t. Your energy is better spent on improving yourself rather than worrying about external factors.” ',
        person: 'Andrew Tate'
    },
    {
        quote: ' “Success is a journey, not a destination. Embrace the process, learn from your failures, and keep moving forward.” ',
        person: 'Andrew Tate'
    },
    {
        quote: ' “Success is not given; it’s taken. You have to be aggressive and go after what you want in life.” ',
        person: 'Andrew Tate'
    },
    {
        quote: ' "Prioritize And Execute" ',
        person: 'King Jp'
    },
    {
        quote: ' "Ignore And Override" ',
        person: 'King Jp'
    },
];

btn.addEventListener('click', function () {
    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
});