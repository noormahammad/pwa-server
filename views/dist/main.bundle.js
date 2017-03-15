webpackJsonp([0,3],{

/***/ 115:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(59);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return UserService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserService = (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.getUser = function (email) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get('http://localhost:3000/users/api/' + email).subscribe(function (result) {
                resolve(result.json());
            });
        });
    };
    UserService.prototype.updateUser = function (id, user) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return new Promise(function (resolve) {
            _this.http.post('http://localhost:3000/users/edit/' + id, JSON.stringify(user), { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
            });
        });
    };
    UserService.prototype.getListFriend = function (id) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get('http://localhost:3000/users/api/friend/' + id).subscribe(function (result) {
                resolve(result.json());
            });
        });
    };
    UserService.prototype.getFriend = function (id) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get('http://localhost:3000/users/api/friend/' + id).subscribe(function (result) {
                resolve(result.json());
            });
        });
    };
    UserService.prototype.createFriend = function (request) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return new Promise(function (resolve) {
            _this.http.post('http://localhost:3000/friends/create', JSON.stringify(request), { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
            });
        });
    };
    UserService.prototype.findUser = function (input) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get('http://localhost:3000/users/search/' + input).subscribe(function (result) {
                resolve(result.json());
            });
        });
    };
    UserService.prototype.getRequestFriend = function (id) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get('http://localhost:3000/friends/request/' + id).subscribe(function (result) {
                resolve(result.json());
            });
        });
    };
    UserService.prototype.agreeRequest = function (from, to) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return new Promise(function (resolve) {
            _this.http.post('http://localhost:3000/friends/agree/' + from + '/' + to, { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
            });
        });
        // return new Promise(resolve => {
        //   this.http.get('http://localhost:3000/friends/agree/'+from+'/'+to).subscribe(result => {
        //     resolve(result.json());
        //   });
        // });
    };
    UserService.prototype.cancel = function (user, friend) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get('http://localhost:3000/friends/cancel/' + user + '/' + friend).subscribe(function (result) {
                resolve(result.json());
            });
        });
    };
    UserService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === 'function' && _a) || Object])
    ], UserService);
    return UserService;
    var _a;
}());
//# sourceMappingURL=D:/pwa/demo/src/user.service.js.map

/***/ },

/***/ 259:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(59);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return GameService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GameService = (function () {
    function GameService(http) {
        this.http = http;
    }
    GameService.prototype.createGame = function (game) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return new Promise(function (resolve) {
            _this.http.post('http://localhost:3000/api/games/create', JSON.stringify(game), { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
            });
        });
    };
    GameService.prototype.updateGame = function (id, turn) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return new Promise(function (resolve) {
            _this.http.post('http://localhost:3000/api/games/update/' + id, JSON.stringify(turn), { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
            });
        });
    };
    GameService.prototype.getRequestGame = function (id) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get('http://localhost:3000/api/games/request/' + id).subscribe(function (result) {
                resolve(result.json());
            });
        });
    };
    GameService.prototype.deleteGame = function (id) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return new Promise(function (resolve) {
            _this.http.post('http://localhost:3000/api/games/delete/' + id, { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
            });
        });
    };
    GameService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === 'function' && _a) || Object])
    ], GameService);
    return GameService;
    var _a;
}());
//# sourceMappingURL=D:/pwa/demo/src/game.service.js.map

/***/ },

/***/ 260:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return HelperService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HelperService = (function () {
    function HelperService() {
    }
    HelperService.prototype.random = function (range) {
        return Math.floor(Math.random() * range);
    };
    HelperService.prototype.getRandomArrayElements = function (arr, count) {
        var shuffled = arr.slice(0), i = arr.length, min = i - count, temp, index;
        while (i-- > min) {
            index = Math.floor((i + 1) * Math.random());
            temp = shuffled[index];
            shuffled[index] = shuffled[i];
            shuffled[i] = temp;
        }
        return shuffled.slice(min);
    };
    HelperService.prototype.speak = function (content) {
        var wordAudio = encodeURI(content);
        var audio = new Audio('http://api.voicerss.org/?key=9162f83042cf475f8231eee77f6ac5e8&hl=en-us&r=-2&src=' + wordAudio);
        audio.play();
    };
    HelperService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* Injectable */])(), 
        __metadata('design:paramtypes', [])
    ], HelperService);
    return HelperService;
}());
//# sourceMappingURL=D:/pwa/demo/src/helper.service.js.map

/***/ },

/***/ 436:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(856),
            styles: [__webpack_require__(834)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=D:/pwa/demo/src/app.component.js.map

/***/ },

/***/ 437:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_global_vars_service__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_game_service__ = __webpack_require__(259);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return GameRequestComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GameRequestComponent = (function () {
    function GameRequestComponent(globalVars, gameService, zone) {
        var _this = this;
        this.globalVars = globalVars;
        this.gameService = gameService;
        this.zone = zone;
        this.request = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* EventEmitter */]();
        this.turns = [];
        this.globalVars.profile.subscribe(function (value) {
            if (value['_id'] != undefined) {
                _this.gameService.getRequestGame(value['_id']).then(function (res) {
                    _this.turns = res;
                });
            }
        });
    }
    GameRequestComponent.prototype.ngOnInit = function () {
    };
    GameRequestComponent.prototype.getTurns = function () {
        return this.turns;
    };
    GameRequestComponent.prototype.begin = function (item) {
        this.request.emit(item);
    };
    GameRequestComponent.prototype.ignore = function (item) {
        var _this = this;
        this.gameService.deleteGame(item['_id']).then(function (res) {
            console.log(res);
            var index = _this.turns.indexOf(item);
            if (index >= 0)
                _this.turns.splice(index, 1);
        });
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Output */])(), 
        __metadata('design:type', Object)
    ], GameRequestComponent.prototype, "request", void 0);
    GameRequestComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-game-request',
            template: __webpack_require__(859),
            styles: [__webpack_require__(837)],
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_game_service__["a" /* GameService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_global_vars_service__["a" /* GlobalVarsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_global_vars_service__["a" /* GlobalVarsService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_game_service__["a" /* GameService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_game_service__["a" /* GameService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* NgZone */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* NgZone */]) === 'function' && _c) || Object])
    ], GameRequestComponent);
    return GameRequestComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=D:/pwa/demo/src/game-request.component.js.map

/***/ },

/***/ 438:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(88);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return WaitingGameComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WaitingGameComponent = (function () {
    function WaitingGameComponent(dialogRef) {
        this.dialogRef = dialogRef;
        this.isReady = false;
    }
    WaitingGameComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.count = 3;
        this.interval = setInterval(function () {
            _this.count -= 1;
            if (_this.count == 0) {
                _this.ready();
            }
        }, 1000);
    };
    WaitingGameComponent.prototype.ready = function () {
        this.isReady = true;
        clearInterval(this.interval);
        this.dialogRef.close(this.isReady);
    };
    WaitingGameComponent.prototype.cancel = function () {
        clearInterval(this.interval);
        this.dialogRef.close(this.isReady);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(), 
        __metadata('design:type', Object)
    ], WaitingGameComponent.prototype, "from", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(), 
        __metadata('design:type', Object)
    ], WaitingGameComponent.prototype, "to", void 0);
    WaitingGameComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-waiting-game',
            template: __webpack_require__(870),
            styles: [__webpack_require__(848)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["MdDialogRef"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_material__["MdDialogRef"]) === 'function' && _a) || Object])
    ], WaitingGameComponent);
    return WaitingGameComponent;
    var _a;
}());
//# sourceMappingURL=D:/pwa/demo/src/waiting-game.component.js.map

/***/ },

/***/ 439:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(88);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return WordDialogComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WordDialogComponent = (function () {
    function WordDialogComponent(dialogRef) {
        this.dialogRef = dialogRef;
    }
    WordDialogComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(), 
        __metadata('design:type', Object)
    ], WordDialogComponent.prototype, "word", void 0);
    WordDialogComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-word-dialog',
            template: __webpack_require__(871),
            styles: [__webpack_require__(849)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["MdDialogRef"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_material__["MdDialogRef"]) === 'function' && _a) || Object])
    ], WordDialogComponent);
    return WordDialogComponent;
    var _a;
}());
//# sourceMappingURL=D:/pwa/demo/src/word-dialog.component.js.map

/***/ },

/***/ 440:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_helper_service__ = __webpack_require__(260);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ReadingComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ReadingComponent = (function () {
    function ReadingComponent(helperService) {
        this.helperService = helperService;
        this.onCorrect = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* EventEmitter */]();
        this.userAnswer = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* EventEmitter */]();
        this.saveQuestion = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* EventEmitter */]();
        this.allWords = [];
        this.answers = [];
        this.clicked = false;
    }
    ReadingComponent.prototype.ngOnInit = function () {
    };
    ReadingComponent.prototype.speak = function () {
        this.helperService.speak(this.curWord['content']);
    };
    ReadingComponent.prototype.ngOnChanges = function (changes) {
        if (this.choices != null) {
            this.clicked = false;
            this.answers = this.choices;
            for (var i = 0; i < this.answers.length; i++) {
                this.answers[i]['state'] = null;
            }
            return;
        }
        //Random
        var NO_OF_ANS = 4;
        this.clicked = false;
        if (this.allWords.length < NO_OF_ANS) {
            NO_OF_ANS = this.allWords.length;
        }
        // Tạo mảng các từ sai
        var wrongWord = [];
        for (var i = 0; i < this.allWords.length; i++) {
            if (this.curWord['id'] != this.allWords[i]['id']) {
                wrongWord.push(this.allWords[i]);
            }
        }
        // Random vị trí từ đúng
        var position = this.helperService.random(NO_OF_ANS);
        // Tạo mảng các câu trả lời
        this.answers = [];
        for (var i = 0; i < NO_OF_ANS; i++) {
            var temp = void 0;
            if (i == position) {
                temp = JSON.parse(JSON.stringify(this.curWord));
            }
            else {
                var r = this.helperService.random(wrongWord.length);
                temp = JSON.parse(JSON.stringify(wrongWord[r]));
                wrongWord.splice(r, 1);
            }
            this.answers.push(temp);
        }
        this.speak();
    };
    ReadingComponent.prototype.checkAnswer = function (item) {
        if (item == null) {
            for (var i = 0; i < this.answers.length; i++) {
                if (this.curWord['id'] == this.answers[i]['id']) {
                    this.answers[i]['state'] = 'right';
                    break;
                }
            }
            return;
        }
        this.clicked = true;
        if (item.id == this.curWord['id']) {
            item['state'] = 'right';
            this.onCorrect.emit(true);
            this.getAnswer(item);
        }
        else {
            item['state'] = 'wrong';
            //Tìm cái đúng để hiện lên @@
            for (var i = 0; i < this.answers.length; i++) {
                if (this.curWord['id'] == this.answers[i]['id']) {
                    this.answers[i]['state'] = 'right';
                    break;
                }
            }
            this.onCorrect.emit(false);
            this.getAnswer(item);
        }
    };
    ReadingComponent.prototype.getAnswer = function (item) {
        var question = {};
        question = this.curWord;
        question['choice'] = this.answers;
        question['type'] = 'reading';
        question['state'] == null;
        this.saveQuestion.emit(question);
        var answer = '';
        if (item == null) {
            answer = null;
        }
        else {
            answer = item['content'];
        }
        this.userAnswer.emit(answer);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Output */])(), 
        __metadata('design:type', Object)
    ], ReadingComponent.prototype, "onCorrect", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Output */])(), 
        __metadata('design:type', Object)
    ], ReadingComponent.prototype, "userAnswer", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Output */])(), 
        __metadata('design:type', Object)
    ], ReadingComponent.prototype, "saveQuestion", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(), 
        __metadata('design:type', Object)
    ], ReadingComponent.prototype, "curWord", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(), 
        __metadata('design:type', Array)
    ], ReadingComponent.prototype, "allWords", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(), 
        __metadata('design:type', Array)
    ], ReadingComponent.prototype, "choices", void 0);
    ReadingComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-reading',
            template: __webpack_require__(873),
            styles: [__webpack_require__(851)],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_helper_service__["a" /* HelperService */]],
            animations: [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_25" /* trigger */])('state', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_26" /* state */])('wrong', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_27" /* style */])({
                        backgroundColor: '#eee',
                        transform: 'scale(1)'
                    })),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_26" /* state */])('right', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_27" /* style */])({
                        backgroundColor: '#cfd8dc',
                        transform: 'scale(1.1)'
                    })),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_28" /* transition */])('wrong => right', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* animate */])('100ms ease-in')),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_28" /* transition */])('right => wrong', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* animate */])('100ms ease-out'))
                ])
            ]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_helper_service__["a" /* HelperService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_helper_service__["a" /* HelperService */]) === 'function' && _a) || Object])
    ], ReadingComponent);
    return ReadingComponent;
    var _a;
}());
//# sourceMappingURL=D:/pwa/demo/src/reading.component.js.map

