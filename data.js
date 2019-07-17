var data = [
    {
    idNumber: "123456",    
    title: "Algorithms and Complexity",
    summary: "Bren School faculty members have made significant contributions to many topics in this field, including graph algorithms and graph drawing (computing with systems of pairwise interactions between objects such as web page links, protein interactions, or social networks) and computational geometry (computing with planar or spatial data).",
    description: "Bren School faculty members have made significant contributions to many topics in this field, including graph algorithms and graph drawing (computing with systems of pairwise interactions between objects such as web page links, protein interactions, or social networks) and computational geometry (computing with planar or spatial data).",
    skillsNeeded: "sjfhkbv akd,v ad, adlz. nlm",
    location: {
        number: "200",
        street: "Riverway",
        city: "Boston",
        state: "MA"
    },
    contact: 123456567,
    email: "fdgfxncgvdahbn"
},{
idNumber: "123457",     
title: "Artificial Intelligence and Machine Learning",
summary: "Research in AI is concerned with producing machines to automate tasks requiring intelligent behavior. Examples include computer vision, bioinformatics, constraint-based problem solving, text understanding, data mining and smart sensor networks.",
description: "Artificial Intelligence and Machine Learning",
summary: "Research in AI is concerned with producing machines to automate tasks requiring intelligent behavior. Examples include computer vision, bioinformatics, constraint-based problem solving, text understanding, data mining and smart sensor networks.",
skillsNeeded: "sjfhkbv akd,v ad, adlz. nlm",
location: {
    number: "110",
    street: "Huntington",
    city: "Boston",
    state: "MA"
},
contact: 123456567,
email: "fdgfxncgvdahbn"
},{
    idNumber: "123458",     
title: "Biomedical Informatics and Computational Biology",
summary: "Research in AI is concerned with producing machines to automate tasks requiring intelligent behavior. Examples include computer vision, bioinformatics, constraint-based problem solving, text understanding, data mining and smart sensor networks.",
description: "Research in AI is concerned with producing machines to automate tasks requiring intelligent behavior. Examples include computer vision, bioinformatics, constraint-based problem solving, text understanding, data mining and smart sensor networks.",
skillsNeeded: "sjfhkbv akd,v ad, adlz. nlm",
location: {
    number: "1196",
    street: "Boylston",
    city: "Cambridge",
    state: "MA"
},
contact: 123456567,
email: "fdgfxncgvdahbn"
},{
    idNumber: "123459", 
    title: "Computer Architecture and Design",
summary: "Computer architecture is an area studying how to define a computer system and the interaction between software and hardware technologies in a computer system. At a lower level computer architecture defines how a computer system is designed to satisfy performance, power, or other constraints. Design tools and technics automating computer design is another domain in this area.",
description: "Computer architecture is an area studying how to define a computer system and the interaction between software and hardware technologies in a computer system. At a lower level computer architecture defines how a computer system is designed to satisfy performance, power, or other constraints. Design tools and technics automating computer design is another domain in this area.",
skillsNeeded: "sjfhkbv akd,v ad, adlz. nlm",
location: {
    number: "108",
    street: "Queensberry",
    city: "Boston",
    state: "MA"
}}
];
var instantiatedData = [];
data.forEach(function(eachData){
    instantiatedData.push(new ResearchPosts(eachData))
});