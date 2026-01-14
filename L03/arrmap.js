const finalparticipants = ['Smith', 'Johnson', 'Williams'];
const announcements = finalparticipants.map((mamber) => {
    return mamber + 'joined the contest.';
});
announcements.forEach(announcement => console.log(announcement));