/***/ },

/***/ 441:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return WritingComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WritingComponent = (function () {
    function WritingComponent() {
        this.onCorrect = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* EventEmitter */]();
        this.userAnswer = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* EventEmitter */]();
        this.saveQuestion = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* EventEmitter */]();
        this.answer = '';
        this.showAnswer = false;
        this.gotAnswer = false;
    }
    WritingComponent.prototype.ngOnInit = function () {
    };
    WritingComponent.prototype.ngOnChanges = function () {
        this.answer = '';
        this.showAnswer = false;
        this.gotAnswer = false;
    };
    WritingComponent.prototype.checkAnswer = function () {
        if (this.compare(this.answer, this.curWord['content'])) {
            this.onCorrect.emit(true);
            //this.gotAnswer = true;
            this.getAnswer();
        }
        else {
            this.onCorrect.emit(false);
        }
    };
    WritingComponent.prototype.onKey = function (event) {
        // Check câu trả lời khi chưa đưa ra đc đáp án đúng
        if (this.gotAnswer == false) {
            this.checkAnswer();
        }
    };
    WritingComponent.prototype.compare = function (str1, str2) {
        return str1.trim().toLowerCase() == str2.trim().toLowerCase();
    };
    WritingComponent.prototype.getAnswer = function () {
        this.gotAnswer = true;
        var question = {};
        question = this.curWord;
        question['type'] = 'writing';
        this.saveQuestion.emit(question);
        var answer = this.answer;
        this.userAnswer.emit(answer);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Output */])(), 
        __metadata('design:type', Object)
    ], WritingComponent.prototype, "onCorrect", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Output */])(), 
        __metadata('design:type', Object)
    ], WritingComponent.prototype, "userAnswer", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Output */])(), 
        __metadata('design:type', Object)
    ], WritingComponent.prototype, "saveQuestion", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(), 
        __metadata('design:type', Object)
    ], WritingComponent.prototype, "curWord", void 0);
    WritingComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-writing',
            template: __webpack_require__(875),
            styles: [__webpack_require__(853)]
        }), 
        __metadata('design:paramtypes', [])
    ], WritingComponent);
    return WritingComponent;
}());
//# sourceMappingURL=D:/pwa/demo/src/writing.component.js.map

/***/ },

/***/ 442:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(59);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return LoginService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginService = (function () {
    function LoginService(http) {
        this.http = http;
    }
    LoginService.prototype.login = function (user) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return new Promise(function (resolve) {
            _this.http.post('http://localhost:3000/users/api/create', JSON.stringify(user), { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
            });
        });
        // this.http.post('http://localhost:3000/users/api/create', JSON.stringify(user), {headers: headers})
        //   .subscribe(res => {
        //     console.log(res.json());
        //   });
    };
    LoginService.prototype.checkExist = function (email) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get('http://localhost:3000/users/api/' + email).subscribe(function (result) {
                resolve(result.json());
            });
        });
    };
    LoginService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === 'function' && _a) || Object])
    ], LoginService);
    return LoginService;
    var _a;
}());
//# sourceMappingURL=D:/pwa/demo/src/login.service.js.map

/***/ },

/***/ 443:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(59);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return WordService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WordService = (function () {
    function WordService(http) {
        this.http = http;
    }
    WordService.prototype.getAllWord = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get('assets/data/words.json').subscribe(function (result) {
                resolve(result.json());
            });
        });
    };
    WordService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === 'function' && _a) || Object])
    ], WordService);
    return WordService;
    var _a;
}());
//# sourceMappingURL=D:/pwa/demo/src/word.service.js.map

/***/ },

/***/ 494:
/***/ function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 494;


/***/ },

/***/ 495:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(678);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__polyfills_ts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(632);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(677);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app___ = __webpack_require__(673);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_34" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app___["a" /* AppModule */]);
//# sourceMappingURL=D:/pwa/demo/src/main.js.map

/***/ },

/***/ 62:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_share__ = __webpack_require__(483);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_share___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_share__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_startWith__ = __webpack_require__(887);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_startWith___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_startWith__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return GlobalVarsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GlobalVarsService = (function () {
    function GlobalVarsService() {
        this.isUserLoggedIn = new __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__["BehaviorSubject"](false);
        this.profile = new __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__["BehaviorSubject"]({});
    }
    GlobalVarsService.prototype.setLoginStatus = function (isLoggedIn) {
        this.isUserLoggedIn.next(isLoggedIn);
    };
    GlobalVarsService.prototype.setProfile = function (profile) {
        this.profile.next(profile);
    };
    GlobalVarsService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* Injectable */])(), 
        __metadata('design:paramtypes', [])
    ], GlobalVarsService);
    return GlobalVarsService;
}());
//# sourceMappingURL=D:/pwa/demo/src/global-vars.service.js.map

/***/ },

/***/ 658:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs__ = __webpack_require__(832);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(436);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_flex_layout__ = __webpack_require__(580);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_router__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_global_vars_service__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_home_home_component__ = __webpack_require__(674);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__games_play_word_play_word_component__ = __webpack_require__(671);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_menu_game_menu_game_component__ = __webpack_require__(665);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_login_login_component__ = __webpack_require__(664);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_login_google_login_google_component__ = __webpack_require__(663);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__games_songpop_songpop_component__ = __webpack_require__(672);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_nav_login_nav_login_component__ = __webpack_require__(668);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_login_facebook_login_facebook_component__ = __webpack_require__(662);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_register_register_component__ = __webpack_require__(669);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_profile_profile_component__ = __webpack_require__(675);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_search_friend_search_friend_component__ = __webpack_require__(670);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__games_writing_writing_component__ = __webpack_require__(441);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__games_reading_reading_component__ = __webpack_require__(440);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_my_answer_my_answer_component__ = __webpack_require__(666);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_my_friends_my_friends_component__ = __webpack_require__(667);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_game_request_game_request_component__ = __webpack_require__(437);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_waiting_game_waiting_game_component__ = __webpack_require__(438);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_circle_progress_circle_progress_component__ = __webpack_require__(659);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_game_player_game_player_component__ = __webpack_require__(660);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__components_learning_learning_component__ = __webpack_require__(661);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__components_word_dialog_word_dialog_component__ = __webpack_require__(439);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};































var appRoutes = [
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_10__pages_home_home_component__["a" /* HomeComponent */] },
    { path: 'menugame', component: __WEBPACK_IMPORTED_MODULE_12__components_menu_game_menu_game_component__["a" /* MenuGameComponent */] },
    { path: 'playword', component: __WEBPACK_IMPORTED_MODULE_11__games_play_word_play_word_component__["a" /* PlayWordComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_13__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_19__pages_profile_profile_component__["a" /* ProfileComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_18__components_register_register_component__["a" /* RegisterComponent */] },
    { path: 'login-google', component: __WEBPACK_IMPORTED_MODULE_14__components_login_google_login_google_component__["a" /* LoginGoogleComponent */] },
    { path: 'songpop', component: __WEBPACK_IMPORTED_MODULE_15__games_songpop_songpop_component__["a" /* SongpopComponent */] },
    { path: 'learn', component: __WEBPACK_IMPORTED_MODULE_29__components_learning_learning_component__["a" /* LearningComponent */] },
    {
        path: '',
        redirectTo: '/menugame',
        pathMatch: 'full'
    }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_10__pages_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_11__games_play_word_play_word_component__["a" /* PlayWordComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_menu_game_menu_game_component__["a" /* MenuGameComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_login_google_login_google_component__["a" /* LoginGoogleComponent */],
                __WEBPACK_IMPORTED_MODULE_15__games_songpop_songpop_component__["a" /* SongpopComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_nav_login_nav_login_component__["a" /* NavLoginComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_login_facebook_login_facebook_component__["a" /* LoginFacebookComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_19__pages_profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_search_friend_search_friend_component__["a" /* SearchFriendComponent */],
                __WEBPACK_IMPORTED_MODULE_21__games_writing_writing_component__["a" /* WritingComponent */],
                __WEBPACK_IMPORTED_MODULE_22__games_reading_reading_component__["a" /* ReadingComponent */],
                __WEBPACK_IMPORTED_MODULE_23__components_my_answer_my_answer_component__["a" /* MyAnswerComponent */],
                __WEBPACK_IMPORTED_MODULE_24__components_my_friends_my_friends_component__["a" /* MyFriendsComponent */],
                __WEBPACK_IMPORTED_MODULE_25__components_game_request_game_request_component__["a" /* GameRequestComponent */],
                __WEBPACK_IMPORTED_MODULE_26__components_waiting_game_waiting_game_component__["a" /* WaitingGameComponent */],
                __WEBPACK_IMPORTED_MODULE_27__components_circle_progress_circle_progress_component__["a" /* CircleProgressComponent */],
                __WEBPACK_IMPORTED_MODULE_28__components_game_player_game_player_component__["a" /* GamePlayerComponent */],
                __WEBPACK_IMPORTED_MODULE_29__components_learning_learning_component__["a" /* LearningComponent */],
                __WEBPACK_IMPORTED_MODULE_30__components_word_dialog_word_dialog_component__["a" /* WordDialogComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["e" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["MaterialModule"].forRoot(),
                __WEBPACK_IMPORTED_MODULE_7__angular_flex_layout__["a" /* FlexLayoutModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_8__angular_router__["b" /* RouterModule */].forRoot(appRoutes)
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_9__services_global_vars_service__["a" /* GlobalVarsService */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_26__components_waiting_game_waiting_game_component__["a" /* WaitingGameComponent */],
                __WEBPACK_IMPORTED_MODULE_30__components_word_dialog_word_dialog_component__["a" /* WordDialogComponent */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=D:/pwa/demo/src/app.module.js.map

/***/ },

/***/ 659:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return CircleProgressComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CircleProgressComponent = (function () {
    function CircleProgressComponent() {
        this.percent = 0;
        this.boxSize = 200;
        this.radius = 0.9 * this.boxSize;
        this.time = 0;
        this.border = 20;
        this.color = 'green';
        this.backgroundColor = 'white';
        this.lowColor = this.color;
        this.middleColor = this.color;
        this.interColor = this.color;
        this.highColor = this.color;
        this.fontColor = 'black';
        this.fontSize = 12;
        this.fontFamily = 'Times New Roman';
        this.fontX = '50%';
        this.fontY = '55%';
        this.innerFill = "white";
        this.textAnchor = "middle";
        this.circleText = '0%';
        this.canAnimate = true;
    }
    CircleProgressComponent.prototype.ngOnInit = function () {
        this.setInputs();
        this.calculateAll();
    };
    CircleProgressComponent.prototype.ngOnChanges = function () {
        this.setInputs();
        this.calculateAll();
    };
    CircleProgressComponent.prototype.setInputs = function () {
        if (this.percent < 0) {
            this.percent *= -1;
        }
        if (this.time == 0) {
            this.circleText = this.percent + '%';
            this.setColor(this.percent);
            this.angle = this.percToAngle(this.percent);
        }
        else {
            this.angle = 0;
        }
        this.radian = this.angleToRad(this.angle);
        this.cx = this.boxSize / 2;
        this.cy = this.boxSize / 2;
        this.x0 = this.cx;
        this.y0 = this.cy - this.radius;
        this.rx = this.ry = this.radius;
        this.innerRadius = this.radius - this.border;
    };
    CircleProgressComponent.prototype.calculateAll = function () {
        this.calculateAngle(this.radius, this.radian);
        this.setArcSet(this.angle);
        this.circleM = this.createArgument('M', this.cx, this.cy);
        this.circleL = this.createArgument('L', this.x0, this.y0);
        this.circleA = this.createArgument('A', this.rx, this.ry);
    };
    CircleProgressComponent.prototype.calculateAngle = function (r, rad) {
        this.x = this.cx + r * Math.sin(rad);
        this.y = this.cy - r * Math.cos(rad);
        if (this.percent == 100) {
            this.x--;
        }
        this.circleEnd = this.createArgument(null, this.x, this.y);
    };
    CircleProgressComponent.prototype.setArcSet = function (angle) {
        if (Math.round(angle) <= 180) {
            this.arcSweep = this.createArgument(null, 0, 1);
        }
        else if (Math.round(angle) > 180) {
            this.arcSweep = this.createArgument(null, 1, 1);
        }
    };
    CircleProgressComponent.prototype.createArgument = function (prefix, val1, val2) {
        if (prefix != null) {
            return prefix + val1 + ',' + val2 + ' ';
        }
        else {
            return val1 + ',' + val2 + ' ';
        }
    };
    CircleProgressComponent.prototype.percToAngle = function (perc) {
        return perc * 3.6;
    };
    CircleProgressComponent.prototype.angleToRad = function (angle) {
        return (angle * Math.PI) / 180;
    };
    CircleProgressComponent.prototype.animate = function () {
        if (this.canAnimate) {
            this.canAnimate = false;
            var time = this.time * 1000 / this.percent;
            this.animationLoop(1, time);
        }
        else {
            return;
        }
    };
    CircleProgressComponent.prototype.animationLoop = function (i, time) {
        var _this = this;
        setTimeout(function () {
            _this.angle = _this.percToAngle(i);
            _this.radian = _this.angleToRad(_this.angle);
            _this.setArcSet(_this.angle);
            _this.setColor(i);
            _this.circleText = i + '%';
            _this.calculateAngle(_this.radius, _this.radian);
            i++;
            if (i <= _this.percent) {
                _this.animationLoop(i, time);
            }
        }, time);
        if (i >= this.percent) {
            this.canAnimate = true;
        }
    };
    CircleProgressComponent.prototype.setColor = function (percent) {
        if (percent <= 25) {
            this.color = this.lowColor;
        }
        else if (percent <= 50) {
            this.color = this.middleColor;
        }
        else if (percent <= 75) {
            this.color = this.interColor;
        }
        else if (percent > 75) {
            this.color = this.highColor;
        }
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(), 
        __metadata('design:type', Number)
    ], CircleProgressComponent.prototype, "percent", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(), 
        __metadata('design:type', Number)
    ], CircleProgressComponent.prototype, "boxSize", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(), 
        __metadata('design:type', Number)
    ], CircleProgressComponent.prototype, "radius", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(), 
        __metadata('design:type', Number)
    ], CircleProgressComponent.prototype, "time", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(), 
        __metadata('design:type', Number)
    ], CircleProgressComponent.prototype, "border", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(), 
        __metadata('design:type', String)
    ], CircleProgressComponent.prototype, "color", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(), 
        __metadata('design:type', String)
    ], CircleProgressComponent.prototype, "backgroundColor", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(), 
        __metadata('design:type', String)
    ], CircleProgressComponent.prototype, "lowColor", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(), 
        __metadata('design:type', String)
    ], CircleProgressComponent.prototype, "middleColor", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(), 
        __metadata('design:type', String)
    ], CircleProgressComponent.prototype, "interColor", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(), 
        __metadata('design:type', String)
    ], CircleProgressComponent.prototype, "highColor", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(), 
        __metadata('design:type', String)
    ], CircleProgressComponent.prototype, "fontColor", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(), 
        __metadata('design:type', Number)
    ], CircleProgressComponent.prototype, "fontSize", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(), 
        __metadata('design:type', String)
    ], CircleProgressComponent.prototype, "fontFamily", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(), 
        __metadata('design:type', String)
    ], CircleProgressComponent.prototype, "fontX", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(), 
        __metadata('design:type', String)
    ], CircleProgressComponent.prototype, "fontY", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(), 
        __metadata('design:type', String)
    ], CircleProgressComponent.prototype, "innerFill", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(), 
        __metadata('design:type', String)
    ], CircleProgressComponent.prototype, "textAnchor", void 0);
    CircleProgressComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-circle-progress',
            template: __webpack_require__(857),
            styles: [__webpack_require__(835)],
        }), 
        __metadata('design:paramtypes', [])
    ], CircleProgressComponent);
    return CircleProgressComponent;
}());
//# sourceMappingURL=D:/pwa/demo/src/circle-progress.component.js.map

