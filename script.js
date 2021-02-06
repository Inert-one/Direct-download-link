function $(id) {
  return document.getElementById(id);
}


function generatelink() {
  var add = $("cde").value;
  var iframe = document.getElementById("fri")
  var drive = add.indexOf("google.com/file/d/");
  var dbox = add.indexOf("dropbox.com/s");
  var odrive = add.indexOf("onedrive.live.com");
  var odrivePro = add.indexOf("sharepoint.com");
  if (drive != -1) { 
    var start = add.indexOf("d/");
    var end = add.indexOf("/view");
    var reString = add.slice(start + 2, end);
    var link =
    "https://drive.google.com/uc?export=download&id=" + reString + "";
    $("linkpaste").value = link;
    var previewLink = "https://drive.google.com/file/d/" + reString + "/preview"
    $("linkpaste").select();
  } else if (dbox != -1) {
    var link = add.replace("?dl=0", "?dl=1");
    $("linkpaste").value = link;
    $("linkpaste").select();
    var previewLink = link;
    iframe.style.display = "none";
  } else if (odrive != -1) {
    var link = add
      .replace(/.*src="(.*?)" w.*/g, "$1")
      .replace("embed?", "download?");

    $("linkpaste").value = link;
    
    $("linkpaste").select();
    var previewLink = add + "&action=embedview"
    iframe.style.display = "none";
  } else if (odrivePro != -1) {
    res = add.slice(0, -8) + "download=1";
    $("linkpaste").value = res;
    var previewLink = add.slice(0, -9) + "&action=embedview";
    iframe.style.display = "none";
  } else {
    $("linkpaste").value = "THE URL IS INVALID";
    iframe.style.display = "none";
  }
  preview(previewLink)
}


window.onload = function () {
  $("cde").focus();
  $("but").onclick = generatelink;
};


// Copy

function copy() {
  var val = $("linkpaste").value;
  if (val && val != "THE URL IS INVALID") {
    var copyText = $("linkpaste");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
    alert("Copied the text: " + copyText.value);
  }
}
document.execCommand("")

// var width = window.innerWidth;

// if (width <= 797) {
  //   window.alert("This site is not compatible for this screen size");
  // }

preview = (previewLink) => {
  var val = $("linkpaste").value;
  $('fr').innerHTML = `<iframe class=" m-0 p-0 col-12" id="fri" src="${previewLink}" style="background-color: transparent;" allowfullscreen frameborder='0'></iframe>
    <br/><button type="button" class="sbtn atom-btn white-btn mb-3 mt-3" onclick="location.href='`+ val +`'">Download</button>`
}


