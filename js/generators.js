	var mascArr = ["honey", "clove", "smoke", "rose", "hyacinth", "beeswax", "sandalwood", "pine", "lemon", "lime", "cypress", "campfire", "cinnamon", "whiskey", "barley", "ginger", "rain", "salt", "caramel", "coriander", "orange", "vanilla", "incense ", "amber", "fresh linen", "snow", "peppermint", "spearmint", "musk", "leather", "metal", "rum", "cardamom", "paper", "grass", "rosewood", "cedar", "tobacco", "horses", "wool", "honeysuckle", "apricot", "apple", "freshly baked bread", "eucalyptus", "rosemary", "pineapple", "coffee bean", "magnolia", "resin", "cucumber", "anise", "pepper", "balsam ", "basil", "berry", "lavender", "almond", "hay", "coconut", "sage", "chamomile ", "green tea", "chocolate", "mandarin", "pear", "ice", "frankincense ", "laurel", "violet", "nutmeg", "juniper", "black tea", "ocean", "driftwood", "sawdust"]; 
  var femArr = ["ginger", "freshly baked bread", "peach", "sugar", "iris", "black tea", "bubblegum", "pineapple", "cashmere", "sweetpea", "waterlily", "passionfruit", "gingerbread", "juniper", "violet", "sugarplum", "cinnamon", "driftwood", "butterscotch", "beeswax", "mandarin", "amber", "strawberry", "blueberry", "blackberry", "lilac", "cherry", "paper", "pepper", "wisteria", "apricot", "green tea", "coconut", "sage", "laurel", "nutmeg", "peony", "flowers", "almond", "gardenia", "magnolia", "hay", "hyacinth", "fresh linen", "pear", "snow", "honey", "clove", "lavender", "vanilla", "basil", "orange blossom", "jasmine", "peppermint", "spearmint", "rose", "ice", "honeysuckle", "apple", "snow", "lily", "chocolate", "ocean", "rain", "orange", "lime", "lemon", "carnation", "amber", "chamomile", "eucalyptus", "cucumber", "rosemary", "woodsmoke"];

$( document ).ready(function() {
var groupsList = [
  ["scornful", "respectful"],  
  ["humble", "proud", "arrogant"],  
  ["pompous", "modest"],  
  ["cautious","reckless", "impulsive", "adventurous"],
  ["arrogant","humble"],
  ["cold","warm", "affectionate","compassionate","reserved"],
  ["sullen","joyful","content","sad","sullen", "sorrowful","ambitious"],
  ["quarrelsome","peaceable"],
  ["sarcastic","sincere"],
  ["impatient","patient"],
  ["lenient","demanding","disciplined", "lazy", "hardworking", "active"],
  ["stingy","generous"],
  ["self-centered","thoughtful"],
  ["sneaky","honest","sincere", "manipulative"],
  ["untrustworthy","honorable","discreet"],
  ["quiet","talkative"],
  ["boisterous","soft-spoken"],
  ["rude","polite","friendly","diplomatic", "vulgar", "unfriendly", "boorish","cultured","charming", "uncultured"],
  ["picky"],
  ["thoughtless", "thoughtful", "generous", "selfish"],
  ["cowardly","brave", "courageous"],
  ["anxious","carefree"],
  ["pessimistic","optimistic"],
  ["cruel","kind"],
  ["dominant","submissive"],
  ["precise","careless"],
  ["clumsy","graceful"],
  ["materialistic","thrifty"],
  ["reserved","outgoing"],
  ["bookish"],
  ["resourceful","helpless"],
  ["opportunistic"],
  ["capable","incompetent"],
  ["honorable","sneaky", "corrupt", "noble"], 
  ["religious","irreverent"],
  ["logical","emotional"],
  ["even-tempered","volatile"],
  ["mischievous","serious", "playful"],
  ["messy","tidy"],
  ["organized","unorganized"],
  ["creative"],
  ["intelligent"],
  ["reliable","capricious"],
  ["eccentric","traditional"],
  ["decisive","indecisive"],
  ["loyal","unreliable", "disloyal", "dependable", "reliable"],
  ["sensitive","emotionally resilient"],
  ["shy","outgoing"]
];
function exclusionPersonGen(exclude1, exclude2, list) {
    var n = Math.floor(Math.random() * Math.floor(list.length));
    if (n == list.length - 1 && n == exclude1 || n == exclude2) {
      n = 0;
    } else if (n == exclude1 || n == exclude2) {
      n++;
    }
    return n;
  };
function randomize(list) {
  var n = Math.floor(Math.random() * Math.floor(list.length));
  return n;
};
function pullWord(arr, i) {
  return arr[i][randomize(arr[i])];
};
function generatePersonGen(event) {
  var div = event.data.name;
  var char = div.find('input[name="character"]').val();
  
  var listIndex1 = randomize(groupsList);
  var listIndex2 = exclusionPersonGen(listIndex1, groupsList.length, groupsList); 
  var listIndex3 = exclusionPersonGen(listIndex2, listIndex1, groupsList);

  var trait1 = pullWord(groupsList, listIndex1);
  var trait2 = pullWord(groupsList, listIndex2);
  var trait3 = pullWord(groupsList, listIndex3);
  
  function fader(style, word) {
    var element = div.find(style);
    element.fadeOut(500, function() {
      element.text(word);
      element.fadeIn(500);
    });
  };
  
  fader('.char', char);
  fader('.trait1', trait1);
  fader('.trait2', trait2);
  fader('.trait3', trait3);
  }
  var character1 = $("#character1");
  var character2 = $("#character2");
  $('#roll1').on('click', {name: character1}, generatePersonGen); 
  $('#roll2').on('click', {name: character2}, generatePersonGen); 


function exclusionScent(exclude, list) {
    var n = Math.floor(Math.random() * Math.floor(list.length));
    if (n == list.length - 1 && n == exclude) {
      n = 0;
    } else if (n == exclude) {
      n++;
    }
    return n;
  };  //this prevents the same scent from being selected twice

function generateScent() {
    var arr = [];
    if ($("input#fem[name=gender]:checked").val() == "on") {
      arr = femArr; 
    } else {
      arr = mascArr;
    } // determine which radio button is selected; set empty arr equal to that variable
    var randIndex1 = Math.floor(Math.random() * Math.floor(arr.length)); // generate random number
    var randIndex2 = exclusionScent(randIndex1, arr); // run exclusion function; generate random number, excluding randIndex1 in the list "arr"
  var scent1 = $('#scent1');
  var scent2 = $('#scent2');
  scent1.fadeOut(500, function() {
    scent1.text(arr[randIndex1]);
    scent1.fadeIn(500);
    });
  scent2.fadeOut(500, function() {
    scent2.text(arr[randIndex2] + '.');
    scent2.fadeIn(500);
    });
  }
  $('#roll').on('click', generateScent); // run function on click of button  
  
  
});