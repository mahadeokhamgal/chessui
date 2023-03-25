
function getSquares() {
    let a1 = '<div class="col-md-1" style="background-color: rgb(138, 123, 123);" ondrop = "drop(event);" ondragover="allowDrop(event);" id="';
    let a2 = '<div class="col-md-1" style="background-color: rgb(166, 244, 250);" ondrop = "drop(event);" ondragover="allowDrop(event);" id="';
    for (let i = 8; i > 0; i--) {
        document.getElementById("boardbox").innerHTML += '<div class="row" id="id' + i + '"></div>';
        for (let j = 1; j <= 8; j++) {
            if ((i + j) % 2 == 0) {
                document.getElementById("id" + i).innerHTML += a1 + i + j + '"></div>';
            } else {
                document.getElementById("id" + i).innerHTML += a2 + i + j + '"></div>';
            }
        }
    }
}

function resetGame() {
    whiteShortCastleOn = true;
    whiteLongCastleOn = true;
    blackShortCastleOn = true;
    blackLongCastleOn = true;
    whitesMove = true;
    let rw1 = '<img src="./img/rookw.png" class="W" id ="RW1" ondragstart = "drag(event)">';
    let rw2 = '<img src="./img/rookw.png" id ="RW2" class="W" ondragstart = "drag(event)">';
    let rb1 = '<img src="./img/rookb.png" id ="RB1" class="B" ondragstart = "drag(event)">';
    let rb2 = '<img src="./img/rookb.png" id ="RB2" class="B" ondragstart = "drag(event)">';
    let nw1 = '<img src="./img/knightw.png" id ="NW1" class="W" ondragstart = "drag(event)">';
    let nw2 = '<img src="./img/knightw.png" id ="NW2" class="W" ondragstart = "drag(event)">';
    let nb1 = '<img src="./img/knightb.png" id ="NB1" class="B" ondragstart = "drag(event)">';
    let nb2 = '<img src="./img/knightb.png" id ="NB2" class="B" ondragstart = "drag(event)">';
    let bb1 = '<img src="./img/bishopb.png" id ="BB1" class="B" ondragstart = "drag(event)">';
    let bb2 = '<img src="./img/bishopb.png" id ="BB2" class="B" ondragstart = "drag(event)">';
    let bw1 = '<img src="./img/bishopw.png" id ="BW1" class="W" ondragstart = "drag(event)">';
    let bw2 = '<img src="./img/bishopw.png" id ="BW2" class="W" ondragstart = "drag(event)">';
    let qb1 = '<img src="./img/queenb.png" id ="QB1" class="B" ondragstart = "drag(event)">';
    let qw1 = '<img src="./img/queenw.png" id ="QW1" class="W" ondragstart = "drag(event)">';
    let kb1 = '<img src="./img/kingb.png" id ="KB1" class="B" ondragstart = "drag(event)">';
    let kw1 = '<img src="./img/kingw.png" id ="KW1" class="W" ondragstart = "drag(event)">';
    for (let i = 1; i <= 8; i += 7) {
        for (let j = 1; j <= 8; j++) {
            if (i == 1) {
                if (j == 1 || j == 8) {
                    if (j == 1) {
                        document.getElementById(i + "" + j).innerHTML = rw1;
                    } else {
                        document.getElementById(i + "" + j).innerHTML = rw2;
                    }
                } else if (j == 2 || j == 7) {
                    if (j == 2) {
                        document.getElementById(i + "" + j).innerHTML = nw1;
                    } else {
                        document.getElementById(i + "" + j).innerHTML = nw2;
                    }
                } else if (j == 3 || j == 6) {
                    if (j == 3) {
                        document.getElementById(i + "" + j).innerHTML = bw1;
                    } else {
                        document.getElementById(i + "" + j).innerHTML = bw2;
                    }
                } else if (j == 4 || j == 5) {
                    if (j == 4) {
                        document.getElementById(i + "" + j).innerHTML = qw1;
                    } else {
                        document.getElementById(i + "" + j).innerHTML = kw1;
                    }
                }
            } else if (i == 8) {
                if (j == 1 || j == 8) {
                    if (j == 1) {
                        document.getElementById(i + "" + j).innerHTML = rb1;
                    } else {
                        document.getElementById(i + "" + j).innerHTML = rb2;
                    }
                } else if (j == 2 || j == 7) {

                    if (j == 2) {
                        document.getElementById(i + "" + j).innerHTML = nb1;
                    } else {
                        document.getElementById(i + "" + j).innerHTML = nb2;
                    }
                } else if (j == 3 || j == 6) {
                    if (j == 3) {
                        document.getElementById(i + "" + j).innerHTML = bb1;
                    } else {
                        document.getElementById(i + "" + j).innerHTML = bb2;
                    }
                } else if (j == 4 || j == 5) {
                    if (j == 4) {
                        document.getElementById(i + "" + j).innerHTML = qb1;
                    } else {
                        document.getElementById(i + "" + j).innerHTML = kb1;
                    }
                }
            }
        }
    }
    for (let i = 2; i < 8; i++) {
        for (let j = 1; j <= 8; j++) {
            if (i == 2) {
                for (let j = 1; j <= 8; j++) {
                    let a = '<img src="./img/pawnw.png" id ="PW' + j + '" class="W" ondragstart = "drag(event)">';
                    document.getElementById(i + "" + j).innerHTML = a;
                }
            } else if (i == 7) {
                for (let j = 1; j <= 8; j++) {
                    let a = '<img src="./img/pawnb.png" id ="PB' + j + '" class="B" ondragstart = "drag(event)">';
                    document.getElementById(i + "" + j).innerHTML = a;
                }
            } else {
                document.getElementById(i + "" + j).innerHTML = "";
            }
        }
    }
}

