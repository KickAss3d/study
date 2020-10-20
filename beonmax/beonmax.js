
// alert('Begin')
let person = {
    firstName: '',
    secondName: '',
    birthday: '',
    gender: ''
}

var DateDiff = {

    inDays: function(d1, d2) {
        var t2 = d2.getTime();
        var t1 = d1.getTime();

        return parseInt((t2-t1)/(24*3600*1000));
    },

    inWeeks: function(d1, d2) {
        var t2 = d2.getTime();
        var t1 = d1.getTime();

        return parseInt((t2-t1)/(24*3600*1000*7));
    },

    inMonths: function(d1, d2) {
        var d1Y = d1.getFullYear();
        var d2Y = d2.getFullYear();
        var d1M = d1.getMonth();
        var d2M = d2.getMonth();

        return (d2M+12*d2Y)-(d1M+12*d1Y);
    },

    inYears: function(d1, d2) {
        return d2.getFullYear()-d1.getFullYear();
    }
}

console.log(person)

person.birthday = new Date(1976, 6, 19)
console.log(person.birthday)
var today = new Date()
console.log(today)
let ageYear = DateDiff.inYears(person.birthday, today) 
let ageMonth = DateDiff.inMonths(person.birthday, today) 

console.log('Возраст человека: ' + ageYear + ' года, ' + ageMonth + ' месяцев.')

// const answers = []
// answers[0] = prompt('Как ваше имя?', '')
// answers[1] = prompt('Как ваша фамилия?', '')
// answers[2] = prompt('Сколько вам лет?', '')

// document.write(answers)