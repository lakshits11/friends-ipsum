// Code that generates the random lorem ipsum text

// Create a new object called loremIpsum by invoking the GenerateNewText constructor function
const loremIpsum = new GenerateNewText();

// Constructor function that creates an object with the paragraph property
function GenerateNewText() {
    // Add property to the object
    this.sentences = [
        "Joey calls Phoebe; refusing to take Chandler's apologies for not believing in his film, and he barks for him to not come over- he's working as a gladiator in armor at Caesar's Palace. Monica tells Phoebe, who may not tell Chandler, that she met and lunched with Richard, but felt nothing about him. ",
        "Monica decides to give Chandler his anniversary present a day early: tickets to Las Vegas; Phoebe insists everyone goes, to make up for her missing London (she was pregnant with triplets at the time). Ross and Rachel have previous engagements but decide to follow the next day.",
        "On the plane, as Phoebe goes to the restroom, Chandler realizes he forgot the anniversary present, but Monica immediately forgives him. Chandler replies, This is the worst anniversary ever the minute Phoebe returns, making Phoebe believe that Monica told him about Richard, saying, So you told him about the Richard thing.",
        "As Phoebe put the idea in her head, Rachel tests out walking around alone and naked; Ross sees her and comes over, thinking it was a sexual invitation; this misunderstanding escalates on the plane to embarrassing each-other in outrageous ways including Rachel spilling a drink on Ross' crotch and Ross drawing a moustache and beard on Rachel.",
        "In Vegas, Joey must admit he's just earning cash while the movie is delayed lacking funds. Joey loses his only tip in one hand, but thinks he'll make a fortune because he found the dealer to be his identical hand twin, and demands Chandler is supportive this time. The dealer eventually asks Joey to leave him alone, angrily.",
        "The friends learn that Ugly Naked Guy is moving out and Ross tries to get his apartment. While Rachel, Ross and Phoebe are having a look around the apartment, Phoebe looks through the window into Monica's Apartment, and sees Monica and Chandler having sex. Astonished, she starts screaming and Rachel reappears and reveals that she already knows about Monica and Chandler's relationship.",
        "She convinces Phoebe to calm down before Ross finds out. In Central Perk, Rachel and Phoebe tell Joey that Phoebe has found out about Monica and Chandler. Joey is relieved that enough people know that they can finally confront their friends about their relationship, but Phoebe and Rachel decide to mess with them instead, for fun.",
        "Chandler then enters and Phoebe begins flirting with him. She pretends to make it clear that she is attracted to him, and deliberately points her butt in his direction as she leaves. Later that day, Chandler tells Monica that he thinks Phoebe was hitting on him. Monica laughs and tells him that he is being ridiculous.",
        "In the next scene, Rachel asks Monica if she would like to go and see a movie with her and Phoebe. Monica tells her that she had plans to do laundry but she was obviously lying. In response, Rachel gives her a large bag of laundry to do, and Phoebe gives her a sack of quarters for the machines at the laundromat, so Monica and Chandler's plans are ruined.",
        "As Rachel and Phoebe leave, Phoebe tells Chandler that she will miss him in a seductive voice, and pinches his butt. Monica then realizes that Phoebe truly isn't attracted to Chandler, and that she has actually discovered that they are sleeping together.",
        "Meanwhile, Ross tries to bribe Ugly Naked Guy into giving him his apartment with a basket of mini-muffins, but many other people also want to move in, and give him more extravagant bribes, such as a mountain bike and a pinball machine. Monica and Chandler decide to interrogate Joey, as he is the only one (that they are aware of) who knows about them.",
        "He confirms that both Rachel and Phoebe know. Monica craves revenge, and now wants to mess with Phoebe and Rachel. She persuades Chandler to reciprocate Phoebe's flirtation. Phoebe is bewildered, but soon realizes that Chandler and Monica know that she knows. When Chandler invites her over so that she can feel his bicep and maybe more, she accepts.",
        "This is very distressing to Joey, who just wants to tell them the truth. Ross, determined to bond with Ugly Naked Guy in order to get the apartment, pays him a visit. He admires his boldness for never putting any clothes on, and ends up getting naked himself and sharing the mini-muffins with him.",
        "Phoebe arrives at Joey and Chandler's for her faux-date with Chandler, unaware that Monica is hiding in the bathroom to advise Chandler on what to do. (Rachel is hiding outside to advise Phoebe on what to do). They start off the date by quickly draining their glasses of wine. Chandler then goes to put on some music, and Phoebe starts dancing sexily for him. ",
        "She tells him that she wants to take off all her clothes and have him rub lotion on her. Chandler goes to the bathroom, supposedly to get the lotion, but actually to ask Monica what he should do. While he is in there, Phoebe consults Rachel. Joey complains that he wants to sit in his chair, but Rachel assures him that it will all be over the sooner Phoebe breaks Chandler. ",
        "He swiftly rips open Phoebe's blouse to reveal her bra because he knows that Chandler is afraid of bras. Phoebe and Chandler end up kissing awkwardly, but Chandler then pushes her away and tells her that she wins, as he can't have sex with her. Phoebe triumphantly asks him why, and Chandler blurts out. Because I'm in love with Monica!",
        "Phoebe is shocked, and Rachel and Joey rush in from the hallway. Monica emerges from the bathroom, and she and Chandler declare their love for each other in front of their friends. Joey and Rachel are clearly touched, and Phoebe admits that she had simply thought that they were sleeping together; not that they were in love.",
        "After his naked encounter, Ross ends up getting Ugly Naked Guy's apartment. He invites his boss to see the place, hoping to show him that he has changed his ways and is ready to return to work. However, he spots Monica and Chandler having intercourse through the window, and furiously screams at them in front of his boss.",
        "Ross deals with finding out about Rachel and Joey's relationship almost as well as when he found out about Monica and Chandler - that is, not well at all - but out of loyalty and embarrassment, maintains that he is totally 'fine'. The only problem is that everyone can see through his ruse: the word “fine” keeps coming out all high-pitched and squeaky.",
        "In an attempt to prove that he is completely 'fine' with the new relationship, Ross invites Rachel and Joey to a dinner party with him and Charlie. Before dinner, however, Ross is obviously tense and anxious, almost on the verge of tears. Joey suggests a drink to calm Ross' nerves, Ross quickly goes overboard with Joey.",
        "Ross ends up becoming so drunk that he forgets to use oven mitts to carry a steaming dish of fajitas to the table – not even noticing the pain in his hands until Rachel points out his mistake. After a while of this drunken inappropriateness, Rachel and Charlie go home, while Joey decides to stay in order to keep an eye on Ross.",
        "In the morning, the two men talk, and Ross finally admits he is not fine but wants to be. He promises to try and get used to Joey and Rachel being together. During this family reunion, Monica and Chandler away from the others meeting Phoebe's friends Bill and Colleen to learn about the particulars of adoption: they adopted their son Owen at birth.",
        "All goes well, to the point that Monica and Chandler are gaining a lot of knowledge – until Chandler runs into Owen on the way to the bathroom, mentioning Bill and Colleen's help in explaining how they adopted you, only to find that Owen knew nothing about his adoption. Panicking, Chandler tells Monica what he's done and the two attempt to make a hasty exit.",
        "But don't manage to get out before Owen tells his parents about Chandler's 'big reveal'. The boy is completely distraught, but seems even more upset after, in the middle of a rant at Bill and Colleen, Chandler suggests that Santa isn't real. And then, to top it all off, back at the coffeehouse, Chandler manages to tell the triplets Phoebe gave birth to them.",
    ];
}

// Method to the GenerateNewText constructor function that generates a paragraph
GenerateNewText.prototype.getParagraph = function () {
    let paragraph = this.sentences[Math.floor(Math.random() * this.sentences.length)];
    return paragraph;
};

// Method to the GenerateNewText constructor function that generates multiple paragraphs from paragraphs
GenerateNewText.prototype.getAllParagraphs = function (numberOfParagraphs) {

    let allParagraphs = [];

    while (allParagraphs.length < numberOfParagraphs) {
        allParagraphs.push(this.getParagraph());
    }

    // Convert array into HTML string
    let paragraphHTML = "";
    allParagraphs.forEach(function (paragraph) {
        paragraphHTML += "<p>" + paragraph + "</p>";
    });
    return paragraphHTML;
};

module.exports = loremIpsum;