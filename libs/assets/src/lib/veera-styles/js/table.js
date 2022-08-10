const response = {
  "data": [
    {
      "kuupäev": "22.03.2029",
      "Kellaaeg": "13:11",
      "Kestus": "6 min",
      "Asukoht": "B Ida-Virumaa",
      "IsikuTuvastamine": "Pangalink",
      "IsikuTuvastamine2": "Pangalink"
    },
    {
      "kuupäev": "22.03.2029",
      "Kellaaeg": "13:11",
      "Kestus": "6 min",
      "Asukoht": "A Ida-Virumaa",
      "IsikuTuvastamine": "Pangalink",
      "IsikuTuvastamine2": " Pangalink"
    }, {
      "kuupäev": "23.03.2029",
      "Kellaaeg": "13:11",
      "Kestus": "6 min",
      "Asukoht": "C Ida-Virumaa",
      "IsikuTuvastamine": "Pangalink",
      "IsikuTuvastamine2": "Pangalink"
    }, {
      "kuupäev": "21.03.2029",
      "Kellaaeg": "13:11",
      "Kestus": "2 min",
      "Asukoht": "F Ida-Virumaa",
      "IsikuTuvastamine": "Pangalink",
      "IsikuTuvastamine2": "Pangalink"
    }
  ]
};

const emptyResponse = {
  data: []
};

//Load data in
$(document).ready(() => {
  
  drawTable();
  $(".table-sort").on("click", function () {
    sortByType($(this).parent().text())
  })

});


//on click if it was a button in the last row of the table, checks it type and toggles the handler
$(document).on('click', 'tr td:last-child button', function () {
  let currentTD = $(this).parent();
  //current resetFunction enables button to have multiple classes, this selects the relevant one(latest added)
  const clickedButton = $(this)[0].classList[$(this)[0].classList.length - 1];
  if (clickedButton === "editbtn") {
    $("tr td:last-child button").each((idx, el) => {
      console.log($(el), $(el).siblings());
      $(el).siblings(":first-child").remove(); // removes icons
      $(el).text("Muuda");
      $(el).removeClass();
      $(el).addClass("editbtn");
    });
    editRow(currentTD);
  } else if ($(this)[0].classList[0] === "removebtn") {
    $("tr td:last-child button").each((idx, el) => {
      $(el).text("Kustuta");
      $(el).removeClass();
      $(el).addClass("removebtn");
    });
    removeRow(currentTD);
  } else if ($(this)[0].classList[0] === "addbtn") {
    addRow();
  } else if ($(this)[0].classList[0] === "cancelbtn") {
    cancelHandler();
  }
});

//When user cancels, change state back and reset
function cancelHandler() {
  validateData();
  drawTable();
}

//Validate makes sure, that when clicking on new button, closes previous opened ones and changes state back
function validateTable(type) {
  if (type === "edit") {
    const openElement = $(".editing");
    openElement.toggleClass("editing");
    const siblings = openElement.siblings();
    $.each(siblings.splice(0, siblings.length), function () {
      $(this).children().attr('contenteditable', false);
      $(this).children().toggleClass("editTd");
    });
    $(openElement.children(":last")).remove();
    $(openElement).children().text("Muuda");
  } else if (type === "remove") {
    const openElement = $(".removing");
    openElement.toggleClass("removing");
    $(openElement.children(":last")).remove();
    $(openElement).children().text("Eemalda");
  }
}

//removes editing and removing states, removes all extra elements and changes the buttons back to default
function reset() {
  $("tr td:last-child").each((idx, el) => {
    $(el).children().not(":first").remove();
    if ($(el).hasClass("editing")) $(el).toggleClass("editing");
    if ($(el).hasClass("removing")) $(el).toggleClass("removing")

  });
  const firstThree = $("tr td:last-child button").splice(0, 3);
  $(firstThree[0]).removeClass().addClass("editbtn").text("Muuda");
  $("<img src='assets/Icons/edit.svg' alt='muuda nupp'/>").insertBefore($(firstThree[0]));
  $(firstThree[1]).removeClass().addClass("addbtn").text("Lisa uus")
  $("<p>+</p>").insertBefore($(firstThree[1]));
  $(firstThree[2]).removeClass().addClass("removebtn").text("Kustuta");
  $("<img src='assets/Icons/delete.svg' alt='kustuta nupp'/>").insertBefore($(firstThree[2]));

}

