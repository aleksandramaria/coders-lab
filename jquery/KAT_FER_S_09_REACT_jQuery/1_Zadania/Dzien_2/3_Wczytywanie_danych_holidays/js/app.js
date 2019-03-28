$(function() {

    var ul = $("#holidayDates");

    function loadHolidays() {
        $.ajax({
            url: 'https://thingproxy.freeboard.io/fetch/https://holidayapi.com/v1/holidays?key=7de0d9b3-26db-443e-b532-a3e01fea61e1&country=pl&year=2018',
            dataType: 'json',
        }).done(function(result) {
            console.log(result);
            insertHolidays(result.holidays);
        }).fail(function (error) {
            console.log('error ocurred', error);
        });
    }

    function insertHolidays(days) {
        //Użyj sposobu na pobranie wartości z obiektu (nie kluczy) np. pętla for in
            for (var date in days) {
                for (var hol of days[date]) {
                    var newLi = $('<li><h3 class="holiday-name"></h3><date class="holiday-date"></date> </li>');
                    newLi.find('h3').text(hol.name);
                    newLi.find('.holiday-date').text(date);
                    ul.append(newLi);

                }
            }
        }

    loadHolidays();
});