/***/ },

/***/ 660:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return GamePlayerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GamePlayerComponent = (function () {
    function GamePlayerComponent() {
        this.isReady = false;
    }
    GamePlayerComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(), 
        __metadata('design:type', Object)
    ], GamePlayerComponent.prototype, "from", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(), 
        __metadata('design:type', Object)
    ], GamePlayerComponent.prototype, "to", void 0);
    GamePlayerComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-game-player',
            template: __webpack_require__(858),
            styles: [__webpack_require__(836)]
        }), 
        __metadata('design:paramtypes', [])
    ], GamePlayerComponent);
    return GamePlayerComponent;
}());
//# sourceMappingURL=D:/pwa/demo/src/game-player.component.js.map

/***/ },

/***/ 661:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_word_service__ = __webpack_require__(443);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_helper_service__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_word_dialog_word_dialog_component__ = __webpack_require__(439);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return LearningComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LearningComponent = (function () {
    function LearningComponent(wordService, helperService, dialog) {
        this.wordService = wordService;
        this.helperService = helperService;
        this.dialog = dialog;
        this.words = [];
        this.curWord = {};
        this.disableNext = false;
        this.disablePre = false;
    }
    LearningComponent.prototype.speak = function () {
        this.helperService.speak(this.curWord['content']);
    };
    LearningComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.wordService.getAllWord().then(function (res) {
            _this.words = res;
            _this.curWord = _this.words[0];
            _this.checkDisable();
        });
    };
    LearningComponent.prototype.checkDisable = function () {
        var index;
        index = this.words.indexOf(this.curWord);
        length = this.words.length;
        if (index == 0) {
            this.disablePre = true;
        }
        if (index == length - 1) {
            this.disableNext = true;
        }
        if (index > 0 && index < length - 1) {
            this.disableNext = false;
            this.disablePre = false;
        }
    };
    LearningComponent.prototype.next = function () {
        var index;
        index = this.words.indexOf(this.curWord);
        length = this.words.length;
        if (index == length - 1) {
            this.disableNext = true;
        }
        else {
            index = index + 1;
            this.curWord = this.words[index];
            this.checkDisable();
        }
        this.speak();
    };
    LearningComponent.prototype.previous = function () {
        var index;
        index = this.words.indexOf(this.curWord);
        length = this.words.length;
        if (index == 0) {
            this.disablePre = true;
        }
        else {
            index = index - 1;
            this.curWord = this.words[index--];
            this.checkDisable();
        }
        this.speak();
    };
    LearningComponent.prototype.openDialog = function (item) {
        var config = {
            disableClose: false,
            width: '50%',
            height: '',
            position: {
                top: '',
                bottom: '',
                left: '',
                right: ''
            }
        };
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_4__components_word_dialog_word_dialog_component__["a" /* WordDialogComponent */], config);
        var instance = dialogRef.componentInstance;
        instance.word = item;
        dialogRef.afterClosed().subscribe(function (result) { });
    };
    LearningComponent.prototype.changeWord = function (item) {
        this.curWord = item;
        this.checkDisable();
    };
    LearningComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-learning',
            template: __webpack_require__(860),
            styles: [__webpack_require__(838)],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_word_service__["a" /* WordService */], __WEBPACK_IMPORTED_MODULE_2__services_helper_service__["a" /* HelperService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_word_service__["a" /* WordService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_word_service__["a" /* WordService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_helper_service__["a" /* HelperService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_helper_service__["a" /* HelperService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["MdDialog"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_material__["MdDialog"]) === 'function' && _c) || Object])
    ], LearningComponent);
    return LearningComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=D:/pwa/demo/src/learning.component.js.map

/***/ },

/***/ 662:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return LoginFacebookComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoginFacebookComponent = (function () {
    function LoginFacebookComponent() {
    }
    LoginFacebookComponent.prototype.ngOnInit = function () {
    };
    LoginFacebookComponent.prototype.loginFB = function () {
        console.log('dang login');
        FB.login(function (result) {
            console.log(result);
        }, { scope: 'user_friends' });
    };
    LoginFacebookComponent.prototype.testAPI = function () {
        console.log('Welcome!  Fetching your information.... ');
        FB.api('/me', function (response) {
            console.log(JSON.stringify(response));
        });
    };
    LoginFacebookComponent.prototype.statusChangeCallback = function (response) {
        console.log(response);
        // The response object is returned with a status field that lets the
        // app know the current login status of the person.
        // Full docs on the response object can be found in the documentation
        // for FB.getLoginStatus().
        if (response.status === 'connected') {
            // Logged into your app and Facebook.
            this.testAPI();
        }
        else if (response.status === 'not_authorized') {
            // The person is logged into Facebook, but not your app.
            this.loginFB();
        }
        else {
            // The person is not logged into Facebook, so we're not sure if
            // they are logged into this app or not.
            console.log('enter');
            this.loginFB();
        }
    };
    LoginFacebookComponent.prototype.checkLoginState = function () {
        var _this = this;
        FB.getLoginStatus(function (response) {
            _this.statusChangeCallback(response);
        });
    };
    LoginFacebookComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-login-facebook',
            template: __webpack_require__(861),
            styles: [__webpack_require__(839)]
        }), 
        __metadata('design:paramtypes', [])
    ], LoginFacebookComponent);
    return LoginFacebookComponent;
}());
//# sourceMappingURL=D:/pwa/demo/src/login-facebook.component.js.map

/***/ },

/***/ 663:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_global_vars_service__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_login_service__ = __webpack_require__(442);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(90);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return LoginGoogleComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginGoogleComponent = (function () {
    function LoginGoogleComponent(zone, globalVars, userService, loginService, router) {
        this.zone = zone;
        this.globalVars = globalVars;
        this.userService = userService;
        this.loginService = loginService;
        this.router = router;
        this.isLogin = false;
        this.profile = {};
        this.isLogout = false;
        // this.globalVars.isUserLoggedIn.subscribe(value => console.log(value));
    }
    LoginGoogleComponent.prototype.ngOnInit = function () {
        this.start();
    };
    LoginGoogleComponent.prototype.start = function () {
        var _this = this;
        gapi.load('auth2', function () {
            // Retrieve the singleton for the GoogleAuth library and set up the client.
            _this.auth2 = gapi.auth2.init({
                client_id: '736288713251-26srbi81jha5n1aithe4av668oh5pn12.apps.googleusercontent.com'
            });
            _this.auth2.then(function () {
                var isSignedIn = _this.auth2.isSignedIn.get();
                var googleUser = _this.auth2.currentUser.get();
                if (isSignedIn) {
                    _this.isLogin = true;
                    var res = googleUser.getBasicProfile();
                    _this.profile['displayName'] = res.getName();
                    _this.profile['imageUrl'] = res.getImageUrl();
                    _this.globalVars.setLoginStatus(true);
                    _this.globalVars.setProfile(_this.profile);
                    _this.router.navigate(['/']);
                }
                else {
                    _this.globalVars.setLoginStatus(false);
                    _this.attachSignin(document.getElementById('customBtn'));
                }
            });
        });
    };
    LoginGoogleComponent.prototype.attachSignin = function (element) {
        var _this = this;
        this.auth2.attachClickHandler(element, {}, function (googleUser) {
            _this.zone.run(function () {
                _this.isLogin = true;
                _this.isLogout = false;
                var res = googleUser.getBasicProfile();
                _this.profile['displayName'] = res.getName();
                _this.profile['imageUrl'] = res.getImageUrl();
                _this.profile['name'] = res.getName();
                _this.profile['email'] = res.getEmail();
                //save mlab
                _this.loginService.checkExist(_this.profile['email']).then(function (res) {
                    //lần đầu đăng nhập
                    if (res == null) {
                        _this.loginService.login(_this.profile).then(function (res) {
                            console.log(res['_id']);
                            _this.profile['id'] = res['_id'];
                            _this.globalVars.setProfile(_this.profile);
                        });
                    }
                    else {
                        //đã đăng nhập
                        // this.userService.getUser(this.profile['email']).then(res => {
                        //   console.log(res['_id']);
                        //   this.profile['id'] = res['_id'];
                        //   this.globalVars.setProfile(this.profile);
                        // });
                        _this.userService.updateUser(_this.profile['email'], _this.profile).then(function (res) {
                            _this.profile = res;
                            _this.globalVars.setProfile(_this.profile);
                        });
                    }
                });
                _this.globalVars.setLoginStatus(true);
                _this.router.navigate(['/']);
            });
        }, function (error) {
            alert(JSON.stringify(error, undefined, 2));
        });
    };
    LoginGoogleComponent.prototype.sendData = function () {
        return this.profile;
    };
    // if render button
    LoginGoogleComponent.prototype.onSuccess = function (googleUser) {
        console.log('Logged in as: ' + googleUser.getBasicProfile().getName());
    };
    LoginGoogleComponent.prototype.onFailure = function (error) {
        console.log(error);
    };
    LoginGoogleComponent.prototype.renderButton = function () {
        gapi.signin2.render('my-signin2', {
            'scope': 'profile email',
            'width': 240,
            'height': 50,
            'longtitle': true,
            'theme': 'dark',
            'onsuccess': this.onSuccess,
            'onfailure': this.onFailure
        });
    };
    LoginGoogleComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-login-google',
            template: __webpack_require__(862),
            styles: [__webpack_require__(840)],
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_login_service__["a" /* LoginService */], __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* NgZone */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* NgZone */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_global_vars_service__["a" /* GlobalVarsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_global_vars_service__["a" /* GlobalVarsService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__services_login_service__["a" /* LoginService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_login_service__["a" /* LoginService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]) === 'function' && _e) || Object])
    ], LoginGoogleComponent);
    return LoginGoogleComponent;
    var _a, _b, _c, _d, _e;
}());
//# sourceMappingURL=D:/pwa/demo/src/login-google.component.js.map

/***/ },

/***/ 664:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoginComponent = (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__(863),
            styles: [__webpack_require__(841)]
        }), 
        __metadata('design:paramtypes', [])
    ], LoginComponent);
    return LoginComponent;
}());
//# sourceMappingURL=D:/pwa/demo/src/login.component.js.map

