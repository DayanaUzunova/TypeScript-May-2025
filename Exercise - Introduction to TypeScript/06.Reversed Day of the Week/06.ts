enum Days {
    Monday = 1,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
};

function reverseDayOfWeek(dayName: string) : void {
    console.log(Days[dayName as keyof typeof Days] || 'error');
    

}
reverseDayOfWeek('Monday');
reverseDayOfWeek('Invalid');
reverseDayOfWeek('Saturday');