//Draws the table from response.data and then calls the reset button to add manipulating buttons
function drawTable() {
  if (!response || !response.data) { drawEmptyTable(); return }
  let c = [];
  $.each(response.data, function (i, item) {
    c.push("<tr><td tabindex=\"0\"><p>" + item.kuupäev + "</p></td>");
    c.push("<td tabindex=\"0\"><p>" + item.Kellaaeg + "</p></td>");
    c.push("<td tabindex=\"0\"><p>" + item.Kestus + "</p></td>");
    c.push("<td tabindex=\"0\"><p>" + item.Asukoht + "</p></td>");
    c.push("<td tabindex=\"0\"><p>" + item.IsikuTuvastamine + "</p></td>");
    c.push("<td tabindex=\"0\"><p>" + item.IsikuTuvastamine2 + "</p></td>");
    c.push("<td contenteditable=\"false\"><button></button></td></tr>");
  });
  $('.c-table tbody').html(c.join(""));
  reset()
}

function drawEmptyTable() {
  $("table").remove();
  $(".c-table-container").append("<img src='assets/Icons/empty.svg' alt='andmed puuduvad'/>")
  $(".c-table-container").append("<p>Andmed puuduvad</p>")
  $(".c-table-container").css({
    "display": "flex",
    "justify-content": "center",
    "align-items": "center",
    "flex-direction": "column",
    "color": "#A6A8B1"
  });

}

//adds a row to the bottom and changes it to editing state
function addRow() {
  let newObject = {};
  Object.keys(response.data[0]).forEach(key => newObject[key] = "");
  response.data.push(newObject);
  drawTable();
  //force the new row to editing state
  const newRowButton = $("tbody").children(":last-child").children(":last-child")[0];
  $(newRowButton).children().toggleClass("editbtn");
  $(newRowButton).toggleClass("editing");
  toggleEditing($(newRowButton), true);
}

function removeRow(row) {
  const element = $(row);
  if (!element.hasClass("removing")) {
    validateTable("remove");
    element.toggleClass("removing");
    $(row).children().text("Kinnita kustutamine");
    row.append('<button class="cancelbtn">Katkesta</button>');
  } else {
    const index = $(row).parent().index();
    response.data.splice(index, 1);
    drawTable();
  }

}

//when clicked on either save or change button
//if "edit" button is clicked and row is not editable, validates table(that other actions are not open) and toggles class editing
//if "save" button is clicked(editable is true) add the new edited row to the response.data list, validate data(that the row was not empty) and redraw the table
function editRow(row) {
  const index = $(row).parent().index();
  const siblings = $(row).siblings();
  const editable = siblings.children().attr('contenteditable');
  if (editable) {
    response.data.splice(index, 1, createDataObject(row));
    validateData();
    drawTable();
  } else {
    validateTable("edit");
    $(row).toggleClass("editing");
  }
  toggleEditing(row, !editable)
}

//given the row, and editing parameter changes the row to that given parameter
function toggleEditing(row, editable) {
  const siblings = row.siblings();
  $(row).children().text("Salvesta");
  row.append('<button class="cancelbtn">Katkesta</button>');
  $.each(siblings.slice(0, siblings.length), function () {
    $(this).children().attr('contenteditable', editable);
    $(this).toggleClass("editTd");
  });
}

//Creates a new data object with keys equal to the first object in list
function createDataObject(row) {
  const siblings = row.siblings();
  const keys = Object.keys(response.data[0]);
  const newObject = {};
  $.each(siblings.slice(0, siblings.length), function (index, value) {
    newObject[keys[index]] = $(value).text();
  });
  return newObject;
}

//Removes objects that has only keys and has only values equal to ""
function validateData() {
  response.data = response.data.filter(object => Object.values(object).some(element => element !== ""))
}

//Given a object key, sorts it alphabetically
function sortByType(type) {
  response.data = response.data.sort((a, b) => (a[type] > b[type]) ? 1 : -1);
  drawTable();
}