/***/ },

/***/ 665:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(90);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return MenuGameComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MenuGameComponent = (function () {
    function MenuGameComponent(router) {
        this.router = router;
    }
    MenuGameComponent.prototype.ngOnInit = function () {
    };
    MenuGameComponent.prototype.playWord = function () {
        this.router.navigate(['/playword']);
    };
    MenuGameComponent.prototype.playSong = function () {
        this.router.navigate(['/songpop']);
    };
    MenuGameComponent.prototype.toLearn = function () {
        this.router.navigate(['/learn']);
    };
    MenuGameComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-menu-game',
            template: __webpack_require__(864),
            styles: [__webpack_require__(842)],
            providers: []
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _a) || Object])
    ], MenuGameComponent);
    return MenuGameComponent;
    var _a;
}());
//# sourceMappingURL=D:/pwa/demo/src/menu-game.component.js.map

/***/ },

/***/ 666:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_game_service__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__(88);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return MyAnswerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MyAnswerComponent = (function () {
    function MyAnswerComponent(gameService, router, snackBar) {
        this.gameService = gameService;
        this.router = router;
        this.snackBar = snackBar;
        this.fromAns = [];
        this.toAns = [];
        this.isSend = false;
    }
    MyAnswerComponent.prototype.ngOnInit = function () {
        this.content = this.turnGame['content'];
        this.fromAns = this.turnGame['fromAns'];
        this.toAns = this.turnGame['toAns'];
        //console.log(this.)
    };
    MyAnswerComponent.prototype.compare = function (str1, str2) {
        if (str1 == null || str2 == null)
            return false;
        return str1.trim().toLowerCase() == str2.trim().toLowerCase();
    };
    MyAnswerComponent.prototype.sendRequestGame = function () {
        var _this = this;
        if (!this.isRequest) {
            this.gameService.createGame(this.turnGame).then(function (res) {
                _this.openSnackBar('Send request success!');
                _this.isSend = true;
                //this.router.navigate(['/playword']);
            });
        }
        else {
            console.log(this.turnGame);
            this.gameService.updateGame(this.turnGame['_id'], this.turnGame).then(function (res) {
                _this.openSnackBar('Save success!');
                _this.isSend = true;
                //this.router.navigate(['/playword']);
            });
        }
    };
    MyAnswerComponent.prototype.openSnackBar = function (message) {
        this.snackBar.open(message, '', {
            duration: 3000,
        });
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(), 
        __metadata('design:type', Object)
    ], MyAnswerComponent.prototype, "turnGame", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(), 
        __metadata('design:type', Object)
    ], MyAnswerComponent.prototype, "from", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(), 
        __metadata('design:type', Object)
    ], MyAnswerComponent.prototype, "to", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(), 
        __metadata('design:type', Boolean)
    ], MyAnswerComponent.prototype, "isRequest", void 0);
    MyAnswerComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-my-answer',
            template: __webpack_require__(865),
            styles: [__webpack_require__(843)],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_game_service__["a" /* GameService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_game_service__["a" /* GameService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_game_service__["a" /* GameService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["MdSnackBar"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_material__["MdSnackBar"]) === 'function' && _c) || Object])
    ], MyAnswerComponent);
    return MyAnswerComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=D:/pwa/demo/src/my-answer.component.js.map

/***/ },

/***/ 667:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_global_vars_service__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__(115);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return MyFriendsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MyFriendsComponent = (function () {
    function MyFriendsComponent(globalVars, userService, zone) {
        this.globalVars = globalVars;
        this.userService = userService;
        this.zone = zone;
        this.selectFriend = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* EventEmitter */]();
        this.friends = [];
        this.selectedFriend = false;
        this.playerFriend = {};
    }
    MyFriendsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.globalVars.profile.subscribe(function (value) {
            if (value['_id'] != undefined) {
                _this.userService.getFriend(value['_id']).then(function (res) {
                    _this.zone.run(function () {
                        _this.friends = res;
                    });
                });
            }
        });
    };
    MyFriendsComponent.prototype.chooseFriend = function (item) {
        for (var i = 0; i < this.friends.length; i++) {
            if (this.friends[i]['state'] == item) {
                item['state'] = 'active';
            }
            else {
                this.friends[i]['state'] = 'inactive';
            }
        }
        item['state'] = 'active';
        this.playerFriend = item;
        this.selectedFriend = true;
        this.selectFriend.emit(item);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Output */])(), 
        __metadata('design:type', Object)
    ], MyFriendsComponent.prototype, "selectFriend", void 0);
    MyFriendsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-my-friends',
            template: __webpack_require__(866),
            styles: [__webpack_require__(844)],
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]],
            animations: [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_25" /* trigger */])('friendState', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_26" /* state */])('inactive', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_27" /* style */])({
                        backgroundColor: '#eee',
                        transform: 'scale(1)'
                    })),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_26" /* state */])('active', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_27" /* style */])({
                        backgroundColor: '#cfd8dc',
                        transform: 'scale(1.1)'
                    })),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_28" /* transition */])('inactive => active', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* animate */])('200ms ease-in')),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_28" /* transition */])('active => inactive', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* animate */])('200ms ease-out'))
                ])
            ]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_global_vars_service__["a" /* GlobalVarsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_global_vars_service__["a" /* GlobalVarsService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* NgZone */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* NgZone */]) === 'function' && _c) || Object])
    ], MyFriendsComponent);
    return MyFriendsComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=D:/pwa/demo/src/my-friends.component.js.map

/***/ },

/***/ 668:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_global_vars_service__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_login_service__ = __webpack_require__(442);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_user_service__ = __webpack_require__(115);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return NavLoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NavLoginComponent = (function () {
    function NavLoginComponent(globalVars, userService, loginService, zone, router) {
        this.globalVars = globalVars;
        this.userService = userService;
        this.loginService = loginService;
        this.zone = zone;
        this.router = router;
        this.isLogin = false;
        this.profile = {};
    }
    NavLoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.start();
        this.globalVars.isUserLoggedIn.subscribe(function (value) {
            _this.zone.run(function () {
                _this.isLogin = value;
            });
        });
        this.globalVars.profile.subscribe(function (value) {
            _this.zone.run(function () {
                _this.profile = value;
            });
        });
    };
    NavLoginComponent.prototype.start = function () {
        var _this = this;
        gapi.load('auth2', function () {
            // Retrieve the singleton for the GoogleAuth library and set up the client.
            _this.auth2 = gapi.auth2.init({
                client_id: '736288713251-26srbi81jha5n1aithe4av668oh5pn12.apps.googleusercontent.com'
            });
            _this.auth2.then(function () {
                var isSignedIn = _this.auth2.isSignedIn.get();
                var googleUser = _this.auth2.currentUser.get();
                if (isSignedIn) {
                    _this.zone.run(function () {
                        _this.isLogin = true;
                        var res = googleUser.getBasicProfile();
                        _this.profile['name'] = res.getName();
                        _this.profile['imageUrl'] = res.getImageUrl();
                        _this.profile['email'] = res.getEmail();
                        _this.globalVars.setLoginStatus(true);
                        //save mlab
                        _this.loginService.checkExist(_this.profile['email']).then(function (res) {
                            //lần đầu đăng nhập
                            if (res == null) {
                                _this.loginService.login(_this.profile).then(function (res) {
                                    console.log(res['_id']);
                                    _this.profile['id'] = res['_id'];
                                    _this.globalVars.setProfile(_this.profile);
                                });
                            }
                            else {
                                //đã đăng nhập
                                _this.userService.updateUser(_this.profile['email'], _this.profile).then(function (res) {
                                    _this.profile = res;
                                    _this.globalVars.setProfile(_this.profile);
                                });
                            }
                        });
                    });
                }
                else {
                    console.log('not login');
                    _this.globalVars.setLoginStatus(false);
                }
            });
        });
    };
    NavLoginComponent.prototype.logOut = function () {
        var _this = this;
        this.auth2 = gapi.auth2.getAuthInstance();
        this.auth2.signOut().then(function () {
            console.log('User signed out.');
            _this.zone.run(function () {
                _this.globalVars.setLoginStatus(false);
                _this.isLogin = false;
                _this.profile = {};
                _this.router.navigate(['/login']);
            });
        });
    };
    NavLoginComponent.prototype.goProfile = function () {
        this.router.navigate(['/profile']);
    };
    NavLoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-nav-login',
            template: __webpack_require__(867),
            styles: [__webpack_require__(845)],
            providers: [__WEBPACK_IMPORTED_MODULE_3__services_login_service__["a" /* LoginService */], __WEBPACK_IMPORTED_MODULE_4__services_user_service__["a" /* UserService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_global_vars_service__["a" /* GlobalVarsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_global_vars_service__["a" /* GlobalVarsService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_user_service__["a" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__services_user_service__["a" /* UserService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_login_service__["a" /* LoginService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_login_service__["a" /* LoginService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* NgZone */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* NgZone */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === 'function' && _e) || Object])
    ], NavLoginComponent);
    return NavLoginComponent;
    var _a, _b, _c, _d, _e;
}());
//# sourceMappingURL=D:/pwa/demo/src/nav-login.component.js.map

/***/ },

/***/ 669:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return RegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RegisterComponent = (function () {
    function RegisterComponent() {
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-register',
            template: __webpack_require__(868),
            styles: [__webpack_require__(846)]
        }), 
        __metadata('design:paramtypes', [])
    ], RegisterComponent);
    return RegisterComponent;
}());
//# sourceMappingURL=D:/pwa/demo/src/register.component.js.map

/***/ },

/***/ 670:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_global_vars_service__ = __webpack_require__(62);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return SearchFriendComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SearchFriendComponent = (function () {
    function SearchFriendComponent(globalVars, userService, zone) {
        this.globalVars = globalVars;
        this.userService = userService;
        this.zone = zone;
        this.profile = {};
        this.query = '';
        this.result = [];
    }
    SearchFriendComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.globalVars.profile.subscribe(function (value) {
            _this.zone.run(function () {
                _this.profile = value;
            });
        });
    };
    SearchFriendComponent.prototype.search = function () {
        var _this = this;
        if (this.query != '') {
            this.userService.findUser(this.query).then(function (res) {
                _this.zone.run(function () {
                    _this.result = res;
                    console.log(_this.result);
                });
            });
        }
    };
    SearchFriendComponent.prototype.createFriend = function (item) {
        if (this.profile['_id'] != undefined) {
            var friend = {};
            friend['from'] = this.profile['_id'];
            friend['to'] = item['_id'];
            this.userService.createFriend(friend).then(function (res) {
                console.log('gửi yêu cầu thành công');
            });
        }
    };
    SearchFriendComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-search-friend',
            template: __webpack_require__(869),
            styles: [__webpack_require__(847)],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_global_vars_service__["a" /* GlobalVarsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_global_vars_service__["a" /* GlobalVarsService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* NgZone */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* NgZone */]) === 'function' && _c) || Object])
    ], SearchFriendComponent);
    return SearchFriendComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=D:/pwa/demo/src/search-friend.component.js.map

/***/ },