function allowDrop(event) {
    console.log("allowdrop called");
    event.preventDefault();
}

function drag(event) {
    console.log("drag called");
    startSquare = event.target.parentNode.id;
    startParent = event.target.parentNode.parentNode.id;
    event.dataTransfer.setData("pieceInTransit", event.target.id);
}
function dragover(event) {
    console.log("dragover called");
}
function drop(event) {
    piece = event.dataTransfer.getData("pieceInTransit");
    dropSquare = event.target.id;
    eventnew = event.target;
    isFilled = !eventnew.classList.contains("col-md-1");
    dropRow = event.target.parentNode.id;
    if (isFilled) {
        dropRow = event.target.parentNode.parentNode.id;
    }
    if (isFilled) {
        dropSquare = event.target.parentNode.id;
    }
    difference = startSquare - dropSquare;
    pieceBlocking = false;
    for (let i = 1; i <= 8; i++) {
        if (piece == "PW" + i && whitesMove) {
            pawnWhiteMove(event);
        } else if (piece == "PB" + i && !whitesMove) {
            pawnBlackMove(event);
        }
    }
    if (piece == "RW1" || piece == "RW2" && whitesMove) {
        rookWMove(event);
    }
    else if (piece == "RB1" || piece == "RB2" && !whitesMove) {
        rookBMove(event);
    } else if (piece == "BW1" || piece == "BW2" && whitesMove) {
        bishopWMove(event);
    } else if (piece == "BB1" || piece == "BB2" && !whitesMove) {
        bishopBMove(event);
    } else if (piece == "QW1" && whitesMove) queenWMove(event);
    else if (piece == "QB1" && !whitesMove) queenBMove(event);
    else if (piece == "KW1" && whitesMove) {
        if (dropSquare == 17) {
            whiteShortCastle(event);
        } else if (dropSquare == 13) {
            whiteLongCastle(event);
        } else {
            kingWMove(event);
        }
    }
    else if (piece == "KB1" && !whitesMove) {
        if (dropSquare == 87) {
            blackShortCastle(event);
        } else if (dropSquare == 13) {
            blackLongCastle(event);
        } else {
            kingBMove(event);
        }
    }
    else if (piece == "NW1" || piece == "NW2" && whitesMove) knightWMove(event);
    else if (piece == "NB1" || piece == "NB2" && !whitesMove) knightBMove(event);
}

