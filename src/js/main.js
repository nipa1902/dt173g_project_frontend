

// Reads the courses table via Fetch
function readCourses() {

fetch('http://studenter.miun.se/~nipa1902/writeable/dt173g/projekt/api/courses.php')

.then(res => res.json())

    .then(data => {
        data.forEach(course => {

        // Store object properties as variables
            let a = course.institution;
            let b = course.coursename;
            let c = course.startyear;
            let d = course.startmonth;
            let e = course.endyear;
            let f = course.endmonth;


            // Store html string
            let divstart = "<div class='grid-item'>";
            let colopen = "<div class='inner-grid-item'>";
            let colclose = "</div>";
            
            // Locate output element
            let outputEl = document.getElementById("educationoutput");
            
            //Print
            outputEl.innerHTML +=  
                            divstart + 
                            colopen + a + colclose +
                            colopen + b + colclose +
                            colopen + c + "/" + d + " - " +
                             + e + "/" + f + colclose;
        })
    })


}

// Reads the jobs table via Fetch
function readJobs() {
    
fetch('http://studenter.miun.se/~nipa1902/writeable/dt173g/projekt/api/jobs.php')

.then(res => res.json())

    .then(data => {
        data.forEach(job => {

        // Store object properties as variables

            let a = job.workplace;
            let b = job.title;
            let c = job.startyear;
            let d = job.startmonth;
            let e = job.endyear;
            let f = job.endmonth;

            // Store html string
            let divstart = "<div class='grid-item'>";
            let colopen = "<div class='inner-grid-item'>";
            let colclose = "</div>";
            
            // Locate output element
            let outputEl = document.getElementById("workoutput");
            
            //Print
            outputEl.innerHTML +=  
                            divstart + 
                            colopen + a + colclose +
                            colopen + b + colclose +
                            colopen + c + "/" + d + " - " +
                             + e + "/" + f + colclose;


        })
    })

}

// Reads the websites table via Fetch
function readWebsites() {

    
fetch('http://studenter.miun.se/~nipa1902/writeable/dt173g/projekt/api/websites.php')

.then(res => res.json())

    .then(data => {
        data.forEach(website => {

        // Store object properties as variables

            let a = website.title;
            let b = website.url;
            let c = website.description;
            let d = website.imagelink;

            // We take database ID to use as a unique number for BG styling, but manipulate the number
            let e = website.id * 19;

            // Store html string
            let divwrap = "<div class=wrapper>";
            let divstart = `<span id='${e}' class='grid-item portfolio-item'> `;
            let link = `<a class='portfolio-link' title='${a}' href=${b}>`;
            let colopen = "<span class='inner-grid-item'>";
            let spanclose = "</span>";
            
            // Locate output element
            let outputEl = document.getElementById("websitesoutput");
            
            //Print
            outputEl.innerHTML +=  

                divwrap + link + divstart +
                colopen + "<h3>" + a + "</h3>" + spanclose +
                colopen + "<p>" + c + "</p>" + spanclose + spanclose + "</a> </div>";

                            document.getElementById(`${e}`).style.backgroundImage = `url('${d}')`;
                            document.getElementById(`${e}`).style.backgroundColor = "white";

        })
    })

    
}