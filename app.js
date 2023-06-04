let selectedDate = {}
let calendar = new VanillaCalendar({
  selector: "#calendar",
  onSelect: (data, elem) => {
    selectedDate = data
    let e = new Date(selectedDate.date).toISOString().split('T')[0]
    return e
  },
  months: [
    'January',
    'Februar',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ],
  shortWeekday: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri','Sat'],
})
let date = calendar.onSelect 
console.log(date)