function pawnWhiteMove(event) {
    let isDiagonal = (difference == -9 || difference == -11);
    if (document.getElementById(parseInt(startSquare) + 10).childNodes.length > 0) pieceBlocking = true;
    if (difference == -10 && !isFilled) {
        eventnew.appendChild(document.getElementById(piece));
        whitesMove = false;
    } else if (difference == -20 && startParent == "id2" && !pieceBlocking && !isFilled) {
        eventnew.appendChild(document.getElementById(piece));
        whitesMove = false;
    }
    else if (isDiagonal && isFilled && event.target.classList.contains("B")) {
        eventnew = event.target.parentNode;
        event.target.remove();
        eventnew.appendChild(document.getElementById(piece));
        whitesMove = false;
    }
}

function pawnBlackMove(event) {
    let isDiagonal = (difference == 9 || difference == 11);
    if (document.getElementById(parseInt(startSquare) - 10).childNodes.length > 0) pieceBlocking = true;
    if ((difference == 10 && !isFilled)) {
        eventnew.appendChild(document.getElementById(piece));
        whitesMove = true;
    }
    else if (difference == 20 && startParent == "id7" && !pieceBlocking) {
        eventnew.appendChild(document.getElementById(piece));
        whitesMove = true;
    }
    else if (isDiagonal && isFilled && event.target.classList.contains("W")) {
        eventnew = event.target.parentNode;
        event.target.remove();
        eventnew.appendChild(document.getElementById(piece));
        whitesMove = true;
    }
}

function rookWMove(event) {
    if (difference % 10 == 0) {
        let tempStart = parseInt(startSquare);
        let tempDrop = parseInt(dropSquare);
        if (tempStart < tempDrop) {
            while (tempStart + 10 < tempDrop) {
                if (document.getElementById(tempStart + 10).childNodes.length > 0) {
                    pieceBlocking = true;
                    break;
                }
                tempStart += 10;
            }
        }
        else if (tempStart > tempDrop) {
            while (tempStart > tempDrop + 10) {
                if (document.getElementById(tempDrop + 10).childNodes.length == 1) {
                    pieceBlocking = true;
                    break;
                }
                tempDrop += 10;
            }
        }
        if (isFilled && !pieceBlocking && event.target.classList.contains("B")) {
            eventnew = event.target.parentNode;
            event.target.remove();
            eventnew.appendChild(document.getElementById(piece));
            whitesMove = false;
            if (piece == "RW1") {
                whiteLongCastleOn = false;
            } else {
                whiteShortCastleOn = false;
            }
        }
        else if (!pieceBlocking && !isFilled) {
            eventnew.appendChild(document.getElementById(piece));
            whitesMove = false;
            if (piece == "RW1") {
                whiteLongCastleOn = false;
            } else {
                whiteShortCastleOn = false;
            }
        }
    }
    else if (startParent == dropRow) {
        let tempStart = parseInt(startSquare);
        let tempDrop = parseInt(dropSquare);
        if (tempStart < tempDrop) {
            while (tempStart + 1 < tempDrop) {
                if (document.getElementById(tempStart + 1).childNodes.length > 0) {
                    pieceBlocking = true;
                    break;
                }
                tempStart += 1;
            }
        }
        else if (tempStart > tempDrop) {
            while (tempStart > tempDrop + 1) {
                if (document.getElementById(tempDrop + 1).childNodes.length == 1) {
                    pieceBlocking = true;
                    break;
                }
                tempDrop += 1;
            }
        }
        if (isFilled && !pieceBlocking && event.target.classList.contains("B")) {
            eventnew = event.target.parentNode;
            event.target.remove();
            eventnew.appendChild(document.getElementById(piece));
            whitesMove = false;
            if (piece == "RW1") {
                whiteLongCastleOn = false;
            } else {
                whiteShortCastleOn = false;
            }
        }
        else if (!pieceBlocking && !isFilled) {
            eventnew.appendChild(document.getElementById(piece));
            whitesMove = false;
            if (piece == "RW1") {
                whiteLongCastleOn = false;
            } else {
                whiteShortCastleOn = false;
            }
        }
    }
}

