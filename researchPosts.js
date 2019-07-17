function ResearchPosts({idNumber, title, summary, description, skillsNeeded, location, contact, email}) {
    this.idNumber = idNumber;
    this.title = title;
    this.summary = summary;
    this.description = description;
    this.skillsNeeded = skillsNeeded;
    this.location = location;
    this.contact = contact;
    this.email = email;
}

ResearchPosts.prototype.postTemplate = function() {
    var {idNumber, title, summary, location: {number, street, city, state}} = this;
        return (
        `<div class="card mt-4">
        <div id="${idNumber}" class="card-header h4">${title}</div>
        <div class="card-block px-3 my-3">${summary}</div>
        <div class="card-footer h6"><span>Location: <a href="https://maps.google.com/?q=${number} ${street} ${city} ${state}" target="_blank">${number} ${street}, ${city}, ${state}</a></span>
    </div>`);
    };

ResearchPosts.prototype.detailedPost = function() {
    var { title,  description, skillsNeeded, location: {number, street, city, state}, email } = this;
    console.log("clicked", title);
    return (`<div class="container button-div">
                <button id="backs" class="back-button bg-light py-1 text-dark">
                    <i class="fa fa-arrow-left"></i> 
                    <span class="px- py-2">
                        BACK
                    </span>
                </button>
            </div>

            <div class="container">
                
                <div class="h2 ml-3 mt-5">
                    ${title}
                </div> 
                    
                <div class="desc ml-0 mt-4 pt-3 pl-3 pb-3 pr-3">
                    ${description}
                </div>
                    
                <div class="desc ml-0 mt-0 pt-3 pl-3 pb-3 pr-3">
                    <span class="h5">
                        SKILLS PREFERRED
                    </span>
                    <div class="card mt-3">
                        <div class="row mt-2"> 
                            <ul>
                                <li>hello1</li>
                                <li>hello2</li>
                                <li>hello3</li>
                                <li>heloo</li>
                                <li>ahdvb</li>
                            </ul>
                        </div>
                    </div>
                </div>
                    
                <div class="mt-3">
                        <span class="ml-3 h5">
                            COMPENSATION
                        </span>
                        <div class="ml-3 h6 mt-2">
                            ${"35"}$ per hour
                        </div>
                </div>

                <div class="mt-5 mb-5">
                    <span class="h5 ml-3">Location: 
                            <a href="https://maps.google.com/?q=${number} ${street} ${city} ${state}" target="_blank">${number} ${street}, ${city}, ${state}</a>
                    </span>

                    <span class="ml-5 h5">
                        Email: 
                        <span class="h6">
                            ${email}
                        </span>
                    </span>
                </div>

            </div>`);
}
