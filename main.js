
// $.ajax({
//     headers: { 'X-Auth-Token': 'ab50401d2de749e38bed1ef981163d6b' },
//     url: 'http://api.football-data.org/v2/teams/397/matches',
//     dataType: 'json',
//     type: 'GET',
//   }).done(function(response) {  
//     console.log(response.matches[0]);
//     console.log(`${response.matches[0].homeTeam.name} - ${response.matches[0].score.fullTime.homeTeam}`);
//     console.log(`${response.matches[0].awayTeam.name} - ${response.matches[0].score.fullTime.awayTeam}`);
//   });

// var strUser = "Morecambe";

function setLeague(){
    let select = document.getElementById("teamSelect");
    select.innerHTML = "";
    var league = document.getElementById("leagueSelect");
    var leagueId = league.value;
    $.ajax({
        url: `https://www.thesportsdb.com/api/v1/json/1/lookup_all_teams.php?id=${leagueId}`,
        dataType: 'json',
        type: 'GET',
    }).done(function(response) {  
        response.teams.forEach(element => {
            let select = document.getElementById("teamSelect");
            select.innerHTML += `
                <option value=${element.idTeam}>${element.strTeam}</option>
            `
        });
    });    
}


function setTeam(){
    var e = document.getElementById("teamSelect");
    var clubName = e.value;
    $.ajax({
        url: `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${clubName}`,
        dataType: 'json',
        type: 'GET',
      }).done(function(response) {  
          let teamName = document.getElementById("clubname");
          teamName.innerHTML = `
            <div id="details">
                <h1 id="team">${response.teams[0].strTeam}</h1>
                <div class="typewriter"><h3 id="year">Est. ${response.teams[0].intFormedYear}</h3></div>
                <img id="badge" src=${response.teams[0].strTeamBadge}>
                <div class="typewriter"><h3 id="year">Stadium: <span id="ground">${response.teams[0].strStadium}</span></h3></div>
                <p id="info">${response.teams[0].strDescriptionEN}</p>
            </div>
          `
          
      });
}