function rookBMove(event) {
    if (difference % 10 == 0) {
        let tempStart = parseInt(startSquare);
        let tempDrop = parseInt(dropSquare);
        if (tempStart < tempDrop) {
            while (tempStart + 10 < tempDrop) {
                if (document.getElementById(tempStart + 10).childNodes.length > 0) {
                    pieceBlocking = true;
                    break;
                }
                tempStart += 10;
            }
        }
        else if (tempStart > tempDrop) {
            while (tempStart > tempDrop + 10) {
                if (document.getElementById(tempDrop + 10).childNodes.length == 1) {
                    pieceBlocking = true;
                    break;
                }
                tempDrop += 10;
            }
        }
        if (isFilled && !pieceBlocking && event.target.classList.contains("W")) {
            eventnew = event.target.parentNode;
            event.target.remove();
            eventnew.appendChild(document.getElementById(piece));
            whitesMove = true;
            if (piece == "RB1") {
                blackLongCastleOn = false;
            } else {
                blackShortCastleOn = false;
            }
        }
        else if (!pieceBlocking && !isFilled) {
            eventnew.appendChild(document.getElementById(piece));
            whitesMove = true;
            if (piece == "RB1") {
                blackLongCastleOn = false;
            } else {
                blackShortCastleOn = false;
            }
        }
    }
    if (startParent == dropRow) {
        let tempStart = parseInt(startSquare);
        let tempDrop = parseInt(dropSquare);
        if (tempStart < tempDrop) {
            while (tempStart + 1 < tempDrop) {
                if (document.getElementById(tempStart + 1).childNodes.length > 0) {
                    pieceBlocking = true;
                    break;
                }
                tempStart += 1;
            }
        }
        else if (tempStart > tempDrop) {
            while (tempStart > tempDrop + 1) {
                if (document.getElementById(tempDrop + 1).childNodes.length == 1) {
                    pieceBlocking = true;
                    break;
                }
                tempDrop += 1;
            }
        }
        if (isFilled && !pieceBlocking && event.target.classList.contains("W")) {
            eventnew = event.target.parentNode;
            event.target.remove();
            eventnew.appendChild(document.getElementById(piece));
            whitesMove = true;
            if (piece == "RB1") {
                blackLongCastleOn = false;
            } else {
                blackShortCastleOn = false;
            }
        }
        else if (!pieceBlocking && !isFilled) {
            eventnew.appendChild(document.getElementById(piece));
            whitesMove = true;
            if (piece == "RB1") {
                blackLongCastleOn = false;
            } else {
                blackShortCastleOn = false;
            }
        }
    }
}

