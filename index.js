function header(displaySearch) {
    return `
    <div class="container-fluid bg-info text-white navbar-brand mb-5 pb-${displaySearch?0:2}">
        <i class="fas fa-bars"></i>
        <span class="h4 ml-3">ResearchPedia</span>
        ${displaySearch?'<input class="search mt-1 mr-4 mb-1" placeholder="Search">':""}
    </div>
    `
}

function fullPage (frompostTemplate, idNumber) {
    var eachResearch = document.getElementById("each-research"), pageHeader = document.getElementById("page-header");
    if(frompostTemplate) {
        pageHeader.innerHTML = header(true);
        eachResearch.innerHTML = "";
        instantiatedData.forEach(function(eachInsData){
            eachResearch.innerHTML += eachInsData.postTemplate();
        });

    }
    else {
        pageHeader.innerHTML = header(false);
        instantiatedData.forEach(function(eachInsData) {
            if(eachInsData.idNumber === idNumber)
                {
                    eachResearch.innerHTML = eachInsData.detailedPost();
                }
        });
        let backButton = document.getElementsByClassName("back-button");
        return backButton;
    }
}

function onClickEachPost() {
    var cardHead = document.getElementsByClassName("card-header");
    for(let i = 0; i<cardHead.length; i++) {
        cardHead[i].addEventListener('click', function(e) {
            instantiatedData.forEach(function(eachData) {
                if(eachData.idNumber === e.target.id) {
                    var backButton = fullPage(false, eachData.idNumber);
                    onClickBackButton(backButton);
                    }
            });
        });
    };
}

function onClickBackButton(backButton) {
    backButton[0].addEventListener("click", function() {
        fullPage(true);
        onClickEachPost();
    })
}

function main(){
    fullPage(true);
    onClickEachPost();
}
main();