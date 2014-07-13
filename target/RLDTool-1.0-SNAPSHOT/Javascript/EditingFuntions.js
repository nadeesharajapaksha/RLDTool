/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function bold() {
    //function toggleBold() {
    var range, sel;
    if (window.getSelection) {
        // Non-IE case
        sel = window.getSelection();
        if (sel.getRangeAt) {
            range = sel.getRangeAt(0);
        }
        document.designMode = "on";
        if (range) {
            sel.removeAllRanges();
            sel.addRange(range);
        }
        document.execCommand("bold", false, null);
        document.designMode = "off";
    } 
}


function italic(){

   var range, sel;
    if (window.getSelection) {
        // Non-IE case
        sel = window.getSelection();
        if (sel.getRangeAt) {
            range = sel.getRangeAt(0);
        }
        document.designMode = "on";
        if (range) {
            sel.removeAllRanges();
            sel.addRange(range);
        }
        document.execCommand("italic", false, null);
        document.designMode = "off";
    } 
}

function underline(){

	 var range, sel;
    if (window.getSelection) {
        // Non-IE case
        sel = window.getSelection();
        if (sel.getRangeAt) {
            range = sel.getRangeAt(0);
        }
        document.designMode = "on";
        if (range) {
            sel.removeAllRanges();
            sel.addRange(range);
        }
        document.execCommand("underline", false, null);
        document.designMode = "off";
    } 

}

function setFont(){

	var selectFont=document.getElementById("font");
	//alert("k");

	if(selectFont){
		//alert("k");

		var selectFontValue=selectFont.options[selectFont.selectedIndex].value;
		//alert(selectFontValue);

		if(selectFontValue==="12"){
		document.getElementById("div1").setFont="12 px";
		}

		else{
		document.getElementById("div1").setFont="20 px";
		}
	}
}

function Read() {


  var rows=document.getElementById("rows").value;

  var cols=document.getElementById("cols").value;
  // get the reference for the body
  var body = document.getElementsByTagName("foreignObject")[0];

  
 
  // creates a <table> element and a <tbody> element
  var tbl     = document.createElement("table");
  var tblBody = document.createElement("tbody");

  
  // creating all cells
  for (var i = 0; i < rows; i++) {
    // creates a table row
    var row = document.createElement("tr");
 
    for (var j = 0; j < cols; j++) {
      // Create a <td> element and a text node, make the text
      // node the contents of the <td>, and put the <td> at
      // the end of the table row
      var cell = document.createElement("td");
      cell.contentEditable="true";
      //var cellText = document.createTextNode(".");
      //cell.appendChild(cellText);
      row.appendChild(cell);
    }
 
    // add the row to the end of the table body
    tblBody.appendChild(row);
  }
 
  // put the <tbody> in the <table>
  tbl.appendChild(tblBody);
  // appends <table> into <body>
  body.appendChild(tbl);
  // sets the border attribute of tbl to 2;
  //tbl.setAttribute("border", "2");
}