/***/ 671:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_waiting_game_waiting_game_component__ = __webpack_require__(438);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__games_writing_writing_component__ = __webpack_require__(441);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__games_reading_reading_component__ = __webpack_require__(440);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_game_request_game_request_component__ = __webpack_require__(437);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_word_service__ = __webpack_require__(443);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_helper_service__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_global_vars_service__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_game_service__ = __webpack_require__(259);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return PlayWordComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var PlayWordComponent = (function () {
    function PlayWordComponent(wordService, gameService, helperService, globalVars, dialog) {
        this.wordService = wordService;
        this.gameService = gameService;
        this.helperService = helperService;
        this.globalVars = globalVars;
        this.dialog = dialog;
        this.score = 0;
        this.percent = 0;
        this.count = 0;
        this.answers = [];
        this.curWord = {};
        this.max = 5;
        this.isEnd = false;
        this.typeGame = ['reading', 'writing'];
        this.counter = 100;
        this.colorProgressbar = 'primary';
        this.isReady = false;
        this.selectedFriend = false;
        this.playerFriend = {};
        this.profile = {};
        //Lưu câu trả lời
        this.turnGame = [];
        this.allQuestions = [];
        //Nếu là một yêu cầu từ bạn thì không cần random
        this.isRequest = false;
        this.contentGame = [];
        this.choices = [];
        //players
        this.from = {};
        this.turn = {
            "from": {
                "id": {}
            },
            "to": {
                "id": {}
            }
        };
    }
    PlayWordComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.wordService.getAllWord().then(function (res) {
            _this.allWords = res;
            _this.words = _this.helperService.getRandomArrayElements(_this.allWords, _this.max);
        });
        this.globalVars.profile.subscribe(function (value) {
            if (value['_id'] != undefined) {
                _this.profile = value;
                _this.from = _this.profile;
                _this.from['score'] = 0;
            }
        });
    };
    PlayWordComponent.prototype.openDialog = function () {
        var _this = this;
        var config = {
            disableClose: true,
            width: '50%',
            height: '',
            position: {
                top: '',
                bottom: '',
                left: '',
                right: ''
            }
        };
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_2__components_waiting_game_waiting_game_component__["a" /* WaitingGameComponent */], config);
        var instance = dialogRef.componentInstance;
        instance.from = this.from;
        instance.to = this.to;
        dialogRef.afterClosed().subscribe(function (result) {
            //this.selectedOption = result;
            if (result == true) {
                _this.ready();
            }
        });
    };
    PlayWordComponent.prototype.ready = function () {
        //check nếu người được chọn trùng với người ý yêu cầu
        if (!this.check()) {
            this.isReady = true;
            this.reload();
        }
        else {
            this.isReady = true;
            this.isRequest = true;
            this.reload();
        }
    };
    PlayWordComponent.prototype.check = function () {
        var allTurns = [];
        allTurns = this.gameRequestComponent.getTurns();
        for (var i = 0; i < allTurns.length; i++) {
            if (allTurns[i]['from']['_id'] == this.playerFriend['_id']) {
                this.contentGame = allTurns[i]['content'];
                this.max = allTurns[i]['content'].length;
                return true;
            }
        }
        return false;
    };
    PlayWordComponent.prototype.reload = function () {
        this.colorProgressbar = 'primary';
        if (this.count == this.max) {
            this.doneGame();
            this.isEnd = true;
            return;
        }
        this.count++;
        //Nếu không phải là một yêu cầu có sẵn thì tiến hành random;
        if (!this.isRequest) {
            this.random();
            this.choices = null;
            this.countDownTimer();
        }
        if (this.isRequest) {
            var i = this.count - 1;
            this.curWord = this.contentGame[i];
            if (this.contentGame[i]['type'] == 'reading' && this.contentGame[i]['choice'] != undefined) {
                this.choices = this.contentGame[i]['choice'];
            }
            this.selectedGame = this.contentGame[i]['type'];
            this.countDownTimer();
        }
    };
    PlayWordComponent.prototype.random = function () {
        // Chọn từ ngẫu nhiên
        var i = this.helperService.random(this.words.length);
        this.curWord = this.words[i];
        // Chọn game ngẫu nhiên
        var j = this.helperService.random(this.typeGame.length);
        this.selectedGame = this.typeGame[j];
    };
    PlayWordComponent.prototype.next = function () {
        if (this.count == this.max) {
            this.doneGame();
            this.isEnd = true;
            return;
        }
        for (var i = 0; i < this.words.length; i++) {
            if (this.words[i]['id'] == this.curWord['id']) {
                this.words.splice(i, 1);
                break;
            }
        }
        clearInterval(this.interval);
        this.reload();
    };
    PlayWordComponent.prototype.refresh = function () {
        var _this = this;
        clearInterval(this.interval);
        setTimeout(function () {
            _this.next();
        }, 1000);
    };
    PlayWordComponent.prototype.onCorrect = function (correct) {
        if (correct) {
            this.createScore();
            this.refresh();
        }
        else {
            if (this.selectedGame == 'reading') {
                clearInterval(this.interval);
                this.refresh();
            }
        }
    };
    PlayWordComponent.prototype.createScore = function () {
        this.score++;
        this.percent = this.score * 100 / this.max;
        if (!this.isRequest) {
            this.from['score']++;
        }
        else {
            this.to['score']++;
        }
    };
    PlayWordComponent.prototype.countDownTimer = function () {
        var _this = this;
        this.counter = 100;
        this.interval = setInterval(function () {
            _this.counter -= 1;
            if (_this.counter >= 30 && _this.counter < 50)
                _this.colorProgressbar = 'accent';
            if (_this.counter < 30)
                _this.colorProgressbar = 'warn';
            // Khi hết giờ
            if (_this.counter <= 0) {
                if (_this.selectedGame == 'writing') {
                    _this.writingComponent.showAnswer = true;
                    _this.writingComponent.getAnswer();
                    _this.refresh();
                    return;
                }
                if (_this.selectedGame == 'reading') {
                    // hết thời gian mà chưa trả lời thì set câu trả lời = null
                    _this.readingComponent.getAnswer(null);
                    _this.readingComponent.checkAnswer(null);
                    _this.refresh();
                    return;
                }
            }
        }, 80);
    };
    PlayWordComponent.prototype.saveGame = function (item) {
        this.turnGame.push(item);
    };
    PlayWordComponent.prototype.saveQuestion = function (question) {
        this.allQuestions.push(question);
    };
    PlayWordComponent.prototype.userAnswer = function (userAnswer) {
        this.answers.push(userAnswer);
    };
    PlayWordComponent.prototype.doneGame = function () {
        //user khởi đầu game
        if (!this.isRequest) {
            this.turn['from']['id'] = this.profile['_id'];
            this.turn['from']['score'] = this.score;
            this.turn['to']['id'] = this.playerFriend['_id'];
            this.turn['game'] = 'word';
            this.turn['content'] = this.allQuestions;
            this.turn['fromAns'] = this.answers;
        }
        else {
            this.turn['toAns'] = this.answers;
            this.turn['to']['score'] = this.score;
        }
    };
    PlayWordComponent.prototype.selectFriend = function (friend) {
        this.selectedFriend = true;
        this.playerFriend = friend;
        this.to = friend;
        this.to['score'] = 0;
    };
    PlayWordComponent.prototype.sendRequestGame = function () {
        if (!this.isRequest) {
            this.gameService.createGame(this.turn).then(function (res) {
                console.log(res);
            });
        }
        else {
        }
    };
    PlayWordComponent.prototype.request = function (request) {
        this.isRequest = true;
        this.turn = request;
        this.contentGame = request['content'];
        this.from = request['from']['id'];
        this.from['score'] = request['from']['score'];
        this.to = request['to']['id'];
        this.to['score'] = 0;
        this.openDialog();
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_3__games_writing_writing_component__["a" /* WritingComponent */]), 
        __metadata('design:type', Object)
    ], PlayWordComponent.prototype, "writingComponent", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_4__games_reading_reading_component__["a" /* ReadingComponent */]), 
        __metadata('design:type', Object)
    ], PlayWordComponent.prototype, "readingComponent", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_5__components_game_request_game_request_component__["a" /* GameRequestComponent */]), 
        __metadata('design:type', Object)
    ], PlayWordComponent.prototype, "gameRequestComponent", void 0);
    PlayWordComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-play-word',
            template: __webpack_require__(872),
            styles: [__webpack_require__(850)],
            providers: [__WEBPACK_IMPORTED_MODULE_6__services_word_service__["a" /* WordService */], __WEBPACK_IMPORTED_MODULE_7__services_helper_service__["a" /* HelperService */], __WEBPACK_IMPORTED_MODULE_9__services_game_service__["a" /* GameService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6__services_word_service__["a" /* WordService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_6__services_word_service__["a" /* WordService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_9__services_game_service__["a" /* GameService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_9__services_game_service__["a" /* GameService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_7__services_helper_service__["a" /* HelperService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_7__services_helper_service__["a" /* HelperService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_8__services_global_vars_service__["a" /* GlobalVarsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_8__services_global_vars_service__["a" /* GlobalVarsService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["MdDialog"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_material__["MdDialog"]) === 'function' && _e) || Object])
    ], PlayWordComponent);
    return PlayWordComponent;
    var _a, _b, _c, _d, _e;
}());
//# sourceMappingURL=D:/pwa/demo/src/play-word.component.js.map

/***/ },

/***/ 672:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_song_service__ = __webpack_require__(676);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return SongpopComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SongpopComponent = (function () {
    function SongpopComponent(songService) {
        this.songService = songService;
        this.listSong = [];
    }
    SongpopComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.songService.getPopSong().then(function (res) {
            for (var i = 0; i < 10; i++) {
                _this.listSong.push(res['collection'][i]);
            }
            for (var i = 0; i < _this.listSong.length; i++) {
                if (_this.listSong[i]['track']['publisher_metadata'] == null) {
                    _this.listSong[i]['artist'] = _this.listSong[i]['track']['user']['username'];
                }
                else {
                    _this.listSong[i]['artist'] = _this.listSong[i]['track']['publisher_metadata']['artist'];
                }
            }
        });
    };
    SongpopComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-songpop',
            template: __webpack_require__(874),
            styles: [__webpack_require__(852)],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_song_service__["a" /* SongService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_song_service__["a" /* SongService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_song_service__["a" /* SongService */]) === 'function' && _a) || Object])
    ], SongpopComponent);
    return SongpopComponent;
    var _a;
}());
//# sourceMappingURL=D:/pwa/demo/src/songpop.component.js.map

/***/ },

/***/ 673:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_component__ = __webpack_require__(436);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(658);
/* unused harmony namespace reexport */
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__app_module__["a"]; });


//# sourceMappingURL=D:/pwa/demo/src/index.js.map

/***/ },

/***/ 674:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(90);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = (function () {
    function HomeComponent(router) {
        this.router = router;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.playWord = function () {
        this.router.navigate(['/playword']);
    };
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__(876),
            styles: [__webpack_require__(854)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _a) || Object])
    ], HomeComponent);
    return HomeComponent;
    var _a;
}());
//# sourceMappingURL=D:/pwa/demo/src/home.component.js.map

/***/ },

/***/ 675:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_global_vars_service__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__(115);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = (function () {
    function ProfileComponent(globalVars, userService, zone) {
        this.globalVars = globalVars;
        this.userService = userService;
        this.zone = zone;
        this.profile = {};
        this.requests = [];
        this.noRequest = false;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.globalVars.profile.subscribe(function (value) {
            _this.zone.run(function () {
                _this.profile = value;
            });
            if (value['_id'] != undefined) {
                _this.userService.getFriend(value['_id']).then(function (res) {
                    _this.zone.run(function () {
                        _this.friends = res;
                    });
                });
                _this.userService.getRequestFriend(value['_id']).then(function (res) {
                    _this.requests = res;
                    if (_this.requests.length == 0) {
                        _this.noRequest = true;
                    }
                });
            }
        });
    };
    ProfileComponent.prototype.getListFriend = function (email) {
        var _this = this;
        this.userService.getFriend(email).then(function (res) {
            _this.friends = res;
        });
    };
    ProfileComponent.prototype.agree = function (item) {
        this.userService.agreeRequest(item['_id'], this.profile['_id']).then(function (res) {
            // if (this.requests.indexOf(item) >= 0 ) {
            //   this.requests.splice(this.requests.indexOf(item), 1);
            // }
            console.log(res);
            console.log('đã đồng ý');
        });
    };
    ProfileComponent.prototype.cancel = function (idFriend) {
        this.userService.cancel(this.profile['_id'], idFriend).then(function (res) {
            console.log('hủy');
        });
    };
    ProfileComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-profile',
            template: __webpack_require__(877),
            styles: [__webpack_require__(855)],
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_global_vars_service__["a" /* GlobalVarsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_global_vars_service__["a" /* GlobalVarsService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* NgZone */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* NgZone */]) === 'function' && _c) || Object])
    ], ProfileComponent);
    return ProfileComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=D:/pwa/demo/src/profile.component.js.map

/***/ },

/***/ 676:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(59);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return SongService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SongService = (function () {
    function SongService(http) {
        this.http = http;
    }
    SongService.prototype.getPopSong = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get('assets/data/song.json').subscribe(function (result) {
                resolve(result.json());
            });
        });
    };
    SongService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === 'function' && _a) || Object])
    ], SongService);
    return SongService;
    var _a;
}());
//# sourceMappingURL=D:/pwa/demo/src/song.service.js.map

/***/ },

