import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'authorchessboard';
  piceTransit: any;
  startPoint: any;
  position: any[][];

  constructor() {
    this.position = [
      ['rookb', 'knightb', 'bishopb', 'queenb', 'kingb', 'bishopb', 'knightb', 'rookb'],
      ['pawnb', 'pawnb', 'pawnb', 'pawnb', 'pawnb', 'pawnb', 'pawnb', 'pawnb'],
      ['', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', ''],
      ['pawnw', 'pawnw', 'pawnw', 'pawnw', 'pawnw', 'pawnw', 'pawnw', 'pawnw'],
      ['rookw', 'knightw', 'bishopw', 'queenw', 'kingw', 'bishopw', 'knightw', 'rookw']
    ];
  }
  ngAfterViewInit() {
    this.resetGame()
  }
  // getRank(i: number) {
  //   let RankMap = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
  //   return RankMap[i];
  // }
  resetGame() {
    this.position.forEach((row, i) => {
      row.forEach((cell, j) => {
        console.log("id is", document.getElementById(i + '' + j), i, j);
        if (i > 1 && i < 6) return;
        document.getElementById(i + '' + j)!.innerHTML = `<img src="${this.getPieceUrl(i + '' + j)}" ondragstart = "drag(event)">`;
      })
    })
  }
  getPieceUrl(id: string) {
    console.log("string id for pice is", id);
    return "http://localhost:4202/assets/images/" + this.position[parseInt(id.charAt(0))][parseInt(id.charAt(1))] + ".png";
  }
  allowDrop(event: any) {
    console.log("allowdrop called");
    event.preventDefault();
  }

  drag(event: any) {

    // startSquare = event.target.parentNode.id;
    // startParent = event.target.parentNode.parentNode.id;
    console.log("drag called");
    event.dataTransfer.setData("pieceInTransit", event.target.id);
  }
  dragover(event: any) {
    console.log("dragover called", event);
  }

  drop(event: any) {
    console.log("drop called", event);

  }





  // drag(event:any) {

  //   // this.startSquare = event.target.parentNode.id;
  //   // this.startParent = event.target.parentNode.parentNode.id;
  //   console.log("drag called", event);
  //   // event.dataTransfer.setData("pieceInTransit", event.target.id);
  // }
  // drop(event: any){
  //   console.log("drop called");

  // }
  // allowDrop(event:any) {
  //   console.log("allow drop called");

  // }
  // allowDrop(ev:any) {
  //   ev.preventDefault();
  // }

  // drag(event:any) {
  //   console.log("drag called", event, event.target.parentNode ,event.srcElement);
  //   this.piceTransit = event.srcElement;
  //   this.startPoint = event.target.parentNode.id;
  // }

  // drop(ev:any) {
  //   console.log("drop called", ev.target.id, ev);
  //   ev.preventDefault();
  //   let left = parseInt(ev.target.id.charAt(0));
  //   let right = parseInt(ev.target.id.charAt(1));
  //   this.position[left][right] = '';
  //   console.log("data in transit",left, right , this.position);
  // }


  //   whiteShortCastleOn: boolean = true;
  //   whiteLongCastleOn: boolean = true;
  //   blackShortCastleOn: boolean = true;
  //   blackLongCastleOn: boolean = true;
  //   whitesMove: boolean = true;
  //   startSquare: any;
  //   startParent: any;
  //   difference: number = 0;
  //   isFilled: boolean = false;
  //   dropSquare: string = "";
  //   eventnew: any;

  // getSquares() {
  //   let a1 = '<div class="col-md-1" style="background-color: rgb(138, 123, 123);" ondrop = "drop(event);" ondragover="allowDrop(event);" id="';
  //   let a2 = '<div class="col-md-1" style="background-color: rgb(166, 244, 250);" ondrop = "drop(event);" ondragover="allowDrop(event);" id="';
  //   for (let i = 8; i > 0; i--) {
  //     document.getElementById("boardbox").innerHTML += '<div class="row" id="id' + i + '"></div>';
  //     for (let j = 1; j <= 8; j++) {
  //       if ((i + j) % 2 == 0) {
  //         document.getElementById("id" + i).innerHTML += a1 + i + j + '"></div>';
  //       } else {
  //         document.getElementById("id" + i).innerHTML += a2 + i + j + '"></div>';
  //       }
  //     }
  //   }
  // }

  // resetGame() {
  //   this.whiteShortCastleOn = true;
  //   this.whiteLongCastleOn = true;
  //   this.blackShortCastleOn = true;
  //   this.blackLongCastleOn = true;
  //   this.whitesMove = true;
  //   let rw1 = '<img src="./img/rookw.png" class="W" id ="RW1" ondragstart = "drag(event)">';
  //   let rw2 = '<img src="./img/rookw.png" id ="RW2" class="W" ondragstart = "drag(event)">';
  //   let rb1 = '<img src="./img/rookb.png" id ="RB1" class="B" ondragstart = "drag(event)">';
  //   let rb2 = '<img src="./img/rookb.png" id ="RB2" class="B" ondragstart = "drag(event)">';
  //   let nw1 = '<img src="./img/knightw.png" id ="NW1" class="W" ondragstart = "drag(event)">';
  //   let nw2 = '<img src="./img/knightw.png" id ="NW2" class="W" ondragstart = "drag(event)">';
  //   let nb1 = '<img src="./img/knightb.png" id ="NB1" class="B" ondragstart = "drag(event)">';
  //   let nb2 = '<img src="./img/knightb.png" id ="NB2" class="B" ondragstart = "drag(event)">';
  //   let bb1 = '<img src="./img/bishopb.png" id ="BB1" class="B" ondragstart = "drag(event)">';
  //   let bb2 = '<img src="./img/bishopb.png" id ="BB2" class="B" ondragstart = "drag(event)">';
  //   let bw1 = '<img src="./img/bishopw.png" id ="BW1" class="W" ondragstart = "drag(event)">';
  //   let bw2 = '<img src="./img/bishopw.png" id ="BW2" class="W" ondragstart = "drag(event)">';
  //   let qb1 = '<img src="./img/queenb.png" id ="QB1" class="B" ondragstart = "drag(event)">';
  //   let qw1 = '<img src="./img/queenw.png" id ="QW1" class="W" ondragstart = "drag(event)">';
  //   let kb1 = '<img src="./img/kingb.png" id ="KB1" class="B" ondragstart = "drag(event)">';
  //   let kw1 = '<img src="./img/kingw.png" id ="KW1" class="W" ondragstart = "drag(event)">';
  //   for (let i = 1; i <= 8; i += 7) {
  //     for (let j = 1; j <= 8; j++) {
  //       if (i == 1) {
  //         if (j == 1 || j == 8) {
  //           if (j == 1) {
  //             document.getElementById(i + "" + j).innerHTML = rw1;
  //           } else {
  //             document.getElementById(i + "" + j).innerHTML = rw2;
  //           }
  //         } else if (j == 2 || j == 7) {
  //           if (j == 2) {
  //             document.getElementById(i + "" + j).innerHTML = nw1;
  //           } else {
  //             document.getElementById(i + "" + j).innerHTML = nw2;
  //           }
  //         } else if (j == 3 || j == 6) {
  //           if (j == 3) {
  //             document.getElementById(i + "" + j).innerHTML = bw1;
  //           } else {
  //             document.getElementById(i + "" + j).innerHTML = bw2;
  //           }
  //         } else if (j == 4 || j == 5) {
  //           if (j == 4) {
  //             document.getElementById(i + "" + j).innerHTML = qw1;
  //           } else {
  //             document.getElementById(i + "" + j).innerHTML = kw1;
  //           }
  //         }
  //       } else if (i == 8) {
  //         if (j == 1 || j == 8) {
  //           if (j == 1) {
  //             document.getElementById(i + "" + j).innerHTML = rb1;
  //           } else {
  //             document.getElementById(i + "" + j).innerHTML = rb2;
  //           }
  //         } else if (j == 2 || j == 7) {

  //           if (j == 2) {
  //             document.getElementById(i + "" + j).innerHTML = nb1;
  //           } else {
  //             document.getElementById(i + "" + j).innerHTML = nb2;
  //           }
  //         } else if (j == 3 || j == 6) {
  //           if (j == 3) {
  //             document.getElementById(i + "" + j).innerHTML = bb1;
  //           } else {
  //             document.getElementById(i + "" + j).innerHTML = bb2;
  //           }
  //         } else if (j == 4 || j == 5) {
  //           if (j == 4) {
  //             document.getElementById(i + "" + j).innerHTML = qb1;
  //           } else {
  //             document.getElementById(i + "" + j).innerHTML = kb1;
  //           }
  //         }
  //       }
  //     }
  //   }
  //   for (let i = 2; i < 8; i++) {
  //     for (let j = 1; j <= 8; j++) {
  //       if (i == 2) {
  //         for (let j = 1; j <= 8; j++) {
  //           let a = '<img src="./img/pawnw.png" id ="PW' + j + '" class="W" ondragstart = "drag(event)">';
  //           document.getElementById(i + "" + j).innerHTML = a;
  //         }
  //       } else if (i == 7) {
  //         for (let j = 1; j <= 8; j++) {
  //           let a = '<img src="./img/pawnb.png" id ="PB' + j + '" class="B" ondragstart = "drag(event)">';
  //           document.getElementById(i + "" + j).innerHTML = a;
  //         }
  //       } else {
  //         document.getElementById(i + "" + j).innerHTML = "";
  //       }
  //     }
  //   }
  // }

  // allowDrop(event) {
  //   console.log("allowdrop called");
  //   event.preventDefault();
  // }

  // drag(event) {

  //   this.startSquare = event.target.parentNode.id;
  //   this.startParent = event.target.parentNode.parentNode.id;
  //   console.log("drag called", this.startSquare, startParent);
  //   event.dataTransfer.setData("pieceInTransit", event.target.id);
  // }
  // dragover(event) {
  //   console.log("dragover called");
  // }
  // drop(event) {
  //   let piece = event.dataTransfer.getData("pieceInTransit");
  //   let this.dropSquare = event.target.id;
  //   let this.eventnew = event.target;
  //   let this.isFilled = !this.eventnew.classList.contains("col-md-1");
  //   let dropRow = event.target.parentNode.id;
  //   if (this.isFilled) {
  //     dropRow = event.target.parentNode.parentNode.id;
  //   }
  //   if (this.isFilled) {
  //     this.dropSquare = event.target.parentNode.id;
  //   }
  //   this.difference = this.startSquare - this.dropSquare;
  //   let pieceBlocking = false;
  //   for (let i = 1; i <= 8; i++) {
  //     if (piece == "PW" + i && this.whitesMove) {
  //       this.pawnWhiteMove(event);
  //     } else if (piece == "PB" + i && !this.whitesMove) {
  //       this.pawnBlackMove(event);
  //     }
  //   }
  //   if (piece == "RW1" || piece == "RW2" && this.whitesMove) {
  //     this.rookWMove(event);
  //   }
  //   else if (piece == "RB1" || piece == "RB2" && !this.whitesMove) {
  //     this.rookBMove(event);
  //   } else if (piece == "BW1" || piece == "BW2" && this.whitesMove) {
  //     this.bishopWMove(event);
  //   } else if (piece == "BB1" || piece == "BB2" && !this.whitesMove) {
  //     this.bishopBMove(event);
  //   } else if (piece == "QW1" && this.whitesMove) this.queenWMove(event);
  //   else if (piece == "QB1" && !this.whitesMove) this.queenBMove(event);
  //   else if (piece == "KW1" && this.whitesMove) {
  //     if (this.dropSquare == 17) {
  //       this.whiteShortCastle(event);
  //     } else if (this.dropSquare == 13) {
  //       this.whiteLongCastle(event);
  //     } else {
  //       this.kingWMove(event);
  //     }
  //   }
  //   else if (piece == "KB1" && !this.whitesMove) {
  //     if (this.dropSquare == 87) {
  //       this.blackShortCastle(event);
  //     } else if (this.dropSquare == 13) {
  //       this.blackLongCastle(event);
  //     } else {
  //       this.kingBMove(event);
  //     }
  //   }
  //   else if (piece == "NW1" || piece == "NW2" && this.whitesMove) knightWMove(event);
  //   else if (piece == "NB1" || piece == "NB2" && !this.whitesMove) knightBMove(event);
  // }

  // pawnWhiteMove(event) {
  //   let isDiagonal = (this.difference == -9 || this.difference == -11);
  //   if (document.getElementById(parseInt(this.startSquare) + 10).childNodes.length > 0) pieceBlocking = true;
  //   if (this.difference == -10 && !this.isFilled) {
  //     this.eventnew.appendChild(document.getElementById(piece));
  //     this.whitesMove = false;
  //   } else if (this.difference == -20 && startParent == "id2" && !pieceBlocking && !this.isFilled) {
  //     this.eventnew.appendChild(document.getElementById(piece));
  //     this.whitesMove = false;
  //   }
  //   else if (isDiagonal && this.isFilled && event.target.classList.contains("B")) {
  //     this.eventnew = event.target.parentNode;
  //     event.target.remove();
  //     this.eventnew.appendChild(document.getElementById(piece));
  //     this.whitesMove = false;
  //   }
  // }

  // pawnBlackMove(event) {
  //   let isDiagonal = (this.difference == 9 || this.difference == 11);
  //   if (document.getElementById(parseInt(this.startSquare) - 10).childNodes.length > 0) pieceBlocking = true;
  //   if ((this.difference == 10 && !this.isFilled)) {
  //     this.eventnew.appendChild(document.getElementById(piece));
  //     this.whitesMove = true;
  //   }
  //   else if (this.difference == 20 && startParent == "id7" && !pieceBlocking) {
  //     this.eventnew.appendChild(document.getElementById(piece));
  //     this.whitesMove = true;
  //   }
  //   else if (isDiagonal && this.isFilled && event.target.classList.contains("W")) {
  //     this.eventnew = event.target.parentNode;
  //     event.target.remove();
  //     this.eventnew.appendChild(document.getElementById(piece));
  //     this.whitesMove = true;
  //   }
  // }

  // rookWMove(event) {
  //   let pieceBlocking;
  //   if (this.difference % 10 == 0) {
  //     let tempStart = parseInt(this.startSquare);
  //     let tempDrop = parseInt(this.dropSquare);
  //     if (tempStart < tempDrop) {
  //       while (tempStart + 10 < tempDrop) {
  //         if (document.getElementById(tempStart + 10).childNodes.length > 0) {
  //           pieceBlocking = true;
  //           break;
  //         }
  //         tempStart += 10;
  //       }
  //     }
  //     else if (tempStart > tempDrop) {
  //       while (tempStart > tempDrop + 10) {
  //         if (document.getElementById(tempDrop + 10).childNodes.length == 1) {
  //           pieceBlocking = true;
  //           break;
  //         }
  //         tempDrop += 10;
  //       }
  //     }
  //     if (this.isFilled && !pieceBlocking && event.target.classList.contains("B")) {
  //       this.eventnew = event.target.parentNode;
  //       event.target.remove();
  //       this.eventnew.appendChild(document.getElementById(piece));
  //       this.whitesMove = false;
  //       if (piece == "RW1") {
  //         whiteLongCastleOn = false;
  //       } else {
  //         this.whiteShortCastleOn = false;
  //       }
  //     }
  //     else if (!pieceBlocking && !this.isFilled) {
  //       this.eventnew.appendChild(document.getElementById(piece));
  //       this.whitesMove = false;
  //       if (piece == "RW1") {
  //         whiteLongCastleOn = false;
  //       } else {
  //         this.whiteShortCastleOn = false;
  //       }
  //     }
  //   }
  //   else if (startParent == dropRow) {
  //     let tempStart = parseInt(this.startSquare);
  //     let tempDrop = parseInt(this.dropSquare);
  //     if (tempStart < tempDrop) {
  //       while (tempStart + 1 < tempDrop) {
  //         if (document.getElementById(tempStart + 1).childNodes.length > 0) {
  //           pieceBlocking = true;
  //           break;
  //         }
  //         tempStart += 1;
  //       }
  //     }
  //     else if (tempStart > tempDrop) {
  //       while (tempStart > tempDrop + 1) {
  //         if (document.getElementById(tempDrop + 1).childNodes.length == 1) {
  //           pieceBlocking = true;
  //           break;
  //         }
  //         tempDrop += 1;
  //       }
  //     }
  //     if (this.isFilled && !pieceBlocking && event.target.classList.contains("B")) {
  //       this.eventnew = event.target.parentNode;
  //       event.target.remove();
  //       this.eventnew.appendChild(document.getElementById(piece));
  //       this.whitesMove = false;
  //       if (piece == "RW1") {
  //         whiteLongCastleOn = false;
  //       } else {
  //         this.whiteShortCastleOn = false;
  //       }
  //     }
  //     else if (!pieceBlocking && !this.isFilled) {
  //       this.eventnew.appendChild(document.getElementById(piece));
  //       this.whitesMove = false;
  //       if (piece == "RW1") {
  //         whiteLongCastleOn = false;
  //       } else {
  //         this.whiteShortCastleOn = false;
  //       }
  //     }
  //   }
  // }

  // rookBMove(event) {
  //   let pieceBlocking;
  //   if (this.difference % 10 == 0) {
  //     let tempStart = parseInt(this.startSquare);
  //     let tempDrop = parseInt(this.dropSquare);
  //     if (tempStart < tempDrop) {
  //       while (tempStart + 10 < tempDrop) {
  //         if (document.getElementById(tempStart + 10).childNodes.length > 0) {
  //           pieceBlocking = true;
  //           break;
  //         }
  //         tempStart += 10;
  //       }
  //     }
  //     else if (tempStart > tempDrop) {
  //       while (tempStart > tempDrop + 10) {
  //         if (document.getElementById(tempDrop + 10).childNodes.length == 1) {
  //           pieceBlocking = true;
  //           break;
  //         }
  //         tempDrop += 10;
  //       }
  //     }
  //     if (this.isFilled && !pieceBlocking && event.target.classList.contains("W")) {
  //       this.eventnew = event.target.parentNode;
  //       event.target.remove();
  //       this.eventnew.appendChild(document.getElementById(piece));
  //       this.whitesMove = true;
  //       if (piece == "RB1") {
  //         this.blackLongCastleOn = false;
  //       } else {
  //         this.blackShortCastleOn = false;
  //       }
  //     }
  //     else if (!pieceBlocking && !this.isFilled) {
  //       this.eventnew.appendChild(document.getElementById(piece));
  //       this.whitesMove = true;
  //       if (piece == "RB1") {
  //         this.blackLongCastleOn = false;
  //       } else {
  //         this.blackShortCastleOn = false;
  //       }
  //     }
  //   }
  //   if (startParent == dropRow) {
  //     let tempStart = parseInt(this.startSquare);
  //     let tempDrop = parseInt(this.dropSquare);
  //     if (tempStart < tempDrop) {
  //       while (tempStart + 1 < tempDrop) {
  //         if (document.getElementById(tempStart + 1).childNodes.length > 0) {
  //           pieceBlocking = true;
  //           break;
  //         }
  //         tempStart += 1;
  //       }
  //     }
  //     else if (tempStart > tempDrop) {
  //       while (tempStart > tempDrop + 1) {
  //         if (document.getElementById(tempDrop + 1).childNodes.length == 1) {
  //           pieceBlocking = true;
  //           break;
  //         }
  //         tempDrop += 1;
  //       }
  //     }
  //     if (this.isFilled && !pieceBlocking && event.target.classList.contains("W")) {
  //       this.eventnew = event.target.parentNode;
  //       event.target.remove();
  //       this.eventnew.appendChild(document.getElementById(piece));
  //       this.whitesMove = true;
  //       if (piece == "RB1") {
  //         this.blackLongCastleOn = false;
  //       } else {
  //         this.blackShortCastleOn = false;
  //       }
  //     }
  //     else if (!pieceBlocking && !this.isFilled) {
  //       this.eventnew.appendChild(document.getElementById(piece));
  //       this.whitesMove = true;
  //       if (piece == "RB1") {
  //         this.blackLongCastleOn = false;
  //       } else {
  //         this.blackShortCastleOn = false;
  //       }
  //     }
  //   }
  // }

  // bishopWMove(event) {
  //   let pieceBlocking;
  //   if (this.difference % 11 == 0) {
  //     let tempStart = parseInt(this.startSquare);
  //     let tempDrop = parseInt(this.dropSquare);
  //     if (tempStart < tempDrop) {
  //       while (tempStart + 11 < tempDrop) {
  //         if (document.getElementById(tempStart + 11).childNodes.length > 0) {
  //           pieceBlocking = true;
  //           break;
  //         }
  //         tempStart += 11;
  //       }
  //     }
  //     else if (tempStart > tempDrop) {
  //       while (tempStart > tempDrop + 11) {
  //         if (document.getElementById(tempDrop + 11).childNodes.length == 1) {
  //           pieceBlocking = true;
  //           break;
  //         }
  //         tempDrop += 11;
  //       }
  //     }
  //     if (this.isFilled && !pieceBlocking && event.target.classList.contains("B")) {
  //       this.eventnew = event.target.parentNode;
  //       event.target.remove();
  //       this.eventnew.appendChild(document.getElementById(piece));
  //       this.whitesMove = false;
  //     }
  //     else if (!pieceBlocking && !this.isFilled) {
  //       this.eventnew.appendChild(document.getElementById(piece));
  //       this.whitesMove = false;
  //     }
  //   }
  //   else if (this.difference % 9 == 0) {
  //     let tempStart = parseInt(this.startSquare);
  //     let tempDrop = parseInt(this.dropSquare);
  //     if (tempStart < tempDrop) {
  //       while (tempStart + 9 < tempDrop) {
  //         if (document.getElementById(tempStart + 9).childNodes.length > 0) {
  //           pieceBlocking = true;
  //           break;
  //         }
  //         tempStart += 9;
  //       }
  //     }
  //     else if (tempStart > tempDrop) {
  //       while (tempStart > tempDrop + 9) {
  //         if (document.getElementById(tempDrop + 11).childNodes.length == 1) {
  //           pieceBlocking = true;
  //           break;
  //         }
  //         tempDrop += 9;
  //       }
  //     }
  //     if (this.isFilled && !pieceBlocking && event.target.classList.contains("B")) {
  //       this.eventnew = event.target.parentNode;
  //       event.target.remove();
  //       this.eventnew.appendChild(document.getElementById(piece));
  //       this.whitesMove = false;
  //     }
  //     else if (!pieceBlocking && !this.isFilled) {
  //       this.eventnew.appendChild(document.getElementById(piece));
  //       this.whitesMove = false;
  //     }
  //   }
  // }

  // bishopBMove(event) {
  //   let pieceBlocking;
  //   if (this.difference % 11 == 0) {
  //     let tempStart = parseInt(this.startSquare);
  //     let tempDrop = parseInt(this.dropSquare);
  //     if (tempStart < tempDrop) {
  //       while (tempStart + 11 < tempDrop) {
  //         if (document.getElementById(tempStart + 11).childNodes.length > 0) {
  //           pieceBlocking = true;
  //           break;
  //         }
  //         tempStart += 11;
  //       }
  //     }
  //     else if (tempStart > tempDrop) {
  //       while (tempStart > tempDrop + 11) {
  //         if (document.getElementById(tempDrop + 11).childNodes.length == 1) {
  //           pieceBlocking = true;
  //           break;
  //         }
  //         tempDrop += 11;
  //       }
  //     }
  //     if (this.isFilled && !pieceBlocking && event.target.classList.contains("W")) {
  //       this.eventnew = event.target.parentNode;
  //       event.target.remove();
  //       this.eventnew.appendChild(document.getElementById(piece));
  //       this.whitesMove = true;
  //     }
  //     else if (!pieceBlocking && !this.isFilled) {
  //       this.eventnew.appendChild(document.getElementById(piece));
  //       this.whitesMove = true;
  //     }
  //   } else if (this.difference % 9 == 0) {
  //     let tempStart = parseInt(this.startSquare);
  //     let tempDrop = parseInt(this.dropSquare);
  //     if (tempStart < tempDrop) {
  //       while (tempStart + 9 < tempDrop) {
  //         if (document.getElementById(tempStart + 9).childNodes.length > 0) {
  //           pieceBlocking = true;
  //           break;
  //         }
  //         tempStart += 9;
  //       }
  //     } else if (tempStart > tempDrop) {
  //       while (tempStart > tempDrop + 9) {
  //         console.log(document.getElementById(tempDrop + 9).childNodes.length);
  //         if (document.getElementById(tempDrop + 11).childNodes.length == 1) {
  //           pieceBlocking = true;
  //           break;
  //         }
  //         tempDrop += 9;
  //       }
  //     }
  //     if (this.isFilled && !pieceBlocking && event.target.classList.contains("W")) {
  //       console.log(event.target.classList);
  //       this.eventnew = event.target.parentNode;
  //       event.target.remove();
  //       this.eventnew.appendChild(document.getElementById(piece));
  //       this.whitesMove = true;
  //     }
  //     else if (!pieceBlocking && !this.isFilled) {
  //       this.eventnew.appendChild(document.getElementById(piece));
  //       this.whitesMove = true;
  //     }
  //   }
  // }

  // queenWMove(event) {
  //   if (this.difference % 10 == 0 || startParent == dropRow) rookWMove(event);
  //   else if (this.difference % 11 == 0 || this.difference % 9 == 0) bishopWMove(event);
  // }

  // queenBMove(event) {
  //   if (this.difference % 10 == 0 || startParent == dropRow) rookBMove(event);
  //   else if (this.difference % 11 == 0 || this.difference % 9 == 0) bishopBMove(event);
  // }

  // kingWMove(event) {
  //   let d = Math.abs(this.difference);
  //   if (d == 10 || d == 1 || d == 9 || d == 11) {
  //     if (this.isFilled && event.target.classList.contains("B")) {
  //       this.eventnew = event.target.parentNode;
  //       event.target.remove();
  //       this.eventnew.appendChild(document.getElementById(piece));
  //       this.whitesMove = false;
  //       whiteLongCastleOn = false;
  //       this.whiteShortCastleOn = false;
  //     }
  //     else if (!this.isFilled) {
  //       this.eventnew.appendChild(document.getElementById(piece));
  //       this.whitesMove = false;
  //       whiteLongCastleOn = false;
  //       this.whiteShortCastleOn = false;
  //     }

  //   }
  // }

  // kingBMove(event) {
  //   let d = Math.abs(this.difference);
  //   if (d == 10 || d == 1 || d == 9 || d == 11) {
  //     if (this.isFilled && event.target.classList.contains("W")) {
  //       this.eventnew = event.target.parentNode;
  //       event.target.remove();
  //       this.eventnew.appendChild(document.getElementById(piece));
  //       this.whitesMove = true;
  //       this.blackLongCastleOn = false;
  //       this.blackShortCastleOn = false;
  //     }
  //     else if (!this.isFilled) {
  //       this.eventnew.appendChild(document.getElementById(piece));
  //       this.whitesMove = true;
  //       this.blackLongCastleOn = false;
  //       this.blackShortCastleOn = false;
  //     }

  //   }
  // }

  // whiteShortCastle(event) {
  //   let pieceBlocking;
  //   let tempStart = parseInt(this.startSquare);
  //   let tempDrop = parseInt(this.dropSquare);
  //   while (tempStart + 1 < tempDrop) {
  //     if (document.getElementById(tempStart + 1).childNodes.length > 0) {
  //       pieceBlocking = true;
  //       break;
  //     }
  //     tempStart += 1;
  //   }
  //   if (!pieceBlocking && this.whiteShortCastleOn) {
  //     this.eventnew.appendChild(document.getElementById(piece));
  //     document.getElementById(16).appendChild(document.getElementById("RW2"));
  //     this.whitesMove = false;
  //   }
  // }

  // whiteLongCastle(event) {
  //   let pieceBlocking;
  //   let tempStart = parseInt(this.startSquare);
  //   let tempDrop = parseInt(this.dropSquare);
  //   while (tempStart - 1 < tempDrop) {
  //     if (document.getElementById(tempStart - 1).childNodes.length > 0) {
  //       pieceBlocking = true;
  //       break;
  //     }
  //     tempStart -= 1;
  //   }
  //   if (!pieceBlocking && this.whiteShortCastleOn) {
  //     this.eventnew.appendChild(document.getElementById(piece));
  //     document.getElementById(14).appendChild(document.getElementById("RW1"));
  //     this.whitesMove = false;
  //   }
  // }

  // blackShortCastle(event) {
  //   let pieceBlocking;
  //   let tempStart = parseInt(this.startSquare);
  //   let tempDrop = parseInt(this.dropSquare);
  //   while (tempStart + 1 < tempDrop) {
  //     if (document.getElementById(tempStart + 1).childNodes.length > 0) {
  //       pieceBlocking = true;
  //       break;
  //     }
  //     tempStart += 1;
  //   }
  //   if (!pieceBlocking && this.whiteShortCastleOn) {
  //     this.eventnew.appendChild(document.getElementById(piece));
  //     document.getElementById(86).appendChild(document.getElementById("RB2"));
  //     this.whitesMove = true;
  //   }
  // }

  // blackLongCastle(event) {

  //   let pieceBlocking;
  //   let tempStart = parseInt(this.startSquare);
  //   let tempDrop = parseInt(this.dropSquare);
  //   while (tempStart - 1 < tempDrop) {
  //     if (document.getElementById(tempStart - 1).childNodes.length > 0) {
  //       pieceBlocking = true;
  //       break;
  //     }
  //     tempStart -= 1;
  //   }
  //   if (!pieceBlocking && this.whiteShortCastleOn) {
  //     this.eventnew.appendChild(document.getElementById(piece));
  //     document.getElementById(84).appendChild(document.getElementById("RB1"));
  //     this.whitesMove = true;
  //   }
  // }

  // knightWMove(event) {

  //   let d = Math.abs(this.difference);
  //   if (d == 19 || d == 21 || d == 8 || d == 12) {
  //     if (this.isFilled && event.target.classList.contains("B")) {
  //       this.eventnew = event.target.parentNode;
  //       event.target.remove();
  //     }
  //     this.eventnew.appendChild(document.getElementById(piece));
  //     this.whitesMove = false;
  //   }
  // }

  // knightBMove(event) {

  //   let d = Math.abs(this.difference);
  //   if (d == 19 || d == 21 || d == 8 || d == 12) {
  //     if (this.isFilled && event.target.classList.contains("W")) {
  //       this.eventnew = event.target.parentNode;
  //       event.target.remove();
  //     }
  //     this.eventnew.appendChild(document.getElementById(piece))
  //     this.whitesMove = true;
  //   }
  // }

}