function bishopWMove(event) {
    if (difference % 11 == 0) {
        let tempStart = parseInt(startSquare);
        let tempDrop = parseInt(dropSquare);
        if (tempStart < tempDrop) {
            while (tempStart + 11 < tempDrop) {
                if (document.getElementById(tempStart + 11).childNodes.length > 0) {
                    pieceBlocking = true;
                    break;
                }
                tempStart += 11;
            }
        }
        else if (tempStart > tempDrop) {
            while (tempStart > tempDrop + 11) {
                if (document.getElementById(tempDrop + 11).childNodes.length == 1) {
                    pieceBlocking = true;
                    break;
                }
                tempDrop += 11;
            }
        }
        if (isFilled && !pieceBlocking && event.target.classList.contains("B")) {
            eventnew = event.target.parentNode;
            event.target.remove();
            eventnew.appendChild(document.getElementById(piece));
            whitesMove = false;
        }
        else if (!pieceBlocking && !isFilled) {
            eventnew.appendChild(document.getElementById(piece));
            whitesMove = false;
        }
    }
    else if (difference % 9 == 0) {
        let tempStart = parseInt(startSquare);
        let tempDrop = parseInt(dropSquare);
        if (tempStart < tempDrop) {
            while (tempStart + 9 < tempDrop) {
                if (document.getElementById(tempStart + 9).childNodes.length > 0) {
                    pieceBlocking = true;
                    break;
                }
                tempStart += 9;
            }
        }
        else if (tempStart > tempDrop) {
            while (tempStart > tempDrop + 9) {
                if (document.getElementById(tempDrop + 11).childNodes.length == 1) {
                    pieceBlocking = true;
                    break;
                }
                tempDrop += 9;
            }
        }
        if (isFilled && !pieceBlocking && event.target.classList.contains("B")) {
            eventnew = event.target.parentNode;
            event.target.remove();
            eventnew.appendChild(document.getElementById(piece));
            whitesMove = false;
        }
        else if (!pieceBlocking && !isFilled) {
            eventnew.appendChild(document.getElementById(piece));
            whitesMove = false;
        }
    }
}

function bishopBMove(event) {
    if (difference % 11 == 0) {
        let tempStart = parseInt(startSquare);
        let tempDrop = parseInt(dropSquare);
        if (tempStart < tempDrop) {
            while (tempStart + 11 < tempDrop) {
                if (document.getElementById(tempStart + 11).childNodes.length > 0) {
                    pieceBlocking = true;
                    break;
                }
                tempStart += 11;
            }
        }
        else if (tempStart > tempDrop) {
            while (tempStart > tempDrop + 11) {
                if (document.getElementById(tempDrop + 11).childNodes.length == 1) {
                    pieceBlocking = true;
                    break;
                }
                tempDrop += 11;
            }
        }
        if (isFilled && !pieceBlocking && event.target.classList.contains("W")) {
            eventnew = event.target.parentNode;
            event.target.remove();
            eventnew.appendChild(document.getElementById(piece));
            whitesMove = true;
        }
        else if (!pieceBlocking && !isFilled) {
            eventnew.appendChild(document.getElementById(piece));
            whitesMove = true;
        }
    } else if (difference % 9 == 0) {
        let tempStart = parseInt(startSquare);
        let tempDrop = parseInt(dropSquare);
        if (tempStart < tempDrop) {
            while (tempStart + 9 < tempDrop) {
                if (document.getElementById(tempStart + 9).childNodes.length > 0) {
                    pieceBlocking = true;
                    break;
                }
                tempStart += 9;
            }
        } else if (tempStart > tempDrop) {
            while (tempStart > tempDrop + 9) {
                console.log(document.getElementById(tempDrop + 9).childNodes.length);
                if (document.getElementById(tempDrop + 11).childNodes.length == 1) {
                    pieceBlocking = true;
                    break;
                }
                tempDrop += 9;
            }
        }
        if (isFilled && !pieceBlocking && event.target.classList.contains("W")) {
            console.log(event.target.classList);
            eventnew = event.target.parentNode;
            event.target.remove();
            eventnew.appendChild(document.getElementById(piece));
            whitesMove = true;
        }
        else if (!pieceBlocking && !isFilled) {
            eventnew.appendChild(document.getElementById(piece));
            whitesMove = true;
        }
    }
}

function queenWMove(event) {
    if (difference % 10 == 0 || startParent == dropRow) rookWMove(event);
    else if (difference % 11 == 0 || difference % 9 == 0) bishopWMove(event);
}

function queenBMove(event) {
    if (difference % 10 == 0 || startParent == dropRow) rookBMove(event);
    else if (difference % 11 == 0 || difference % 9 == 0) bishopBMove(event);
}

