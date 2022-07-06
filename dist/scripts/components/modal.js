const back = document.getElementById("back")
const leaderboard = document.getElementById("Leaderboard")
const playAgain = document.getElementById("PlayAgain")

back.onclick = () => {
    location.assign("http://localhost:3000/")
};
leaderboard.onclick = () => {
    location.assign("./leaders.html")
};
playAgain.onclick = () => {
    location.reload()
};