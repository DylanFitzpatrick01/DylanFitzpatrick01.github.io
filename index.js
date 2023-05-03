function collapsible(coll){
    for (var i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.maxHeight){
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
        });
    }
}

collapsible(document.getElementsByClassName("antipatterns-collapsible"));
collapsible(document.getElementsByClassName("shutterstock-collapsible"));
collapsible(document.getElementsByClassName("github-stats-collapsible"));
collapsible(document.getElementsByClassName("bus-collapsible"));
collapsible(document.getElementsByClassName("space-invaders-collapsible"));
collapsible(document.getElementsByClassName("web-calculator-collapsible"));
collapsible(document.getElementsByClassName("file-retrieval-protocol-collapsible"));
collapsible(document.getElementsByClassName("flow-forwarding-collapsible"));