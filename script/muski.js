function tracklist_clear(element) {
    $($(element).find("tbody")).html("");
}

function tracklist_add(tracklist, tracknumber, title, performers, duration) {
    var tracklist_body = $(tracklist).find("tbody");
    var tmp = document.createElement("tbody");
    var tr = document.createElement("tr");
    var td_tracknumber = document.createElement("td");
    var td_title = document.createElement("td");
    var td_duration = document.createElement("td");
    $(td_duration).html(duration);
    $(td_tracknumber).html(tracknumber);
    var title_container = document.createElement("div");
    var div_title = document.createElement("div");
    $(div_title).html(title);
    title_container.appendChild(div_title);
    var div_performers = document.createElement("div");
    if (performers != "" && performers != null) {
        $(div_performers).html(performers);
        title_container.appendChild(div_performers);
    }
    td_title.appendChild(title_container);
    tr.appendChild(td_tracknumber);
    tr.appendChild(td_title);
    tr.appendChild(td_duration);
    tracklist_body.append(tr);
}
