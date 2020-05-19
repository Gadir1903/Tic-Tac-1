let count = 1;
let x = "X";
let o = "O";
let M = [];
let xal1 = 0;
let xal2 = 0;


onload = function () {
  Arr();
  Tbl();
  alert("Adınızı daxil edin")
  document.getElementById("s1").innerHTML = prompt("Birinci Oyunçu", "")
  document.getElementById("s2").innerHTML = prompt("İkinci Oyunçu", "")
};

function Arr() {
  for (let i = 0; i < 3; i++) {
    M[i] = [];
  }
}

function Tbl() {
  let tbl = "";

  for (let i = 0; i < 3; i++) {
    tbl += "<tr>";
    for (let j = 0; j < 3; j++) {
      M[i][j] = M[i][j] == undefined ? "" : M[i][j];
      tbl += `<td onclick="Click(${i},${j})">${M[i][j]}</td>`;
    }
    tbl += "</tr>";
  }
  document.getElementsByTagName("table")[0].innerHTML = tbl;
}

function Click(i, j) {
  if (M[i][j] == "") {
    if (count % 2 == 0) {
      M[i][j] = o;
    } else {
      M[i][j] = x;
    }
    count++;
    Tbl();
    setTimeout(Check, 200);
  }
}


function Check() {
  xal1 = document.getElementById("i1").value;
  xal2 = document.getElementById("i2").value;

  for (let i = 0; i < 3; i++) {
    if (M[i][0] == M[i][1] && M[i][0] == M[i][2] && M[i][0] != "") {

      if (M[i][0] == x) {
        xal1++;
        document.getElementById("i1").value = xal1;
      } else {
        xal2++;
        document.getElementById("i2").value = xal2;
      }
      Restart();
    }

    for (let i = 0; i < 3; i++) {
      if (M[0][i] == M[1][i] && M[0][i] == M[2][i] && M[0][i] != "") {
        if (M[0][i] == x) {
          xal1++;
          document.getElementById("i1").value = xal1;
        } else {
          xal2++;
          document.getElementById("i2").value = xal2;
        }
        Restart();
      }
    }

    if (M[0][0] == M[1][1] && M[0][0] == M[2][2] && M[0][0] != "") {
      if (M[0][0] == x) {
        xal1++;
        document.getElementById("i1").value = xal1;
      } else {
        xal2++;
        document.getElementById("i2").value = xal2;
      }
      Restart();
    }
  }

  if (M[0][2] == M[1][1] && M[0][2] == M[2][0] && M[0][2] != "") {
    if (M[0][2] == x) {
      xal1++;
      document.getElementById("i1").value = xal1;
    } else {
      xal2++;
      document.getElementById("i2").value = xal2;
    }
    Restart();
  }



  if (count % 10 == 0) {
    alert("Bərabər!");
    Restart();
  }

}



function Restart() {
  count = 1;
  Arr();
  Tbl();
}