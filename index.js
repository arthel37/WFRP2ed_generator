

$(document).ready(function() {

    /*let career_by_race;
    
    fetch("career_by_race.json")
    .then(response => response.json())
    .then(data => {career_by_race = data;})*/


    function roll_d10(){
        let d10 = Math.floor(Math.random() * 10 + 1);
        return d10;
    }

    function roll_d100(){
        let d100 = Math.floor(Math.random() * 100 + 1);
        return d100;
    }

    let i;

    var button = document.getElementById("button");

    button.addEventListener('click', function(){


    if (prevent_race.checked == false){
        $("#race_dropdown").each(function(index, element) {
            let raceIndex = Math.floor(Math.random() * element.length);
            element.selectedIndex = raceIndex;
        });
    }

    var sex = document.getElementById("sex_dropdown");

    if (prevent_sex.checked == false){
        let d10 = roll_d10();
        if (d10 <= 5){
            sex.selectedIndex = 0;
        } else{
            sex.selectedIndex = 1;
        }
    }

    
    const race = document.getElementById("race_dropdown");
    const career = document.getElementById("career_dropdown");

    const career_by_race = {
        dwarf: ["Agitator", "Apprentice Runesmith", "Bodyguard", "Bounty Hunter", "Burgher", "Cartographer", "Coachman", "Dilettante", "Entertainer", "Ex-Convict", "Gambler", 
        "Hunter", "Initiate", "Jailer", "Mercenary", "Militiaman", "Miner", "Muleskinner", "Noble", "Outlaw", "Pilgrim", "Pit Fighter", "Protagonist", "Raconteur", 
        "Rat Catcher", "Rogue", "Runebearer", "Scribe", "Seaman", "Servant", "Sewer Jack", "Shieldbreaker", "Slave", "Smuggler", "Soldier", "Stevedore", "Student", 
        "Temple Guardian", "Thief", "Thug", "Toll Keeper", "Tomb Robber", "Tradesman", "Troll Slayer", "Vagabond", "Watchman"],
        elf: ["Apothecary", "Apprentice Wizard", "Bodyguard", "Bounty Hunter", "Cartographer", "Dilettante","Entertainer", "Envoy", "Gambler", "Hunter", "Initiate",
        "Kithband Warrior", "Marine", "Mercenary", "Messenger", "Noble", "Outlaw", "Outrider", "Pilgrim", "Pit Fighter", "Raconteur", "River Warden", "Rogue", "Scribe",
        "Seaman", "Slave", "Smuggler", "Student", "Thief", "Thug", "Tradesman", "Vagabond", "Woodsman"],
        halfling: ["Agitator", "Apothecary", "Badlander", "Bailiff", "Barber-Surgeon", "Bonepicker", "Bounty Hunter", "Burgher", "Camp Follower", "Cartographer",
        "Charcoal-Burner", "Chimneysweep", "Dilettante", "Dung Collector", "Embalmer", "Entertainer", "Exciseman", "Ex-Convict", "Farmer", "Ferryman", "Fieldwarden",
        "Fisherman", "Gambler", "Grave Robber", "Grave Warden", "Hunter", "Initiate", "Lamplighter", "Litigant", "Mercenary", "Messenger", "Militiaman", "Muleskinner",
        "Newssheet Vendor", "Noble", "Outlaw", "Peasant", "Pilgrim", "Raconteur", "Rat Catcher", "Rogue", "Scribe", "Servant", "Sewer Jack", "Slave", "Smuggler", "Soldier",
        "Student", "Temple Guardian", "Thief", "Thug", "Toll Keeper", "Tomb Robber", "Tradesman", "Vagabond", "Valet", "Watchman"],
        human: ["Agitator", "Anchorite", "Apothecary", "Apprentice Witch", "Apprentice Wizard", "Badlander", "Bailiff", "Barber-Surgeon", "Bear Tamer", "Boatman", "Bodyguard",
        "Bondsman", "Bonepicker", "Bounty Hunter", "Burgher", "Cadet", "Camp Follower", "Carcassonne Shepherd", "Cartographer", "Cenobite", "Charcoal-Burner", "Chekist", 
        "Chimneysweep", "Coachman", "Deepwatcher", "Dilettante", "Drover", "Dung Collector", "Embalmer", "Entertainer", "Estalian Diestro", "Exciseman", "Ex-Convict", 
        "Farmer", "Ferryman", "Fisherman", "Freeholder", "Frogwife", "Gambler", "Grail Pilgrim", "Grave Robber", "Grave Warden", "Hedge Wizard", "Herrimault", "Horned Hunter", 
        "Horse Coper", "Hunter", "Initiate", "Jailer", "Kislevite Kossar", "Knight Errant", "Lamplighter", "Litigant", "Man-at-Arms", "Marauder", "Marine", "Mediator", 
        "Mercenary", "Messenger", "Militiaman", "Miner", "Muleskinner", "Newssheet Vendor", "Noble", "Norse Berserker", "Outlaw", "Outrider", "Peasant", "Penitent", "Pilgrim", 
        "Pit Fighter", "Protagonist", "Raconteur", "Rat Catcher", "Reaver", "River Warden", "Roadwarden", "Rogue", "Scribe", "Seaman", "Seer", "Servant", "Sewer Jack", "Skald", 
        "Slave", "Smuggler", "Soldier", "Squire", "Steppes Nomad", "Stevedore", "Streltsi", "Strigany Mystic", "Student", "Swamp Skimmer", "Swampaire", "Temple Guardian", 
        "Thief", "Thug", "Toll Keeper", "Tomb Robber", "Tradesman", "Vagabond", "Valet", "Watchman", "Whaler", "Wise Woman", "Woodsman", "Wrecker", "Zealot"],
        master: ["Agitator", "Anchorite", "Apothecary", "Apprentice Runesmith", "Apprentice Witch", "Apprentice Wizard", "Badlander", "Bailiff", "Barber-Surgeon", "Bear Tamer", "Boatman", "Bodyguard", "Bondsman", "Bonepicker", "Bounty Hunter", "Burgher", 
        "Cadet", "Camp Follower", "Carcassonne Shepherd", "Cartographer", "Cenobite", "Charcoal-Burner", "Chekist", "Chimneysweep", "Coachman", "Deepwatcher", "Dilettante", "Drover", "Dung Collector", "Embalmer", "Entertainer", "Envoy", "Estalian Diestro", 
        "Ex-Convict", "Exciseman", "Farmer", "Ferryman", "Fieldwarden", "Fisherman", "Freeholder", "Frogwife", "Gambler", "Grail Pilgrim", "Grave Robber", "Grave Warden", "Hedge Wizard", "Herrimault", "Horned Hunter", "Horse Coper", "Hunter", "Initiate", 
        "Jailer", "Kislevite Kossar", "Kithband Warrior", "Knight Errant", "Lamplighter", "Litigant", "Man-at-Arms", "Marauder", "Marine", "Mediator", "Mercenary", "Messenger", "Militiaman", "Miner", "Muleskinner", "Newssheet Vendor", "Noble", 
        "Norse Berserker", "Outlaw", "Outrider", "Peasant", "Penitent", "Pilgrim", "Pit Fighter", "Protagonist", "Raconteur", "Rat Catcher", "Reaver", "Riverwarden", "Roadwarden",  "Rogue", "Runebearer", "Scribe", "Seaman", "Seer", "Servant", "Sewer Jack", 
        "Shieldbreaker", "Skald", "Slave", "Smuggler", "Soldier", "Squire", "Steppes Nomad", "Stevedore", "Streltsi", "Strigany Mystic", "Student", "Swamp Skimmer", "Swampaire", "Temple Guardian", "Thief", "Thug", "Toll Keeper", "Tomb Robber", "Tradesman", 
        "Troll Slayer", "Vagabond", "Valet", "Watchman", "Whaler", "Wise Woman", "Woodsman", "Wrecker", "Zealot"]
    }
    

    const career_array = [
        "Abbot", "Admiral", "Agent of the Shroud", "Agitator", "Ambassador", "Anchorite", "Animal Trainer", "Anointed Priest", "Apothecary", "Apprentice Runesmith", "Apprentice Witch", "Apprentice Wizard", "Artillerist", "Artisan", "Assassin", 
        "Astrologer", "Ataman", "Badlander", "Badlands Ranger", "Bailiff", "Barber-Surgeon", "Batlle Pilgrim", "Bear Tamer", "Black Guard", "Boatman", "Bodyguard", "Bondsman", "Bonepicker", "Border Courtier", "Bounty Hunter", "Burgher", "Cadet", 
        "Camp Follower", "Cantor", "Captain", "Carcassone Shepherd", "Cartographer", "Cat Burglar", "Catehist", "Cenobite", "Champion", "Charcoal-Burner", "Charlatan", "Chekist", "Chimneysweep", "Cloaked Brother", "Coachman", "Courtier", "Crime Lord", 
        "Crusader", "Cult Attendant", "Daemon Slayer", "Deepwatcher", "Demagogue", "Dilettante", "Drover", "Duellist", "Dung Collector", "Embalmer", "Enforcer", "Engineer", "Entertainer", "Envoy", "Estalian Diestro", "Ex-Convict", "Exciseman", "Exorcist", 
        "Explorer", "Faceless", "Farmer", "Fence", "Ferryman", "Fieldwarden", "Fisherman", "Flagellant", "Foreman", "Forger", "Freeholder", "Friar", "Frogwife", "Gambler", "Ghost Strider", "Giant Slayer", "Grail Knight", "Grail Pilgrim", "Grandmaster", 
        "Grave Robber", "Grave Warden", "Guild Master", "Hag Mother", "Hag Witch", "Hedge Wizard", "Hedgecraft Apprentice", "Hedge Master", "Hedgewise", "Herald", "Herrimault", "High Priest", "Highwayman", "Horned Hunter", "Horse Archer", "Horse Coper", 
        "Horse Master", "Hunter", "Ice Maiden", "Ice Witch", "Initiate", "Innkeeper", "Interrogator", "Jailer", "Journeyman Runesmith", "Journeyman Wizard", "Judical Champion", "Killer of the Dead", "Kislevite Kossar", "Kithband Warrior", "Knight", 
        "Knight Errant", "Knight of the Blazing Sun", "Knight of the Inner Circle", "Knight of the Raven", "Knight of the Realm", "Knight of the Verdant Field", "Knight Panther", "Lamplighter", "Lay Priest", "Litigant", "Man-at-Arms", "Marauder", "Marine", 
        "Master Runesmith", "Master Thief", "Master Vigilant", "Master Wizard", "Mate", "Mediator", "Mercenary", "Merchant", "Messenger", "Militiaman", "Miner", "Minstrel", "Monk", "Muleskinner", "Mystic", "Navigator", "Newssheet Vendor", "Noble", "Noble Lord", 
        "Norse Berserker", "Outlaw", "Outlaw Chief", "Outrider", "Pamphleter", "Peasant", "Penitent", "Physician", "Pilgrim", "Pistolier", "Pit Fighter", "Politician", "Prelate", "Priest", "Protagonist", "Questing Knight", "Racketeer", "Raconteur", 
        "Rapscallion", "Rat Catcher", "Reaver", "River Warden", "Roadwarden", "Rogue", "Runebearer", "Runelord", "Scholar", "Scourge of God", "Scout", "Scribe", "Sea Captain", "Seaman", "Seer", "Sergeant", "Servant", "Sewer Jack", "Shieldbreaker", "Skald", 
        "Slave", "Slaver", "Smuggler", "Soldier", "Spy", "Squire", "Steppes Nomad", "Stevedore", "Steward", "Streltsi", "Strigany Mystic", "Student", "Swamp Skimmer", "Swampaire", "Targeteer", "Temple Guardian", "Thief", "Thug", "Toll Keeper", "Tomb Robber", 
        "Tradesman", "Troll Slayer", "Vagabond", "Valet", "Vampire Hunter", "Verenean Investigator", "Veteran", "Village Elder", "Wall Warden", "Warleader", "Warlock", "Warrior Priest", "Watchman", "Whaler", "Winged Lancer", "Wise Woman", "Witch", 
        "Wtich Hunter", "Wizard Lord", "Woodsman", "Wrecker", "Yeoman", "Zealot"];

    const career_exits = {
        "Abbot": ["High Priest", "Scholar"],
        "Admiral": ["Ambassador", "Explorer", "Guild Master"],
        "Agent of the Shroud": ["Killer of the Dead", "Priest", "Scholar", "Spy", "Vampire Hunter", "Witch Hunter"],
        "Agitator": ["Charlatan", "Demagogue", "Ex-Convict", "Outlaw", "Politician", "Rogue", "Zealot"],
        "Ambassador": ["Captain", "Merchant", "Noble Lord", "Politician"],
        "Anchorite": ["Badlander", "Mystic", "Outlaw", "Swamp Skimmer", "Vagabond"],
        "Animal Trainer": ["Bear Tamer", "Entertainer", "Hunter"],
        "Anointed Priest": ["Demagogue", "Flagellant", "High Priest", "Scholar", "Witch Hunter"],
        "Apothecary": ["Apprentice Wizard", "Artisan", "Barber-Surgeon", "Embalmer", "Grave Robber", "Merchant", "Physician", "Scholar"],
        "Apprentice Runesmith": ["Journeyman Runesmith", "Runebearer", "Scholar", "Scribe", "Shieldbreaker"],
        "Apprentice Witch": ["Ice Maiden", "Inititate", "Witch"],
        "Apprentice Wizard": ["Journeyman Wizard", "Scholar", "Scribe"],
        "Artillerist": ["Artisan", "Captain", "Guild Master", "Mercenery", "Veteran"],
        "Artisan": ["Demagogue", "Engineer", "Guild Master", "Merchant", "Militiaman"],
        "Assassin": ["Champion", "Outlaw Chief", "Rogue", "Sergeant", "Witch Hunter"],
        "Astrologer": ["Apprentice Wizard", "Charlatan", "Explorer", "Navigator", "Scholar"],
        "Ataman": ["Politician", "Priest", "Noble Lord"],
        "Badlander": ["Cat Burglar", "Vagabond"],
        "Badlands Ranger": ["Captain", "Explorer", "Outlaw Chief"],
        "Bailiff": ["Militiaman", "Politician", "Protagonist", "Racketeer", "Smuggler", "Toll Keeper"],
        "Barber-Surgeon": ["Interrogator", "Grave Robber", "Physician", "Tradesman", "Vagabond"],
        "Batlle Pilgrim": ["Faceless", "Sergeant", "Vagabond", "Veteran"],
        "Bear Tamer": ["Animal Trainer", "Entertainer", "Initiate", "Pit Fighter", "Soldier"],
        "Black Guard": ["Captain", "Champion", "Priest", "Knight of the Inner Circle", "Knight of the Raven", "Vampire Hunter"],
        "Boatman": ["Fisherman", "Marine", "Navigator", "Seaman", "Smuggler"],
        "Bodyguard": ["Bailiff", "Bounty Hunter", "Interrogator", "Jailer", "Mercenary", "Protagonist", "Racketeer"],
        "Bondsman": ["Berserker", "Bodyguard", "Freeholder", "Marauder", "Mercenary", "Reaver", "Skald", "Veteran", "Warleader"],
        "Bonepicker": ["Camp Follower", "Cat Burglar", "Fence", "Grave Robber", "Smuggler"],
        "Border Courtier": ["Assassin", "Captain", "Courtier", "Noble Lord", "Spy"],
        "Bounty Hunter": ["Mercenary", "Protagonist", "Scout", "Targeteer", "Vampire Hunter"],
        "Burgher": ["Agitator", "Fence", "Innkeeper", "Merchant", "Militiaman", "Tradesman", "Valet"],
        "Cadet": ["Herald", "Mercenary", "Pistolier", "Sergeant", "Squire", "Student"],
        "Camp Follower": ["Charcoal-Burner", "Charlatan", "Servant", "Smuggler", "Spy", "Tradesman", "Vagabond"],
        "Cantor": ["Catehist", "Entertainer", "Initiate", "Priest", "Minstrel", "Zealot"],
        "Captain": [30, 20, 20, 20, 20, 15, 15, 25, 2, 7, 0],
        "Carcassone Shepherd": [5, 10, 0, 0, 10, 5, 0, 0, 1, 2, 0],
        "Cartographer": [5, 0, 0, 5, 5, 10, 5, 5, 0, 2, 0],
        "Cat Burglar": [10, 10, 5, 5, 25, 10, 10, 0, 0, 4, 0],
        "Catehist": [0, 0, 5, 5, 10, 20, 15, 10, 0, 4, 0],
        "Cenobite": [5, 0, 5, 10, 0, 5, 10, 5, 0, 2, 0],
        "Champion": [40, 40, 25, 25, 30, 0, 20, 0, 2, 8, 0],
        "Charcoal-Burner": [5, 0, 5, 5, 5, 5, 5, 5, 0, 2, 0],
        "Charlatan": [10, 10, 5, 10, 15, 15, 15, 25, 0, 4, 0],
        "Chekist": [10, 5, 5, 5, 5, 5, 5, 0, 0, 2, 0],
        "Chimneysweep": [5, 0, 5, 5, 5, 0, 5, 5, 0, 2, 0],
        "Cloaked Brother": [15, 10, 15, 15, 25, 30, 25, 30, 1, 6, 0],
        "Coachman": [5, 10, 0, 0, 10, 0, 5, 5, 0, 2, 0],
        "Courtier": [5, 5, 0, 0, 10, 20, 20, 20, 0, 4, 0],
        "Crime Lord": [20, 20, 15, 15, 20, 25, 20, 30, 1, 6, 0],
        "Crusader": [30, 10, 20, 20, 20, 20, 25, 15, 2, 8, 0],
        "Cult Attendant": [10, 10, 5, 5, 0, 20, 15, 10, 0, 4, 0],
        "Daemon Slayer": [40, 0, 30, 30, 20, 0, 30, 0, 2, 8, 0],
        "Deepwatcher": [10, 0, 5, 5, 5, 0, 5, 0, 1, 2, 0],
        "Demagogue": [10, 10, 0, 10, 15, 20, 15, 30, 1, 4, 0],
        "Dilettante": [5, 5, 5, 5, 5, 5, 5, 5, 0, 2, 0],
        "Drover": [5, 10, 10, 5, 10, 0, 5, 0, 0, 2, 0],
        "Duellist": [20, 20, 10, 20, 20, 15, 15, 10, 1, 4, 0],
        "Dung Collector": [5, 0, 5, 10, 5, 0, 5, 0, 0, 2, 0],
        "Embalmer": [0, 0, 5, 5, 0, 15, 10, 5, 0, 2, 0],
        "Enforcer": [20, 20, 10, 10, 10, 20, 10, 5, 1, 4, 0],
        "Engineer": [10, 15, 5, 5, 10, 20, 10, 0, 0, 4, 0],
        "Entertainer": [5, 10, 0, 0, 10, 0, 5, 10, 0, 2, 0],
        "Envoy": [5, 5, 0, 0, 5, 10, 5, 10, 0, 2, 0],
        "Estalian Diestro": [15, 0, 5, 5, 10, 5, 0, 0, 1, 2, 0],
        "Ex-Convict": [10, 0, 5, 10, 5, 0, 10, 0, 0, 2, 0],
        "Exciseman": [10, 0, 0, 0, 10, 10, 5, 5, 0, 2, 0],
        "Exorcist": [0, 0, 10, 15, 15, 20, 35, 20, 1, 6, 2],
        "Explorer": [20, 20, 10, 15, 15, 25, 20, 15, 1, 6, 0],
        "Faceless": [10, 30, 10, 20, 10, 10, 10, 35, 2, 6, 0],
        "Farmer": [5, 5, 10, 10, 5, 0, 5, 0, 0, 2, 0],
        "Fence": [15, 10, 10, 5, 10, 5, 10, 10, 1, 4, 0],
        "Ferryman": [5, 5, 10, 5, 5, 5, 0, 0, 0, 2, 0],
        "Fieldwarden": [5, 10, 0, 5, 10, 0, 10, 0, 0, 2, 0],
        "Fisherman": [0, 5, 10, 5, 10, 5, 0, 0, 0, 2, 0],
        "Flagellant": [15, 0, 10, 15, 5, 0, 20, 10, 1, 6, 0],
        "Foreman": [10, 5, 10, 10, 5, 5, 15, 15, 0, 4, 0],
        "Forger": [5, 5, 10, 10, 20, 20, 10, 10, 0, 3, 0],
        "Freeholder": [5, 10, 0, 0, 10, 5, 10, 10, 0, 3, 0],
        "Friar": [10, 0, 5, 10, 0, 15, 15, 15, 0, 4, 0],
        "Frogwife": [0, 0, 0, 5, 10, 5, 10, 5, 0, 2, 0],
        "Gambler": [5, 5, 0, 0, 10, 10, 0, 10, 0, 2, 0],
        "Ghost Strider": [20, 30, 15, 15, 25, 20, 20, 0, 2, 6, 0],
        "Giant Slayer": [25, 0, 15, 15, 10, 0, 20, 0, 1, 6, 0],
        "Grail Knight": [40, 0, 30, 30, 25, 10, 25, 25, 2, 8, 0],
        "Grail Pilgrim": [10, 5, 5, 5, 5, 0, 0, 5, 0, 2, 0],
        "Grandmaster": [40, 15, 25, 25, 25, 15, 30, 20, 2, 8, 0],
        "Grave Robber": [5, 5, 5, 0, 10, 0, 10, 0, 0, 2, 0],
        "Grave Warden" : [5, 5, 10, 10, 0, 0, 10, 0, 0, 2, 0],
        "Guild Master": [10, 10, 0, 10, 15, 30, 20, 35, 1, 5, 0],
        "Hag Mother": [0, 0, 5, 20, 10, 40, 30, 15, 0, 6, 3],
        "Hag Witch": [0, 0, 5, 10, 5, 25, 20, 10, 0, 4, 1],
        "Hedge Wizard": [0, 0, 0, 5, 5, 5, 10, 10, 0, 2, 1],
        "Hedgecraft Apprentice": [0, 0, 5, 0, 0, 10, 5, 10, 0, 2, 1],
        "Hedge Master": [0, 0, 5, 5, 5, 20, 20, 20, 0, 3, 2],
        "Hedgewise": [0, 0, 5, 10, 15, 35, 35, 35, 0, 5, 3],
        "Herald": [10, 10, 5, 5, 15, 15, 10, 20, 0, 4, 0],
        "Herrimault": [5, 10, 0, 0, 10, 0, 0, 10, 1, 2, 0],
        "High Priest": [20, 20, 15, 15, 15, 20, 30, 25, 1, 6, 3],
        "Highwayman": [20, 20, 10, 10, 30, 20, 15, 25, 1, 4, 0],
        "Horned Hunter": [5, 5, 10, 0, 5, 0, 10, 0, 0, 3, 0],
        "Horse Archer": [15, 25, 15, 15, 15, 0, 15, 5, 1, 4, 0],
        "Horse Coper": [0, 5, 5, 0, 5, 5, 5, 15, 0, 2, 0],
        "Horse Master": [5, 15, 15, 10, 15, 20, 15, 25, 0, 5, 0],
        "Hunter": [0, 15, 0, 5, 10, 5, 0, 0, 0, 3, 0],
        "Ice Maiden": [5, 0, 0, 10, 5, 20, 25, 10, 0, 4, 2],
        "Ice Witch": [15, 0, 5, 20, 15, 30, 40, 15, 0, 6, 4],
        "Initiate": [5, 5, 0, 5, 0, 10, 10, 10, 0, 2, 0],
        "Innkeeper": [10, 5, 5, 10, 20, 10, 10, 20, 0, 4, 0],
        "Interrogator": [15, 0, 20, 10, 10, 10, 20, 15, 0, 4, 0],
        "Jailer": [10, 0, 10, 10, 0, 0, 5, 0, 0, 3, 0],
        "Journeyman Runesmith": [10, 5, 10, 5, 5, 20, 25, 5, 0, 3, 2],
        "Journeyman Wizard": [5, 5, 0, 5, 10, 20, 25, 10, 0, 3, 2],
        "Judical Champion": [35, 0, 15, 15, 20, 10, 15, 0, 2, 6, 0],
        "Killer of the Dead": [35, 35, 15, 20, 20, 15, 30, 5, 2, 6, 0],
        "Kislevite Kossar": [10, 10, 0, 10, 0, 0, 10, 0, 0 , 2, 0],
        "Kithband Warrior": [5, 5, 0, 0, 10, 10, 5, 0, 0, 2, 0],
        "Knight": [25, 0, 15, 15, 15, 5, 15, 5, 1, 4, 0],
        "Knight Errant": [15, 0, 5, 5, 5, 0, 5, 5, 1, 2, 0],
        "Knight of the Blazing Sun": [25, 0, 10, 20, 20, 10, 15, 10, 1, 5, 0],
        "Knight of the Inner Circle": [35, 10, 20, 20, 20, 15, 25, 15, 2, 8, 0],
        "Knight of the Raven": [35, 15, 20, 20, 20, 15, 35, 10, 2, 8, 0],
        "Knight of the Realm": [25, 0, 15, 15, 15, 0, 10, 15, 1, 4, 0],
        "Knight of the Verdant Field": [20, 20, 15, 15, 10, 5, 10, 5, 1, 4, 0],
        "Knight Panther": [30, 0, 15, 15, 15, 10, 10, 15, 1, 6, 0],
        "Lamplighter": [5, 0, 5, 0, 10, 5, 5, 5, 0, 2, 0],
        "Lay Priest": [15, 10, 5, 10, 10, 15, 20, 20, 0, 6, 0],
        "Litigant": [0, 0, 0, 0, 5, 10, 10, 10, 0, 2, 0],
        "Man-at-Arms": [10, 0, 5, 10, 10, 0, 0, 0, 0, 2, 0],
        "Marauder": [10, 0, 5, 5, 10, 0, 10, 0, 1, 2, 0],
        "Marine": [10, 10, 10, 0, 5, 0, 5, 0, 1, 3, 0],
        "Master Runesmith": [15, 10, 15, 10, 10, 25, 35, 10, 1, 5, 3],
        "Master Thief": [20, 20, 10, 10, 40, 25, 20, 25, 1, 6, 0],
        "Master Vigilant": [15, 10, 5, 10, 20, 25, 30, 15, 0, 5, 3],
        "Master Wizard": [10, 10, 0, 10, 15, 30, 35, 15, 0, 4, 3],
        "Mate": [15, 15, 10, 15, 10, 10, 10, 10, 1, 4, 0],
        "Mediator": [0, 0, 0, 0, 0, 10, 10, 10, 0, 2, 0],
        "Mercenary": [10, 10, 5, 5, 5, 0, 5, 0, 1, 2, 0],
        "Merchant": [10, 10, 5, 5, 10, 25, 20, 20, 0, 4, 0],
        "Messenger": [5, 5, 0, 5, 10, 5, 5, 0, 0, 2, 0],
        "Militiaman": [10, 5, 5, 5, 10, 0, 0, 0, 0, 2, 0],
        "Miner": [5, 5, 10, 5, 0, 5, 5, 0, 0, 2, 0],
        "Minstrel": [10, 10, 0, 0, 15, 10, 5, 25, 0, 4, 0],
        "Monk": [5, 0, 5, 5, 10, 25, 15, 15, 0, 4, 0],
        "Muleskinner": [5, 10, 0, 5, 10, 10, 5, 0, 0, 2, 0],
        "Mystic": [0, 0, 0, 10, 10, 10, 15, 15, 0, 4, 0],
        "Navigator": [10, 10, 5, 5, 10, 25, 10, 5, 0, 4, 0],
        "Newssheet Vendor": [5, 5, 0, 0, 10, 5, 0, 10, 0, 2, 0],
        "Noble": [10, 5, 0, 0, 5, 5, 5, 10, 0, 2, 0],
        "Noble Lord": [25, 15, 10, 10, 10, 20, 20, 30, 1, 6, 0],
        "Norse Berserker": [15, 0, 10, 10, 0, 0, 10, 0, 0, 2, 0],
        "Outlaw": [10, 10, 0, 0, 10, 5, 0, 0, 1, 2, 0],
        "Outlaw Chief": [20, 30, 10, 20, 10, 10, 10, 20, 2, 6, 0],
        "Outrider": [5, 10, 0, 0, 10, 10, 5, 0, 0, 2, 0],
        "Pamphleter": [5, 5, 5, 10, 15, 25, 20, 20, 0, 4, 0],
        "Peasant": [5, 5, 5, 10, 5, 0, 5, 0, 0, 2, 0],
        "Penitent": [10, 0, 10, 10, 0, 0, 5, 0, 0, 3, 0],
        "Physician": [0, 0, 10, 10, 15, 30, 20, 15, 0, 4, 0],
        "Pilgrim": [5, 5, 5, 5, 5, 10, 10, 10, 0, 4, 0],
        "Pistolier": [20, 20, 10, 10, 15, 0, 15, 15, 1, 4, 0],
        "Pit Fighter": [15, 0, 0, 10, 10, 0, 10, 0, 0, 2, 0],
        "Politician": [5, 5, 5, 10, 0, 20, 10, 20, 0, 4, 0],
        "Prelate": [10, 10, 10, 15, 15, 20, 30, 30, 0, 6, 0],
        "Priest": [10, 10, 5, 10, 5, 10, 20, 15, 0, 4, 1],
        "Protagonist": [10, 0, 10, 0, 10, 0, 10, 0, 1, 2, 0],
        "Questing Knight": [35, 0, 20, 20, 25, 10, 25, 25, 2, 6, 0],
        "Racketeer": [20, 15, 15, 10, 10, 0, 15, 10, 1, 5, 0],
        "Raconteur": [5, 0, 0, 0, 5, 10, 10, 10, 0, 2, 0],
        "Rapscallion": [10, 5, 5, 15, 25, 10, 10, 30, 1, 4, 0],
        "Rat Catcher": [5, 10, 0, 5, 10, 0, 10, 0, 0, 2, 0],
        "Reaver": [10, 0, 10, 5, 10, 0, 0, 0, 1, 2, 0],
        "River Warden": [0, 10, 10, 5, 10, 5, 5, 0, 0, 2, 0],
        "Roadwarden": [10, 10, 5, 0, 10, 5, 5, 0, 0, 2, 0],
        "Rogue": [5, 5, 0, 0, 10, 5, 5, 10, 0, 2, 0],
        "Runebearer": [10, 0, 5, 5, 10, 5, 5, 0, 0, 2, 0],
        "Runelord": [20, 15, 20, 15, 15, 30, 40, 15, 1, 6, 4],
        "Scholar": [5, 5, 5, 5, 10, 30, 15, 15, 0, 4, 0],
        "Scourge of God": [25, 0, 25, 25, 10, 0, 30, 20, 2, 8, 0],
        "Scout": [20, 20, 10, 10, 15, 20, 15, 0, 1, 6, 0],
        "Scribe": [0, 0, 0, 0, 10, 10, 10, 5, 0, 2, 0],
        "Sea Captain": [25, 20, 15, 20, 20, 20, 25, 30, 2, 6, 0],
        "Seaman": [10, 5, 10, 0, 10, 0, 0, 0, 1, 2, 0],
        "Seer": [5, 0, 5, 0, 5, 10, 5, 10, 0, 2, 0],
        "Sergeant": [20, 15, 10, 10, 10, 10, 10, 20, 1, 4, 0],
        "Servant": [5, 0, 5, 0, 10, 5, 10, 5, 0, 2, 0],
        "Sewer Jack": [10, 5, 0, 10, 5, 0, 10, 0, 0, 2, 0],
        "Shieldbreaker": [10, 0, 5, 5, 10, 0, 5, 0, 1, 2, 0],
        "Skald": [5, 0, 5, 0, 5, 10, 5, 10, 0, 2, 0],
        "Slave": [5, 0, 5, 5, 10, 0, 5, 0, 0, 4, 0],
        "Slaver": [20, 20, 20, 0, 10, 0, 10, 0, 0, 4, 0],
        "Smuggler": [5, 5, 0, 0, 10, 10, 0, 10, 0, 2, 0],
        "Soldier": [10, 10, 0, 0, 10, 0, 5, 0, 1, 2, 0],
        "Spy": [15, 15, 5, 10, 20, 20, 35, 20, 1, 4, 0],
        "Squire": [10, 5, 5, 5, 5, 0, 0, 5, 1, 2, 0],
        "Steppes Nomad": [10, 10, 0, 5, 5, 0, 10, 0, 0, 2, 0],
        "Stevedore": [0, 5, 10, 10, 5, 0, 5, 0, 0, 2, 0],
        "Steward": [10, 10, 10, 10, 0, 30, 20, 25, 0, 4, 0],
        "Streltsi": [10, 10, 5, 5, 5, 0, 5, 0, 0, 2, 0],
        "Strigany Mystic": [5, 5, 0, 0, 5, 5, 10, 10, 0, 2, 0],
        "Student": [0, 0, 0, 0, 10, 10, 5, 10, 0, 2, 0],
        "Swamp Skimmer": [5, 5, 0, 10, 10, 10, 0, 0, 0, 2, 0],
        "Swampaire": [5, 10, 0, 5, 10, 5, 0, 0, 0, 3, 0],
        "Targeteer": [0, 40, 10, 10, 25, 10, 20, 15, 1, 4, 0],
        "Temple Guardian": [10, 5, 5, 5, 5, 0, 5, 0, 0, 2, 0],
        "Thief": [5, 5, 0, 0, 15, 5, 0, 10, 0, 2, 0],
        "Thug": [10, 0, 5, 5, 0, 0, 5, 5, 1, 2, 0],
        "Toll Keeper": [10, 5, 5, 10, 5, 0, 5, 0, 0, 2, 0],
        "Tomb Robber": [10, 0, 0, 0, 10, 10, 10, 5, 0, 2, 0],
        "Tradesman": [0, 0, 5, 5, 10, 5, 10, 0, 0, 2, 0],
        "Troll Slayer": [10, 0, 5, 5, 5, 0, 10, 0, 1, 3, 0],
        "Vagabond": [5, 10, 0, 0, 10, 5, 0, 5, 0, 2, 0],
        "Valet": [0, 0, 0, 0, 10, 10, 5, 10, 0, 2, 0],
        "Vampire Hunter": [20, 20, 10, 20, 15, 15, 20, 0, 1, 4, 0],
        "Verenean Investigator": [10, 10, 10, 10, 20, 30, 20, 20, 1, 5, 0],
        "Veteran": [20, 20, 10, 10, 15, 0, 15, 0, 1, 6, 0],
        "Village Elder": [0, 0, 0, 0, 0, 20, 20, 30, 0, 4, 0],
        "Wall Warden": [0, 10, 10, 10, 25, 20, 10, 10, 0, 4, 0],
        "Warleader": [20, 0, 20, 20, 10, 5, 10, 10, 2, 5, 0],
        "Warlock": [10, 10, 10, 10, 15, 15, 20, 20, 0, 4, 2],
        "Warrior Priest": [20, 15, 10, 10, 15, 15, 25, 15, 1, 5, 2],
        "Watchman": [10, 5, 5, 0, 5, 10, 0, 5 ,0, 2, 0],
        "Whaler": [5, 10, 10, 10, 10, 0, 0, 0, 0, 2, 0],
        "Winged Lancer": [25, 15, 15, 15, 15, 0, 15, 15, 1, 4, 0],
        "Wise Woman": [0, 0, 0, 5, 0, 15, 10, 5, 0, 2, 0],
        "Witch": [5, 5, 5, 10, 10, 10, 15, 15, 0, 4, 2],
        "Wtich Hunter": [30, 30, 15, 15, 15, 15, 35, 20, 2, 6, 0],
        "Wizard Lord": [15, 15, 5, 15, 20, 35, 40, 20, 0, 5, 4],
        "Woodsman": [10, 0, 10, 0, 5, 0, 10, 0, 0, 3, 0],
        "Wrecker": [5, 10, 0, 5, 5, 0, 5, 5, 0, 2, 0],
        "Yeoman": [25, 10, 10, 10, 10, 10, 10, 0, 1, 6, 0],
        "Zealot": [10, 0, 5, 10, 0, 0, 10, 5, 0, 2, 0],
    }


    const career_advance = {
        "Abbot": [10, 0, 10, 10, 10, 30, 25, 20, 0, 6, 0],
        "Admiral": [25, 20, 15, 15, 15, 30, 30, 35, 1, 6, 0],
        "Agent of the Shroud": [15, 10, 10, 10, 20, 20, 30, 10, 1, 4, 0],
        "Agitator": [5, 5, 0, 0, 5, 10, 0, 10, 0, 2, 0],
        "Ambassador": [10, 10, 5, 10, 10, 30, 30, 40, 0, 6, 0],
        "Anchorite": [0, 5, 5, 10, 10, 0, 10, 0, 0, 2, 0],
        "Animal Trainer": [10, 10, 10, 10, 15, 10, 10, 15, 0, 4, 0],
        "Anointed Priest": [15, 15, 10, 10, 10, 15, 25, 20, 1, 5, 2],
        "Apothecary": [0, 0, 0, 5, 5, 10, 10, 5, 0, 2, 0],
        "Apprentice Runesmith": [5, 0, 5, 0, 0, 10, 15, 0, 0, 2, 1],
        "Apprentice Witch": [0, 0, 0, 10, 5, 10, 10, 0, 0, 2, 1],
        "Apprentice Wizard": [0, 0, 0, 0, 5, 10, 15, 5, 0, 2, 1],
        "Artillerist": [15, 25, 10, 10, 15, 30, 15, 0, 0, 5, 0],
        "Artisan": [0, 0, 10, 10, 20, 10, 10, 10, 0, 3, 0],
        "Assassin": [25,  25,  10,  10,  30,  20,  10,  20, 2, 4, 0],
        "Astrologer": [5, 5, 0, 5, 10, 25, 20, 20, 0, 4, 0],
        "Ataman": [10, 10, 5, 15, 5, 30, 20, 25, 0, 4, 0],
        "Badlander": [5, 5, 10, 0, 10, 5, 0, 0, 0, 2, 0],
        "Badlands Ranger": [20, 20, 10, 20, 25, 20, 20, 5, 0, 7, 0],
        "Bailiff": [5, 5, 5, 0, 0, 10, 5, 10, 0, 2, 0],
        "Barber-Surgeon": [5, 0, 0, 0, 10, 10, 10, 5, 0, 2, 0],
        "Batlle Pilgrim": [20, 10, 10, 10, 15, 10, 10, 10, 1, 6, 0],
        "Bear Tamer": [5, 0, 10, 5, 5, 0, 10, 5, 0, 2, 0],
        "Black Guard": [25, 15, 10, 15, 15, 5, 20, 0, 1, 4, 0],
        "Boatman": [10, 5, 5, 5, 10, 5, 0, 0, 0, 2, 0],
        "Bodyguard": [10, 0, 5, 5, 5, 0, 0, 0, 1, 3, 0],
        "Bondsman": [10, 5, 5, 5, 5, 0, 5, 0, 1, 2, 0],
        "Bonepicker": [5, 0, 5, 10, 5, 0, 5, 5, 0, 2, 0],
        "Border Courtier": [15, 5, 10, 15, 15, 20, 20, 10, 0, 4, 0],
        "Bounty Hunter": [5, 10, 5, 0, 10, 0, 5, 0, 0, 2, 0],
        "Burgher": [5, 0, 0, 0, 5, 10, 5, 5, 0, 2, 0],
        "Cadet": [5, 5, 0, 0, 5, 10, 5, 10, 0, 2, 0],
        "Camp Follower": [0, 0, 0, 5, 10, 5, 5, 10, 0, 2, 0],
        "Cantor": [10, 10, 0, 0, 15, 10, 15, 20, 0, 4, 0],
        "Captain": [30, 20, 20, 20, 20, 15, 15, 25, 2, 7, 0],
        "Carcassone Shepherd": [5, 10, 0, 0, 10, 5, 0, 0, 1, 2, 0],
        "Cartographer": [5, 0, 0, 5, 5, 10, 5, 5, 0, 2, 0],
        "Cat Burglar": [10, 10, 5, 5, 25, 10, 10, 0, 0, 4, 0],
        "Catehist": [0, 0, 5, 5, 10, 20, 15, 10, 0, 4, 0],
        "Cenobite": [5, 0, 5, 10, 0, 5, 10, 5, 0, 2, 0],
        "Champion": [40, 40, 25, 25, 30, 0, 20, 0, 2, 8, 0],
        "Charcoal-Burner": [5, 0, 5, 5, 5, 5, 5, 5, 0, 2, 0],
        "Charlatan": [10, 10, 5, 10, 15, 15, 15, 25, 0, 4, 0],
        "Chekist": [10, 5, 5, 5, 5, 5, 5, 0, 0, 2, 0],
        "Chimneysweep": [5, 0, 5, 5, 5, 0, 5, 5, 0, 2, 0],
        "Cloaked Brother": [15, 10, 15, 15, 25, 30, 25, 30, 1, 6, 0],
        "Coachman": [5, 10, 0, 0, 10, 0, 5, 5, 0, 2, 0],
        "Courtier": [5, 5, 0, 0, 10, 20, 20, 20, 0, 4, 0],
        "Crime Lord": [20, 20, 15, 15, 20, 25, 20, 30, 1, 6, 0],
        "Crusader": [30, 10, 20, 20, 20, 20, 25, 15, 2, 8, 0],
        "Cult Attendant": [10, 10, 5, 5, 0, 20, 15, 10, 0, 4, 0],
        "Daemon Slayer": [40, 0, 30, 30, 20, 0, 30, 0, 2, 8, 0],
        "Deepwatcher": [10, 0, 5, 5, 5, 0, 5, 0, 1, 2, 0],
        "Demagogue": [10, 10, 0, 10, 15, 20, 15, 30, 1, 4, 0],
        "Dilettante": [5, 5, 5, 5, 5, 5, 5, 5, 0, 2, 0],
        "Drover": [5, 10, 10, 5, 10, 0, 5, 0, 0, 2, 0],
        "Duellist": [20, 20, 10, 20, 20, 15, 15, 10, 1, 4, 0],
        "Dung Collector": [5, 0, 5, 10, 5, 0, 5, 0, 0, 2, 0],
        "Embalmer": [0, 0, 5, 5, 0, 15, 10, 5, 0, 2, 0],
        "Enforcer": [20, 20, 10, 10, 10, 20, 10, 5, 1, 4, 0],
        "Engineer": [10, 15, 5, 5, 10, 20, 10, 0, 0, 4, 0],
        "Entertainer": [5, 10, 0, 0, 10, 0, 5, 10, 0, 2, 0],
        "Envoy": [5, 5, 0, 0, 5, 10, 5, 10, 0, 2, 0],
        "Estalian Diestro": [15, 0, 5, 5, 10, 5, 0, 0, 1, 2, 0],
        "Ex-Convict": [10, 0, 5, 10, 5, 0, 10, 0, 0, 2, 0],
        "Exciseman": [10, 0, 0, 0, 10, 10, 5, 5, 0, 2, 0],
        "Exorcist": [0, 0, 10, 15, 15, 20, 35, 20, 1, 6, 2],
        "Explorer": [20, 20, 10, 15, 15, 25, 20, 15, 1, 6, 0],
        "Faceless": [10, 30, 10, 20, 10, 10, 10, 35, 2, 6, 0],
        "Farmer": [5, 5, 10, 10, 5, 0, 5, 0, 0, 2, 0],
        "Fence": [15, 10, 10, 5, 10, 5, 10, 10, 1, 4, 0],
        "Ferryman": [5, 5, 10, 5, 5, 5, 0, 0, 0, 2, 0],
        "Fieldwarden": [5, 10, 0, 5, 10, 0, 10, 0, 0, 2, 0],
        "Fisherman": [0, 5, 10, 5, 10, 5, 0, 0, 0, 2, 0],
        "Flagellant": [15, 0, 10, 15, 5, 0, 20, 10, 1, 6, 0],
        "Foreman": [10, 5, 10, 10, 5, 5, 15, 15, 0, 4, 0],
        "Forger": [5, 5, 10, 10, 20, 20, 10, 10, 0, 3, 0],
        "Freeholder": [5, 10, 0, 0, 10, 5, 10, 10, 0, 3, 0],
        "Friar": [10, 0, 5, 10, 0, 15, 15, 15, 0, 4, 0],
        "Frogwife": [0, 0, 0, 5, 10, 5, 10, 5, 0, 2, 0],
        "Gambler": [5, 5, 0, 0, 10, 10, 0, 10, 0, 2, 0],
        "Ghost Strider": [20, 30, 15, 15, 25, 20, 20, 0, 2, 6, 0],
        "Giant Slayer": [25, 0, 15, 15, 10, 0, 20, 0, 1, 6, 0],
        "Grail Knight": [40, 0, 30, 30, 25, 10, 25, 25, 2, 8, 0],
        "Grail Pilgrim": [10, 5, 5, 5, 5, 0, 0, 5, 0, 2, 0],
        "Grandmaster": [40, 15, 25, 25, 25, 15, 30, 20, 2, 8, 0],
        "Grave Robber": [5, 5, 5, 0, 10, 0, 10, 0, 0, 2, 0],
        "Grave Warden" : [5, 5, 10, 10, 0, 0, 10, 0, 0, 2, 0],
        "Guild Master": [10, 10, 0, 10, 15, 30, 20, 35, 1, 5, 0],
        "Hag Mother": [0, 0, 5, 20, 10, 40, 30, 15, 0, 6, 3],
        "Hag Witch": [0, 0, 5, 10, 5, 25, 20, 10, 0, 4, 1],
        "Hedge Wizard": [0, 0, 0, 5, 5, 5, 10, 10, 0, 2, 1],
        "Hedgecraft Apprentice": [0, 0, 5, 0, 0, 10, 5, 10, 0, 2, 1],
        "Hedge Master": [0, 0, 5, 5, 5, 20, 20, 20, 0, 3, 2],
        "Hedgewise": [0, 0, 5, 10, 15, 35, 35, 35, 0, 5, 3],
        "Herald": [10, 10, 5, 5, 15, 15, 10, 20, 0, 4, 0],
        "Herrimault": [5, 10, 0, 0, 10, 0, 0, 10, 1, 2, 0],
        "High Priest": [20, 20, 15, 15, 15, 20, 30, 25, 1, 6, 3],
        "Highwayman": [20, 20, 10, 10, 30, 20, 15, 25, 1, 4, 0],
        "Horned Hunter": [5, 5, 10, 0, 5, 0, 10, 0, 0, 3, 0],
        "Horse Archer": [15, 25, 15, 15, 15, 0, 15, 5, 1, 4, 0],
        "Horse Coper": [0, 5, 5, 0, 5, 5, 5, 15, 0, 2, 0],
        "Horse Master": [5, 15, 15, 10, 15, 20, 15, 25, 0, 5, 0],
        "Hunter": [0, 15, 0, 5, 10, 5, 0, 0, 0, 3, 0],
        "Ice Maiden": [5, 0, 0, 10, 5, 20, 25, 10, 0, 4, 2],
        "Ice Witch": [15, 0, 5, 20, 15, 30, 40, 15, 0, 6, 4],
        "Initiate": [5, 5, 0, 5, 0, 10, 10, 10, 0, 2, 0],
        "Innkeeper": [10, 5, 5, 10, 20, 10, 10, 20, 0, 4, 0],
        "Interrogator": [15, 0, 20, 10, 10, 10, 20, 15, 0, 4, 0],
        "Jailer": [10, 0, 10, 10, 0, 0, 5, 0, 0, 3, 0],
        "Journeyman Runesmith": [10, 5, 10, 5, 5, 20, 25, 5, 0, 3, 2],
        "Journeyman Wizard": [5, 5, 0, 5, 10, 20, 25, 10, 0, 3, 2],
        "Judical Champion": [35, 0, 15, 15, 20, 10, 15, 0, 2, 6, 0],
        "Killer of the Dead": [35, 35, 15, 20, 20, 15, 30, 5, 2, 6, 0],
        "Kislevite Kossar": [10, 10, 0, 10, 0, 0, 10, 0, 0 , 2, 0],
        "Kithband Warrior": [5, 5, 0, 0, 10, 10, 5, 0, 0, 2, 0],
        "Knight": [25, 0, 15, 15, 15, 5, 15, 5, 1, 4, 0],
        "Knight Errant": [15, 0, 5, 5, 5, 0, 5, 5, 1, 2, 0],
        "Knight of the Blazing Sun": [25, 0, 10, 20, 20, 10, 15, 10, 1, 5, 0],
        "Knight of the Inner Circle": [35, 10, 20, 20, 20, 15, 25, 15, 2, 8, 0],
        "Knight of the Raven": [35, 15, 20, 20, 20, 15, 35, 10, 2, 8, 0],
        "Knight of the Realm": [25, 0, 15, 15, 15, 0, 10, 15, 1, 4, 0],
        "Knight of the Verdant Field": [20, 20, 15, 15, 10, 5, 10, 5, 1, 4, 0],
        "Knight Panther": [30, 0, 15, 15, 15, 10, 10, 15, 1, 6, 0],
        "Lamplighter": [5, 0, 5, 0, 10, 5, 5, 5, 0, 2, 0],
        "Lay Priest": [15, 10, 5, 10, 10, 15, 20, 20, 0, 6, 0],
        "Litigant": [0, 0, 0, 0, 5, 10, 10, 10, 0, 2, 0],
        "Man-at-Arms": [10, 0, 5, 10, 10, 0, 0, 0, 0, 2, 0],
        "Marauder": [10, 0, 5, 5, 10, 0, 10, 0, 1, 2, 0],
        "Marine": [10, 10, 10, 0, 5, 0, 5, 0, 1, 3, 0],
        "Master Runesmith": [15, 10, 15, 10, 10, 25, 35, 10, 1, 5, 3],
        "Master Thief": [20, 20, 10, 10, 40, 25, 20, 25, 1, 6, 0],
        "Master Vigilant": [15, 10, 5, 10, 20, 25, 30, 15, 0, 5, 3],
        "Master Wizard": [10, 10, 0, 10, 15, 30, 35, 15, 0, 4, 3],
        "Mate": [15, 15, 10, 15, 10, 10, 10, 10, 1, 4, 0],
        "Mediator": [0, 0, 0, 0, 0, 10, 10, 10, 0, 2, 0],
        "Mercenary": [10, 10, 5, 5, 5, 0, 5, 0, 1, 2, 0],
        "Merchant": [10, 10, 5, 5, 10, 25, 20, 20, 0, 4, 0],
        "Messenger": [5, 5, 0, 5, 10, 5, 5, 0, 0, 2, 0],
        "Militiaman": [10, 5, 5, 5, 10, 0, 0, 0, 0, 2, 0],
        "Miner": [5, 5, 10, 5, 0, 5, 5, 0, 0, 2, 0],
        "Minstrel": [10, 10, 0, 0, 15, 10, 5, 25, 0, 4, 0],
        "Monk": [5, 0, 5, 5, 10, 25, 15, 15, 0, 4, 0],
        "Muleskinner": [5, 10, 0, 5, 10, 10, 5, 0, 0, 2, 0],
        "Mystic": [0, 0, 0, 10, 10, 10, 15, 15, 0, 4, 0],
        "Navigator": [10, 10, 5, 5, 10, 25, 10, 5, 0, 4, 0],
        "Newssheet Vendor": [5, 5, 0, 0, 10, 5, 0, 10, 0, 2, 0],
        "Noble": [10, 5, 0, 0, 5, 5, 5, 10, 0, 2, 0],
        "Noble Lord": [25, 15, 10, 10, 10, 20, 20, 30, 1, 6, 0],
        "Norse Berserker": [15, 0, 10, 10, 0, 0, 10, 0, 0, 2, 0],
        "Outlaw": [10, 10, 0, 0, 10, 5, 0, 0, 1, 2, 0],
        "Outlaw Chief": [20, 30, 10, 20, 10, 10, 10, 20, 2, 6, 0],
        "Outrider": [5, 10, 0, 0, 10, 10, 5, 0, 0, 2, 0],
        "Pamphleter": [5, 5, 5, 10, 15, 25, 20, 20, 0, 4, 0],
        "Peasant": [5, 5, 5, 10, 5, 0, 5, 0, 0, 2, 0],
        "Penitent": [10, 0, 10, 10, 0, 0, 5, 0, 0, 3, 0],
        "Physician": [0, 0, 10, 10, 15, 30, 20, 15, 0, 4, 0],
        "Pilgrim": [5, 5, 5, 5, 5, 10, 10, 10, 0, 4, 0],
        "Pistolier": [20, 20, 10, 10, 15, 0, 15, 15, 1, 4, 0],
        "Pit Fighter": [15, 0, 0, 10, 10, 0, 10, 0, 0, 2, 0],
        "Politician": [5, 5, 5, 10, 0, 20, 10, 20, 0, 4, 0],
        "Prelate": [10, 10, 10, 15, 15, 20, 30, 30, 0, 6, 0],
        "Priest": [10, 10, 5, 10, 5, 10, 20, 15, 0, 4, 1],
        "Protagonist": [10, 0, 10, 0, 10, 0, 10, 0, 1, 2, 0],
        "Questing Knight": [35, 0, 20, 20, 25, 10, 25, 25, 2, 6, 0],
        "Racketeer": [20, 15, 15, 10, 10, 0, 15, 10, 1, 5, 0],
        "Raconteur": [5, 0, 0, 0, 5, 10, 10, 10, 0, 2, 0],
        "Rapscallion": [10, 5, 5, 15, 25, 10, 10, 30, 1, 4, 0],
        "Rat Catcher": [5, 10, 0, 5, 10, 0, 10, 0, 0, 2, 0],
        "Reaver": [10, 0, 10, 5, 10, 0, 0, 0, 1, 2, 0],
        "River Warden": [0, 10, 10, 5, 10, 5, 5, 0, 0, 2, 0],
        "Roadwarden": [10, 10, 5, 0, 10, 5, 5, 0, 0, 2, 0],
        "Rogue": [5, 5, 0, 0, 10, 5, 5, 10, 0, 2, 0],
        "Runebearer": [10, 0, 5, 5, 10, 5, 5, 0, 0, 2, 0],
        "Runelord": [20, 15, 20, 15, 15, 30, 40, 15, 1, 6, 4],
        "Scholar": [5, 5, 5, 5, 10, 30, 15, 15, 0, 4, 0],
        "Scourge of God": [25, 0, 25, 25, 10, 0, 30, 20, 2, 8, 0],
        "Scout": [20, 20, 10, 10, 15, 20, 15, 0, 1, 6, 0],
        "Scribe": [0, 0, 0, 0, 10, 10, 10, 5, 0, 2, 0],
        "Sea Captain": [25, 20, 15, 20, 20, 20, 25, 30, 2, 6, 0],
        "Seaman": [10, 5, 10, 0, 10, 0, 0, 0, 1, 2, 0],
        "Seer": [5, 0, 5, 0, 5, 10, 5, 10, 0, 2, 0],
        "Sergeant": [20, 15, 10, 10, 10, 10, 10, 20, 1, 4, 0],
        "Servant": [5, 0, 5, 0, 10, 5, 10, 5, 0, 2, 0],
        "Sewer Jack": [10, 5, 0, 10, 5, 0, 10, 0, 0, 2, 0],
        "Shieldbreaker": [10, 0, 5, 5, 10, 0, 5, 0, 1, 2, 0],
        "Skald": [5, 0, 5, 0, 5, 10, 5, 10, 0, 2, 0],
        "Slave": [5, 0, 5, 5, 10, 0, 5, 0, 0, 4, 0],
        "Slaver": [20, 20, 20, 0, 10, 0, 10, 0, 0, 4, 0],
        "Smuggler": [5, 5, 0, 0, 10, 10, 0, 10, 0, 2, 0],
        "Soldier": [10, 10, 0, 0, 10, 0, 5, 0, 1, 2, 0],
        "Spy": [15, 15, 5, 10, 20, 20, 35, 20, 1, 4, 0],
        "Squire": [10, 5, 5, 5, 5, 0, 0, 5, 1, 2, 0],
        "Steppes Nomad": [10, 10, 0, 5, 5, 0, 10, 0, 0, 2, 0],
        "Stevedore": [0, 5, 10, 10, 5, 0, 5, 0, 0, 2, 0],
        "Steward": [10, 10, 10, 10, 0, 30, 20, 25, 0, 4, 0],
        "Streltsi": [10, 10, 5, 5, 5, 0, 5, 0, 0, 2, 0],
        "Strigany Mystic": [5, 5, 0, 0, 5, 5, 10, 10, 0, 2, 0],
        "Student": [0, 0, 0, 0, 10, 10, 5, 10, 0, 2, 0],
        "Swamp Skimmer": [5, 5, 0, 10, 10, 10, 0, 0, 0, 2, 0],
        "Swampaire": [5, 10, 0, 5, 10, 5, 0, 0, 0, 3, 0],
        "Targeteer": [0, 40, 10, 10, 25, 10, 20, 15, 1, 4, 0],
        "Temple Guardian": [10, 5, 5, 5, 5, 0, 5, 0, 0, 2, 0],
        "Thief": [5, 5, 0, 0, 15, 5, 0, 10, 0, 2, 0],
        "Thug": [10, 0, 5, 5, 0, 0, 5, 5, 1, 2, 0],
        "Toll Keeper": [10, 5, 5, 10, 5, 0, 5, 0, 0, 2, 0],
        "Tomb Robber": [10, 0, 0, 0, 10, 10, 10, 5, 0, 2, 0],
        "Tradesman": [0, 0, 5, 5, 10, 5, 10, 0, 0, 2, 0],
        "Troll Slayer": [10, 0, 5, 5, 5, 0, 10, 0, 1, 3, 0],
        "Vagabond": [5, 10, 0, 0, 10, 5, 0, 5, 0, 2, 0],
        "Valet": [0, 0, 0, 0, 10, 10, 5, 10, 0, 2, 0],
        "Vampire Hunter": [20, 20, 10, 20, 15, 15, 20, 0, 1, 4, 0],
        "Verenean Investigator": [10, 10, 10, 10, 20, 30, 20, 20, 1, 5, 0],
        "Veteran": [20, 20, 10, 10, 15, 0, 15, 0, 1, 6, 0],
        "Village Elder": [0, 0, 0, 0, 0, 20, 20, 30, 0, 4, 0],
        "Wall Warden": [0, 10, 10, 10, 25, 20, 10, 10, 0, 4, 0],
        "Warleader": [20, 0, 20, 20, 10, 5, 10, 10, 2, 5, 0],
        "Warlock": [10, 10, 10, 10, 15, 15, 20, 20, 0, 4, 2],
        "Warrior Priest": [20, 15, 10, 10, 15, 15, 25, 15, 1, 5, 2],
        "Watchman": [10, 5, 5, 0, 5, 10, 0, 5 ,0, 2, 0],
        "Whaler": [5, 10, 10, 10, 10, 0, 0, 0, 0, 2, 0],
        "Winged Lancer": [25, 15, 15, 15, 15, 0, 15, 15, 1, 4, 0],
        "Wise Woman": [0, 0, 0, 5, 0, 15, 10, 5, 0, 2, 0],
        "Witch": [5, 5, 5, 10, 10, 10, 15, 15, 0, 4, 2],
        "Wtich Hunter": [30, 30, 15, 15, 15, 15, 35, 20, 2, 6, 0],
        "Wizard Lord": [15, 15, 5, 15, 20, 35, 40, 20, 0, 5, 4],
        "Woodsman": [10, 0, 10, 0, 5, 0, 10, 0, 0, 3, 0],
        "Wrecker": [5, 10, 0, 5, 5, 0, 5, 5, 0, 2, 0],
        "Yeoman": [25, 10, 10, 10, 10, 10, 10, 0, 1, 6, 0],
        "Zealot": [10, 0, 5, 10, 0, 0, 10, 5, 0, 2, 0],
    }

    let career_race_sensitive = document.getElementById("career_race_sensitive");
    var random_index
    var career_count = career.length;
    let prevent_career = document.getElementById("prevent_career");

    function populate_career_dropdown(selected_race){
        career.innerHTML = '';

        const options = career_by_race[selected_race];

        options.forEach(optionText => {
            const option = document.createElement('option');
            option.value = optionText;
            option.textContent = optionText;
            career.appendChild(option);
        });
    }

    /*if (prevent_career.checked){
        career_race_sensitive.checked = false;
    }*/

    //Ogólnie tu coś zjebałem, czasem się nie wybiera profesja przy zmianie rasy
    //Próbowałem naprawić i teraz po prostu się czasem nie wybiera xD
    //Komentuje zmiany, powodzenia jutro

    race.addEventListener('change', function (){
        var curr_career = career.value;
        var last_career_length = career.length;
        const selectedValue = race.value;
        if (career_race_sensitive.checked == false){
            populate_career_dropdown("master")
        }
        else{
            populate_career_dropdown(selectedValue);
        }

        if (prevent_career.checked == false){
            random_index = Math.floor(Math.random()*career_count);
            career_dropdown.prop('selectedIndex', random_index);
        } 
        /*else{
            random_index = Math.ceil(career.length*random_index/last_career_length);
            career_dropdown.prop('selectedIndex', random_index);
            console.log(random_index)
        }*/
    });


    if (career_race_sensitive.checked == false){
        populate_career_dropdown("master")
    }
    else{
        populate_career_dropdown(race.value);
    }

    var career_dropdown = $('#career_dropdown');
    
  

    if (prevent_career.checked == false){
        random_index = Math.floor(Math.random()*career_count);
        career_dropdown.prop('selectedIndex', random_index);
    } else {
        career_dropdown.prop('selectedIndex', random_index);
    }

    //console.log(random_index);

    var starting_wounds = document.getElementById("starting_wounds");

    const starting_wounds_array = {
        dwarf:[11, 12, 13, 14],
        elf:[9, 10, 11, 12],
        halfling:[8, 9, 10, 11],
        human:[10, 11, 12, 13]
    }

    if (prevent_characteristics.checked == false){
        d10 = roll_d10();
        if(d10 <= 3) {
            starting_wounds.value = starting_wounds_array[race.value][0];
        }
        else if(d10 >= 4 && d10 <= 6 ) {
            starting_wounds.value = starting_wounds_array[race.value][1];
        }
        else if(d10 >= 7 && d10 <= 9 ) {
            starting_wounds.value = starting_wounds_array[race.value][2];
        }
        else if(d10 == 10 ) {
            starting_wounds.value = starting_wounds_array[race.value][3];
        }
    

        const base_characteristics_array = {
            dwarf:[30, 20, 20, 30, 10, 20, 20, 10],
            elf:[20, 30, 20, 20, 30, 20, 20, 20],
            halfling:[10, 30, 10, 10, 30, 20, 20, 30],
            human:[20, 20, 20, 20, 20, 20, 20, 20]
        };


        for(var i = 1; i <= 8; i++){
            var char_id = 'char' + i;

            var char = document.getElementById(char_id);

            d10 = roll_d10();
            let td10 = roll_d10();
            let roll = d10 + td10;

            char.value = base_characteristics_array[race.value][i-1] + roll;
        }

        for (i = 1; i <= 11; i++){
            var adv_id = 'adv' + i;

            var adv = document.getElementById(adv_id);
            
            adv.value = career_advance[career.value][i-1];
        }

        if (career.value == "Runebearer"){
            adv = document.getElementById("adv_mov");
            adv.value = 1;
        } 
        else {
            adv = document.getElementById("adv_mov");
            adv.value = 0;
        }

        let toughness_bonus = document.getElementById("TB");
        let strength_bonus = document.getElementById("SB");

        toughness_bonus.value = Math.floor(document.getElementById("char4").value/10);
        strength_bonus.value = Math.floor(document.getElementById("char3").value/10);

        const movement_array = {
            dwarf: 3,
            elf: 5,
            halfling: 4,
            human:3
        };

        let movement = document.getElementById("mov");
        movement.value = movement_array[race.value];

        const fate_points_array = {
            dwarf:[1, 2, 3],
            elf:[1, 2, 2],
            halfling:[2, 2, 3],
            human:[2, 3, 3]
        }
    
        let fate_points = document.getElementById("fate_points");

        d10 = roll_d10();
        if (d10 <= 4){
            fate_points.value = fate_points_array[race.value][0];
        } else if (d10 <= 7){
            fate_points.value = fate_points_array[race.value][1];
        } else if (d10 <= 10){
            fate_points.value = fate_points_array[race.value][2];
        }
    }

    if (prevent_physical.checked == false){
        const age_array={
            dwarf:[20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 105, 110, 115],
            elf:[30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 105, 110, 115, 120, 125],
            halfling:[20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 50, 52, 54, 56, 58, 60],
            human:[16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35]
        }

        let age = document.getElementById("age");

        let d100 = roll_d100();

        for (i = 1; i <= 20; i++){
            if (d100 <= i*5){
                age.value = age_array[race.value][i-1];
                 break;
            }
        }

        const eye_colour_array = {
            dwarf:["Pale Grey", "Blue", "Copper", "Light Brown", "Light Brown", "Brown", "Brown", "Dark Brown", "Dark Brown", "Purple"],
            elf:["Grey Blue", "Blue", "Green", "Copper", "Light Brown", "Brown", "Dark Brown", "Silver", "Purple", "Black"],
            halfling:["Blue", "Hazel", "Hazel", "Light Brown", "Light Brown", "Brown", "Brown", "Dark Brown", "Dark Brown", "Dark Brown"],
            human:["Pale Grey", "Grey Blue", "Blue", "Green", "Copper", "Light Brown", "Brown", "Dark Brown", "Purple", "Black"]
        }

        eye_colour = document.getElementById("eye_colour");

        d10 = roll_d10();

        for (i = 1; i <= 10; i++){
            if (d10 == i){
                eye_colour.value = eye_colour_array[race.value][i-1];
            }
        }
    
        const hair_colour_array = {
            dwarf:["Ash Blond", "Yellow", "Red", "Copper", "Light Brown", "Brown", "Brown", "Dark Brown", "Blue Black", "Black"],
            elf:["Silver", "Ash Blond", "Corn", "Yellow", "Copper", "Light Brown", "Light Brown", "Brown", "Dark Brown", "Black"],
            halfling:["Ash Blond", "Corn", "Yellow", "Yellow", "Copper", "Red", "Light Brown", "Brown", "Dark Brown", "Black"],
            human:["Ash blond", "Corn", "Yellow", "Copper", "Red", "Light Brown", "Brown", "Brown", "Dark Brown", "Black"]
        }

        let hair_colour = document.getElementById("hair_colour");

        d10 = roll_d10();


        for (i = 1; i <= 10; i++){
            if (d10 == i){
                hair_colour.value = hair_colour_array[race.value][i-1];
            }
        }

        const weight_array = {
            dwarf:[90, 95, 100, 105, 110, 115, 120, 125, 130, 135, 140, 145, 150, 155, 160, 165, 170, 175, 180, 185],
            elf:[80, 85, 90, 95, 100, 105, 110, 115, 120, 125, 130, 135, 140, 145, 150, 155, 160, 165, 170, 175],
            halfling:[75, 75, 80, 80, 85, 85, 90, 90, 95, 100, 100, 105, 110, 115, 120, 125, 130, 135, 140, 145],
            human:[105, 110, 115, 120, 125, 130, 135, 140, 145, 150, 155, 160, 165, 170, 175, 180, 190, 200, 210, 220]
        }

        let weight_table = weight_array[race.value];

        let weight = document.getElementById("weight");

        d100 = roll_d100();

        if (d100 == 1){
            weight.value = weight_table[0];
        }
        else if (d100 >= 2 && d100 <= 3){
            weight.value = weight_table[1];
        }
        else if (d100 >= 4 && d100 <= 5){
            weight.value = weight_table[2];
        }
        else if (d100 >= 6 && d100 <= 8){
            weight.value = weight_table[3];
        }
        else if (d100 >= 9 && d100 <= 12){
            weight.value = weight_table[4];
        }
        else if (d100 >= 13 && d100 <=17){
            weight.value = weight_table[5];
        }
        else if (d100 >= 18 && d100 <= 22){
            weight.value = weight_table[6];
        }
        else if (d100 >= 23 && d100 <= 29){
            weight.value = weight_table[7];
        }
        else if (d100 >= 30 && d100 <= 37){
            weight.value = weight_table[8];
        }
        else if (d100 >= 38 && d100 <= 49){
            weight.value = weight_table[9];
        }
        else if (d100 >= 50 && d100 <= 64){
            weight.value = weight_table[10];
        }
        else if (d100 >= 65 && d100 <= 71){
            weight.value = weight_table[11];
        }
        else if (d100 >= 72 && d100 <= 78){
            weight.value = weight_table[12];
        }
        else if (d100 >= 79 && d100 <= 83){
            weight.value = weight_table[13];
        }
        else if (d100 >= 84 && d100 <= 88){
            weight.value = weight_table[14];
        }   
        else if (d100 >= 89 && d100 <= 92){
            weight.value = weight_table[15];
        }
        else if (d100 >= 93 && d100 <= 95){
            weight.value = weight_table[16];
        }
        else if (d100 >= 96 && d100 <= 97){
            weight.value = weight_table[17];
        }
        else if (d100 >= 98 && d100 <= 99){
            weight.value = weight_table[18];
        }
        else if (d100 == 100){
            weight.value = weight_table[19];
        }

        const height_array = {
            dwarf:[50, 52],
            elf:[64, 66],
            halfling:[38, 40],
            human:[61, 64]
        }

        var height = document.getElementById("height");
        d10 = roll_d10();
        height.value = Math.floor((height_array[race.value][sex.selectedIndex] + d10)/12)+"' "+(height_array[race.value][sex.selectedIndex] + d10)%12+"''";

        const star_sign_table = ["Wymund the Anchorite", "The Big Cross", "The Limner's Line", "Gnuthus the Ox", "Dragomas the Drake", "The Gloaming", "Grungni's Baldric", "Mammit the Wise", "Mummit the Fool", "The Two Bullocks", "The Dancer", "The Drummer", 
        "The Piper", "Vobist the Faint", "The Broken Cart", "The Greased Goat", "Rhya's Cauldron", "Cackelfax the Cockerel", "The Bonesaw", "The Witching Star"];
        var star_sign = document.getElementById("star_sign");

        star_sign.innerHTML = '';
        star_sign_table.forEach(optionText => {
            const option = document.createElement('option');
            option.value = optionText;
            option.textContent = optionText;
            star_sign.appendChild(option);
        });

        d100 = roll_d100();
        if (d100 >= 1 && d100 <= 5){
            star_sign.selectedIndex = 0;
        }
        else if (d100 >= 6 && d100 <= 10){
            star_sign.selectedIndex = 1;
        } 
        else if (d100 >= 11 && d100 <= 15){
            star_sign.selectedIndex = 2;
        }
        else if (d100 >= 16 && d100 <= 25){
            star_sign.selectedIndex = 3;
        }
        else if (d100 >= 26 && d100 <= 30){
            star_sign.selectedIndex = 4;
        }
        else if (d100 >= 31 && d100 <= 35){
            star_sign.selectedIndex = 5;
        }
        else if (d100 >= 36 && d100 <= 40){
            star_sign.selectedIndex = 6;
        }
        else if (d100 >= 41 && d100 <= 45){
            star_sign.selectedIndex = 7;
        }
        else if (d100 >= 46 && d100 <= 50){
            star_sign.selectedIndex = 8;
        }
        else if (d100 >= 51 && d100 <= 55){
            star_sign.selectedIndex = 9;
        }
        else if (d100 >= 56 && d100 <= 60){
            star_sign.selectedIndex = 10;
        }
        else if (d100 >= 61 && d100 <= 65){
            star_sign.selectedIndex = 11;
        }
        else if (d100 >= 66 && d100 <= 70){
            star_sign.selectedIndex = 12;
        }
        else if (d100 >= 71 && d100 <= 75){
            star_sign.selectedIndex = 13;
        }
        else if (d100 >= 76 && d100 <= 80){
            star_sign.selectedIndex = 14;
        }
        else if (d100 >= 81 && d100 <= 85){
            star_sign.selectedIndex = 15;
        }
        else if (d100 >= 86 && d100 <= 90){
            star_sign.selectedIndex = 16;
        }
        else if (d100 >= 91 && d100 <= 95){
            star_sign.selectedIndex = 17;
        }
        else if (d100 >= 96 && d100 <= 98){
            star_sign.selectedIndex = 18;
        }
        else if (d100 >= 98 && d100 <= 100){
            star_sign.selectedIndex = 19;
        }


        const human_birthplace_province = ["Averland", "Hochland", "Middenland", "Nordland", "Ostermark", "Ostland", "Reikland", "Stirland", "Talabecland", "Wissenland"];
        const human_birthplace_settlement = ["City", "Prosperous Town", "Market Town", "Fortified Town", "Farming Village", "Poor Village", "Small Settlement", "Pig/Cattle Farm", "Arable Farm", "Hovel"];
        const dwarf_birthplace = ["Karak Norn", "Karak Izor", "Karak Hirn", "Karak Kadrin", "Karaz-A-Karak", "Zhufbar", "Barak Varr"]
        const elf_birthplace = ["City of Altdorf", "City of Marienburg", "Laurelorn Forest", "The Great Forest", "Reikwald Forest"];

        var birthplace_1 = document.getElementById("birthplace_1");
        var birthplace_2 = document.getElementById("birthplace_2");


        if (race.value == "human"){
            d10 = roll_d10();
            birthplace_1.value = human_birthplace_settlement[d10-1];
            d10 = roll_d10();
            birthplace_2.value = human_birthplace_province[d10-1];
        } else if (race.value == "dwarf"){
            birthplace_1.value = '';
            d100 = roll_d100();
            if (d100 <= 30){
                d10 = roll_d10();
                birthplace_1.value = human_birthplace_settlement[d10-1];
                d10 = roll_d10();
                birthplace_2.value = human_birthplace_province[d10-1];
            }
            else {
                i = 1;
                while (d100 >= 30+10*i){
                    i++;
                }
                birthplace_2.value = dwarf_birthplace[i-1];
            }
        } else if (race.value == "elf"){
            birthplace_1.value = '';
            d100 = roll_d100();
            if (d100 <= 20){
                birthplace_2.value = elf_birthplace[0];
            }
            else if (d100 <= 40){
                birthplace_2.value = elf_birthplace[1];
            }
            else if (d100 <= 70){
                birthplace_2.value = elf_birthplace[2];
            }
            else if (d100 <= 85){
                birthplace_2.value = elf_birthplace[3];
            }
            else if (d100 <= 100){
                birthplace_2.value = elf_birthplace[4];
            }
        } else if (race.value = "halfling"){
            birthplace_1.value = '';
            d100 = roll_d100();
            if (d100 <= 50){
                birthplace_2.value = "The Moot"
            } else {
                d10 = roll_d10();
                birthplace_1.value = human_birthplace_settlement[d10-1];
                d10 = roll_d10();
                birthplace_2.value = human_birthplace_province[d10-1];
            }
        }

        const number_of_siblings_array = {
            dwarf:[0, 0, 1, 1, 2, 3],
            elf: [0, 1, 1, 2, 2, 3],
            halfling: [1, 2, 3, 4, 5, 6],
            human:[0, 1, 2, 3, 4, 5]
        }

        var number_of_siblings = document.getElementById("number_of_siblings");
        d10 = roll_d10();
        if (d10 == 1){
            number_of_siblings.value = number_of_siblings_array[race.value][0];
        } else if (d10 <= 3){
            number_of_siblings.value = number_of_siblings_array[race.value][1];
        } else if (d10 <= 5){
            number_of_siblings.value = number_of_siblings_array[race.value][2];
        } else if (d10 <= 7){
            number_of_siblings.value = number_of_siblings_array[race.value][3];
        } else if (d10 <= 9){
            number_of_siblings.value = number_of_siblings_array[race.value][4];
        } else if (d10 == 10){
            number_of_siblings.value = number_of_siblings_array[race.value][5];
        }
   
        const distinguishing_marks_array = ["Pox Marks", "Ruddy Faced", "Scar", "Tattoo", "Earring", "Ragged Ear", "Nose Ring", "Wart", "Broken Nose", "Missing Tooth", "Snaggle Teeth", "Lazy Eye", "Missing Eyebrow(s)", "Missing digit", "Missing nail", 
        "Distinctive Gait", "Curious Smell", "Huge nose", "Large mole", "Small Bald Patch", "Strange Coloured Eye(s)"]


        for (i = 1; i <= 2; i++){
            var d_mark_id = "distinguishing_marks_" + i;
            var distinguishing_marks_1 = document.getElementById(d_mark_id);
            d100 = roll_d100();
            if (d100 <= 5){
                distinguishing_marks_1.value = distinguishing_marks_array[0];
            } else if (d100 <= 10){
                distinguishing_marks_1.value = distinguishing_marks_array[1];
            } else if (d100 <= 15){
                distinguishing_marks_1.value = distinguishing_marks_array[2];
            } else if (d100 <= 20){
                distinguishing_marks_1.value = distinguishing_marks_array[3];
            } else if (d100 <= 25){
                distinguishing_marks_1.value = distinguishing_marks_array[4];
            } else if (d100 <= 29){
                distinguishing_marks_1.value = distinguishing_marks_array[5];
            } else if (d100 <= 35){
                distinguishing_marks_1.value = distinguishing_marks_array[6];
            } else if (d100 <= 39){
                distinguishing_marks_1.value = distinguishing_marks_array[7];
            } else if (d100 <= 45){
                distinguishing_marks_1.value = distinguishing_marks_array[8];
            } else if (d100 <= 50){
                distinguishing_marks_1.value = distinguishing_marks_array[9];
            } else if (d100 <= 55){
                distinguishing_marks_1.value = distinguishing_marks_array[10];
            } else if (d100 <= 60){
                distinguishing_marks_1.value = distinguishing_marks_array[11];
            } else if (d100 <= 65){
                distinguishing_marks_1.value = distinguishing_marks_array[12];
            } else if (d100 <= 70){
                distinguishing_marks_1.value = distinguishing_marks_array[13];
            } else if (d100 <= 75){
                distinguishing_marks_1.value = distinguishing_marks_array[14];
            } else if (d100 <= 80){
                distinguishing_marks_1.value = distinguishing_marks_array[15];
            } else if (d100 <= 84){
                distinguishing_marks_1.value = distinguishing_marks_array[16];
            } else if (d100 <= 89){
                distinguishing_marks_1.value = distinguishing_marks_array[17];
            } else if (d100 <= 94){
                distinguishing_marks_1.value = distinguishing_marks_array[18];
            } else if (d100 <= 98){
                distinguishing_marks_1.value = distinguishing_marks_array[19];
            } else if (d100 <= 100){
                distinguishing_marks_1.value = distinguishing_marks_array[20];
            }
        }
    }

    var name = document.getElementById("name");
    const name_array = {
        dwarf:{
            element1:["Al", "Ath", "Athran", "Bal", "Bala", "Bara", "Bel", "Bela", "Ber", "Bok", "Bor", "Bur", "Da", "Dam", "Dora", "Drok", "Drong", "Dur", "Dwal", "El", "Ela", "Elan", "Elda", "Fa", "Far", "Fara", "Fim", "Fima", "Firen", "Fur", "Fura", "Ga", 
            "Gim", "Gol", "Gollen", "Got", "Gota", "Grim", "Gro", "Grun", "Hak", "Haka", "Har", "Hega", "Hur", "Kad", "Kar", "Kata", "Kaz", "Kaza", "Krag", "Logaz", "Lok", "Lun", "Mo", "Mola", "Mor", "Mora", "No", "Nola", "Nor", "Noran", "Nun", "Oda", "Oka", 
            "Olf", "Olla", "Oth", "Othra", "Ro", "Ror", "Roran", "Ska", "Skalf", "Skalla", "Skar", "Skor", "Skora", "Snor", "Snora", "Sven", "Thar", "Thor", "Thora", "Thron", "Thrun", "Thura", "Ulla", "Un", "Utha", "Vala", "Var", "Vara", "Zak", "Zaka", "Zakan", 
            "Zam", "Zama", "Zar", "Zara"],
            female:["bina", "bora", "dila", "dina", "dokina", "dora", "drinella", "fina", "fya", "gana", "gara", "gella", "gina", "gona", "gora", "grimella", "grina", "groma", "gromina", "grondella", "grotha", "gruma", "grunda", "gruntina", "gula", "gundina", 
            "gunella", "kina", "kragella", "krina", "kya", "likina", "lina", "loka", "luna", "mina", "mira", "nina", "nira", "nya", "ragina", "riga", "rika", "rina", "runa", "runella", "skina", "skinella", "tina", "toka", "trekella", "trekina", "troka", "zina", 
            "zora"],
            male:["bin", "bor", "dil", "din", "dok", "dor", "drin", "fin", "gan", "gar", "gil", "gin", "gni", "gon", "gor", "grim", "grin", "grom", "grom", "grond", "groth", "grum", "grund", "grunt", "gul", "gun", "gund", "ki", "kin", "krag", "kri", "krin", 
            "li", "lik", "lin", "lok", "lun", "min", "mir", "nin", "nir", "rag", "ri", "rig", "rik", "rin", "run", "skin", "tin", "tok", "trek", "trok", "zin", "zor"]
        },
        elf:{
            element1:["Aed", "Ael", "Aelf", "Aen", "Aeth", "Alth", "An", "And", "Ar", "Arg", "Ast", "Ath", "Av", "Ban", "Bel", "Beth", "Cad", "Cael", "Caem", "Caeth", "Cal", "Cam", "Cel", "Cir", "El", "Eld", "Elth", "En", "End", "Er", "Ers", "Fand", "Fer", 
            "Ferg", "Fim", "Fin", "Gaen", "Gaes", "Gal", "Gald", "Ged", "Gen", "Ges", "Geth", "Glor", "Has", "Hath", "Hel", "Heth", "Hith", "Ill", "Ind", "Ist", "Ith", "Kor", "Ky", "Kyr", "La", "Lan", "Lil", "Lim", "Lith", "Loth", "ly", "Mal", "Mar", "Mas", 
            "Math", "Me", "Men", "Mes", "Meth", "Mor", "Mort", "Nal", "Nar", "Nen", "Nor", "Norl", "Ri", "Riabb", "Riann", "Rid", "Riell", "Rien", "Ruth", "Ryn", "Tab", "Tal", "Tan", "Tar", "Tel", "Teth", "Tor", "Ty", "Ul", "Um", "Ur", "Yr", "Yv", ],
            connector:["a", "al", "an", "ar", "as", "e", "el", "en", "er", "es", "fan", "fen", "fin", "il", "in", "ir", "is", "o", "ol", "on", "or", "os", "ra", "ral", "ran", "re", "rel", "ren", "ri", "ril", "rin", "ro", "rol", "ron", "ry", "sa", "sal", "san", 
            "se", "sel", "sen", "si", "sil", "sin", "so", "sol", "son", "u", "ul"],
            female:["a", "aine", "am", "ann", "arma", "arna", "arth", "ath", "beann", "bet", "beth", "brim", "brys", "deann", "det", "deth", "drian", "driel", "drys", "dys", "eann", "eanna", "earna", "earth", "elle", "eth", "eys", "eyth", "felle", "fionn", 
            "flys", "fyll", "fynn", "fyr", "fys", "i", "ina", "ira", "isa", "ithi", "itt", "la", "lam", "lana", "larna", "lath", "leann", "leath", "lel", "lelle", "let", "leth", "lielle", "lieth", "lyann", "mle", "nelle", "nem", "neth", "ni", "niell", "niella", 
            "nith", "ras", "reann", "rell", "relle", "rielle", "ris", "rith", "rys", "sar", "sath", "ser", "seth", "shar", "sher", "shir", "sir", "sith", "sor", "soth", "sys", "tar", "teal", "teann", "ter", "thea", "ther", "thi", "thryn", "thyn", "tir", "tor", 
            "tos", "tryan", "trys", "yil", "yrs", "ys"],
            male:["baen", "baine", "baire", "bar", "bhir", "brier", "brin", "brior", "daen", "daine", "daire", "dar", "dhil", "dhir", "drel", "drir", "dror", "eorl", "eos", "eoth", "fil", "fin", "fir", "hil", "hin", "hir", "hor", "il", "in", "ir", "is", "ith", 
            "lael", "laen", "laer", "laine", "laire", "lan", "las", "len", "les", "lil", "lin", "lir", "lis", "lor", "los", "mael", "maen", "main", "mair", "mal", "mar", "mil", "min", "mir", "nael", "naen", "naer", "nail", "nair", "nal", "nan", "nar", "neal", 
            "nean", "near", "nil", "nin", "nir", "nis", "ran", "rea", "rel", "ril", "riol", "rion", "rior", "riorl", "riorn", "rir", "ryel", "sh", "sy", "taen", "tain", "tair", "than", "thar", "thel", "thil", "thin", "thir", "thril", "thrin", "thwe", "til", 
            "tin", "tis", "ton", "va", "we", "yan"],
            surname:["Blackbough", "Blackcairn", "Blackwood", "Bluefeather", "Bluewing", "Boldheart", "Boldspear", "Bravehelm", "Bravestar", "Brightcrown", "Brightknife", "Brightwand", "Coolstream", "Coolwater", "Darkeagle", "Darkmane", "Darkmoon", 
            "Eldendrake", "Eldenkin", "Fairowl", "Fairwater", "Fastblade", "Fastspear", "Fastwing", "Fellblade", "Fellhand", "Fleetfoot", "Fleet-thought", "Fleetwing", "Gladheart", "Gladshore", "Gladwind", "Goldenbrook", "Goldencloud", "Goldenhair", "Goodroot", 
            "Goodwood", "Greendale", "Greenfeather", "Greenglade", "Hawkhelm", "Hawkstar", "Hawkwood", "Keeneye", "Keengaze", "Keensight", "Kindheart", "Kindwater", "Lightfoot", "Lightwing", "Longleap", "Longroad", "Oldmane", "Oldtower", "Palemoon", "Palewand", 
            "Purelight", "Puresky", "Seagleam", "Seamist", "Shadowhelm", "Shadowseer", "Shadowstar", "Sharpblade", "Sharpspear", "Shininghelm", "Shiningmoon", "Silverdawn", "Silverhair", "Silverleaf", "Slenderblade", "Slendertree", "Slenderwand", "Soaringleaf", 
            "Soaringsun", "Starbrow", "Starfire", "Stargaze", "Strongarrow", "Stronghand", "Strongtower", "Sure-eye", "Surehand", "Swiftbow", "Swifthand", "Swiftwing", "Tallbeam", "Tallhelm", "Tenderheart", "Tendersong", "Truefriend", "Trueseer", "Whitelock", 
            "Whitereed", "Whitetor", "Wiseheart", "Wisewind", "Youngleaf", "Youngstar", "Youngwood"]
        },
        halfling:{
            element1:["Bag", "Balf", "Berc", "Bill", "Bobb", "Bodg", "Bog", "Bom", "Bonn", "Brog", "Bulc", "Bull", "Bust", "Cam", "Cap", "Ced", "Chund", "Clof", "Clog", "Cob", "Cog", "Crom", "Crump", "Curl", "Dod", "Dog", "Dott", "Dram", "Drog", "Dron", "Drub", 
            "Durc", "Elm", "Enn", "Ermin", "Ethan", "Falc", "Fald", "Falm", "Far", "Fild", "Flac", "Fogg", "Frit", "Ful", "Func", "Gaff", "Galb", "Gamm", "Gert", "Giff", "Gil", "Gon", "Grop", "Gudd", "Gump", "Hal", "Ham", "Harp", "Hart", "Jac", "Jas", "Jasp", 
            "Joc", "Lac", "Lil", "Lob", "Lott", "Lud", "Lure", "Mad", "Mag", "Man", "May", "Mer", "Mul", "Murc", "Murd", "Nag", "Nell", "Nobb", "Od", "Og", "Old", "Pipp", "Pod", "Porc", "Riff", "Rip", "Rob", "Sam", "Supp", "Tait", "Talb", "Talc", "Tay", "Tom", 
            "Wald", "Watt", "Will"],
            female:["a", "adell", "alot", "apple", "bell", "berry", "eena", "ella", "era", "et", "ia", "flower", "lotta", "petal", "riella", "sweet", "trude", "rose", "willow", "y"],
            male:["belly", "er", "fast", "in", "it", "mutch", "o", "odoc", "riadoc", "regar", "wick", "wise", "wit", "y"],
            surname:["Alderberry", "Alepuddle", "Appleback", "Barleycorn", "Barncock", "Bayleaf", "Bloomberry", "Bracebelly", "Braidgirdle", "Bramble", "Bunbury", "Burrows", "Catkins", "Churnhill", "Cinderhill", "Clinchstick", "Clumpthistle", "Codgerman", 
            "Crabapple", "Croop", "Crumbly", "Crumbuckle", "Curlytoes", "Custard", "Darkwater", "Dibbly", "Dibbly-Firkin", "Dimmock", "Dogberry", "Downhill", "Downside", "Duckweed", "Fairtrot", "Farfield", "Farthingale", "Fastbuck", "Fetlock", "Finefettle", 
            "Firkin", "Follyfoot", "Furrows", "Girthtree", "Greenacre", "Greenapple", "Greenhill", "Grogbelly", "Grubb", "Grumble", "Gumbucket", "Guzzlewit", "Harfoot", "Haricot", "Havelock", "Hempfire", "Hornblower", "Kettlebright", "Lackstern", "Larkspur", 
            "Lilywhite", "Longbelt", "Longchalk", "Manglepie", "Marrow", "Meadowdown", "Meadowsweet", "Millpond", "Muggins", "Mugwort", "Neddly", "Oddfoot", "Overhill", "Patchpetal", "Pennyman", "Quickblossom", "Quiggly", "Quivergrass", "Rattlebone", 
            "Ridgepole", "Riverbank", "Rook", "Rumplebreek", "Sandyhill", "Shakebelly", "Shufflefoot", "Sparrow", "Stonewort", "Tallowman", "Talltree", "Tanglefoot", "Thistlewood", "Thornpocket", "Tumblewine", "Tumpwell", "Whiteflower", "Whitethorn", "Widgeon", 
            "Willowand", "Winchgirdle", "Windblossom", "Wrinkleberry"]
        },
        human:{
            female:["Abbie", "Abighild", "Abigund", "Abigunda", "Ada", "Ada", "Adel", "Adelind", "Adeline", "Adelyn", "Adelle", "Adelle", "Agathe", "Agnete", "Aldreda", "Alfreda", "Alicia", "Allane", "Althea", "Amalie", "Amalinde", "Amalyn", "Annabella", 
            "Anna", "Anthea", "Arabella", "Aver", "Bechilda", "Bella", "Bella", "Bellane", "Benedicta", "Berlinda", "Berlyn", "Bertha", "Berthilda", "Bess", "Bess", "Beth", "Broncea", "Brunhilda", "Camilla", "Carla", "Carlinda", "Carlotta", "Cilicia", 
            "Cilie", "Clora", "Clothilda", "Connie", "Constance", "Constanza", "Cordelia", "Dema", "Demona", "Desdemona", "Dorthilda", "Drachena", "Drachilda", "Edhilda", "Edith", "Edyth", "Edythe", "Eleanor", "Eleanor", "Elinor", "Elisinda", "Elsina", 
            "Ella", "Ellene", "Ellinde", "Eloise", "Elsa", "Elsa", "Elsbeth", "Elspeth", "Elyn", "Emagunda", "Emelia", "Emme", "Emmalyn", "Emmanuel", "Emerlinde", "Emerlyn", "Erica", "Ermina", "Erminlind", "Ermintrude", "Esmaralda", "Estelle", "Etheldreda", 
            "Ethelind", "Ethelreda", "Fay", "Frieda", "Frieda", "Friedhilda", "Friedrun", "Friedrica", "Gabby", "Gabby", "Gabriele", "Galina", "Gena", "Genevieve", "Genoveva", "Gerberga", "Gerda", "Gerlinde", "Gertie", "Gertrud", "Greta", "Greta", "Gretchen", 
            "Grizelda", "Grunhilda", "Gudrun", "Gudryn", "Hanna", "Hedwig", "Heidi", "Heidrun", "Helga", "Herlinde", "Herwig", "Hilda", "Hilda", "Hildegart", "Hildegrund", "Honoria", "Ida", "Ingrid", "Ingrun", "Ingrund", "Irmella", "Irmine", "Isabella",
            "Isadora", "Isolde", "Isolde", "Jocelin", "Johanna", "Josie", "Karin", "Katarine", "Katheryn", "Katerine", "Katerine", "Keterlind", "Keterlyn", "Kitty", "Kristen", "Kristena", "Kristyn", "Kirsten", "Kirsten", "Kirstyn", "Lavina", "Lavinia", 
            "Leanor", "Leanora", "Leticia", "Letty", "Lena", "Lenora", "Lisa", "Lisbeth", "Lizzie", "Lorinda", "Lorna", "Lucinda", "Lucretia", "Lucie", "Ludmilla", "Mabel", "Magdalyn", "Maghilda", "Maglind", "Maglyn", "Magunda", "Magreta", "Marline", "Marlyn", 
            "Mathilda", "Maude", "May", "Meg", "Melicent", "Miranda", "Moll", "Nathilda", "Nellie", "Nora", "Olga", "Ophelia", "Osterhild", "Ostelle", "Ostia", "Ottagunda", "Ottaline", "Ottilda", "Otillyn", "Perdita", "Pergale", "Pergunda", "Petronella", 
            "Philomelia", "Reikhilda", "Renata", "Rosabel", "Rosabella", "Rosale", "Rosalia", "Rosalin", "Rosalinde", "Rosamunde", "Rosanne", "Rose", "Roz", "Rozhilda", "Salina", "Saltza", "Sigismunda", "Sigrid", "Sigunda", "Solla", "Styrine", "Talima", 
            "Theodora", "Therese", "Tilea", "Ursula", "Ulrica","Valeria","Verena","Wilfrieda", "Wilhelmina", "Winifred", "Wolfhilde", "Zemelda", "Zena"],
            male:["Abelhard", "Abelhelm", "Admund", "Adred", "Adric", "Agis", "Alaric", "Alberic", "Albrecht", "Aldebrand", "Aldred", "Aldric", "Alfreid", "Altmar", "Alric", "Andre", "Andred", "Andric", "Anshelm", "Anton", "Arne", "Arnulf", "Axel", 
            "Axelbrand", "Baldred", "Baldric", "Baldwin", "Balthasar", "Barnabas", "Bart", "Bartolf", "Bartomar", "Bernolt", "Bertold", "Bertolf", "Boris", "Bruno", "Burgolf", "Calvin", "Casimir", "Caspar", "Cedred", "Conrad", "Corvin", "Dagmar", "Dankmar", 
            "Dankred", "Dekmar", "Detlef", "Diebold", "Diel", "Dietfried", "Dieter", "Dietmar", "Dietmund", "Dietrich", "Dirk", "Donat", "Durnhelm", "Eber", "Eckel", "Eckhart", "Edgar", "Edmund", "Edwin", "Ehrhart", "Ehrl", "Ehrwig", "Eldred", "Elmeric", 
            "Emil", "Engel", "Engelbert", "Engelbrecht", "Engelhart", "Eodred", "Eomund", "Erdman", "Erdred", "Erkenbrand", "Erasmus", "Erich", "Erman", "Ernst", "Erwin", "Eugen", "Eustasius", "Ewald", "Fabian", "Faustus", "Felix", "Ferdinand", "Fleugweiner", 
            "Fosten", "Franz", "Frediger", "Fredric", "Friebald", "Friedrich", "Fulko", "Gawin", "Gerber", "Gerhart", "Gerlach", "Gernar", "Gerolf", "Gilbrecht", "Gisbert", "Giselbrecht", "Gismar", "Goran", "Gortolf", "Gosbert", "Goswin", "Gotfried", "Gothard", 
            "Gotwin", "Gregor", "Greimold", "Grimwold", "Griswold", "Guido", "Gundolf", "Gundred", "Gunnar", "Gunter", "Gunther", "Gustaf", "Hadred", "Hadwin", "Hagar", "Hagen", "Haldred", "Halman", "Hamlyn", "Hans", "Harbrand", "Harman", "Hartmann", "Haug", 
            "Heidric", "Heimar", "Heinfried", "Heinman", "Heinrich", "Heinz", "Helmut", "Henlyn", "Hermann", "Herwin", "Hieronymus", "Hildebart", "Hildebrand", "Hildemar", "Hildemund", "Hildred", "Hildric", "Horst", "Hugo", "Igor", "Ingwald", "Jander", "Jekil", 
            "Jodokus", "Johann", "Jonas", "Jorg", "Jorn", "Josef", "Jost", "Jurgen", "Karl", "Kaspar", "Klaus", "Kleber", "Konrad", "Konradin", "Kurt", "Lamprecht", "Lanfried", "Lanric", "Lanwin", "Leo", "Leopold", "Levin", "Liebert", "Liebrecht", "Liebwin", 
            "Lienhart", "Linus", "Lodwig", "Lothar", "Lucius", "Ludwig", "Luitpold", "Lukas", "Lupold", "Lupus", "Luther", "Lutolf", "Madred", "Magnus", "Mandred", "Manfred", "Mathias", "Max", "Maximilian", "Meinhart", "Meiner", "Meinolf", "Mekel", "Merkel", 
            "Nat", "Nathandar", "Nicodemus", "Odamar", "Odric", "Odwin", "Olbrecht", "Oldred", "Oldric", "Ortlieb", "Ortolf", "Orwin", "Osric", "Oswald", "Oswin", "Otfried", "Otto", "Otwin", "Paulus", "Prospero", "Ragen", "Ralf", "Rambrecht", "Ranald", 
            "Randulf", "Ranulf", "Reikhard", "Rein", "Reiner", "Reinhard", "Reinolt", "Reuban", "Rigo", "Roderic", "Rolf", "Ruben", "Rudel", "Rudgar", "Rudolf", "Rufus", "Ruprecht", "Sebastian", "Semund", "Sepp", "Sieger", "Siegfried", "Siegmund", "Sigismund", 
            "Sigric", "Steffan", "Tankred", "Theoderic", "Tilmann", "Tomas", "Trubald", "Trubert", "Udo", "Ulfman", "Ulfred", "Ulli", "Ulman", "Uto", "Valdred", "Valdric", "Varl", "Viggo", "Viktor", "Vilmar", "Volker", "Volkhard", "Volkin", "Volkrad", "Voltz", 
            "Walbrecht", "Waldor", "Waldred", "Walther", "Warmund", "Werner", "Wilbert", "Wilfried", "Wilhelm", "Woldred", "Wolfgang", "Wolfhart", "Wolfram", "Wulf", "Xavier"],
            surname:["Adelhof", "Albrecht", "Allenstag", "Altmann", "Atzwig", "Bacher", "Baer", "Baumann", "Becker", "Behn", "Betz", "Beyer", "Bischof", "Boehm", "Breitenbach", "Breuer", "Dahmbach", "Delfholt", "Drakenhof", "Drauwulf", "Durrbein", "Ebrhard", 
            "Eisenhauer", "Eschlimann", "Falkenheim", "Fehr", "Fiegler", "Fleischer", "Frohlich", "Frueh", "Fuchs", "Gaertner", "Gaffwig", "Gebauer", "Godtgraf", "Grunenwald", "Guth", "Haintz", "Herz", "Herzog", "Hirtzel", "Hoch", "Hoefer", "Hofstetter", 
            "Jaeger", "Jochutz", "Jutzenbach", "Kalb", "Kaltenbach", "Konig", "Konigsamen", "Kraemer", "Krebs", "Kuhn", "Kummel", "Lang", "Lankdorf", "Lebengut", "Liess", "Lutzen", "Machholt", "Meusmann", "Meyer", "Mohr", "Muller", "Nachtmann", "Naubhof", 
            "Netzhoch", "Neumann", "Niederlitz", "Nuhr", "Oberholtzer", "Ohrsten", "Otzlowe", "Reichert", "Reifsneider", "Reiss", "Riese", "Rohrig", "Schaffer", "Schaumer", "Scherer", "Schleiermacher", "Schreiber", "Schultz", "Schwalb", "Steiner", "Tabbeck", 
            "Teuber", "Tolzen", "Trachsel", "Veit", "Vogel", "Vogt", "Weber", "Wechsler", "Widmann", "Widmer", "Wirtz", "Zumwald"]
        }
    }

    if (race.value == "dwarf"){
        let parent_sex;
        d10 = roll_d10();
        if (d10 <= 5){
            parent_sex = "female";
        }
        else {
            parent_sex = "male";
        }

        name.value = name_array[race.value]["element1"][Math.floor(Math.random()*name_array[race.value]["element1"].length)] + name_array[race.value][sex.value][Math.floor(Math.random()*name_array[race.value][sex.value].length)] + " " +
        name_array[race.value]["element1"][Math.floor(Math.random()*name_array[race.value]["element1"].length)] + name_array[race.value][parent_sex][Math.floor(Math.random()*name_array[race.value][parent_sex].length)]

        if (sex.value == "female"){
            name.value = name.value + "dottr";
        }
        else {
            name.value = name.value + "son";
        }
    }
    else if (race.value == "elf"){
        name.value = name_array[race.value]["element1"][Math.floor(Math.random()*name_array[race.value]["element1"].length)] + name_array[race.value]["connector"][Math.floor(Math.random()*name_array[race.value]["connector"].length)] +
        name_array[race.value][sex.value][Math.floor(Math.random()*name_array[race.value][sex.value].length)] + " " + name_array[race.value]["surname"][Math.floor(Math.random()*name_array[race.value]["surname"].length)];
    }
    else if (race.value == "halfling"){
        name.value = name_array[race.value]["element1"][Math.floor(Math.random()*name_array[race.value]["element1"].length)] + name_array[race.value][sex.value][Math.floor(Math.random()*name_array[race.value][sex.value].length)] + " " + 
        name_array[race.value]["surname"][Math.floor(Math.random()*name_array[race.value]["surname"].length)];
    }
    else if (race.value == "human"){
        name.value = name_array[race.value][sex.value][Math.floor(Math.random()*name_array[race.value][sex.value].length)] + " " + name_array[race.value]["surname"][Math.floor(Math.random()*name_array[race.value]["surname"].length)];
    }

    });
});