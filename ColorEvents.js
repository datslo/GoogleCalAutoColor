function ColorEvents() {

    var companyDomain = ""
    var calendarID = ""

    var today = new Date();
    var nextmonth = new Date();
    nextmonth.setDate(nextmonth.getDate() + 31);
    Logger.log(today + " " + nextmonth);

    var calendars = CalendarApp.getOwnedCalendarsByName(calendarID);
    Logger.log("found number of calendars: " + calendars.length);

    for (var i = 0; i < calendars.length; i++) {
        var calendar = calendars[i];
        var events = calendar.getEvents(today, nextmonth);

        Logger.log("The number of events found: " + events.length);

        for (var x = 0; x < events.length; x++) {
            var guestEmails = [];
            var e = events[x];
            var guests = e.getGuestList();

            for (var j = 0; j < guests.length; j++) {
                var guestEmails = [];
                guestEmails.push(guests[j].getEmail());
                debugger;
                Logger.log(guestEmails[j]);

                if (!guestEmails.toString().includes(companyDomain)) {
                    debugger;
                    Logger.log(e);
                    debugger;
                    e.setColor(CalendarApp.EventColor.YELLOW);
                    debugger;
                }
            }

        }

    }

}
