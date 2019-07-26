document.getElementById("btn1").addEventListener("click", myName)
document.getElementById("btn2").addEventListener("click", mySchool)
document.getElementById("btn3").addEventListener("click", myCareer)
document.getElementById("btn4").addEventListener("click", myHobbies)


function myName() {
    var nameParagraph = document.getElementById("name");
    if (nameParagraph.innerHTML === "") {
        nameParagraph.innerHTML = "Ann Richards School for Young Women Leaders <br> 2206 Prather Ln, Austin, TX 78704 <br> Enrolled in Biomedical Sciences courses: <br> 9th grade- Principles of Biomedical Sciences <br> 10th grade- Medical Interventions <br> Received academic achievement awards; these awards include Trustee Scholar Award, Trustee Academic Excellence award, and AISD Latina Leader award. <br>";
    } else {
        nameParagraph.innerHTML = "";
    }
    
}

function mySchool() {
    var nameParagraph = document.getElementById("school");
if (nameParagraph.innerHTML === "") {
    nameParagraph.innerHTML = "Volunteer, Austin Capital Area Food Bank (2016-present)- Separated food into different categories and then packaged them into crates. <br> Volunteer, Austin Parks and Recreation (2015-present)- Assisted park coordinators by informing the community about why they should volunteer at their local parks. Cleaned up the park, added native plants and mulch to the trees. Became the first Youth Leader at my park; assigned by the park coordinators.<br> Physics Summer Camp, Design, Connect and Create (2017)- Physics camp for young women to learn about physics and other STEM-related job careers. Performed some hands-on activities related to Physics and Math concepts.";
    
} else {
    nameParagraph.innerHTML = "";
    }
}

function myCareer() {

    var nameParagraph = document.getElementById("career");
if (nameParagraph.innerHTML === "") {
    nameParagraph.innerHTML = "World Languages Honor Society (2018-present)-Initiated in 2018, have been in it ever since. Recognizes high achievement in language study.<br> Orchestra (2014-2018)-Played the violin and was the 1st chair in 7th grade.<br> Languages- Grew up in Mexico and learned Spanish as my first language. Fluent in English and Spanish <br> National Junior Honor Society (2016)- Member, 2015-2017 <br> National Honor Society (2018-present)- Initiated Member in 2018; Recognizes high achievement in scholarship, leadership, service, and character.";
} else {
    nameParagraph.innerHTML = "";
    }
}

function myHobbies() {
    var nameParagraph = document.getElementById("hobbies");
if (nameParagraph.innerHTML === "") {
    nameParagraph.innerHTML = "Participation in Sports- (Track, Cross Country) In 2019 we qualified for Districts in Track and took 6th place overall<br> Enjoy creating friendship bracelets and arts and crafts";
} else {
    nameParagraph.innerHTML = "";
    }
}