/***/ 677:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=D:/pwa/demo/src/environment.js.map

/***/ },

/***/ 678:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(692);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(685);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(681);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(687);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(686);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(684);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(683);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(691);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(680);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(679);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(689);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(682);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(690);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(688);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(693);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(909);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
















//# sourceMappingURL=D:/pwa/demo/src/polyfills.js.map

/***/ },

/***/ 834:
/***/ function(module, exports) {

module.exports = ".example-fill-remaining-space {\r\n  -webkit-box-flex: 1;\r\n      -ms-flex: 1 1 auto;\r\n          flex: 1 1 auto;\r\n}\r\n\r\n.toolbar-icon {\r\n  padding-right: 6px;\r\n}\r\n\r\nmd-icon {\r\n\tcursor: pointer;\r\n}\r\n\r\n"

/***/ },

/***/ 835:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 836:
/***/ function(module, exports) {

module.exports = ".avatar img {\r\n\twidth: 100px;\r\n\theight: 100px;\r\n\tborder: 1px solid #03a9f4;\r\n\tborder-radius: 50%;\r\n}\r\n\r\n.name-friend {\r\n\tfont-size: 12px;\r\n}\r\n.flex-item {\r\n\ttext-align: center;\r\n}\r\n\r\n.center {\r\n\ttext-align: center;\r\n}\r\n\r\n.btn-challenge {\r\n\tdisplay: table; \r\n\tmargin: 0 auto; \r\n\tborder-radius: 50%; \r\n\twidth: 60px; \r\n\theight: 60px; \r\n\tcolor: white;\r\n}\r\n\r\n.btn-challenge span {\r\n\tdisplay: table-cell; \r\n\tvertical-align: middle;\r\n}"

/***/ },

/***/ 837:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 838:
/***/ function(module, exports) {

module.exports = ".list-word {\r\n\theight: 100vh;\r\n\toverflow: auto;\r\n}\r\n\r\nmd-list-item {\r\n\tcursor: pointer;\r\n\tborder-bottom: 1px solid rgba(158, 158, 158, 0.42);\r\n}\r\n\r\nbody {\r\n\theight: 100%;\r\n}\r\n\r\nmd-card img {\r\n\tmax-height: 200px;\r\n\twidth: auto;\r\n\tdisplay: block;\r\n\tmargin: 0 auto;\r\n}\r\n\r\nmd-icon {\r\n\tcursor: pointer;\r\n}\r\n"

/***/ },

/***/ 839:
/***/ function(module, exports) {

module.exports = "/* from net */\r\n\r\n\r\n/* Shared */\r\n.loginBtn {\r\n  box-sizing: border-box;\r\n  position: relative;\r\n  /* width: 13em;  - apply for fixed size */\r\n  margin: 0.2em;\r\n  padding: 0 15px 0 46px;\r\n  border: none;\r\n  text-align: left;\r\n  line-height: 34px;\r\n  white-space: nowrap;\r\n  border-radius: 0.2em;\r\n  font-size: 16px;\r\n  color: #FFF;\r\n}\r\n.loginBtn:before {\r\n  content: \"\";\r\n  box-sizing: border-box;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 34px;\r\n  height: 100%;\r\n}\r\n.loginBtn:focus {\r\n  outline: none;\r\n}\r\n.loginBtn:active {\r\n  box-shadow: inset 0 0 0 32px rgba(0,0,0,0.1);\r\n}\r\n\r\n\r\n/* Facebook */\r\n.loginBtn--facebook {\r\n  background-color: #4C69BA;\r\n  background-image: -webkit-linear-gradient(#4C69BA, #3B55A0);\r\n  background-image: linear-gradient(#4C69BA, #3B55A0);\r\n  /*font-family: \"Helvetica neue\", Helvetica Neue, Helvetica, Arial, sans-serif;*/\r\n  text-shadow: 0 -1px 0 #354C8C;\r\n}\r\n.loginBtn--facebook:before {\r\n  border-right: #364e92 1px solid;\r\n  background: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/14082/icon_facebook.png') 6px 6px no-repeat;\r\n}\r\n.loginBtn--facebook:hover,\r\n.loginBtn--facebook:focus {\r\n  background-color: #5B7BD5;\r\n  background-image: -webkit-linear-gradient(#5B7BD5, #4864B1);\r\n  background-image: linear-gradient(#5B7BD5, #4864B1);\r\n}\r\n\r\n\r\n/* Google */\r\n.loginBtn--google {\r\n  /*font-family: \"Roboto\", Roboto, arial, sans-serif;*/\r\n  background: #DD4B39;\r\n}\r\n.loginBtn--google:before {\r\n  border-right: #BB3F30 1px solid;\r\n  background: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/14082/icon_google.png') 6px 6px no-repeat;\r\n}\r\n.loginBtn--google:hover,\r\n.loginBtn--google:focus {\r\n  background: #E74B37;\r\n}"

/***/ },

/***/ 840:
/***/ function(module, exports) {

module.exports = "#customBtn {\r\n  display: inline-block;\r\n  background: white;\r\n  color: #444;\r\n  width: 250px;\r\n  border-radius: 5px;\r\n  border: thin solid #e0e0e0;\r\n  box-shadow: 1px 1px 1px #e0e0e0;\r\n  white-space: nowrap;\r\n}\r\n#customBtn:hover {\r\n  cursor: pointer;\r\n}\r\nspan.label {\r\n  font-family: serif;\r\n  font-weight: normal;\r\n}\r\nspan.icon {\r\n  background: url('https://developers.google.com/identity/sign-in/g-normal.png') transparent 5px 50% no-repeat;\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  width: 42px;\r\n  height: 42px;\r\n}\r\nspan.buttonText {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  padding-left: 42px;\r\n  padding-right: 42px;\r\n  font-size: 14px;\r\n  font-weight: bold;\r\n  /* Use the Roboto font that is loaded in the <head> */\r\n  font-family: 'Roboto', sans-serif;\r\n}"

/***/ },

/***/ 841:
/***/ function(module, exports) {

module.exports = ".login {\r\n  max-width: 400px;\r\n  margin: 0 auto;\r\n  padding: 15px;\r\n  background-color: #F5F5F5;\r\n  padding-bottom: 40px;\r\n}\r\n.login > div {\r\n  text-align: center;\r\n}\r\n\r\n.loginBtn {\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.social-btn {\r\n\tmargin: 0 auto;\r\n}\r\n"

/***/ },

/***/ 842:
/***/ function(module, exports) {

module.exports = ".game-box {\r\n  margin-top: 50px;\r\n}\r\n\r\nimg {\r\n  display: block;\r\n  margin: auto;\r\n  width: 150px;\r\n  height: 150px;\r\n  cursor: pointer;\r\n}\r\n\r\n.game-name {\r\n  text-align: center;\r\n}\r\n"

/***/ },

/***/ 843:
/***/ function(module, exports) {

module.exports = "table { \r\n    border-collapse: collapse; \r\n}\r\n\r\ntable tr {\r\n\tborder-bottom: 1px solid rgba(158, 158, 158, 0.08);\r\n}\r\n\r\np {\r\n\tmargin-top: 0;\r\n}\r\n\r\nh4 {\r\n\tmargin-bottom: 0;\r\n}"

/***/ },

/***/ 844:
/***/ function(module, exports) {

module.exports = ".item-friend {\r\n\tmax-width: 80px;\r\n\tfloat: left;\r\n\tmargin: 0px 15px;\r\n}\r\n\r\n.item-friend img{\r\n\twidth: 80px;\r\n\theight: 80px;\r\n\tborder: 1px solid #03a9f4;\r\n\tborder-radius: 50%;\r\n\tcursor: pointer;\r\n}\r\n\r\n.name-friend {\r\n\twhite-space: nowrap;\r\n\tfont-size: 14px;\r\n\ttext-align: center;\r\n}\r\n\r\n.friends-list {\r\n\tmargin-left: 40px;\r\n}\r\n\r\n.primary {\r\n\tcolor: #2196f3;\r\n}"

/***/ },

/***/ 845:
/***/ function(module, exports) {

module.exports = ".right-menu {\r\n  font-size: 15px;\r\n  padding-right: 10px;\r\n  cursor: pointer;\r\n  display: inline-block;\r\n}\r\n\r\n.right-menu span {\r\n\tvertical-align: middle;\t\r\n}\r\n\r\n.avatar {\r\n\twidth: 40px;\r\n\theight: 40px;\r\n\tborder-radius: 50%;\r\n\tvertical-align: middle;\r\n}"

/***/ },

/***/ 846:
/***/ function(module, exports) {

module.exports = ".register {\r\n  max-width: 400px;\r\n  margin: 0 auto;\r\n  padding: 15px;\r\n  background-color: #F5F5F5;\r\n  padding-bottom: 40px;\r\n}\r\n.register > div {\r\n  text-align: center;\r\n}\r\n\r\n.loginBtn {\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.social-btn {\r\n\tmargin: 0 auto;\r\n}\r\n"

/***/ },

/***/ 847:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 848:
/***/ function(module, exports) {

module.exports = ".waiting-game img {\r\n\twidth: 100px;\r\n\theight: 100px;\r\n\tborder: 1px solid #03a9f4;\r\n\tborder-radius: 50%;\r\n}\r\n\r\n.name-friend {\r\n\tfont-size: 12px;\r\n}\r\n.flex-item {\r\n\ttext-align: center;\r\n}\r\n\r\n.center {\r\n\ttext-align: center;\r\n}\r\n\r\n.btn-challenge {\r\n\tdisplay: table; \r\n\tmargin: 0 auto; \r\n\tborder-radius: 50%; \r\n\twidth: 60px; \r\n\theight: 60px; \r\n\tcolor: white;\r\n}\r\n\r\n.btn-challenge span {\r\n\tdisplay: table-cell; \r\n\tvertical-align: middle;\r\n}\r\n\r\n.action button {\r\n\tfloat: right;\r\n}"

/***/ },

/***/ 849:
/***/ function(module, exports) {

module.exports = "md-card img {\r\n\tmax-height: 200px;\r\n\twidth: auto;\r\n\tdisplay: block;\r\n\tmargin: 0 auto;\r\n}\r\n"

/***/ },

/***/ 850:
/***/ function(module, exports) {

module.exports = ".answer-unit {\r\n  display: inline-block;\r\n  width: 45%;\r\n  border: 1px solid #ccc;\r\n  box-sizing: border-box;\r\n  padding: 10px;\r\n  margin: 20px;\r\n}\r\n\r\n.play-word {\r\n  max-width: 800px;\r\n  margin: 0 auto;\r\n}\r\n"

/***/ },

/***/ 851:
/***/ function(module, exports) {

module.exports = ".answer-unit {\r\n  display: inline-block;\r\n  width: 45%;\r\n  border: 1px solid #ccc;\r\n  box-sizing: border-box;\r\n  padding: 10px;\r\n  margin: 20px;\r\n}"

/***/ },

/***/ 852:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 853:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 854:
/***/ function(module, exports) {

module.exports = ".example-fill-remaining-space {\r\n  -webkit-box-flex: 1;\r\n      -ms-flex: 1 1 auto;\r\n          flex: 1 1 auto;\r\n}\r\n\r\n.left-menu {\r\n  font-size: 15px;\r\n  padding-right: 10px;\r\n}\r\n\r\n.toolbar-icon {\r\n  padding-right: 6px;\r\n}\r\n\r\n.game-box{\r\n  margin-top: 150px;\r\n}\r\n\r\n.game-box img {\r\n  width: 150px;\r\n  height: 150px;\r\n  position: absolute;\r\n  margin: auto;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  cursor: pointer;\r\n}\r\n\r\n.game-unit {\r\n  display: inline-block;\r\n  width: 25%;\r\n  float: left;\r\n  position: relative;\r\n}\r\n\r\n.game-unit p {\r\n  text-align: center;\r\n}"

/***/ },

/***/ 855:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 856:
/***/ function(module, exports) {

module.exports = "<md-toolbar color=\"primary\">\n <!--  <md-icon class=\"toolbar-icon\">menu</md-icon> -->\n  <md-icon routerLink=\"/\">home</md-icon> &nbsp;\n  <span>Fun English App</span>\n    <!-- This fills the remaining space of the current row -->\n  <span class=\"example-fill-remaining-space\"></span>\n \t<app-nav-login></app-nav-login>\n</md-toolbar>\n<nav>\n</nav>\n<router-outlet></router-outlet>\n"

/***/ },

