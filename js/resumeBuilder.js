//pound sign indicates we are looking for an element with id=header
//$("#main").append("Annu Joshi");
var bio = {
    "name": "Annu Joshi",
    "role": "Software Developer",
    "contacts": {
        "mobile": "9654268259",
        "email": "annuhansa94@gmail.com",
        "github": " https://github.com/AnnuJoshi",
        "twitter": "https://twitter.com/nibblepuff",
        "location": "India"
    },
    "biopic": "images/me.jpg ",
    "welcomeMessage": "High spirited individual with a drive to build and innovate.",
    "skills": ["C", "C++", "Java","HTML","CSS","JavaScript","SQL", "Spark","Hive"]
};

var education = {
    "schools": [{
            "name": "Shaheed Rajguru College of Applied Sciences for Women ",
            "location": "Delhi University,India ",
            "degree": "B.Sc.(H)",
            "dates": "June 2012 - June 2015",
            "majors": ["CompSci"],
            "url": ""
        },
        {
            "name": " Department of Computer Science",
            "location": "Delhi University,India ",
            "degree": " M.Sc.",
            "dates": "June 2015 - June 2017",
            "majors": ["CompSci"],
            "url": ""

        }
    ],
    "onlineCourses": [{
            "title": "Front End Nanodegree",
            "school": "Udacity",
            "dates": "June 2017-December 2017",
            "url": "www.Udacity.com"
        },
        {
            "title": "Android",
            "school": "Coursera",
            "dates": "June 2015- July 2015",
            "url": "www.coursera.com"
        }

    ]

};

var work = {
    "jobs": [{
            "employer": "IBM",
            "title": "Watson Intern",
            "location": "India",
            "dates": "Feb 2017 - June 2017",
            "description": ""
        },
        {
            "employer": "Cyber Crime Cell",
            "title": "Intern",
            "location": "Gurgaon,India",
            "dates": "June 2014 - July 2015",
            "description": ""
        },
        {
            "employer": "HCL Infosystems",
            "title": "Summer Intern",
            "location": "Noida,India",
            "dates": "June 2013 - July 2014",
            "description": ""
        }
    ]
};

var projects = {
    "projects": [{
            "title": "Chat On",
            "dates": "Feb 2017- June 2017",
            "description": "Created a chat bot using IBM Watson",
            "images": ["images/chaton.png"]
        },

        {
            "title": "Truss-Decomposition of Graphs",
            "dates": "Jan 2017-June 2017",
            "description": "Created a package in R containing graph Decomposition Algorithms",
            "images": ["images/fry.jpg"]
        }


    ]

};



education.display = function() {
      for (var school=0;school<education.schools.length;school++) {
   // for (var school in education.schools) {
        $("#education").append(HTMLschoolStart);

        var formattedschoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
        var formattedschoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);

        var formattedNameDegree = formattedschoolName + formattedschoolDegree;
        $(".education-entry:last").append(formattedNameDegree);

        var formattedschoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
        $(".education-entry:last").append(formattedschoolDates);

        var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
        $(".education-entry:last").append(formattedLocation);

        var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
        $(".education-entry:last").append(formattedMajor);

    }

    $(".education-entry:last").append(HTMLonlineClasses);
      for (var onlinecourse=0;onlinecourse< education.onlineCourses.length;onlinecourse++) {
  //  for (var onlinecourse in education.onlineCourses) {
        var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlinecourse].title);
        var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlinecourse].school);

        var formattedTitleSchool = formattedTitle + formattedSchool;
        $(".education-entry:last").append(formattedTitleSchool);

        var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[onlinecourse].dates);
        $(".education-entry:last").append(formattedDates);

        var formattedUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[onlinecourse].url);
        $(".education-entry:last").append(formattedUrl);
    }
};


bio.display = function display() {

    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    $("#header").append(formattedName);

    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").append(formattedRole);

    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

    var formattedbio = HTMLbioPic.replace("%data%", bio.biopic);
    $("#header").append(formattedbio);

    var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedWelcomeMsg);

    $('#topContacts, #footerContacts').append(formattedMobile + formattedEmail +
    formattedGithub + formattedTwitter + formattedLocation);


    $("#header").append(HTMLskillsStart);
    bio.skills.forEach(function(skill) {
        var formattedSkill = HTMLskills.replace("%data%", skill);
        $("#skills").append(formattedSkill);
    });
};

work.display = function() {
    for (var job =0;job<work.jobs.length;job++) {
    //for (var job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);

        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);

        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        $(".work-entry:last").append(formattedDates);

        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedDescription);
    }
};

projects.display = function() {
    for (var project=0; project<projects.projects.length;project++) {
   // for (var project in projects.projects) {
        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        $(".project-entry:last").append(formattedTitle);

        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        $(".project-entry:last").append(formattedDates);

        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry:last").append(formattedDescription);

        if (projects.projects[project].images.length > 0) {
          for (var image=0; image< projects.projects[project].images.length;image++) {
          //  for (var image in projects.projects[project].images) {
                var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
                $(".project-entry:last").append(formattedImage);
            }
        }
    }
};


$('#mapDiv').append(googleMap);


bio.display();
work.display();
projects.display();
education.display();