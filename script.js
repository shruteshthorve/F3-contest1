let score = {};

function OpeningCeremony(score, Race100M) {

    setTimeout(()=> {
        console.log("let the games begin");
        score = {Red:0, Blue:0, Green:0, Yellow:0};
        Race100M(score, LongJump);
    }, 1000);
}

function Race100M(score, LongJump) {

    setTimeout( () => {
        console.log("Previous Scores: ", score);

        const obj = {Red: Math.floor(Math.random()*6)+10,
                    Blue: Math.floor(Math.random()*6)+10,
                    Green: Math.floor(Math.random()*6)+10,
                    Yellow: Math.floor(Math.random()*6)+10,
                    };
        
        const sortedArray = Object.keys(obj).sort((a,b) => obj[a] - obj[b]);
        console.log("Winner of the race is: ", sortedArray[0]);
        score[sortedArray[0]] += 50;
        score[sortedArray[1]] += 25;

        console.log("updated score: ", score);

        LongJump(score, HighJump);
    }, 3000);
}

function LongJump(score, HighJump) {
 setTimeout(()=>{
    console.log("Previous Scores: ", score);
    const i = Math.floor(Math.random()*4)+1;

    if(i==1) {
        score.Red += 150;
        console.log("Winner of Long Jump is Red");
        console.log("Updated Score: ", score);
    }
    if(i==2) {
        score.Blue += 150;
        console.log("Winner of Long Jump is Blue");
        console.log("Updated Score: ", score);
    }
    if(i==3) {
        score.Green += 150;
        console.log("Winner of Long Jump is Green");
        console.log("Updated Score: ", score);
    }
    if(i==4) {
        score.Yellow += 150;
        console.log("Winner of Long Jump is Yellow");
        console.log("Updated Score: ", score);
    }

    HighJump(score, AwardCeremony);
 }, 2000);    
}

function HighJump(score, AwardCeremony) {
    console.log("Previous Scores: ", score);

    let input = prompt("Enter the winner of High jump event");

    if(input == "Red" || input == "red") {
        score.Red += 100;
        console.log("Winner of High jump event is Red");
        console.log("Updated score is: ", score);
    }
    else if(input == "Blue" || input == "blue") {
        score.Blue += 100;
        console.log("Winner of High jump event is Blue");
        console.log("Updated score is: ", score);
    }
    else if(input == "Green" || input == "green") {
        score.Green += 100;
        console.log("Winner of High jump event is Green");
        console.log("Updated score is: ", score);
    }
    else if(input == "Yellow" || input == "yellow") {
        score.Yellow += 100;
        console.log("Winner of High jump event is yellow");
        console.log("Updated score is: ", score);
    }
    else {
        console.log("Event was cancelled");
        console.log("Updated score is: ", score);
    }

    AwardCeremony(score);
}

function AwardCeremony(score) {

    let sortedArr = Object.keys(score).sort((a,b)=> score[a] - score[b]);
    let n = sortedArr.length;

    console.log(`${sortedArr[n-1]} came first with ${score[sortedArr[n-1]]} points`);
    console.log(`${sortedArr[n-2]} came second with ${score[sortedArr[n-2]]} points`);
    console.log(`${sortedArr[n-3]} came third with ${score[sortedArr[n-3]]} points`);
    console.log(`${sortedArr[n-4]} came fourth with ${score[sortedArr[n-4]]} points`);
}
OpeningCeremony(score, Race100M);