/***/ 857:
/***/ function(module, exports) {

module.exports = "<svg  [attr.width] = \"boxSize\" [attr.height] = \"boxSize\" >\n  <circle\n    [attr.cx] = \"cx\"\n    [attr.cy] = \"cy\"\n    [attr.r] = \"radius\"\n    [attr.fill]=\"backgroundColor\"\n    [attr.stroke]=\"color\"/>\n\n  <path\n    [attr.d] = \"circleM+ circleL+ circleA+ '0 ' + arcSweep + circleEnd + 'Z'\"\n    [attr.stroke]=\"color\"\n    [attr.fill]=\"color\"/>\n  <circle\n    [attr.cx] = \"cx\"\n    [attr.cy] = \"cy\"\n    [attr.r] = \"innerRadius\"\n    [attr.fill]=\"innerFill\"\n    [attr.stroke]=\"color\" />\n  <text\n    [attr.x]=\"fontX\"\n    [attr.y]=\"fontY\"\n    [attr.text-anchor]=\"textAnchor\"\n    [attr.fill]=\"fontColor\"\n    [attr.font-size]=\"fontSize\"\n    [attr.font-family]=\"fontFamily\">{{circleText}}</text>\n</svg>\n"

/***/ },

/***/ 858:
/***/ function(module, exports) {

module.exports = "<div *ngIf=\"from&&to\">\n  <div  class=\"waiting-game flex-container\" fxLayout=\"row\" \n       fxLayoutAlign=\"space-around center\" >\n    <div class=\"item-friend flex-item\" fxFlex=\"33%\">\n    \t<md-card>\n\t    \t<md-card-header>\n\t\t      <div md-card-avatar>\n\t\t      \t<img md-card-avatar *ngIf=\"!from.imageUrl\" src=\"/assets/images/default-avatar.png\">\n\t\t        <img md-card-avatar *ngIf=\"from.imageUrl\" src=\"{{from.imageUrl}}\">\n\t\t      </div>\n\t\t\t    <md-card-title>{{from.name}}</md-card-title>\n\t\t\t    <md-card-subtitle *ngIf=\"from.score != 'undefined' \">{{from.score}}</md-card-subtitle>\n\t\t    </md-card-header>\n\t    </md-card>\n    </div>\n    <div class=\"flex-item\" fxFlex=\"30%\" class=\"primary\">\n      <div class=\"center bg-primary btn-challenge\">\n        <span> VS.</span>\n      </div>\n    </div>\n\n    <div class=\"item-friend flex-item\" fxFlex>\n    \t<md-card>\n\t    \t<md-card-header>\n\t\t    \t<div md-card-avatar>\n\t\t      \t<img md-card-avatar *ngIf=\"!to.imageUrl\" src=\"/assets/images/default-avatar.png\">\n\t\t        <img md-card-avatar *ngIf=\"to.imageUrl\" src=\"{{to.imageUrl}}\">\n\t\t      </div>\n\t\t      <md-card-title>{{to.name}}</md-card-title>\n\t\t\t    <md-card-subtitle *ngIf=\"to.score\">{{to.score}}</md-card-subtitle>\n\t\t    </md-card-header>\n\t    </md-card>\n    </div>\n  </div>\n</div>\n"

/***/ },

/***/ 859:
/***/ function(module, exports) {

module.exports = "<h3 class=\"primary\"><md-icon>videogame_asset</md-icon> My requests</h3>\n\n<div *ngIf=\"turns\">\n\t<md-card class=\"example-card\" *ngFor=\"let item of turns\">\n\t  <md-card-header>\n\t    <div md-card-avatar>\n\t\t    <i class=\"material-icons\" *ngIf=\"!item.from.id.imageUrl\">account_circle</i>\n\t\t    <img md-card-avatar *ngIf=\"item.from.id.imageUrl\" src=\"{{item.from.id.imageUrl}}\">\n\t    </div>\n\t    <md-card-title>{{item.from.id.name}}</md-card-title>\n\t    <md-card-subtitle>{{item.from.id.email}}</md-card-subtitle>\n\t    <button md-raised-button (click)=\"begin(item)\" color=\"primary\"> Bắt đầu </button>\n\t    <md-icon mdTooltip=\"Ignore this!\" (click)=\"ignore(item)\" style=\"cursor: pointer;\">clear</md-icon>\n\t  </md-card-header>\n\t</md-card>\n</div>"

/***/ },

/***/ 860:
/***/ function(module, exports) {

module.exports = "<div class=\"flex-container game-box\" \n     fxLayout=\"row\" \n     fxLayoutAlign=\"space-around start\" \n  >\n  <div class=\"flex-item list-word\" fxFlex=\"30%\">\n    <md-list>\n      <h3 md-subheader>Từ chưa thuộc</h3>\n      <md-list-item *ngFor=\"let item of words\" (click)=\"changeWord(item)\">\n        <md-icon md-list-avatar>note</md-icon>\n        <h4 md-line>{{item.content}}</h4>\n<!--         <p md-line> {{item.meaning}} </p>\n -->      </md-list-item>\n      <md-divider></md-divider>\n      <h3 md-subheader>Từ đã thuộc</h3>\n    </md-list>\n  </div>\n  <div class=\"flex-item\" fxFlex=\"70%\" style=\"margin-top: 150px;\">\n    <md-card>\n      <md-card-header>\n        <div md-card-avatar></div>\n        <md-card-title><md-icon (click)=\"speak()\">volume_up</md-icon>{{curWord.content}}</md-card-title>\n        <md-card-subtitle>{{curWord.meaning}}</md-card-subtitle>\n      </md-card-header>\n      <img md-card-image *ngIf=\"curWord.images\" src=\"{{curWord.images.links[0]}}\">\n      <md-card-content>\n      </md-card-content>\n      <md-card-actions>\n        <button md-raised-button [disabled]=\"disablePre\" (click)=\"previous()\" color=\"primary\">\n          <md-icon>chevron_left</md-icon>\n          Pre\n        </button>\n        <button md-raised-button [disabled]=\"disableNext\" (click)=\"next()\" color=\"primary\">\n          <md-icon>chevron_right</md-icon>\n          Next</button>\n      </md-card-actions>\n    </md-card>\n  </div>\n</div>"

/***/ },

/***/ 861:
/***/ function(module, exports) {

module.exports = "<div class=\"social-btn\">\n  <button class=\"loginBtn loginBtn--facebook\" (click)=\"loginFB()\">\n    Sign in with Facebook\n  </button>\n</div>\n<button (click)=\"checkLoginState()\"> Get profile </button>\n"

/***/ },

/***/ 862:
/***/ function(module, exports) {

module.exports = "\n<!--  <div id=\"my-signin2\" data-width=\"300\" data-height=\"200\" data-longtitle=\"true\"></div>\n -->\n <!-- <button id=\"customBtn\">\n  Login with Google\n</button> -->\n<div id=\"customBtn\" class=\"customGPlusSignIn\">\n  <span class=\"icon\"></span>\n  <span class=\"buttonText\"> Sign in with Google</span>\n</div>\n"

/***/ },

/***/ 863:
/***/ function(module, exports) {

module.exports = "<div class=\"login\">\n  <div>\n    <h2>LOG IN</h2>\n    <md-input-container>\n      <span md-prefix><i class=\"material-icons\">account_circle</i>&nbsp;</span>\n      <input md-input placeholder=\"Username\">\n    </md-input-container>\n  </div>\n  <div>\n  <md-input-container>\n    <span md-prefix><i class=\"material-icons\">lock_outline</i>&nbsp;</span>\n    <input md-input type=\"password\" placeholder=\"Password\">\n  </md-input-container>\n  </div>\n  <div class=\"loginBtn\">\n    <button md-raised-button color=\"primary\"><i class=\"material-icons\">input</i> &nbsp;Log in\n    </button>\n  </div>\n  <div>\n    <app-login-google>\n    </app-login-google>\n  </div>\n\n  <!-- <div class=\"fb-login-button\" data-max-rows=\"1\" data-size=\"large\" data-show-faces=\"false\" data-auto-logout-link=\"false\"></div> -->\n\n  <app-login-facebook></app-login-facebook>\n  \n\n  <!-- <div class=\"social-btn\">\n    <button class=\"loginBtn loginBtn--google\">\n      Sign in with Google\n    </button>\n  </div> -->\n\n</div>\n"

/***/ },

/***/ 864:
/***/ function(module, exports) {

module.exports = "<div class=\"flex-container game-box\" \n     fxLayout=\"row\" \n     fxLayoutAlign=\"space-around start\" \n  >\n  <div class=\"flex-item\" fxFlex>\n    <img src=\"assets/images/learn.png\" (click)=\"toLearn()\">\n    <div class=\"game-name\"> Learning </div>\n  </div>\n  <div class=\"flex-item\" fxFlex=\"50%\">\n    <img src=\"assets/images/game/game.png\" (click)=\"playWord()\">\n    <div class=\"game-name\"> Play Word</div>\n  </div>\n<!--   <div class=\"flex-item\" fxFlex>\n    <img src=\"assets/images/game/songpop.png\" (click)=\"playSong()\">\n    <div class=\"game-name\"> Song Pop</div>\n  </div> -->\n</div> \n"

/***/ },

/***/ 865:
/***/ function(module, exports) {

module.exports = "<table width=\"100%\">\n\t<tr>\n\t\t<th></th>\n\t\t<th class=\"text-center\"> \n\t\t\t<img md-card-avatar *ngIf=\"!from.imageUrl\" src=\"/assets/images/default-avatar.png\">\n\t\t  <img md-card-avatar *ngIf=\"from.imageUrl\" src=\"{{from.imageUrl}}\">\n\t\t</th>\n\t\t<th class=\"text-center\">\n\t\t\t<img md-card-avatar *ngIf=\"!to.imageUrl\" src=\"/assets/images/default-avatar.png\">\n\t\t  <img md-card-avatar *ngIf=\"to.imageUrl\" src=\"{{to.imageUrl}}\">\n\t\t</th>\n\t</tr>\n\t<tr *ngFor=\"let item of content; let i = 'index'\">\n\t\t<td>\n\t\t\t<h4 md-line>{{item.content}}</h4>\n\t    <p md-line> {{item.meaning}} </p>\n\t\t</td>\n\t\t<td class=\"text-center\">\n\t\t<span *ngIf=\"fromAns\">\n\t\t\t<md-icon *ngIf=\"!compare(item.content, fromAns[i])\" color=\"warn\">highlight_off</md-icon>\n\t\t\t<md-icon *ngIf=\"compare(item.content, fromAns[i])\" color=\"primary\">check_circle</md-icon>\n\t\t</span>\n\t\t</td>\n\t\t<td class=\"text-center\">\n\t\t\t<span *ngIf=\"toAns\">\n\t\t\t<md-icon *ngIf=\"!compare(item.content, toAns[i])\" color=\"warn\">highlight_off</md-icon>\n\t\t\t<md-icon *ngIf=\"compare(item.content, toAns[i])\" color=\"primary\">check_circle</md-icon>\n\t\t</span>\n\t\t</td>\n\t</tr>\n</table>\n<div style=\"float: right;\">\n  <button md-raised-button color=\"primary\" routerLink=\"/\"><md-icon>home</md-icon></button>\n  <button [disabled]=\"isSend\" md-raised-button color=\"primary\" \n  \t\t(click)=\"sendRequestGame()\">Send Request Game</button>\n</div>\n"

/***/ },

/***/ 866:
/***/ function(module, exports) {

module.exports = "<h3 class=\"primary\"><md-icon>people_outline</md-icon> Danh sách bạn bè</h3>\n<div *ngIf=\"friends\" class=\"friends-list\">\n\t<div class=\"item-friend\" *ngFor=\"let item of friends\" (click)=\"chooseFriend(item)\">\n    <div class=\"avatar\">\n\t    <img md-card-avatar [@friendState]=\"item.state\" *ngIf=\"!item.imageUrl\" src=\"/assets/images/default-avatar.png\">\n\t    <img md-card-avatar [@friendState]=\"item.state\" *ngIf=\"item.imageUrl\" src=\"{{item.imageUrl}}\">\n    </div>\n    <p class=\"name-friend\">{{item.name}}</p>\n\t</div>\n</div>\n<div style=\"clear: both;\"></div>\n<div *ngIf=\"selectedFriend\" > Bạn đã chọn {{playerFriend.name}}</div>\n"

/***/ },