function kingWMove(event) {
    let d = Math.abs(difference);
    if (d == 10 || d == 1 || d == 9 || d == 11) {
        if (isFilled && event.target.classList.contains("B")) {
            eventnew = event.target.parentNode;
            event.target.remove();
            eventnew.appendChild(document.getElementById(piece));
            whitesMove = false;
            whiteLongCastleOn = false;
            whiteShortCastleOn = false;
        }
        else if(!isFilled){
            eventnew.appendChild(document.getElementById(piece));
            whitesMove = false;
            whiteLongCastleOn = false;
            whiteShortCastleOn = false;
        }
        
    }
}

function kingBMove(event) {
    let d = Math.abs(difference);
    if (d == 10 || d == 1 || d == 9 || d == 11) {
        if (isFilled && event.target.classList.contains("W")) {
            eventnew = event.target.parentNode;
            event.target.remove();
            eventnew.appendChild(document.getElementById(piece));
            whitesMove = true;
            blackLongCastleOn = false;
            blackShortCastleOn = false;
        }
        else if(!isFilled){
            eventnew.appendChild(document.getElementById(piece));
            whitesMove = true;
            blackLongCastleOn = false;
            blackShortCastleOn = false;
        }
        
    }
}

function whiteShortCastle(event) {
    let tempStart = parseInt(startSquare);
    let tempDrop = parseInt(dropSquare);
    while (tempStart + 1 < tempDrop) {
        if (document.getElementById(tempStart + 1).childNodes.length > 0) {
            pieceBlocking = true;
            break;
        }
        tempStart += 1;
    }
    if (!pieceBlocking && whiteShortCastleOn) {
        eventnew.appendChild(document.getElementById(piece));
        document.getElementById(16).appendChild(document.getElementById("RW2"));
        whitesMove = false;
    }
}

function whiteLongCastle(event) {
    let tempStart = parseInt(startSquare);
    let tempDrop = parseInt(dropSquare);
    while (tempStart - 1 < tempDrop) {
        if (document.getElementById(tempStart - 1).childNodes.length > 0) {
            pieceBlocking = true;
            break;
        }
        tempStart -= 1;
    }
    if (!pieceBlocking && whiteShortCastleOn) {
        eventnew.appendChild(document.getElementById(piece));
        document.getElementById(14).appendChild(document.getElementById("RW1"));
        whitesMove = false;
    }
}

function blackShortCastle(event) {
    let tempStart = parseInt(startSquare);
    let tempDrop = parseInt(dropSquare);
    while (tempStart + 1 < tempDrop) {
        if (document.getElementById(tempStart + 1).childNodes.length > 0) {
            pieceBlocking = true;
            break;
        }
        tempStart += 1;
    }
    if (!pieceBlocking && whiteShortCastleOn) {
        eventnew.appendChild(document.getElementById(piece));
        document.getElementById(86).appendChild(document.getElementById("RB2"));
        whitesMove = true;
    }
}

function blackLongCastle(event) {
    let tempStart = parseInt(startSquare);
    let tempDrop = parseInt(dropSquare);
    while (tempStart - 1 < tempDrop) {
        if (document.getElementById(tempStart - 1).childNodes.length > 0) {
            pieceBlocking = true;
            break;
        }
        tempStart -= 1;
    }
    if (!pieceBlocking && whiteShortCastleOn) {
        eventnew.appendChild(document.getElementById(piece));
        document.getElementById(84).appendChild(document.getElementById("RB1"));
        whitesMove = true;
    }
}

function knightWMove(event) {
    let d = Math.abs(difference);
    if (d == 19 || d == 21 || d == 8 || d == 12) {
        if (isFilled && event.target.classList.contains("B")) {
            eventnew = event.target.parentNode;
            event.target.remove();
        }
        eventnew.appendChild(document.getElementById(piece));
        whitesMove = false;
    }
}

function knightBMove(event) {
    let d = Math.abs(difference);
    if (d == 19 || d == 21 || d == 8 || d == 12) {
        if (isFilled && event.target.classList.contains("W")) {
            eventnew = event.target.parentNode;
            event.target.remove();
        }
        eventnew.appendChild(document.getElementById(piece))
        whitesMove = true;
    }
}