/***/ 867:
/***/ function(module, exports) {

module.exports = "<span *ngIf=\"!isLogin\">\n\t<span routerLink=\"/login\" class=\"right-menu\">Log in</span>\n \t<span routerLink=\"/register\" class=\"right-menu\">Register</span>\n</span>\n\n<div *ngIf=\"isLogin\" class=\"right-menu\">\n\t<img class=\"avatar\" src=\"{{profile.imageUrl}}\"> \n\t<span style=\"vertical-align: middle; line-height: 64px;\">{{profile.name}}</span>\n\t<button md-icon-button [mdMenuTriggerFor]=\"menu\">\n  \t<md-icon>more_vert</md-icon>\n\t</button>\n\t<md-menu #menu=\"mdMenu\">\n\t\t<button md-menu-item (click)=\"goProfile()\">\n\t    <md-icon>account_circle</md-icon>\n\t    <span>Thông tin cá nhân</span>\n\t  </button>\n\t\t<button md-menu-item>\n\t    <md-icon>assignment</md-icon>\n\t    <span>Góc học tập</span>\n\t  </button>\n\t  <button md-menu-item (click)=\"logOut()\">\n\t    <md-icon>exit_to_app</md-icon>\n\t    <span>Đăng xuất</span>\n\t  </button>\n\t</md-menu>\n</div>"

/***/ },

/***/ 868:
/***/ function(module, exports) {

module.exports = "<form>\n<div class=\"register\">\n  <div>\n    <h2>REGISTER</h2>\n    <md-input-container>\n      <span md-prefix><i class=\"material-icons\">account_circle</i>&nbsp;</span>\n      <input md-input placeholder=\"Username\" required=\"true\">\n    </md-input-container>\n  </div>\n  <div>\n  <md-input-container>\n    <span md-prefix><i class=\"material-icons\">lock_outline</i>&nbsp;</span>\n    <input md-input type=\"password\" placeholder=\"Password\" required>\n  </md-input-container>\n  <md-input-container>\n    <span md-prefix><i class=\"material-icons\">visibility</i>&nbsp;</span>\n    <input md-input type=\"password\" placeholder=\"Confirm password\" required>\n  </md-input-container>\n  </div>\n  <div class=\"loginBtn\">\n    <button type=\"submit\" md-raised-button color=\"primary\"><i class=\"material-icons\">input</i> &nbsp; Register\n    </button>\n  </div>\n</div>\n</form>"

/***/ },

/***/ 869:
/***/ function(module, exports) {

module.exports = "<md-input-container>\n  <input md-input placeholder=\"Search a friend\" [(ngModel)]=\"query\">\n</md-input-container>\n\n<button md-button color=\"primary\" (click)=\"search()\">Search</button>\n<div *ngIf=\"result\">\n\t<md-card class=\"example-card\" *ngFor=\"let item of result\">\n\t  <md-card-header>\n\t    <div md-card-avatar></div>\n\t    <md-card-title>{{item.name}}</md-card-title>\n\t    <md-card-subtitle>{{item.email}}</md-card-subtitle>\n\t    <button md-raised-button (click)=\"createFriend(item)\"> Kết bạn </button>\n\t  </md-card-header>\n\t  \n\t</md-card>\n</div>\n"

/***/ },

/***/ 870:
/***/ function(module, exports) {

module.exports = "<div *ngIf=\"from&&to\">\n  <div  class=\"waiting-game flex-container\" fxLayout=\"row\" \n       fxLayoutAlign=\"space-around center\" >\n    <div class=\"item-friend flex-item\" fxFlex=\"33%\">\n      <div class=\"avatar\">\n        <img md-card-avatar *ngIf=\"!from.imageUrl\" src=\"/assets/images/default-avatar.png\">\n        <img md-card-avatar *ngIf=\"from.imageUrl\" src=\"{{from.imageUrl}}\">\n      </div>\n      <p class=\"name-friend\">{{from.name}}</p>\n    </div>\n    <div class=\"flex-item\" fxFlex=\"30%\" class=\"primary\">\n      <div class=\"center bg-primary btn-challenge\">\n        <span> VS.</span>\n      </div>\n    </div>\n\n    <div class=\"item-friend flex-item\" fxFlex>\n      <div class=\"avatar\">\n        <img md-card-avatar *ngIf=\"!to.imageUrl\" src=\"/assets/images/default-avatar.png\">\n        <img md-card-avatar *ngIf=\"to.imageUrl\" src=\"{{to.imageUrl}}\">\n      </div>\n      <p class=\"name-friend\">{{to.name}}</p>\n    </div>\n  </div>\n  <div class=\"action\">\n    <h1 class=\"primary\" style=\"text-align: center;\">{{count}}</h1>\n    <button md-button (click)=\"cancel()\">Hủy</button>\n    <button md-button (click)=\"ready()\">Chơi ngay</button>\n  </div>\n</div>\n"

/***/ },

/***/ 871:
/***/ function(module, exports) {

module.exports = "<md-card class=\"example-card\" *ngIf=\"word\">\n  <md-card-header>\n    <div md-card-avatar></div>\n    <md-card-title>{{word.content}}</md-card-title>\n    <md-card-subtitle>{{word.meaning}}</md-card-subtitle>\n  </md-card-header>\n  <img md-card-image src=\"{{word.images.links[0]}}\">\n</md-card>\n"

/***/ },

/***/ 872:
/***/ function(module, exports) {

module.exports = "<div *ngIf=\"!isReady\" class=\"play-word\">\n  <app-my-friends (selectFriend)=\"selectFriend($event)\">\n  </app-my-friends>\n  <div>\n    <button md-raised-button (click)=\"openDialog()\" [disabled]=\"!selectedFriend\" color=\"primary\">Bắt đầu\n    </button>\n  </div>\n  <app-game-request (request)=\"request($event)\"></app-game-request>\n</div>\n<div class=\"play-word\" *ngIf=\"isReady\">\n  <div *ngIf=\"!isEnd\">\n  <md-progress-bar mode=\"determinate\" value=\"{{counter}}\" color=\"{{colorProgressbar}}\"></md-progress-bar>\n  <app-game-player [from]=\"from\" [to]=\"to\"></app-game-player>\n    <app-circle-progress style=\"float: right;\"\n       [percent]=\"percent\"\n       [boxSize]=\"160\"\n       [radius]=\"40\"\n       [lowColor]=\"'#FFD54F'\"\n       [middleColor]=\"'orange'\"\n       [interColor]=\"'#f1c40f'\"\n       [highColor]=\"'#2196f3'\"\n       [border]=\"10\"\n       [time]=\"0\"\n      >\n    </app-circle-progress>\n    <!-- <button md-button (click)=\"next()\">Next</button> -->\n    <!-- <p style=\"text-align: right;\">Score: {{score}}/{{max}}</p> -->\n    <p style=\"text-align: right;\">Question: {{this.count}}/{{max}}</p>\n    <app-reading [curWord]=\"curWord\" [allWords]=\"allWords\" [choices]=\"choices\" \n    *ngIf=\"selectedGame == 'reading'\"\n    (onCorrect)=\"onCorrect($event)\" (userAnswer)=\"userAnswer($event)\" \n    (saveQuestion)=\"saveQuestion($event)\">\n    </app-reading>\n    <app-writing [curWord]=\"curWord\" *ngIf=\"selectedGame == 'writing' \"\n    (onCorrect)=\"onCorrect($event)\" (userAnswer)=\"userAnswer($event)\"\n    (saveQuestion)=\"saveQuestion($event)\">\n    </app-writing>\n  </div>\n  <div *ngIf=\"isEnd\">\n    <app-my-answer [from]=\"from\" [to]=\"to\" [turnGame]=\"turn\" [isRequest]=\"isRequest\"></app-my-answer>\n  </div>\n</div>\n"

/***/ },

/***/ 873:
/***/ function(module, exports) {

module.exports = "<div class=\"question\">\n  <i class=\"material-icons\">help_outline</i>\n  <span style=\"font-size: 25px !important;\"> {{curWord.content}}\n    <i class=\"material-icons\" (click)=\"speak()\" style=\"cursor: pointer; margin-top: 10px;\">volume_up</i>\n  </span>\n  <p style=\"color: #ccc; font-size: 13px; padding-left: 30px;\"> là gì nhỉ? </p>\n</div>\n\n<div class=\"answers\" style=\"margin-top: 30px;\"> \n  <i class=\"material-icons\">face</i>\n  <div class=\"answers-content\">\n    <button md-button *ngFor=\"let item of answers\"  [@state]=\"item.state\" class=\"answer-unit\" \n        (click)=\"checkAnswer(item)\"\n        [disabled]=\"clicked\">\n      {{item.meaning}}\n    </button>\n  </div>\n</div>\n\n"

/***/ },

/***/ 874:
/***/ function(module, exports) {

module.exports = "<p>\n  songpop works!\n</p>\n<md-list>\n\t<md-list-item *ngFor=\"let item of listSong; let i = 'index'\">\n\t{{i+1}}\n \t{{item['track']['title']}}\n \t{{item['artist']}}\n\t</md-list-item>\n</md-list>\n"

/***/ },

/***/ 875:
/***/ function(module, exports) {

module.exports = "<div class=\"question\">\n  <i class=\"material-icons\">help_outline</i>\n  <span style=\"font-size: 25px !important;\"> {{curWord.meaning}}\n    <i class=\"material-icons\" (click)=\"speak()\" style=\"cursor: pointer; margin-top: 10px;\">volume_up</i>\n  </span>\n  <p style=\"color: #ccc; font-size: 13px; padding-left: 30px;\"> là gì nhỉ? </p>\n</div>\n\n<md-input-container>\n\t<input md-input [(ngModel)]=\"answer\" (keyup)=\"onKey($event)\" autofocus> \n</md-input-container>\n<p *ngIf=\"showAnswer\">{{curWord.content}}</p>\n"

/***/ },

/***/ 876:
/***/ function(module, exports) {

module.exports = "<div class=\"game-box\">\n  <div class=\"game-unit\"> &nbsp;\n  </div>\n  <div class=\"game-unit\" (click)=\"playWord()\">\n    <img src=\"assets/images/game/check-icon.png\">\n    <p>Play Word</p>\n  </div>\n  <div class=\"game-unit\">\n    <img src=\"assets/images/game/songpop.png\">\n    <p>Song Pop</p>\n  </div>\n  <div class=\"game-unit\"> &nbsp;\n  </div>\n</div>\n <nav>\n    <a routerLink=\"/playword\" routerLinkActive=\"active\">PlayWord</a>\n    <a routerLink=\"/menugame\" routerLinkActive=\"active\">Menu Game</a>\n  </nav>\n  <router-outlet></router-outlet>\n"

/***/ },

/***/ 877:
/***/ function(module, exports) {

module.exports = "<md-tab-group>\n  <md-tab label=\"Thông tin cơ bản\">\n  \t<p>Name: {{profile.name}}</p>\n  \t<p>Email: {{profile.email}}</p>\n  </md-tab>\n  <md-tab label=\"Bạn bè\">\n\t  <p> Bạn bè của tôi </p>\n\t  <div *ngIf=\"friends\">\n\t  \t<md-card class=\"example-card\" *ngFor=\"let item of friends\">\n\t\t\t  <md-card-header>\n\t\t\t    <div md-card-avatar>\n\t\t\t\t    <img md-card-avatar *ngIf=\"!item.imageUrl\" src=\"/assets/images/default-avatar.png\">\n\t\t\t\t    <img md-card-avatar *ngIf=\"item.imageUrl\" src=\"{{item.imageUrl}}\">\n\t\t\t    </div>\n\t\t\t    <md-card-title>{{item.name}}</md-card-title>\n\t\t\t    <md-card-subtitle>{{item.email}}</md-card-subtitle>\n\t\t\t    <button md-raised-button (click)=\"cancel(item['_id'])\"> Hủy kết bạn </button>\n\t\t\t  </md-card-header>\n\t\t\t</md-card>\n\t\t</div>\n\t\t<p>Tìm kiếm thêm bạn:</p>\n\t\t<md-icon>search</md-icon><app-search-friend></app-search-friend>\n  </md-tab>\n\n  <md-tab label=\"Yêu cầu kết bạn\">\n  \t<div *ngIf=\"noRequest\"> 0 yêu cầu</div>\n  \t<div *ngIf=\"requests\">\n\t  \t<md-card class=\"example-card\" *ngFor=\"let item of requests\">\n\t\t\t  <md-card-header>\n\t\t\t    <div md-card-avatar>\n\t\t\t\t    <img md-card-avatar *ngIf=\"!item.imageUrl\" src=\"/assets/images/default-avatar.png\">\n\t\t\t\t    <img md-card-avatar *ngIf=\"item.imageUrl\" src=\"{{item.imageUrl}}\">\n\t\t\t    </div>\n\t\t\t    <md-card-title>{{item.name}}</md-card-title>\n\t\t\t    <md-card-subtitle>{{item.email}}</md-card-subtitle>\n\t\t\t    <button md-raised-button (click)=\"agree(item)\"> Chấp nhận </button>\n\t\t\t  </md-card-header>\n\t\t\t</md-card>\n\t\t</div>\n  </md-tab>\n</md-tab-group>\n\n\n\n"

/***/ },

/***/ 910:
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(495);


/***/ }

},[910]);
//# sourceMappingURL=main.bundle.map